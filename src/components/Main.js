import React from "react";
import MainTxt from "./subcomponents/MainTxt"

const Main = props => 
(
    <main>
        <div 
        className="nasa-photo" 
        style = {{backgroundImage: `url("${props.data.url}")`}}>
            <MainTxt 
            data= {props.data} 
            tStyles = {props.tStyles}/>
        </div>
    </main>
)

export default Main;