import React, {useEffect, useState} from "react";
//import data from "./data"
import axios from 'axios'
import tStyles from "./components/textStyles"
import Main from "./components/Main"
import Header from "./components/Header"
import "./App.css";

//yo.... why cant i do this?
//let x = [...data, ...tStyles];



function App() {

  //setup data with state (storing all our api data here)
  const [data, setData] = useState('')

  //ping api for data
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
      .catch(err => {})
  },[])

  //render DOM
  //passing api data to Main
  //passing text Styles to Main and Header
  return (
    <div className="App">
      
      <Header tStyles = {tStyles} />
      <Main data= {data} tStyles = {tStyles} />
      <footer style = {tStyles.foot}>Made with love in React!</footer>

    </div>
  );
}

export default App;
