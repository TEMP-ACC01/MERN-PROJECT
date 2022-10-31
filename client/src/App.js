import React, { createContext, useReducer } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Registration from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Errorpage from './components/Errorpage';
import "./App.css";
import Logout from "./components/Logout";
import ToDoList from "./components/ToDoList";
import LongTerm from './components/LongTerm';
import House from './components/HouseComponents/House';
import HouseFinalCal from './components/HouseComponents/HouseFinalCal';
import PasswordReset from './components/PasswordReset';
import ForgotPassword from './components/ForgotPassword';
import ShortTermCal from "./components/Shorttermcal";



import {initialState, reducer} from "../src/reducer/UsedReducer";
import Savings from './components/SavingsComponents/Savings';
import SaveFinalCal from './components/SavingsComponents/SaveFinalCal';




export const UserContext = createContext();

const Routing = () => {
  return (
    <switch>
      <Routes>
          <Route exact path='/' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/signup' element = {<Registration/>}/>
          <Route path='/login' element = {<Login/>}/>
          {/* <Route path='*' element = {<Error/>}/> */}
          <Route path='/logout' element = {<Logout/>}/>
          <Route path='/password-reset' element = {<PasswordReset/>}/>
          <Route path='/forgotpassword/:id/:token' element = {<ForgotPassword/>}/>
          <Route path = "/todolist" element = {<ToDoList/>}/>
          <Route path = '/LongTerm' element = {<LongTerm/>}/>
          <Route path = '/House' element = {<House/>}/>
          <Route path = '/HouseFinalCal' element = {<HouseFinalCal/>}/>
          <Route path='/Savings' element = {<Savings/>}/>
          <Route path='/SaveFinalCal' element = {<SaveFinalCal/> }/>
          <Route path = "/shortterm" element = {<ShortTermCal/>}/>
          <Route path='*' element = {<Errorpage/>}/> 

        </Routes>
      </switch>
  )
}



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
    <Navbar/>
    <Routing/>

    
      </UserContext.Provider>
    </>
  )
}

export default App