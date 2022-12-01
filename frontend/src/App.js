
import './App.css';

import React, { useEffect, useState } from 'react'

import axios from "axios"



// ,
// "proxy": "http://localhost:5000"

function App() {


  const [username, setUsername] = useState()


  useEffect(() => {
    getNames()

  }, [])

  const getNames = async () => {
    const response = await axios.get("http://localhost:5000/")
    console.log(response.data)


    setUsername(response.data)

  }



  return (

    <>
      <h1>My Front-end </h1>
      <h1>My  name is {username} </h1>

    </>


  );
}

export default App;
