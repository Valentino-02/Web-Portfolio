import { React, Suspense, useEffect, useRef, useState } from "react";
import Header from "./components/header/Header.jsx";
import Nav from "./components/nav/Nav.jsx";
import About from "./components/about/About.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Experience from "./components/experience/Experience.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import CTA from "./components/CTA/CTA.jsx";

const App = () => {
  const Ref = useRef();

  const [isRefVisible, setIsRefVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsRefVisible(entry.isIntersecting);
    });
    observer.observe(Ref.current);
  }, []);

  return (
    <Suspense fallback="Loading...">
      <>
        <div ref={Ref}></div>
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <CTA isOnTop={isRefVisible} />
        <Nav />
        <Footer />
      </>
    </Suspense>
  );
};

export default App;
