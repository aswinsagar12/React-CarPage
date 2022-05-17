import React from 'react'
import './Header.scss'

function Header() {
    return (
        <div className="header-container">
            <div className="section1">
                <h1>Grab Your Car</h1>
                <p>Reintroducing our purest expression of performance, <br />
                    designed to allow driver,car and road to become one and whole.</p>
                <a href="">Gets Start</a>
            </div>
            <div className='section2'>
                <img src="https://media.sketchfab.com/models/88b89d3074cb4946a353ab990d1ff6a2/thumbnails/cfbe978289e64d6f9dc2c67e96bab2f9/5367a62a6142473fa56324dc51c7e66f.jpeg" alt="" />
            </div>
        </div>
    )
}

export default Header