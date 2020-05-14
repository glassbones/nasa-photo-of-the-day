import React from "react";

const MainTxt = props => 
(
    <div className="text-content">
        <h1 style = {props.tStyles.h1}>{props.data.title}</h1>
        <h2 style = {props.tStyles.h2}>{props.data.date}</h2>
        <p  style = {props.tStyles.global}>{props.data.explanation}</p>
    </div>
)

export default MainTxt;