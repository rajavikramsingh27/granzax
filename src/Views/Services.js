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
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Interface Design</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Interface Design</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Interaction Design</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Research </div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>Prototyping   </div> 
              </div>
            </div>
            <div className={Styles.details}>
            <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Illustration Design</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Motion Graphics & Animations</div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Icon Design </div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>Logo Design </div> 
              </div>
            </div>
             <div className={Styles.details}>

             <div className={Styles.aboutbtn}>
              <div className={Styles.btntext}>Explore
        
        <img  className={ Styles.arrow2} src={ImageStyle.arrowright}/></div>
      </div>
      <img className={Styles.designicon}  src={ImageStyle.greenicon} />
             </div>
          </div>
        </div>


        <div className={Styles.servicetitlebox}>
          <div className={Styles.servicetitle}>Mobile App Development </div>
          <div className={Styles.detailsbox}>
            <div className={Styles.details}>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> iPhone App Development </div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>Android App Development </div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>Swift App Development </div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Flutter App Development </div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> React App Development  </div> 
              </div>
            </div>
            <div className={Styles.details}>
            <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> React Native Development</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Ionic App Development</div> 
              </div>
        
          
              
             
          </div>
          <div className={Styles.details}>
          <div className={Styles.aboutbtn}>
          <NavLink className={Styles.btntext} to="/Mobile" >
            
          Explore
             <img className={Styles.arrow2} src={ImageStyle.arrowright} />
                        </NavLink>
                        </div>
          {/* <div className={Styles.aboutbtn}>
            <div className={Styles.btntext}>Explore
        
        <img  className={ Styles.arrow2} src={ImageStyle.arrowright}/></div>
      </div> */}
      <img className={Styles.mobileicon}  src={ImageStyle.greenmob} />
             </div>
          
        </div>
        </div>

        <div className={Styles.servicetitlebox}>
          <div className={Styles.servicetitle}> Game Development</div>
          <div className={Styles.detailsbox}>
            <div className={Styles.details}>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Mobile Game Development </div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>Web Game Development </div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>MMORPG </div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>First person - Third person shooter  </div> 
              </div>

            
            </div>
            <div className={Styles.details}>
            <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Unity Development</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>  Unity Synthetic Data</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>  Unity Computer vision</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>Unity Simulation </div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>Industrial augmented reality  </div> 
              </div>
        
          
              
             
          </div>
          <div className={Styles.details}>
          <div className={Styles.aboutbtn}>
            <div className={Styles.btntext}>Explore
        
        <img  className={ Styles.arrow2} src={ImageStyle.arrowright}/></div>
      </div>
      <img className={Styles.game}  src={ImageStyle.game2} />
             </div>
          
        </div>
        </div>

        <div className={Styles.servicetitlebox}>
          <div className={Styles.servicetitle}>Web Development  </div>
          <div className={Styles.detailsbox}>
            <div className={Styles.details}>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>ReactJS Development </div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>VueJS Development </div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>Angular Development </div> 
              </div>

              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Back End Web Development </div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Node.js Development </div> 
              </div>

            
            </div>
            <div className={Styles.details}>
            <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}> Laravel Development</div> 
              </div>
              <div className={Styles.text}>
              <img  className={ Styles.arrow} src={ImageStyle.arrowright}/>
             <div className={Styles.inter}>  Golang Development</div> 
              </div>
             
        
          
              
             
          </div>
          <div className={Styles.details}>
          <div className={Styles.aboutbtn}>
            <div className={Styles.btntext}>Explore
        
        <img  className={ Styles.arrow2} src={ImageStyle.arrowright}/></div>
      </div>
      <img className={Styles.game}  src={ImageStyle.web} />
             </div>
          
        </div>
        </div>


        <Footer/>
      </div>
    )
  }
}
