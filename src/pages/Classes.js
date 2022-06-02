import React from 'react'
import lady from './../images/lady-in-yoga.jpg'

function Classes() {
  return (
      <>
    <h2 className='heading'>Classes</h2>
		<section className="section">
			<section className='section__text'>
				<article className="article">
					<h3 className='article__title'>Beginners</h3>
					<p className='article__description'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in neque condimentum, dignissim libero sit amet, blandit felis.
					</p>
					<span className='article__timing'>MWF : 8AM to 9AM</span>
					<span className='article__timing'>TTHS : 10AM-11AM</span>
				</article>
				<article className='article'>
					<h3 className='article__title'>Intermediate</h3>
					<p className='article__description'>
						Cras dignissim est sed lorem suscipit, ut ultrices dolor tempus. Cras venenatis gravida scelerisque. Aenean sit amet massa dui
					</p>
					<span className='article__timing'>MWF : 10AM-11AM</span>
					<span className='article__timing'>TTHS : 1PM-2PM</span>
				</article>
				<article className='article'>
					<h3 className='article__title'>Advanced</h3>
					<p className='article__description'>
						Quisque non quam lorem. Nulla eu placerat leo. Suspendisse eros risus, viverra sed fermentum vitae, gravida ac tellus.
					</p>
					<span className='article__timing'>MWF : 1PM-2PM</span>
					<span className='article__timing'>TTHS : 8AM to 9AM</span>
				</article>
			</section>
            <img src={lady} alt="lady in yoga"></img>
		</section>
        </>
  )
}

export default Classes