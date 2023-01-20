import React from 'react';
import styles from "./style";

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import FeaturesTop from './components/FeaturesTop';
import FeaturesMid from './components/FeaturesMid';
import FeaturesBot from './components/FeaturesBot';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <div className='overflow-hidden'>
      <Hero />
      <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats />
     </div>
      </div>
      <About />
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <FeaturesTop />
      </div>
      </div>
      <div className={`bg-primary1 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <FeaturesMid />
      </div>
      </div>
      <div className={`bg-primary1 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <FeaturesBot />
      </div>
      </div>
      <Testimonials />
      <CtaSection />
     <div className={`bg-primary1 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Contact />
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default App;