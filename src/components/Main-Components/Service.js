import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Service() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="services-area page-section scroll-to-page" id="services">
        <div className="custom-container">
            <div className="services-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-stream"></i> Speciality
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>My <span>Specializations</span></h1>
                </div>

                <div className="services-items">
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-bezier-curve"></i>
                        <h2>Multitasking</h2>
                        <p> I successfully handled a wide range of responsibilities</p>
                        <span className="projects">President</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-code"></i>
                        <h2>Customer Engagement</h2>
                        <p>Easily approach with Customer</p>
                        <span className="projects">Service Crew</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-bezier-curve"></i>
                        <h2> kena design icon ni</h2>
                        <p> database save icon, title, & place [limited word]</p>
                        <span className="projects">etc</span>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}
