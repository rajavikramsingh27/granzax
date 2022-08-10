import React, { Component } from 'react'
import Styles from '../css/CareerToday.module.css'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import { ImageStyle } from '../utils/controller/ImageStyle';

export default class CareerToday extends Component {
  render() {
    return (
      <div>
        <Header/>
         <div className={Styles.title}> Kickstart Your Digital  </div>
        <div className={Styles.title2}>Journey Today </div> 
        <div className={Styles.subtitle}> Get all your questions answered b your business development team.</div>
        <div className={Styles.box}>
        <div className={Styles.threebox}> 
        <div className={Styles.got}>Got a startup idea & need to get it validated?</div>
          </div> 
        <div className={Styles.threebox}>
        <div className={Styles.letus}>Let us give you our honest opinion.</div>
        <div className={Styles.letus} >Book your FREE 30 minutes consultation with:</div>
        <div className={Styles.namebox}>
        <div className={Styles.name}>Mr. John Deo</div>
        <div className={Styles.post}>Co-Founder</div>
        
        </div>
        
          </div> 
        <div className={Styles.threebox}>
         <img className={Styles.photo} src={ImageStyle.pick } /></div> 
        </div>
        <div className={Styles.contectbox}>
          <div className={Styles.threebox}>
          <div className={Styles.contact}>Contact us</div>
          </div>
          <div className={Styles.threebox}>
          <div className={Styles.namebox}>
        <div className={Styles.address}>Address </div>
        <div className={Styles.post}>123, ABC Stgreet, ABC City India  </div>
        
        </div>
          </div>
          <div className={Styles.threebox}>
          <div className={Styles.box2}>
                 <img className={Styles.icon} src={ImageStyle.location } /></div> 
          </div>
      
             </div>
        <Footer/>
      </div>
    )
  }
}
