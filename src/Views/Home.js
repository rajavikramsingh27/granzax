import React, { Component } from 'react'
import Styles from '../css/Home.module.css'
import { ImageStyle } from '../utils/controller/ImageStyle';
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';



export default class Home extends Component {


  constructor(props) {
    super(props);

    this.state = {
      title: "UI/UX Design",
      description: 'WireFraming/MockUp/Prototype development is one of the very important pacing-stone before finishing an iPhone app development project. The turn of prototype development comes when we are done with the creation of a mockup wireframe service for the iPhone app. As things become clearer before designing of the final product, Prototype development can be seen as improved quality of the outcomes. With this phase, the clients and designing team are allowed to easily see what will work and what needs to be revised in the Phone app development process, this would result in saving both money and time.',
    }
  }

  handleClick1 = () => {
    this.setState({
      title: "UI/UX Design ",
      description: 'WireFraming/MockUp/Prototype development is one of the very important pacing-stone before finishing an iPhone app development project. The turn of prototype development comes when we are done with the creation of a mockup wireframe service for the iPhone app. As things become clearer before designing of the final product, Prototype development can be seen as improved quality of the outcomes. With this phase, the clients and designing team are allowed to easily see what will work and what needs to be revised in the Phone app development process, this would result in saving both money and time.',
    });
  };
  handleClick2 = () => {
    this.setState({
      title: "Mobile App Development ",
      description: 'We provide mobile app development solutions with the utmost efficiency and performance that can ensure better results for your business. We have expertise in all the platforms including Android, Ios and Windows. Our team of developers will meet your business requirements and needs to avail of better solutions. We have been recorded as a leading mobile app development company on various platforms that includes Clutch, Upwork, etc. Our team of experts and experienced developers will be assigned for the development process. They ensure to deliver high-efficiency mobile apps with everlasting performance. If you wish to Hire Mobile App Developers then you need to be very selective about your choice as it will eventually decide the future of your application. We will assure you to provide the best custom mobile app development solution for your concern.',
    });
  };
  handleClick3 = () => {
    this.setState({
      title: "Web Development",
      description: 'We ensure to provide a safe and secure website for our customers at an affordable price. Being a leading Web Development Company, we have to make sure about all the drawbacks and pit holes in the development process to optimize the development cost. Our experts follow a perfect strategy to ensure error-free development. Well, the more creativity you put the more engagement you will receive. Our team of developers and designers always works to make the most creative way out to help you resolve your problem and to have the best approach to build your mobile application. Being a leading app development company, we help you to make the most effective product that can serve your needs.',
    });
  };

  handleClick4 = () => {
    this.setState({
      title: "Backend & Database Development",
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ',
    });
  };

  handleClick5 = () => {
    this.setState({
      title: "Deployment",
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ',
    });
  };

  handleClick6 = () => {
    this.setState({
      title: "Server Management",
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum ',
    });
  };

  render() {
    const appname = ['Abc project', 'Abc project', 'Abc project', 'Abc project', 'Abc project', 'Abc project']
    const apps = ['UI/UX, Mobile App Development', 'UI/UX, Mobile App Development', 'UI/UX, Mobile App Development', 'UI/UX, Mobile App Development', 'UI/UX, Mobile App Development', 'UI/UX, Mobile App Development']
    const imageapps = [ImageStyle.mobile1, ImageStyle.mobile2, ImageStyle.mobile3, ImageStyle.mobile4, ImageStyle.mobile5, ImageStyle.mobile6];

    const names = ["ios","Flutter", 'Nodejs', 'Reactjs','React Native', 'Android', 'MYSQL', 'Heroku ', "Google cloud ", 'Database ','NGINX','Server','SQL','Vercel','PostgreSQL','Mongo db','Dart','Express.js','AWS'];
    const image = [ImageStyle.apple,ImageStyle.flutter, ImageStyle.node, ImageStyle.reactn, ImageStyle. reactn,  ImageStyle.android, ImageStyle. mys, ImageStyle.heroku, ImageStyle.gcolud, ImageStyle.database,ImageStyle.nginx,ImageStyle.server,ImageStyle.sql,ImageStyle.Vercel,ImageStyle.prsoql,ImageStyle.mongo,ImageStyle.dart,ImageStyle.express,ImageStyle.aws]

    return (
      <div className={Styles.body}>
        <Header />
        <div className={Styles.titlebox}>
          <div>
            <div className={Styles.connecting}>Connecting Scraches from</div>
            <div className={Styles.design}>DESIGN to DEVELOPMENT Our mission is to innovate, transform & deliver</div>
          </div>

        </div>
        <div className={Styles.overtextbox} >
          {/* <div className={Styles.ourtext}>Our mission is to innovate, transform & deliver</div> */}
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
              <div className={Styles.bigtext}>60+</div>
              <div className={Styles.product}>Product Delivered</div>
            </div>
            <div className={Styles.box2}>
              <div className={Styles.tharity}>20+</div>
              <div className={Styles.creative}>Creative nerds under one roof</div>
              <div className={Styles.tharity}>$500K </div>
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
              <div className={Styles.radiousminibox} onClick={this.handleClick1}>
                <img className={Styles.designicon} src={ImageStyle.uidesign} />
                <div className={Styles.icontext}>UI/UX Design </div>
              </div>
              <div className={Styles.radiousminibox} onClick={this.handleClick2}>
                <img className={Styles.designicon} src={ImageStyle.mobile} />
                <div className={Styles.icontext}>Mobile App Development</div>
              </div>
              <div className={Styles.radiousminibox} onClick={this.handleClick3}>
                <img className={Styles.designicon} src={ImageStyle.gameicon} />
                <div className={Styles.icontext}>Web Development</div>
              </div>
              <div className={Styles.radiousminibox} onClick={this.handleClick4}>
                <img className={Styles.designicon} src={ImageStyle.webicon} />
                <div className={Styles.icontext}>Backend/DataBase Development</div>
              </div>


              <div className={Styles.radiousminibox} onClick={this.handleClick5}>
                <img className={Styles.designicon} src={ImageStyle.webicon} />
                <div className={Styles.icontext}>Deployment</div>
              </div>

              <div className={Styles.radiousminibox} onClick={this.handleClick6}>
                <img className={Styles.designicon} src={ImageStyle.webicon} />
                <div className={Styles.icontext}>Server Management</div>
              </div>

            </div>
            <div className={Styles.uitext}>
              <div className={Styles.uiux}>{this.state.title}</div>
              <div className={Styles.lorem}>{this.state.description}</div>
            </div>
          </div>

          <div className={Styles.trand}>Technologies</div>
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






          {/* <div className={Styles.recentilywork}>Our Work done recently </div>

          <div className={Styles.gridContainer}>
            {
              image.map((data, index) =>
                <div className={Styles.gridIitem}>
                  <img className={Styles.bgimage} src={imageapps[index]} />
                  <div className={Styles.Abc}>{appname[index]}</div>
                  <div className={Styles.mobileapp}>{apps[index]}</div>

                </div>
              )

            }
          </div> */}



        </div>
        <Footer />
      </div>
    )
  }
}
