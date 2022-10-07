import React, { Component } from 'react'
import Styles from '../css/Conact.module.css'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import { ImageStyle } from '../utils/controller/ImageStyle';

export default class Conact extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={Styles.title}> Kickstart Your Digital  Journey Today</div>
        <div className={Styles.box}>
          <div className={Styles.threebox}>
            <div className={Styles.got}>Connect with HR Team</div>
          </div>
          <div className={Styles.threebox}>
            <div className={Styles.letus}>+91-6375425038</div>
            <div className={Styles.letus} >hr@granzax.com</div>
          </div>
        </div>
        <div className={Styles.box}>
          <div className={Styles.threebox}>
            <div className={Styles.got}>Connect with Sales Team</div>
          </div>
          <div className={Styles.threebox}>
            <div className={Styles.letus}>+91-6375425038</div>
            <div className={Styles.letus} >sales@granzax.com</div>
            {/* <div className={Styles.namebox}> */}
            {/* <div className={Styles.name}>Mr. John Deo</div>
        <div className={Styles.post}>Co-Founder</div> */}

            {/* </div> */}

          </div>
          {/* <div className={Styles.threebox}>
         <img className={Styles.photo} src={ImageStyle.pick } /></div>  */}
        </div>

        <div className={Styles.contectbox}>
          <div className={Styles.threebox}>
            <div className={Styles.contact}>Visit on address</div>
          </div>
          <div className={Styles.threebox}>
            <div className={Styles.namebox}>
              <div className={Styles.address}>Address </div>
              <div className={Styles.post}>
                Ofc No. 61, First Floor, Shopping Center, Gulab Vihar, Katla Bazar, Sheopur Road, Pratap Nagar, Jaipur, Rajasthan, 302033
              </div>
            </div>
          </div>
          
          {/* <div className={Styles.threebox}>
            <div className={Styles.box2}>
              <img className={Styles.icon} src={ImageStyle.location} /></div>
          </div> */}

        </div>
        <div className={Styles.mydetails}>
          <div className={Styles.boxtitle}>Get in Touch</div>
          <div className={Styles.flex}>
            <div className={Styles.inputbackbox}>
              <div className={Styles.my}>First Name* </div>
              <input type="text" className={Styles.input} placeholder='First Name*' />
              <div className={Styles.my}>Your Email * </div>
              <input type="text" className={Styles.input} placeholder='Your Email *' />
            </div>

            <div className={Styles.inputbackbox}>
              <div className={Styles.my}>Last Name* </div>
              <input type="text" className={Styles.input} placeholder='Last Name*' />
              <div className={Styles.my}>Your Phone* </div>
              <input type="text" className={Styles.input} placeholder='Your Phone*' />
            </div>
          </div>
          <div className={Styles.mytext}>

          <div className={Styles.mymsg}>Massage* </div>
          <textarea type="textarea" className={Styles.inputarea} placeholder='Write us a message' />
        </div></div>
        <div className={Styles.btnback}>
          <div className={Styles.btn}>Submit</div>
        </div>
        <Footer />
      </div>
    )
  }
}
