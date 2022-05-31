import React from 'react'
import lady from './../images/lady-in-yoga.jpg'
import instructor1 from './../images/instructor1.jpg'
import instructor2 from './../images/instructor2.jpg'
import instructor3 from './../images/instructor3.jpg'
import instructor4 from './../images/instructor4.jpg'
function Instructors() {
  return (
    <>
    <h2>Instructors</h2>
		<div class="content">
			<div>
				<ul class="section">
					<li>
						<img src={instructor1} alt="Yoga instructor one"></img>
						<h4>Belle Humpfree</h4>
					</li>
					<li>
						<img src={instructor2} alt="Yoga instructor two"></img>
						<h4>Jacob Collern</h4>
					</li>
				</ul>
				<ul class="section">
					<li>
						<img src={instructor3} alt="Yoga instructor three"></img>
						<h4>Edward Blanche</h4>
					</li>
					<li>
						<img src={instructor4} alt="Yoga instructor four"></img>
						<h4>Carrie Waldorf</h4>
					</li>
				</ul>
			</div>
            <img src={lady} alt="lady in yoga"></img>
		</div>
        </>
  )
}

export default Instructors