import React, { Component } from 'react'
import Styles from '../css/Career.module.css'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import { ImageStyle } from '../utils/controller/ImageStyle';


export default class Career extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className={Styles.title}> Let’s Achieve Greater </div>
        <div className={Styles.title2}>Goals Together</div> 
        <div className={Styles.subtitle}> We believe in the impact of great values. We’re looking for people who endorse our values and are dedicated to building client-befitting products.</div>
        <div className={Styles.box}>
        <div className={Styles.box1}>
          <div className={Styles.confidence}>Confidence and Self-Inspiration</div>
          <div className={Styles.minitext}>Willingness to take initiatives and confidence of finding unique solutions for every difficulty.</div>
        </div>
         <div className={Styles.boxtwo}>
         <div className={Styles.confidence}>Eagerness to Learn </div>
         <div className={Styles.minitext}>We never stop learning. We love the idea of exploring and developing new-skills with every project.</div>
         </div>
        </div>


        <div className={Styles.box}>
        <div className={Styles.box1}>
          <div className={Styles.confidence}> Out of the box thinking</div>
          <div className={Styles.minitext}>We encourage out of the box thinking to approach every challenge with an appropriate yet eccentric solution. </div>
        </div>
         <div className={Styles.boxtwo}>
         <div className={Styles.confidence}> Eagerness to Learn</div>
         <div className={Styles.minitext}> Devise solutions based on customer’s needs and interests. We ensure to configure approaches that meet our customers.</div>
         </div>

         
        </div>

        <div className={Styles.box2}>
        <div className={Styles.boxgreen}>
          <div className={Styles.boxtitle}> Advancement</div>
          <div className={Styles.minitext}>Knowledge of the difference between right and wrong. We promote action towards betterment of the organization as well as the individuals.  </div>
        </div>
         <div className={Styles.boxgreen}>
         <div className={Styles.boxtitle}> Combined efforts</div>
         <div className={Styles.minitext}>Apart we are just individuals, together we rise to the heights of success. We believe that teamwork can move mountains. </div>
         </div>

         
        </div>
        <div className={Styles.box2}>
        <div className={Styles.boxgreen}>
          <div className={Styles.boxtitle}> Accountability</div>
          <div className={Styles.minitext}>We are determined to complete our tasks with the best of our capabilities and on time. We take accountability for our words and actions. </div>
        </div>
         <div className={Styles.boxgreen}>
         <div className={Styles.boxtitle}>Reasonability  </div>
         <div className={Styles.minitext}> Best of the solutions are derived from a reasonable mind. Logics and intellect are of utter importance for successful implementation of ideas.</div>
         </div>

         
        </div>
        <div className={Styles.roles}>Currently Available Roles</div>
        <div className={Styles.due}>Due to customer demand and our continuous growth we are actively looking for the following position,  </div>
        <div className={Styles.due}>if you feel you have the skills to fulfil any of the following please get in touch. </div>
        <div className={Styles.appbox}>
        <div className={Styles.appbox1}>
          <div className={Styles.mobile}>Mobile App Developer</div>
      <div  className={Styles.looking}> Looking for mobile app developers in various technologies. If you're experienced with any of the technologies like Swift/Objective-C, Android app development, React Native, ionic etc. you're most welcome to apply.</div>
       <div  className={Styles.appbtn}>hr@company.com
       <img className={Styles.arrow} src={ImageStyle.arrowright} />
       </div>
        </div>
        <div className={Styles.appbox1}>
        <div className={Styles.mobile}>Web Developers</div>
      <div  className={Styles.looking}> Looking for frontend and backend web developers in various technologies. If you're experienced with any of the technologies like React.js / Angular, PHP (Laravel), Node.js etc. you're most welcome to apply.</div>
       <div  className={Styles.appbtn}>hr@company.com
       <img className={Styles.arrow} src={ImageStyle.arrowright} />
       </div>
        </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
