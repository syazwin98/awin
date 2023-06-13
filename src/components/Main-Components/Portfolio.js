import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        Lightbox.option({
          resizeDuration: 200,
          fadeDuration: 600,
          imageFadeDuration: 600,
          wrapAround: true
        });
      }, []);
  return (
    <section className="portfolio-area page-section scroll-to-page" id="portfolio">
        <div className="custom-container">
            <div className="portfolio-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-grip-vertical"></i> portfolio
                    </h4>
                    <h1 className="scroll-animation">Featured <span>Projects</span></h1>
                </div>

                <div className="row portfolio-items">
                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-full">
                            <div className="portfolio-item-inner">
                                <a href="./assets/images/portfolio1.jpg" data-lightbox="example-1">
                                    <img src="./assets/images/portfolio1.jpg" alt="Portfolio"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a >Link1</a>
                                    </li>
                                    <li>
                                        <a >Link2</a>
                                    </li>
                                    <li>
                                        <a >Link3</a>
                                    </li>
                                </ul>
                            </div>
                            <h2><a >Hafizi- System Architecture Designer</a></h2>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="./assets/images/portfolio2.jpg" data-lightbox="example-1">
                                    <img src="./assets/images/portfolio2.jpg" alt="Portfolio"/>
                                </a>

                                <img src="./assets/images/portfolio2.jpg" alt="Portfolio"/>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a >Link4</a>
                                    </li>
                                    <li>
                                        <a >Link5</a>
                                    </li>
                                </ul>
                            </div>
                            <h2><a >gmbar yg dah pernah keja </a></h2>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation"  data-aos='fade-left'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="./assets/images/dewan.jpg" data-lightbox="example-1">
                                    <img src="./assets/images/dewan.jpg" alt="Portfolio"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a>Link6</a>
                                    </li>
                                    <li>
                                        <a >Link7</a>
                                    </li>
                                </ul>
                            </div>
                            <h2><a >gmbar activity</a></h2>
                        </div>
                    </div>
                    

                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="./assets/images/portfolio4.jpg" data-lightbox="example-1">
                                    <img src="./assets/images/portfolio4.jpg" alt="portfolio"/>
                                </a>

                                <ul className="portfolio-categories">
                                    <li>
                                        <a >Link8</a>
                                    </li>
                                    <li>
                                        <a >Link9</a>
                                    </li>
                                </ul>
                            </div>
                            <h2><a>buat website baru all gambar kat situ add Art galary/favorite pics </a></h2>
                        </div>
                    </div>

     
                </div>


            </div>
        </div>
    </section>
  )
}
