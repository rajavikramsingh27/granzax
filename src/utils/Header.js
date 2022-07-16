import React, { Component } from 'react'
import Styles from '../css/Header.module.css'

function Header() {
  return (
    <body>
      <div className={Styles.header}>
        <div className={Styles.logo}>LOGO</div>
        <div className={Styles.headerSubtitle}>
          <div className={Styles.homebtn}>Home</div>
          <div className={Styles.homebtn}>About</div>
          <div className={Styles.homebtn}>Service</div>
          <div className={Styles.homebtn}>Portfolio</div>
          <div className={Styles.homebtn}>How We work</div>
          <div className={Styles.homebtn}>Career</div>
          <div className={Styles.homebtn}>Contact</div>
        </div>
      </div>
    </body>
  );
}

export default Header;
