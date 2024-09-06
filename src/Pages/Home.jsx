import React, { useEffect, useRef } from "react";
import "./../assets/css/home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

function Home() {
  const counterRef = useRef(null);
  let currentValue = 0;
  const navigate = useNavigate(); // Sayfa yönlendirme için

  const startLoader = () => {
    const counterElement = counterRef.current;

    function updateCounter() {
      if (currentValue === 100) {
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;
      if (currentValue > 100) {
        currentValue = 100;
      }

      counterElement.textContent = currentValue;
      let delay = Math.floor(Math.random() * 100) + 50;
      setTimeout(updateCounter, delay);
    }

    updateCounter();
  };

  useEffect(() => {
    startLoader();
    gsap.to(".counter", 0.25, {
      delay: 1.5,
      opacity: 0,
    });

    gsap.to(".bar", 0.3, {
      delay: 1.5,
      height: 0,
      stagger: {
        amount: 0.2,
      },
      ease: "power4.inOut",
    });
    gsap.to(".bar2", 0.3, {
      delay: 1.2,
      height: 0,
      stagger: {
        amount: 0.4,
      },
      ease: "power4.inOut",
    });

    ScrollTrigger.create({
      trigger: ".home",
      start: "top top", // Kaydırmanın hangi noktasında başlatılacak
      end: "bottom bottom", // Kaydırma nerede sona erecek
      onLeave: () => {
        navigate("/design");
      }, // Sayfa rotası değişir
    });
  }, [navigate]);


  

  return (
    <div className="home">
      <div ref={counterRef} className="counter">
        0
      </div>
      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="overlay2">
        <div className="bar2"></div>
        <div className="bar2"></div>
        <div className="bar2"></div>
        <div className="bar2"></div>
        <div className="bar2"></div>
      </div>
      <div className="container">
        <div className="header">
          <div className="h1">M</div>
          <div className="h1">i</div>
          <div className="h1">'</div>
          <div className="h1">E</div>
          <div className="h1">s</div>
          <div className="h1">t</div>
          <div className="h1">a</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
// import React, { useLayoutEffect, useRef } from "react";
// import "./../assets/css/home.css";
// import gsap from "gsap";

// function Home() {
//   const comp = useRef(null);
//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       const t1 = gsap.timeline();
//       t1.from("#intro-slider", {
//         xPercent: "-100",
//         duration: 1.3,
//         delay: 0.3,
//       }).from(["#title-1","#title-2","#title-3"], {
//         opacity: 0,
//         y:"+=30",
//         stagger: 0.5
//       })
//     }, comp);
//     return ()=> ctx.revert();
//   }, []);
//   return (
//     <div className="relative" ref={comp}>
//       <div id="intro-slider" className="soft">
//         <h1 id="title-1">Gsap</h1>
//         <h1 id="title-2">JavaScript</h1>
//         <h1 id="title-3">Java</h1>
//       </div>
//       <div className="home">
//         <div className="welcome">Welcome.</div>
//       </div>
//     </div>
//   );
// }

// export default Home;
