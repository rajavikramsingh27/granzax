import React, { Component } from 'react'
import Styles from '../css/Portfolio.module.css'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import { ImageStyle } from '../utils/controller/ImageStyle';
import { NavLink } from 'react-router-dom';




export default class Portfolio extends Component {
  render() {
    const names = ["App Name ","App Name ","App Name "];
    const image = [ImageStyle.appimg,ImageStyle.app2,ImageStyle.app3 ]
    const descripation =["Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.","Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
  ,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."]
   const icon =[ImageStyle.appleicon,ImageStyle.androidicon,ImageStyle.path,]

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
           
             {
                image.map((data, index) =>
                <div className={Styles.appbox}>
                  <div className={Styles.apptext}>
                      <div className={Styles.app}>{names[index]}</div>
                      <div className={Styles.lorem}>{descripation[index]}</div>
                    
                      <div className={Styles.icon}>
                      
                     
                      <img className={Styles.appicon} src={icon[index]} />
                    
                        </div> 
                        <NavLink className={Styles.appbtn} to="/AppName" >
                        View Case Study
             <img className={Styles.arrow} src={ImageStyle.arrowright} />
                        </NavLink>
                    
                  </div>
                  <div className={Styles.appimg}>
             <img className={Styles.appphoto} src={ image[index]} />
             </div>
                    </div>
                )
              }

        <Footer/>
        </div>
    )
  }
}
