import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
        <div className="custom-container">
            <div className="resume-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-briefcase"></i> Resume
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Education & <span>Experience</span></h1>
                </div>

                <div className="resume-timeline">
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">2023 - Present</span>
                        <h2>Current Job</h2>
                        <p>Selangor</p>
                        <h2>Service Crew Member</h2>
                        <p>Pontian, Johor</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">2019 - 2020</span>
                        <h2>President Gess En. Student Society (GESS)</h2>
                        <p>University Technology Malaysia (UTM)</p>
                        <h2> Service Crew Member</h2>
                        <p>Pontian, Johor</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date"> year or month</span>
                        <h2>Anythings</h2>
                        <p>tempat</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
