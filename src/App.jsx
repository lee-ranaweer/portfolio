import { useEffect, useRef } from 'react';
import { Hero, Links, Experience, Projects, Contact } from './Components'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {
  const scrollRef = useRef(null);

  // Locomotive Scroll Setup
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.05,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Hero />
      <Links />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
