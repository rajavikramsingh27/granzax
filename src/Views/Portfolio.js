import React, { Component } from 'react'
import Styles from '../css/Portfolio.module.css'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import { ImageStyle } from '../utils/controller/ImageStyle';




export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className={Styles.title}>Best From Our Creations </div>
        <div className={Styles.wehave}>We've developed some unique and astonishing apps for StartUps, Enterprises and Brands . </div>
        <div className={Styles.wehave}>Our developers and designers join forces to accomplish remarkable mobile app designs and development. </div>
        <div className={ Styles.buttenbox}>
        <div className={ Styles.butten}> View All </div>
        <div className={ Styles.butten}>Business </div>
        <div className={ Styles.butten}>Charity </div>
        <div className={ Styles.butten}>Health </div>
        <div className={ Styles.butten}>Social </div>
             </div>
             <div className={Styles.appbox}>
             <div className={Styles.apptext}>
              <div className={Styles.app}>App Name</div>
              <div className={Styles.lorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</div>
             <div className={Styles.icon}> 
             <img className={Styles.appicon} src={ImageStyle.appleicon} />
             <img className={Styles.appicon} src={ImageStyle.androidicon} />
             <img className={Styles.appicon} src={ImageStyle.path} />
             
             </div>
             <div className={Styles.appbtn}>View Case Study
             <img className={Styles.arrow} src={ImageStyle.arrowright} />
              </div>
             </div>
             <div className={Styles.appimg}>
             <img className={Styles.appphoto} src={ImageStyle.appimg} />
             </div>
             </div>

             <div className={Styles.appbox}>
             <div className={Styles.apptext}>
              <div className={Styles.app}>App Name</div>
              <div className={Styles.lorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</div>
             <div className={Styles.icon}> 
             <img className={Styles.appicon} src={ImageStyle.appleicon} />
             <img className={Styles.appicon} src={ImageStyle.androidicon} />
             <img className={Styles.appicon} src={ImageStyle.path} />
             
             </div>
             <div className={Styles.appbtn}>View Case Study
             <img className={Styles.arrow} src={ImageStyle.arrowright} />
              </div>
             </div>
             <div className={Styles.appimg}>
             <img className={Styles.appphoto} src={ImageStyle.app2} />
             </div>
             </div>

             <div className={Styles.appbox}>
             <div className={Styles.apptext}>
              <div className={Styles.app}>App Name</div>
              <div className={Styles.lorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</div>
             <div className={Styles.icon}> 
             <img className={Styles.appicon} src={ImageStyle.appleicon} />
             <img className={Styles.appicon} src={ImageStyle.androidicon} />
             <img className={Styles.appicon} src={ImageStyle.path} />
             
             </div>
             <div className={Styles.appbtn}>View Case Study
             <img className={Styles.arrow} src={ImageStyle.arrowright} />
              </div>
             </div>
             <div className={Styles.appimg}>
             <img className={Styles.appphoto} src={ImageStyle.app3} />
             </div>
             </div>
             <div className={Styles.footertop}></div>
        <Footer/>
        </div>
    )
  }
}
