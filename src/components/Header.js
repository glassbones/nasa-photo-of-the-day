import React from "react"


//props needed txt
const Header = props => 
(
    <header>
        <h3 style = {props.tStyles.head}>🚀 NasaTitle</h3>
        <p style = {props.tStyles.head}>Maybe Click this</p>
    </header>
)

export default Header;