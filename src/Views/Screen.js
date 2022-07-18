import React, { Component } from 'react'

import '../css/Screen.module.css';

import firstpick from '../Assets/Images/firstpick.png';
import worktime from '../Assets/Images/worktime.png';
import uidesign from '../Assets/Images/uidesign.png';
import gameicon from '../Assets/Images/gameicon.png';
import webicon from '../Assets/Images/webicon.png';
import mobile from '../Assets/Images/mobile.png';
import flutter from '../Assets/Images/flutter.png';
import Reacticon from '../Assets/Images/Reacticon.png';
import gologo from '../Assets/Images/gologo.png';
import firebase from '../Assets/Images/firebase.png';
import docker from '../Assets/Images/docker.png';
import kuber from '../Assets/Images/kuber.png';
import arrowright from '../Assets/Images/arrowright.png';
import mobile1 from '../Assets/Images/mobile1.png';
import mobile2 from '../Assets/Images/mobile2.png';
import mobile3 from '../Assets/Images/mobile3.png';
import mobile4 from '../Assets/Images/mobile4.png';
import mobile5 from '../Assets/Images/mobile5.png';
import mobile6 from '../Assets/Images/mobile6.png';
import Header from '../utils/Header'
import Footer from '../utils/Footer'


export default class Screen extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className='titlebox'>
          <div className='textbox'>
            <div className='connecting'>Connecting dots from</div>
            <div className='design'>DESIGN to DEVELOPMENT</div>
            <div className='since'>since a decade.</div>
          </div>
          <div className='imgbox'>
            <img className='pick' src={firstpick} />
          </div>

        </div>
        <div className='who'>WHO WE ARE</div>

        <div className='overtextbox'>
          <div className='ourtext'>Our mission is to innovate, transform, & deliver</div>
          <div className='aboutbtn'>About
            <img className='arrow' src={arrowright} />
          </div>
        </div>
        <div className='team'>
          <div className='teamtext'>
            <div className='minitext'>We are a team of experienced mobile app developers in India dedicated to creating customized mobile apps that will help your business stand out. We are passionate, skilled, experienced and friendly.
            </div>
            <div className='minitext'>Our professionals know the ins and outs of the mobile world, and are able to jumpstart your business by offering unparalleled services to brands, organizations and individuals.
            </div>
            <div className='minitext'>We have been revolutionizing businesses since 2022, and it is our mission to deliver powerful solutions that meet our client's objectives.</div>
          </div>
          <div className='teamimg'>
            <img className='workman' src={worktime} />
          </div>
        </div>
        <div className='graybox'>
          <div className='ourteam'>Our team, our love - Innovation</div>
          <div className='wedo' >We do architectural, design, and development, but we are more than that- we are a team of people passionate about delivering cutting-edge solutions and producing exceptional results.</div>
          <div className='bigtextbox'>
            <div className='box1'>
              <div className='bigtext'>100+</div>
              <div className='product'>Product Delivered</div>
            </div>
            <div className='box2'>
              <div className='tharity'>30+</div>
              <div className='creative'>Creative nerds under one roof</div>
              <div className='tharity'>$2m </div>
              <div className='creative'>Investment Raised for startups </div>
            </div>

          </div>
          <div className='overtextbox'>
            <div className='ourtext'>What can we do for you?</div>
            <div className='aboutbtn'>All Services
              <img className='arrow' src={arrowright} />
            </div>
          </div>
          <div className='webelive'>We believe that our strength lies in the comprehensive services we provide to our clients. From full-stack development to just consultancy, we deliver exactly what you demand.</div>
          <div className='ourservice'>Our Services</div>
          <div className='details'>
            <div className='minibox'>
              <div className='radiousminibox'>
                <img className='designicon' src={uidesign} />
                <div className='icontext'>UI/UX & Graphic Design </div>
              </div>
              <div className='radiousminibox'>
                <img className='designicon' src={mobile} />
                <div className='icontext'>Mobile App Development</div>
              </div>
              <div className='radiousminibox'>
                <img className='designicon' src={gameicon} />
                <div className='icontext'>Game Development</div>
              </div>
              <div className='radiousminibox'>
                <img className='designicon' src={webicon} />
                <div className='icontext'>Web   Development</div>
              </div>
            </div>
            <div className=' uitext'>
              <div className='uiux'>UI/UX & Graphic Design</div>

              <div className='lorem'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum</div>

            </div>
          </div>
          <div className='trand'>Trending</div>
          <div className='tech'>Technologies</div>
          <div className='project'>
            <div className='pickicon'>
              <img className='projecticon' src={flutter} />
              <div className='projectname'>Flutter</div>
            </div>
            <div className='pickicon'>
              <img className='projecticon' src={gologo} />
              <div className='projectname'>Goiang </div>
            </div>

            <div className='pickicon'>
              <img className='projecticon' src={Reacticon} />
              <div className='projectname'>React</div>
            </div>
            <div className='pickicon'>
              <img className='projecticon' src={firebase} />
              <div className='projectname'>Firebase</div>
            </div>
            <div className='pickicon'>
              <img className='projecticon' src={docker} />
              <div className='projectname'>Docker</div>
            </div>
            <div className='pickicon'>
              <img className='projecticon' src={kuber} />
              <div className='projectname'>Kubernetes</div>
            </div>

          </div>
          <div className='recentilywork'>Our Work done recently </div>


          <div className='twopick'>
            <div className='pick1'>
              <img className=' desplay' src={mobile1} />
              <div className='Abc'>Abc project</div>
              <div className='mobileapp'>UI/UX, Mobile App Development </div>
            </div>
            <div className='pick2'>
              <img className='desplay' src={mobile2} />
              <div className='Abc'>Abc project</div>
              <div className='mobileapp'>UI/UX, Mobile App Development </div>
            </div>
          </div>

          <div className='twopick'>
            <div className='pick1'>
              <img className=' desplay' src={mobile3} />
              <div className='Abc'>Abc project</div>
              <div className='mobileapp'>UI/UX, Mobile App Development </div>
            </div>
            <div className='pick2'>
              <img className='desplay' src={mobile4} />
              <div className='Abc'>Abc project</div>
              <div className='mobileapp'>UI/UX, Mobile App Development </div>
            </div>
          </div>


          <div className='twopick'>
            <div className='pick1'>
              <img className=' desplay' src={mobile5} />
              <div className='Abc'>Abc project</div>
              <div className='mobileapp'>UI/UX, Mobile App Development </div>
            </div>
            <div className='pick2'>
              <img className='desplay' src={mobile6} />
              <div className='Abc'>Abc project</div>
              <div className='mobileapp'>UI/UX, Mobile App Development </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}
