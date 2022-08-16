import React, { Component } from 'react'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import Styles from '../css/Mobile.module.css'



export default class Mobile extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className={Styles.mobiletext}>Mobile</div>
        <div  className={Styles.title}>App Development</div>
        <div className={Styles.what}>WHAT WE DO</div>
        <div className={Styles.subtitle}>We are Mobile App Development Company to Design & Develop Your Custom Mobile Application. </div>
       <div className={Styles.trusted}>Trusted Mobile Application Development Company</div>

       <div className={Styles.minitextbox}>
          <div className={Styles.textbox1}>
           
            <div className={Styles.mobile}>Mobile app development is indeed nowadays necessary for all the business. We, as a mobile application development company can provide high quality standard mobile app of any category. We have worked with diverse brands, organizations, startups and individuals to create powerful apps from excellent idea. </div>
          </div>
          <div className={Styles.textbox2}>
           
            <div className={Styles.ourtext}> Our team of mobile app developers is capable of creating apps for multiple-platforms like iOS, Android and cross-platform solutions in Flutter, React Native & Ionic. Being one of the top-rated mobile application development companies in USA and India, we have expertise in developing mobile app development solutions to meet your business requirements. </div>
          </div>
  
        </div>
        <div className={Styles.subtitle2}>WHAT WE DO</div>

        <div className={Styles.minitextbox}>
          <div className={Styles.textbox3}>
            <div className={Styles.boxtitle}>Native App Development</div>
           
            <div className={Styles.mobile}> Native mobile apps are developed for specific mobile OS such as iOS or Android and users can access them from dedicated app stores.</div>
          </div>
          <div className={Styles.textbox3}>
          <div className={Styles.boxtitle}>Cross-platform  Development</div>
           
            <div className={Styles.mobile}>  Cross-platform mobile apps are developed to function for multiple mobile platforms like iOS, Android, etc. without changing . </div>
          </div>
  
        </div>
        <div className={Styles.endtext}>End-to-End Mobile App Development </div>
        <div className={Styles.endtext}>Services for iOS, Android and Cross-platform</div>
       <div className={Styles.wehave}>We have been providing world-class mobile app development services for Startups, mid-scale businesses, and enterprises since 2011. Our highly skilled mobile app developers will work on transforming your app idea into an innovative and secure mobile application. Whether you require native mobile app or cross-platform apps, our superior mobile app development services are designed to deliver cutting-edge mobility solutions tailored to your business needs. </div>
      

        <Footer/>

      </div>
    )
  }
}
