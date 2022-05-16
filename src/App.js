import React, { useRef, useEffect } from 'react'
import './App.scss';
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery';
import LocomotiveScroll from 'locomotive-scroll';
import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss'
import { imageData } from './Data'

const App = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref) {
      new LocomotiveScroll({
        el: ref.current,
        smooth: true,
        direction: 'horizontal',
        multiplier: .5
      })
    }


  }, [])


  const images = imageData.map((tuples, index) => (
    tuples.map((url, elementIndex) =>
      <Gallery
        key={url}
        index={elementIndex}
        src={url}
        columnOffset={index * 14} />
    ))
  );

  return (
    <>
      <div className="main-container">
        <div className='scroll-container' data-scroll-container ref={ref}>
          <div className='content'>
            <div className='gallery'>
              {images}
              <div className='gallery-helper'>Scroll Discover</div>
              <div className='behind-text fill' data-scroll data-scroll-speed={-1}>
                Brew Your Coffee,
              </div>
              <div className='behind-text outline' data-scroll data-scroll-speed={-1}>
                Drink Your Coffee
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
