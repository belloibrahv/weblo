import React from 'react'
import { useNavigate } from "react-router-dom";
import './index.css'

const Home = () =>  {
  const redirect = useNavigate() 
  
  return (
    <div className='home__container'>
      <button className='btn' onClick={() => { redirect('/login')}}>Go to App..</button> 
    </div>
  )
}

export default Home