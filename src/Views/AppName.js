import React, { Component } from 'react'
import Styles from '../css/AppName.module.css'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import { ImageStyle } from '../utils/controller/ImageStyle';
import Scrollbars from 'react-custom-scrollbars';

export default class AppName extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className={Styles.title}> App Name </div>
        <div className={Styles.subtitle}>Lorem ipsum dolor sit amet, consetetur sadipscing</div>
        <div className={Styles.btnbox}>
        <div className={Styles.btn}>
        <div className={Styles.btntitle}>Category </div> 
        <div className={Styles.btntext}>Lorem ipsum</div>
        </div>
        <div className={Styles.btn}>
        <div className={Styles.btntitle}> Device </div> 
        <div className={Styles.btntext}>Lorem ipsum</div>
        </div>
        <div className={Styles.btn}>
        <div className={Styles.btntitle}> Technologies </div> 
        <div className={Styles.btntext}>Lorem ipsum</div>
        </div>
        <div className={Styles.btn}>
        <div className={Styles.btntitle}>  Country </div> 
        <div className={Styles.btntext}>Lorem ipsum</div>
        </div>
        </div>
        <div className={Styles.download}>Download Now</div>
        <img className={Styles.apps} src={ImageStyle.googal} />
        <div className={Styles.box}>
          <div className={Styles.boxtitle}>Project Details</div>
          <div className={Styles.lorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam </div>
        </div>
        <div className={Styles.the}>The Challenges</div>
          
          <div className={Styles.text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</div>
          <div  className={Styles.loremtitle}>Lorem ipsum dolor sit amet</div>
          <div className={Styles.box2} >
          <div className={Styles.photo} >
          <img className={Styles.apppick} src={ImageStyle.appimg} />
          </div>
            <div className={Styles.phototext} >
              <div className={Styles.photolorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.  </div>
              <div className={Styles.photolorem}>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </div>
            </div>
          </div>
          <div className={Styles.box3} >
          <div className={Styles.details} >
            <div  className={Styles.detailstitle}>Our Solution</div>
            <div className={Styles.detailslorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</div>
        <div  className={Styles.detailslorem}>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</div>
          </div>
          <div className={Styles.details} >
          <div  className={Styles.detailstitle}> Summary</div> 
          <div className={Styles.detailslorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</div>
        <div  className={Styles.detailslorem}>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</div>
          </div>
          </div>
          <div className={Styles.contactbtn}>Contact us
          <img className={Styles.arrow} src={ImageStyle.arrowright} />

          </div>
        <Footer/>
      </div>
    )
  }
}
