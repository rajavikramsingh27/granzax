import React, { Component } from 'react'
import Styles from '../css/Home.module.css'
import { ImageStyle } from '../utils/controller/ImageStyle';
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


export default class Home extends Component {

  render() {
    
    const appname = ['Abc project', 'Abc project','Abc project','Abc project','Abc project','Abc project']
    const apps = ['UI/UX, Mobile App Development','UI/UX, Mobile App Development','UI/UX, Mobile App Development','UI/UX, Mobile App Development','UI/UX, Mobile App Development','UI/UX, Mobile App Development']
    const imageapps = [ImageStyle.mobile1, ImageStyle.mobile2, ImageStyle.mobile3, ImageStyle.mobile4,ImageStyle.mobile5,ImageStyle.mobile6];
  
    

    const names = ["Flutter", 'Goiang', 'React','Firebase','Docker','Kubernetes',"Flutter", 'Goiang', 'React',];
  const image = [ImageStyle.flutter, ImageStyle.gologo, ImageStyle.Reacticon,ImageStyle.firebase,ImageStyle.docker,ImageStyle.kuber,ImageStyle.flutter, ImageStyle.gologo, ImageStyle.Reacticon, ]
 
    return (
      <div className={Styles.body}>
        <Header />
        <div className={Styles.titlebox}>
          <div className={Styles.textbox}>
            <div className={Styles.connecting}>Connecting dots from</div>
            <div className={Styles.design}>DESIGN to DEVELOPMENT</div>
            <div className={Styles.since}>since a decade.</div>
          </div>
          <div className={Styles.imgbox}>
            <img className={Styles.pick} src={ImageStyle.GranzaXLogoTransparent} />
          </div>

        </div>
        <div className={Styles.who}>
          WHO WE ARE
        </div>

        <div className={Styles.overtextbox} >
          <div className={Styles.ourtext}>Our mission is to innovate, transform, & deliver</div>
          <div className={Styles.aboutbtn}>
            <div className={Styles.btntext}>About

            <img className={Styles.arrow} src={ImageStyle.arrowright} /></div>
          </div>
        </div>
        <div className={Styles.team}>
          <div className={Styles.teamtext}>
            <div className={Styles.minitext}>We are a team of experienced mobile app developers in India dedicated to creating customized mobile apps that will help your business stand out. We are passionate, skilled, experienced and friendly.
            </div>
            <div className={Styles.minitext}>Our professionals know the ins and outs of the mobile world, and are able to jumpstart your business by offering unparalleled services to brands, organizations and individuals.
            </div>
            <div className={Styles.minitext} >We have been revolutionizing businesses since 2022, and it is our mission to deliver powerful solutions that meet our client's objectives.</div>
          </div>
          <div className={Styles.teamimg}>

            <img className={Styles.workman} src={ImageStyle.worktime} />
          </div>
        </div>
        <div className={Styles.graybox}>
          <div className={Styles.ourteam}>Our team, our love - Innovation</div>
          <div className={Styles.wedo} >We do architectural, design, and development, but we are more than that- we are a team of people passionate about delivering cutting-edge solutions and producing exceptional results.</div>
          <div className={Styles.bigtextbox}>
            <div className={Styles.box1}>
              <div className={Styles.bigtext}>100+</div>
              <div className={Styles.product}>Product Delivered</div>
            </div>
            <div className={Styles.box2}>
              <div className={Styles.tharity}>30+</div>
              <div className={Styles.creative}>Creative nerds under one roof</div>
              <div className={Styles.tharity}>$2m </div>
              <div className={Styles.creative}>Investment Raised for startups </div>
            </div>

          </div>
          <div className={Styles.overtextbox}>
            <div className={Styles.ourtext}>What can we do for you?</div>
            <div className={Styles.aboutbtn}>
            <div className={Styles.btntext}>All Services

            <img className={Styles.arrow} src={ImageStyle.arrowright} /></div>
          </div>
            
          </div>
          <div className={Styles.webelive}>We believe that our strength lies in the comprehensive services we provide to our clients. From full-stack development to just consultancy, we deliver exactly what you demand.</div>
          <div className={Styles.ourservice}>Our Services</div>
          <div className={Styles.details}>
            <div className={Styles.minibox} >
              <div className={Styles.radiousminibox}>
                <img className={Styles.designicon} src={ImageStyle.uidesign} />
                <div className={Styles.icontext}>UI/UX & Graphic Design </div>
              </div>
              <div className={Styles.radiousminibox}>
                <img className={Styles.designicon} src={ImageStyle.mobile} />
                <div className={Styles.icontext}>Mobile App Development</div>
              </div>
              <div className={Styles.radiousminibox}>
                <img className={Styles.designicon} src={ImageStyle.gameicon} />
                <div className={Styles.icontext}>Game Development</div>
              </div>
              <div className={Styles.radiousminibox}>
                <img className={Styles.designicon} src={ImageStyle.webicon} />
                <div className={Styles.icontext}>Web   Development</div>
              </div>
            </div>
            <div className={Styles.uitext}>
              <div className={Styles.uiux}>UI/UX & Graphic Design</div>

              <div className={Styles.lorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum</div>

            </div>
          </div>
          <div className={Styles.trand}>Trending</div>
          <div className={Styles.tech}>Technologies</div>

         
            <ScrollMenu className={Styles.scroll}>
              <div className={Styles.project}>
              {
          image.map((data, index) =>
            <div className={Styles.pickicon}>
              <img className={Styles.projecticon} src={image[index]} />
              <div className={Styles.projectname}>{names[index]}</div>
            </div>
          )
        }
              </div>
              
         </ScrollMenu>
          
            
          



          <div className={Styles.recentilywork}>Our Work done recently </div>
          
          <div className={Styles.gridContainer}>
        {
          image.map((data, index) =>
          <div className={Styles.gridIitem}>
           <img className={Styles.bgimage} src={imageapps[index]} />
           <div className={Styles.Abc }>{appname[index]}</div>
           <div className={Styles.mobileapp}>{apps[index]}</div>
      
        </div>
          )

        }
        </div>


         
        </div>
        <Footer />
      </div>
    )
  }
}
