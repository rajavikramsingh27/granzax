import React, { Component } from 'react'
import Styles from '../css/Career.module.css'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import { ImageStyle } from '../utils/controller/ImageStyle';
import { NavLink } from 'react-router-dom';
import Conact from '../Views/Conact'


export default class Career extends Component {
  render() {
    const title = ['Out of the box thinking ', ' Eagerness to Learn ', 'Confidence and Self-Inspiration', 'Confidence and Self-Inspiration', 'Advancement', ' Combined efforts', 'Accountability', 'Reasonability ']
    const apps = ['We encourage out of the box thinking to approach every challenge with an appropriate yet eccentric solution.  ', 'Devise solutions based on customer’s needs and interests. We ensure to configure approaches that meet our customers .',
      'Willingness to take initiatives and confidence of finding unique solutions for every difficulty one.', 'We never stop learning. We love the idea of exploring and developing new-skills with every project.', 'Knowledge of the difference between right and wrong. We promote action towards betterment of the organization as well as the individuals.', ' Apart we are just individuals, together we rise to the heights of success. We believe that teamwork can move mountains.',
      'We are determined to complete our tasks with the best of our capabilities and on time. We take accountability for our words and actions.', 'Best of the solutions are derived from a reasonable mind. Logics and intellect are of utter importance for successful implementation of ideas.',]


    const logo = ['Flutter Developer', 'iOS(Swift/SwiftUI) App Developer', 'React Native Developer', 'React.js Developer', 'Backend Developer', 'UI/UX Designer', 'Business Analyst/Bidder', 'Business Development Manager']
    const look = [
      'Expreience:- 0 - 6 yrs, State management:- GetX, Provider, BLoC',
      'Expreience:- 0 - 6 yrs, MVC, MVVM, MVP, VIPER, CLEAN,',
      'Expreience:- 0 - 6 yrs, JavaScript & TypeScript, State management:- MobX, ReduX',
      'Expreience:- 0 - 6 yrs, JavaScript & TypeScript, State management:- MobX, ReduX, HTML, Front End & Stlying:- CSS, TailWind CSS, BootStrap, MaterialUI',
      'Expreience:- 0 - 6 yrs, Node.js, Express.js, JavaScript & TypeScript, DataBase:- MongoDB, SQL, MYSQL, Dynamo, Firebase, Storage:- Amazon S3, Firebase, Google Cloud, Cloudinary, Deploy:- AWS EC2, Google Cloud, HeroKu, GoDaddy',
      'Expreience:- 0 - 6 yrs, Mobile UI and Web UI, Software Tools:- Adobe XD, Figma',
      'Expreience:- 0 - 6, PreSales, Bidding on UpWork, Freelancer, Fiver',
      'Expreience:- 0 - 6, Pre Sales & Post Sales Team Management ',
    ]

    return (
      <div>
        <Header />
        <div className={Styles.title}> Let’s Achieve Greater </div>
        <div className={Styles.title2}>Goals Together</div>
        <div className={Styles.subtitle}> We believe in the impact of great values. We’re looking for people who endorse our values and are dedicated to building client-befitting products.</div>


        <div className={Styles.gridContainer}>
          {
            apps.map((data, index) =>
              <div className={Styles.boxgreen}>
                <div className={Styles.confidence}>{title[index]}</div>
                <div className={Styles.minitext}>{apps[index]}</div>
              </div>

            )

          }
        </div>





        <div className={Styles.roles}>Currently Available Roles</div>
        <div className={Styles.due}>Due to customer demand and our continuous growth we are actively looking for the following position,  </div>
        <div className={Styles.due}>if you feel you have the skills to fulfil any of the following please get in touch. </div>

        <div className={Styles.gridContainer}>
          {
            apps.map((data, index) =>
              <div className={Styles.boxgreen}>
                <div className={Styles.mobile}>{logo[index]}</div>
                <div className={Styles.looking}>{look[index]}</div>

                <div className={Styles.appbtn} to="/Mobile" >
                  hr@granzax.com
                  {/* <img className={Styles.arrow} src={ImageStyle.arrowright} /> */}
                </div>
              </div>

            )

          }
        </div>

        <Footer />
      </div>
    )
  }
}
