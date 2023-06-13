import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
            <div className="custom-container">
                <div className="skills-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-shapes"></i> my skills
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>My <span>Advantages</span></h1>
                    </div>

                    <div className="row skills text-center">
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/word.png" alt="Figma"/>
                                    <h1 className="percent">92%</h1>
                                </div>
                                <p className="name">Word Office</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-up'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/aspen.jpg" alt="Framer"/>
                                    <h1 className="percent">85%</h1>
                                </div>
                                <p className="name">Aspen HYSYS</p>
                            </div>
                        </div>
                        <div className="col-md-3 scroll-animation" data-aos='fade-down'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/Matlab.png" alt="Webflow"/>
                                    <h1 className="percent">50%</h1>
                                </div>
                                <p className="name">MATHLAB</p>
                            </div>
                        </div>
 
                        <div className="col-md-3 scroll-animation" data-aos='fade-right'>
                            <div className="skill">
                                <div className="skill-inner">
                                    <img src="./assets/images/wordpress.png" alt="WordPress"/>
                                    <h1 className="percent">86%</h1>
                                </div>
                                <p className="name">WordPress</p>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
    </section>
  )
}
