import React from 'react'
import lady from './../images/lady-in-yoga.jpg'

function Classes() {
  return (
      <>
    <h2>Classes</h2>
		<div className="content">
			<div>
				<div className="section">
					<h3>Beginners</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in neque condimentum, dignissim libero sit amet, blandit felis.
					</p>
					<span>MWF : 8AM to 9AM</span>
					<span>TTHS : 10AM-11AM</span>
				</div>
				<div className="section">
					<h3>Intermediate</h3>
					<p>
						Cras dignissim est sed lorem suscipit, ut ultrices dolor tempus. Cras venenatis gravida scelerisque. Aenean sit amet massa dui
					</p>
					<span>MWF : 10AM-11AM</span>
					<span>TTHS : 1PM-2PM</span>
				</div>
				<div className="section">
					<h3>Advanced</h3>
					<p>
						Quisque non quam lorem. Nulla eu placerat leo. Suspendisse eros risus, viverra sed fermentum vitae, gravida ac tellus.
					</p>
					<span>MWF : 1PM-2PM</span>
					<span>TTHS : 8AM to 9AM</span>
				</div>
			</div>
            <img src={lady} alt="lady in yoga"></img>
		</div>
        </>
  )
}

export default Classes