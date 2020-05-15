import React from "react"


//props needed txt
const Header = props => 
(
    <header>
        <h3 style = {props.tStyles.head}><span role='img' aria-label = "rocket">🚀</span> NasaTitle</h3>
        <p style = {props.tStyles.head}>Maybe Click this</p>
    </header>
)

export default Header;