import React from "react";
import MainTxt from "./subcomponents/MainTxt"





const Main = props => 
(
    <main>
        <props.S.mainDiv
        style = {{backgroundImage: `url("${props.data.url}")`}}>
            <MainTxt
            S = {props.S} 
            data= {props.data} 
            tStyles = {props.tStyles}/>
        </props.S.mainDiv >
    </main>
)

export default Main;