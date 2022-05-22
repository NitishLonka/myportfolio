import { useState, useEffect } from 'react'
import './App.css';
import './index.css'
import data from './data';
import Tabs from './Tabs';
import { BsFillGeoAltFill } from "react-icons/bs"; 
import { BsPhone } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs"; 
import { BsLinkedin } from "react-icons/bs"; 
import { BsGithub } from "react-icons/bs"; 
import skills from './skills';
function App(){
 
  return (
    <div className='resume'>
    <div className='details'>
        <h2 className='heading'>Nitish Lonka</h2>
        <p className='icons'>
        <h3 >CONTACT</h3>
          <button className='iconbtn' onClick={() => { window.open('https://www.linkedin.com/in/nitish-reddy-64a943147')}}><BsLinkedin /></button>
          <button className='iconbtn' onClick={() => { window.open('https://github.com/NitishLonka?tab=repositories')}}><BsGithub/></button>
        </p>
        <hr className='seperator'/>
        <article className='items'>
          <h5 className='address'>14612 Grenadine Drive Apt No.7, Tampa, FL 33613 </h5>
          <BsFillGeoAltFill />
        </article>
        <article className='items'>
          <h5 className='address'>+1 813-729-1770</h5>
          <BsPhone />
        </article>
        <article className='items'>
          <h5 className='address'>lonkan@usf.edu</h5>
          <BsFillEnvelopeFill />
        </article>
        <h3>SKILLS</h3>
        <hr className='seperator' />
        {
          skills.map((item)=>{let ls =item.split(':');return (<div className='items'><h5>{ls[0]}:{ls[1]}</h5></div>)})
        }
    </div>
  <div className='main'>
  {data.map((item)=><Tabs props={item}/>)}
  </div>
  </div>
  )
}

export default App;
