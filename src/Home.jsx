import React, { useRef, useEffect } from 'react'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery';
import LocomotiveScroll from 'locomotive-scroll';
import { imageData } from './Data'
import '../node_modules/locomotive-scroll/src/locomotive-scroll.scss'
import './Home.scss';


const Home = () => {
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
                columnOffset={index * 13} />
        ))
    );

    return (
        <>
            <section className='items'>

                <div className="main-container">
                    <div className='scroll-container' data-scroll-container ref={ref}>
                        <div className='content'>
                            <div className='gallery'>
                                {images}
                                <div className='gallery-helper'>Scroll To Discover</div>
                                <div className='behind-text fill' data-scroll data-scroll-speed={-1}>
                                    Brew Your ☕,
                                </div>
                                <div className='behind-text outline' data-scroll data-scroll-speed={-1}>
                                    Drink Your Coffee
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Home