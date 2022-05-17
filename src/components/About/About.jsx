import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

import './About.scss'


function About() {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);


  }, [])


  return (
    <div className="container">
      <motion.div
        ref={carousel}
        className='carousel'
        whileTap={{ cursor: "grabbing" }}>
        <motion.h1 animate={{ x: 250 }}> Car to suit <br /> your life style</motion.h1>
        <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
          <motion.div className='item'><img src="https://images.unsplash.com/photo-1606577924006-27d39b132ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwcGFydHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          </motion.div>
          <motion.div className='item'><img src="https://images.unsplash.com/photo-1611633235555-45e252fe48c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
          </motion.div>
          <motion.div className='item'><img src="https://images.unsplash.com/photo-1612610683796-3b7d3a65df3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="" />
          </motion.div>
          <motion.div className='item'><img src="https://images.unsplash.com/photo-1611633859589-7990d2fbb56b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhciUyMHBhcnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About