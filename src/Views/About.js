import React, { Component } from 'react'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import Styles from '../css/About.module.css'
import { ImageStyle } from '../utils/controller/ImageStyle';

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={Styles.abouttext}>ABOUT</div>
        <div className={Styles.transforming}>Transforming Businesses With Innovation</div>
        <div className={Styles.wtextbox}>
          <div className={Styles.wtext1}>
            <div className={Styles.wholine}>Who We Are?</div>
            <div className={Styles.whominitext}>We are believers of change! A change driven by technology and innovation. We help businesses and individuals in adapting as well as adopting digital transformation. Our aim is to change people’s lives and improve businesses with our progressive and innovative technology solutions.</div>
          </div>
          <div className={Styles.wtext2}>
            <div v className={Styles.wholine}>What We Do Best </div>
            <div className={Styles.whominitext}>We start by listening to the issues, requirements, challenges and objectives. The process continues with an effort to understand the business, market sector and competitors to develop information which is combined with our technical knowledge, expertise and research in order to provide the best solution at the lowest cost. </div>
          </div>
        </div>
        <div className={Styles.weare}>Why we are?</div>
        <div className={Styles.radiousbox}>
          <div className={Styles.radiousbox1}>
            <div className={Styles.boxtitle}>Transparent Communication</div>
            <div className={Styles.webelieve}>We believe in establishing transparent communications with our clients. The key to a strong and ever-lasting bond is communication and understanding between two parties .</div>
          </div>
          <div className={Styles.radiousbox2}>
            <div className={Styles.boxtitle}>Module Accomplishment</div>
            <div className={Styles.webelieve}>Payment is expected only after the successful accomplishment of each module. We believe in the work and we rely upon mutual trust throughout the project mutual trust throughout the project. </div>
          </div>
  
        </div>
  
        <div className={Styles.radiousbox}>
          <div className={Styles.radiousbox1}>
            <div className={Styles.boxtitle}>We take care of each other </div>
            <div className={Styles.webelieve}>We believe in establishing transparent communications with our clients. The key to a strong and ever-lasting bond is communication and understanding between two parties.</div>
          </div>
          <div className={Styles.radiousbox2}>
            <div className={Styles.boxtitle}>Experience Speaks Louder </div>
            <div className={Styles.webelieve}>Payment is expected only after the successful accomplishment of each module. We believe in the work and we rely upon mutual trust throughout the project trust throughout the project. </div>
          </div>
  
        </div>
        <div className={Styles.satesfied}>
          <div className={Styles.radiousbox}>
            {/* <div className={Styles.radiousbox3}>A satisfied client means a happy :) company </div> */}
            <div className={Styles.radiousbox4} >We are open to feedback and don’t hesitate in making amendments until the client is satisfied with the end result. Your every single feedback which is scope in our work is the top most priority of ours. We do not move ahead without your feedbacks. We’re even there, after project completion to provide complete support. </div>
          </div>
  
        </div>
        <div className={Styles.the}>The Best of Work-Life</div>
        <div className={Styles.threebox}>
          <div className={Styles.threebg}>
            <div className={Styles.three}>
              <div className={Styles.threetext}>Learning and Development</div>
            </div>
            <div className={Styles.three}>
              <div className={Styles.threetextmindful}>Mindful Personal Guidance </div>
            </div>
            <div className={Styles.three}>
              <div className={Styles.threetext}>Constructive Feedback </div>
            </div>
          </div>
  
          <div className={Styles.threebg}>
            <div className={Styles.three}>
              <div className={Styles.threetext}> Inclusive & Open-Culture</div>
            </div>
            <div className={Styles.three}>
              <div className={Styles.threetextmindful}>Innovation & Quality First </div>
            </div>
            <div className={Styles.three}>
              <div className={Styles.threetext}>Proactive Implementation </div>
            </div>
  
          </div>
          <div className={Styles.threebg}>
           
            <div className={Styles.three}>
              <div className={Styles.threetextmindful}>Best Opportunities </div>
            </div>
            <div className={Styles.three}>
              <div className={Styles.threetextmindful}>Work with Latest Technology  </div>
            </div>
          </div>
  
        </div>
  
        <div className={Styles.wanttextbox} >
          <div className={Styles.wanttext}>Want to Join Our Team</div>
          <div className={Styles.aboutbtn}>
            <div className={Styles.btntext}>About
  
            <img className={Styles.arrow} src={ImageStyle.arrowright} /></div>
          </div>
        </div>
        <div className={Styles.wealways}  >We are always looking for either talented professionals or individuals with a flair for our industry to join our team. Whether you are a coding ninja or scheduling guru there is a likely a place for you in our ever expanding company.</div>
  
        <Footer />
      </div>
  
    );
  }
}

