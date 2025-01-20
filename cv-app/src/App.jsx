import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import MainComponent from "./components/MainComponent"; 
import { createContext } from "react";
import { useRef } from "react";
export const ResumeReferenceContext = createContext(); 

export default function App() {
  //we are basically making a refernce to the variable. 
  const resumeDivRef = useRef(); 

  //any component withitn header adn comin component will be able to accessuseRef vaibrle
  //setting the value in MainComponent and then the Header in the 
  return (
    <div className="flex flex-col min-h-screen">
      <ResumeReferenceContext.Provider value = {resumeDivRef}>
        <Header/>
        <MainComponent/>
      </ResumeReferenceContext.Provider>
    </div>
  )
}