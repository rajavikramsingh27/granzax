import React, { Component } from 'react'
import Styles from '../css/Footer.module.css'
import { ImageStyle } from '../utils/controller/ImageStyle';

export default class Footer extends Component {
      render() {
            return (
                  <div>
                        <div className={Styles.footer}>
                              <div className={Styles.footertitle}>
                                    <div className={Styles.footertext}>SOLUTIONS</div>
                                    <div className={Styles.footerminitext}>Home</div>
                                    <div className={Styles.footerminitext}> About </div>
                                    <div className={Styles.footerminitext}>Services</div>
                                    <div className={Styles.footerminitext}>How we work</div>
                                    <div className={Styles.footerminitext}>Careers </div>
                              </div>
                              {/* <div className={Styles.footertitle}>
                                    <div className={Styles.footertext}>SERVICES</div>
                                    <div className={Styles.footerminitext}> Android App Development</div>
                                    <div className={Styles.footerminitext}>Cross Platform</div>
                                    <div className={Styles.footerminitext}>Web Development</div>
                                    <div className={Styles.footerminitext}>How we work</div>
                                    <div className={Styles.footerminitext}>UI/UX Designs </div>
                                    <div className={Styles.footerminitext}> CRM Solutions </div>

                              </div> */}
                              <div className={Styles.footertitle}>
                                    <div className={Styles.footertext}>INDUSTRIES</div>
                                    <div className={Styles.footerminitext}> Food and Restaurants</div>
                                    <div className={Styles.footerminitext}>Business and Ecommerce</div>
                                    <div className={Styles.footerminitext}> Travel</div>
                                    <div className={Styles.footerminitext}>Fitness and Gym</div>
                                    <div className={Styles.footerminitext}>Banking </div>
                                    <div className={Styles.footerminitext}> Sports</div>
                                    <div className={Styles.footerminitext}>Real Estate  </div>
                                    <div className={Styles.footerminitext}>Healthcare</div>
                                    <div className={Styles.footerminitext}>Job and Career </div>
                                    <div className={Styles.footerminitext}> Education</div>

                              </div>
                              <div className={Styles.footertitle}>
                                    <div className={Styles.footertext}> CONTACT</div>
                                    <div className={Styles.footerminitext}>Ofc No. 61, First Floor, Shopping Center</div>
                                    <div className={Styles.footerminitext}>Gulab Vihar, Katla Bazar, Sheopur Road</div>
                                    <div className={Styles.footerminitext}>Pratap Nagar, Jaipur, Rajasthan, 302033</div>
                                    <div className={Styles.footerminitext}>WhatsApp/Phone No.:- +91-6375425038</div>
                                    <div className={Styles.footerminitext}>Connect to HR:- hr@granzax.com</div>
                                    <div className={Styles.footerminitext}>Connect to Sales:- sales@granzax.com</div>
                              </div>
                        </div>

                        <div className={Styles.footerline}>
                              <div className={Styles.copyright}>Copyright ©2020 - 2022. All rights reserved.</div>
                              <div className={Styles.logo_Name}>
                                    <img className={Styles.logo} src={ImageStyle.GranzaXLogo} />
                                    <div className={Styles.ftily}> GranzaX Team LLP</div>
                              </div>
                        </div>
                  </div>
            );
      }
}



