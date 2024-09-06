import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Components/SideBarComponents/Sidebar";
import Footer from "../Components/FooterComponents/Footer";
import useWidth from "../Hooks/UseWidth";
import gsap from "gsap";

function Layout() {
  const width = useWidth();

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    if (width < 768) {
      setToggle((prev) => !prev);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setToggle(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();
  const isContactPage = location.pathname === "/contact";
  const isHomePage = location.pathname === "/";

  // useEffect(() => {
  //   gsap.fromTo(".test", 1, { opacity: 0, delay: 0.5, ease: "power4.inOut" }, { delay: 1, opacity: 1, ease: "power4.inOut" });
  // }, [location]);
  return (
    <>
      {isHomePage ? (
        <div className="test">
          <Outlet />
        </div>
      ) : (
        <div className="bg_green">
          <div className={`container  flex_container ${toggle ? "block_container" : ""}`}>
            <div onClick={handleToggle} className="sidebar_div">
              <Sidebar toggle={toggle} />
            </div>
            <div onClick={handleToggle} className={`blur_div ${toggle ? "cover" : " "}`}></div>
            <main style={{ filter: toggle ? "blur(1px)" : "none" }} className="content">
              <Outlet />
            </main>
          </div>
          <div className="container_footer">
            <div className={isContactPage ? "footer_absolute" : ""}>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;
