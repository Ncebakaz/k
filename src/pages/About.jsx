import React from 'react'
export default function About(){
    return(
        <div className='about-page-container'>
            <img src={isaphephe.jpg} className='about-hero-image'/>
            <div className='about-page-content'>
            <h1>willovale</h1>
            <p>one</p>
            <p>two</p>
            </div>
            <div className='about-page-cta'>
                <h2>You driver is waiting.<br /> Your cab is ready</h2>
                <Link className='link-button' to='/vans'>Explore our Cabs.</Link>
            </div>
        </div>
    )
}