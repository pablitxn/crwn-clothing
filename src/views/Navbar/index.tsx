// React
import React, { FC } from "react";
// Custom Components
import Navbar from "components/Navbar"
// // Redux
// import request from "state//actions";
// import { selectors } from "state//selectors";
// Styles
import "./styles.scss"


const NavbarView: FC = () => {

  const handleLogin = () => { }

  return (
    <Navbar activeUser={false} hidden={true} loginButton={handleLogin} />
  )
}

export default NavbarView;