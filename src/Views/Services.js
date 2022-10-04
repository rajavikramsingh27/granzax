import React, { Component } from 'react'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import Styles from '../css/Service.module.css';
import { ImageStyle } from '../utils/controller/ImageStyle';
import { NavLink } from 'react-router-dom';


export default class Services extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className={Styles.servicetext}>Service</div>
        <div className={Styles.webuild}>We Build Digital Products That Help Your Business Scale</div>
        <div className={Styles.what}>What We Do</div>
        <div className={Styles.minititle}>We have solutions for all mobile app development needs of your business to take it to greater heights of achievements </div>
        <div className={Styles.minititle}>and success. Exceptional user engagement is driven by an astounding interface. </div>
        <div className={Styles.minititle}>Our team of experts will help you transform your business completely with our unique mobile & web app development  </div>
        <div className={Styles.minititle}> services.</div>

        <div className={Styles.servicetitlebox}>
          <div className={Styles.servicetitle}>UI/UX & Graphic Design</div>
          <div className={Styles.detailsbox}>
            <div className={Styles.details}>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}> UX Research</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}> Wire-Frame Design</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}> Mock-UP Design</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}> Prototype Design </div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>UI Design</div> 
              </div>
            </div>
            <div className={Styles.details}>
            <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Logo Design</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Icon Design</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}> Adobe XD</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Figma</div> 
              </div>
            </div>
             <div className={Styles.details}>

             {/* <div className={Styles.aboutbtn}>
             <NavLink className={Styles.btntext} to="/Mobile" >
            
            Explore
               <img className={Styles.arrow2} src={ImageStyle.arrowright} />
                          </NavLink>
      </div>
      <img className={Styles.designicon}  src={ImageStyle.greenicon} /> */}
             </div>
          </div>
        </div>


        <div className={Styles.servicetitlebox}>
          <div className={Styles.servicetitle}>Mobile App Development </div>
          <div className={Styles.detailsbox}>
            <div className={Styles.details}>
            <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}> iOS App Development </div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}> iPhone App Development </div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>iPad App Development </div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Android App Development </div> 
              </div>

            </div>
            <div className={Styles.details}>
            <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Hybrid App Development </div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Swift App Development </div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}> Flutter App Development </div> 
              </div>

            <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}> React Native Development</div> 
              </div>
         
          </div>
          <div className={Styles.details}>
          {/* <div className={Styles.aboutbtn}>
          <NavLink className={Styles.btntext} to="/Mobile" >
            
          Explore
             <img className={Styles.arrow2} src={ImageStyle.arrowright} />
                        </NavLink>
                        </div>
       
      <img className={Styles.mobileicon}  src={ImageStyle.greenmob} /> */}
             </div>
          
        </div>
        </div>

      

        <div className={Styles.servicetitlebox}>
          <div className={Styles.servicetitle}>Web Development  </div>
          <div className={Styles.detailsbox}>
            <div className={Styles.details}>
            <div className={Styles.text}>
              
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>FrontEnd Development </div> 
              </div>
              
              
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>React.js Development </div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>HTML</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>CSS</div> 
              </div>
              



            
            </div>
            <div className={Styles.details}>
            <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>BootStrap </div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Material UI</div> 
              </div>

              
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>ReduX</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>MobX</div> 
              </div>
             
        
          
              
             
          </div>
          <div className={Styles.details}>
          {/* <div className={Styles.aboutbtn}>
          <NavLink className={Styles.btntext} to="/Mobile" >
            
            Explore
               <img className={Styles.arrow2} src={ImageStyle.arrowright} />
                          </NavLink>
      </div> */}
      {/* <img className={Styles.game}  src={ImageStyle.web} /> */}
             </div>
          
        </div>
        </div>



        {/* ////// */}
        <div className={Styles.servicetitlebox}>
          <div className={Styles.servicetitle}>Backend/DataBase Development</div>
          <div className={Styles.detailsbox}>
            <div className={Styles.details}>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Node.js</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Express.js</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>MongoDB</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>SQL</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>MYSQL</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>NOSQL</div> 
              </div>

            </div>
            <div className={Styles.details}>
            
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>PostgreSQL</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>JavaScript</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>TypeScript</div> 
              </div>


              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>RESTFull API</div> 
              </div>



              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>JSON Parsing</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Socket</div> 
              </div>


            </div>
             <div className={Styles.details}>

             {/* <div className={Styles.aboutbtn}>
             <NavLink className={Styles.btntext} to="/Mobile" >
            
            Explore
               <img className={Styles.arrow2} src={ImageStyle.arrowright} />
                          </NavLink>
      </div>
      <img className={Styles.designicon}  src={ImageStyle.greenicon} /> */}
             </div>
          </div>
        </div>
        {/* ////// */}
        <div className={Styles.servicetitlebox}>
          <div className={Styles.servicetitle}>Deployment </div>
          <div className={Styles.detailsbox}>
            <div className={Styles.details}>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Apple App Store</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Apple Test Flight</div> 
              </div>              
            </div>
            <div className={Styles.details}>
          
            <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Play Store</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Custom Domains</div> 
              </div>


            </div>
             <div className={Styles.details}>

             {/* <div className={Styles.aboutbtn}>
             <NavLink className={Styles.btntext} to="/Mobile" >
            
            Explore
               <img className={Styles.arrow2} src={ImageStyle.arrowright} />
                          </NavLink>
      </div>
      <img className={Styles.designicon}  src={ImageStyle.greenicon} /> */}
             </div>
          </div>
        </div>


        <div className={Styles.servicetitlebox}>
          <div className={Styles.servicetitle}>Server Management </div>
          <div className={Styles.detailsbox}>
            <div className={Styles.details}>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>NGINX</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>AWS</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Google Cloud</div> 
              </div>
            </div>
            <div className={Styles.details}>
            <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>FireBase Hosting</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>HeroKu</div> 
              </div>
              
            <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.righthand}/>
             <div className={Styles.inter}>Vercel</div> 
              </div>

            </div>
             <div className={Styles.details}>

             {/* <div className={Styles.aboutbtn}>
             <NavLink className={Styles.btntext} to="/Mobile" >
            
            Explore
               <img className={Styles.arrow2} src={ImageStyle.arrowright} />
                          </NavLink>
      </div>
      <img className={Styles.designicon}  src={ImageStyle.greenicon} /> */}
             </div>
          </div>
        </div>


        <Footer/>
      </div>
    )
  }
}
