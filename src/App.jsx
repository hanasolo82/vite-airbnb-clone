import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

console.log(data)
export default function App() {
  const Cards = data.map(parts => { 
    return ( 
    <Card
      key={parts.id}
      {...parts}
   />
  );
  });

  return (
   <div>
    <Navbar />
    <Hero />
    <div className='sectionStyle'>
      {Cards}
    </div>
    
   </div>
  )
}


