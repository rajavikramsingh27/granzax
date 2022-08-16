

import React, { Component } from 'react'
import Styles from '../css/Header.module.css'
import { NavLink } from 'react-router-dom';
import { ImageStyle } from '../utils/controller/ImageStyle';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMenu: false,
      isSmall: window.matchMedia("(max-width: 900px)").matches
    };
  }

  componentDidMount() {
    const handler = e => {
      this.setState({ isSmall: e.matches })
      this.setState({ isMenu: false })
    };
    window.matchMedia("(max-width: 900px)").addEventListener('change', handler);
  }

  menuOption() {
    return (<div className={Styles.headerSubtitle}>
      <NavLink className={Styles.homebtn} to="/" >Home</NavLink>
      <NavLink className={Styles.homebtn} to="/ScreenAbout" >About</NavLink>
      <NavLink className={Styles.homebtn} to="/Services" >Service</NavLink>
      <NavLink className={Styles.homebtn} to="/Portfolio" >Portfolio</NavLink>
      <NavLink className={Styles.homebtn} to="/Howwork" >  How work</NavLink>
      <NavLink className={Styles.homebtn} to="/Career" >Career</NavLink>
      <NavLink className={Styles.homebtn} to="/CareerToday" >Contact</NavLink>
    </div>)
  }

  render() {
    return (
      <div className={Styles.header}>
        {/* <div className={Styles.logo}>LOGO</div> */}
        <img  className={ Styles.logo} src={ImageStyle.GranzaXLogo}/>
        {/* <img  className={ Styles.logo} src={ImageStyle.GranzaXLogoTransparent}/> */}
        <div className={Styles.menuBox} >
          {
            this.state.isSmall
              ? <div className={Styles.menuBoxContainer}>
                <div className={Styles.menu}
                  onClick={() => {
                    this.setState({
                      isMenu: !this.state.isMenu
                    })
                  }}>Menu</div>
                {
                  this.state.isMenu ? this.menuOption() : <div></div>
                }
              </div> : this.menuOption()
          }
        </div>
      </div>
    )
  }
}

