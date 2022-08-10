import React, { Component } from 'react'
import Styles from '../css/Howwork.module.css'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
// import { ImageStyle } from '../utils/controller/ImageStyle';



export default class Howwork extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className={Styles.title}>How We Work</div>
        <div className={Styles.subtitle}>Lorem ipsum dolor sit amet, consetetur sadipscing</div>
        <div className={Styles.box}>  
        <div className={Styles.box1}>01 </div>  
        <div className={Styles.box2}> 
        <div className={Styles.analysis}>Analysis and Agreement</div>
        <div className={Styles.after}>After being approached by a client, our team of tech strategists understands the project’s requirements. They analyse and research to make a final plan. We then present the quotation, time frame, and project plan to the client. An NDA (Non-disclosure agreement) is signed if the client requires it.</div>
        </div> 
        </div>
        <div className={Styles.buttenbox}>
        <div className={Styles.btn}>Initial communication with the client</div>
          <div className={Styles.btn}>Understanding the requirements</div> 
           <div className={Styles.btn}>Brainstorming and research</div>
             <div className={Styles.btn}>Strategising the entire plan</div>
        </div>

        <div className={Styles.box}>  
        <div className={Styles.box1}>02 </div>  
        <div className={Styles.box2}> 
        <div className={Styles.analysis}>Developing An Agile Process</div>
        <div className={Styles.after}>Breaking a lengthy task into short milestones makes it organised and simple. After the client’s approval, the plan is subdivided into modules. Our experts start working on the project with an initial kick-off amount.</div>
        </div> 
        </div>
        <div className={Styles.buttenbox}>
        <div className={Styles.btn}>
          <div className={Styles.btntext}>Milestone division</div></div>
          <div className={Styles.btn}>Charging kick off amount </div> 
           <div className={Styles.btn}> 
           <div className={Styles.btntext} >Beginning the work</div></div>
             
        </div>

        <div className={Styles.box}>  
        <div className={Styles.box1}>03 </div>  
        <div className={Styles.box2}> 
        <div className={Styles.analysis}>Design Prototype Wireframe</div>
        <div className={Styles.after}>From here, we make headway to design the prototype of the project. Our team puts heads together to conceptualize the wireframe considering the specifications and action plan. At the same time, we design the most intriguing and user-friendly UI aiming for great user experience.  </div>
        </div> 
        </div>
        <div className={Styles.buttenbox}>
        <div className={Styles.btn}>
          <div className={Styles.btntext}>Internal research </div></div>
          <div className={Styles.btn}>
            <div className={Styles.btntext}>Designing prototype</div> </div>
           <div className={Styles.btn}>
            <div className={Styles.btntext}>Innovative UI/UX</div></div>
             <div className={Styles.btn}>Submission of the resource plan </div>
        </div>

        <div className={Styles.box}>  
        <div className={Styles.box1}>04 </div>  
        <div className={Styles.box2}> 
        <div className={Styles.analysis}>App Development</div>
        <div className={Styles.after}>When the client approves the prototype, our developers jump into the process of development of the app targeting one milestone at a time. The client is kept posted on hitting each milestone and the work is presented to the client for possible feedback or modification. </div>
        </div> 
        </div>
        <div className={Styles.buttenbox}>
        <div className={Styles.btn}>
          <div className={Styles.btntext}> Agile software development</div></div>
          <div className={Styles.btn}>
            <div className={Styles.btntext}>Delivering modules in sprints</div> </div>
           <div className={Styles.btn}>
            <div className={Styles.btntext}>Fixing bugs, integrating feedback</div></div>
             
        </div>

        <div className={Styles.box}>  
        <div className={Styles.box1}>05 </div>  
        <div className={Styles.box2}> 
        <div className={Styles.analysis}>Beta Testing/ Quality Assurance</div>
        <div className={Styles.after}>The complete plan is now put into action. The client can see and use the beta version of the app. The app is tested from the viewpoint of users and examined accordingly. Modifications and bug fixes are done if needed. Beta version goes through various testings to confirm the quality. </div>
        </div> 
        </div>
        <div className={Styles.buttenbox}>
        <div className={Styles.btn}>
          <div className={Styles.btntext}> Real-time utilization</div></div>
          <div className={Styles.btn}>
            <div className={Styles.btntext}> Systematic monitoring and evaluation</div> </div>
           <div className={Styles.btn}>
            <div className={Styles.btntext}>Test-driven development (Optional)  </div></div>
            <div className={Styles.btn}>
            <div className={Styles.btntext}>Bug eliminations  </div></div>
             
        </div>

        <div className={Styles.box}>  
        <div className={Styles.box1}>06 </div>  
        <div className={Styles.box2}> 
        <div className={Styles.analysis}>Deployment and Delivery </div>
        <div className={Styles.after}>After the client's approval on the beta version, the app is all ready to strike the app market for real-time application. Once all the modifications are implemented, our experts deploy the app on different app stores. The app is also handed over to the clients with its repository and final source code. </div>
        </div> 
        </div>
        <div className={Styles.buttenbox}>
        <div className={Styles.btn}>
          <div className={Styles.btntext}> Launching the app in app stores</div></div>
          <div className={Styles.btn}>
            <div className={Styles.btntext}> Final delivery of the product</div> </div>
           <div className={Styles.btn}>
            <div className={Styles.btntext}>Delivering source codes  </div></div>
            <div className={Styles.btn}>
            <div className={Styles.btntext}>Ensuring persistent quality  </div></div>
             
        </div>

        <div className={Styles.journey}>Journey ends with 6 months of free support</div>
        <Footer/>
      </div>
    )
  }
}
