import React from 'react'
import './App.scss';
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery';
import { imageData } from './Data'

const App = () => {

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
        <div className='scroll-container'>
          <div className='content'>
            <div className='gallery'>
              {images}
              <div className='gallery-helper'>Scroll Discover</div>
              <div className='behind-text fill'>
                Brew Your Coffee,
              </div>
              <div className='behind-text outline'>
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
