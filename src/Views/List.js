// import React, { Component } from 'react'
// import Header from '../utils/Header'
// import Footer from '../utils/Footer'
// import Styles from '../css/List.module.css'




// export default class List extends Component {

//   render() {
//     const arr = [40,20,30,40,];
//     const newarr = arr.map(num =>{
//       console.log()
//       return<li className={Styles.row}>{num}</li>
//     })


//     return (

//       <div>
//         <Header/>
//         <div className={Styles.List}>hii
//         <div className={Styles.file}>
//       <ul> {newarr}</ul>
//       <ul > {arr}</ul> 
//       </div>
//         </div>

//         <Footer/>
//         </div>
//     )
//   }
// }
import React from 'react'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import Styles from '../css/List.module.css'
import { ImageStyle } from '../utils/controller/ImageStyle';
import HorizontalScroll from 'react-scroll-horizontal';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


function List() {
  const names = ["Flutter", 'Goiang', 'React','Firebase','Docker','Kubernetes', 'Flutter', 'Goiang', 'React'];
  const image = [ImageStyle.flutter, ImageStyle.gologo, ImageStyle.Reacticon,ImageStyle.firebase,ImageStyle.docker,ImageStyle.kuber, ImageStyle.flutter,ImageStyle.gologo, ImageStyle.Reacticon]


  return (
    <div>
      <Header />
      <ScrollMenu>
      <div className={Styles.List}>
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
      <Footer />
    </div>
  )
}

export default List;