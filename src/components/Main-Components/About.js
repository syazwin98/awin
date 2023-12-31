import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="about-area page-section scroll-to-page" id="about">
        <div className="custom-container">
            <div className="about-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="lar la-user"></i> About
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Sini letak slogan<br/>
                         <span>Highligted</span></h1>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>Cerita apa2 kat sini. About Self. working smart diligient 
                clever. Cute pretty etc..</p>
            </div>
        </div>
    </section>
  )
}
