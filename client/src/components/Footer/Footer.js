import React from 'react'
import './Footer.css'
// import ImgGithub from './github.png'
// import ImgGmail from './gmail.png'
// import ImgLinkedin from './linkedin.png'


function Footer() {
    return (
        <div className='footer-container'>

            <div className='text-footer text-center mb-3'>
                Developed By <a>Vaibhavi</a>
            </div>
            <div>
                <a href='https://github.com/vaishnavihole/balance-sheet' target="_blank">
                </a>

                <a href='mailto:vaishnavihole1@gmail.com' target="_blank">
                </a>

                <a href='https://www.linkedin.com/in/vaishnavihole/' target="_blank">
                </a>
            </div>
        </div>
    )
}

export default Footer