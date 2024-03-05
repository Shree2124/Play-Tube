import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'

function App() {
  useEffect(()=>{
    axios
    .get("https://play-tube-api.vercel.app/")
    .then((req,res)=>{})
    .catch((err)=>{})
  },[])

  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default App
