import React from "react";
import "./protfolio.css";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Protfolio = () => {
  return (
    <>
      <section className="protfolio p" id="protfolio-aria">
        <div className="container">
        <Fade bottom big cascade delay={100} duration={1200}>
          <div className="s-text">
            <h6>PORTFOLIO</h6>
            <h2 className="s-text-h2">My Latest Work</h2>
          </div>
          </Fade>
          {/* portfolio aria */}
          <Slide left cascade>
          <div className="prot-wap">
          
            <div className="p-box">
              <div className="p-img-wap">
                <div className="p-box-bg-img"></div>
              </div>
              
              <div className="p-text">
                <a href="#">
                  <h2 className="child-text">Branding & Illustration Design</h2>
                </a>
                <p className="p-child-text">WEB DESIGN</p>
              </div>
              
            </div>
           
            <div className="p-box">
              <div className="p-img-wap">
                <div className="p-box-bg-img img2"></div>
              </div>
            
              <div className="p-text">
                <a href="#">
                  <h2 className="child-text">Branding & Illustration Design</h2>
                </a>
                <p className="p-child-text">WEB DESIGN</p>
              </div>
              
            </div>
            
            
          </div>
          </Slide>
          <Slide right cascade>
          <div className="prot-wap margin1">
            <div className="p-box">
              <div className="p-img-wap">
                <div className="p-box-bg-img img3"></div>
              </div>
              <div className="p-text">
                <a href="#">
                  <h2 className="child-text">Branding & Illustration Design</h2>
                </a>
                <p className="p-child-text">WEB DESIGN</p>
              </div>
            </div>
            <div className="p-box">
              <div className="p-img-wap">
                <div className="p-box-bg-img img4"></div>
              </div>
              <div className="p-text">
                <a href="#">
                  <h2 className="child-text">Branding & Illustration Design</h2>
                </a>
                <p className="p-child-text">WEB DESIGN</p>
              </div>
            </div>
            
            
          </div>
          </Slide>
          <Slide left cascade>
          <div className="prot-wap margin2">
            <div className="p-box">
              <div className="p-img-wap">
                <div className="p-box-bg-img img5"></div>
              </div>
              <div className="p-text">
                <a href="#">
                  <h2 className="child-text">Branding & Illustration Design</h2>
                </a>
                <p className="p-child-text">WEB DESIGN</p>
              </div>
            </div>
            <div className="p-box">
              <div className="p-img-wap">
                <div className="p-box-bg-img img6"></div>
              </div>
              <div className="p-text">
                <a href="#">
                  <h2 className="child-text">Branding & Illustration Design</h2>
                </a>
                <p className="p-child-text">WEB DESIGN</p>
              </div>
            </div>
            
            
          </div>
          </Slide>
          
        </div>
      </section>
    </>
  );
};

export default Protfolio;
