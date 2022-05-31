import React from 'react'
import lady from './../images/lady-in-yoga.jpg'
function Home() {
  return (
   <div className='home-page'>
			<h1>Yoga</h1>
			<p>
				For Better Health &amp; Flexibility
			</p>
    <img src={lady} alt="lady in yoga"></img>
    
   </div>
   
  )
}

export default Home