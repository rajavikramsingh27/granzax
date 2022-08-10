import React from 'react'
import Header from '../utils/Header'
import Footer from '../utils/Footer'
import Styles from '../css/Grid.module.css'
import { ImageStyle } from '../utils/controller/ImageStyle';
import HorizontalScroll from 'react-scroll-horizontal';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


function Grid() {
  const name = ['Abc project', 'Abc project','Abc project','Abc project','Abc project','Abc project']
  const apps = ['UI/UX, Mobile App Development','UI/UX, Mobile App Development','UI/UX, Mobile App Development','UI/UX, Mobile App Development','UI/UX, Mobile App Development','UI/UX, Mobile App Development']
  const image = [ImageStyle.mobile1, ImageStyle.mobile2, ImageStyle.mobile3, ImageStyle.mobile4,ImageStyle.mobile5,ImageStyle.mobile6];

  return (
    <div>
      <Header />

      <div className={Styles.gridContainer}>
        {
          image.map((data, index) =>
          <div className={Styles.gridIitem}>
           <img className={Styles.desplay} src={image[index]} />
           <div className={Styles.Abc }>{name[index]}</div>
           <div className={Styles.mobileapp}>{apps[index]}</div>
      
        </div>
          )

        }
     
        </div>
      

      <Footer />
    </div>
  )
}

export default Grid;