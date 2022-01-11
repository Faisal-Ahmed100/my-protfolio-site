import React from 'react';
import './pricing.css';
import Fade from 'react-reveal/Fade';

const Pricing = () => {
    return (
        <>
         <section className="pricing-aria p" id='pricing-aria'>
             <div className="container">
             <Fade bottom big cascade delay={100} duration={1200}>
             <div className="s-text">
            <h6>MY PRICING</h6>
            <h2 className="s-text-h2">Pricing & Packages</h2>
          </div>
          </Fade>
          <Fade bottom big cascade delay={200} duration={1300}>
          <div className="pricing-wapper">
              <div className="pricing-box">
                  <h2>BASIC PLAN</h2>
                  <div className="sup-price">
                      <sup>$</sup>
                      49K
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className="pricing-btn">
                      <a href="#">Get Started</a>
                  </div>
              </div>
              <div className="pricing-box">
                  <h2>BEGINNER PLAN</h2>
                  <div className="sup-price">
                      <sup>$</sup>
                      79K
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className="pricing-btn">
                      <a href="#">Get Started</a>
                  </div>
              </div>
              <div className="pricing-box">
                  <h2>PREMIUM PLAN</h2>
                  <div className="sup-price">
                      <sup>$</sup>
                      109K
                  </div>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <div className="pricing-btn">
                      <a href="#">Get Started</a>
                  </div>
              </div>
          </div>
          </Fade>
             </div>
             </section>   
        </>
    )
}

export default Pricing
