import React from 'react'
import { Link } from 'react-router-dom'
import laying2 from './../images/lying-yoga2.jpg'
function Post() {
  return (
      <>
    <h2>Single Post</h2>
		<div className="content">
			<div className="article">
				<h3>A Strong and Flexible Body</h3>
				<span>April 5, 2023 </span>
				<img src={laying2} alt="yoga lying down legs in the air"/>
				<p>
					Aliquam elementum varius adipiscing. Phasellus vulputate arcu eu scelerisque egestas. Duis lacinia, tellus sed congue porta, tortor felis ornare mi, in eleifend dolor odio ac lacus. Curabitur id nisi ornare, viverra lorem sed, viverra ligula.  Donec eu nibh tempus, semper velit sit amet, blandit odio. Phasellus id condimentum sapien, sit amet venenatis sem.
				</p>
				<p>
					Nam luctus nunc ut orci posuere ultricies. Donec id ante nec nunc laoreet vestibulum. Nulla in tortor non risus pharetra suscipit. Suspendisse nec diam gravida, scelerisque magna eget, dignissim enim. Sed eget diam facilisis justo elementum aliquet quis ut felis. Vestibulum sus cipit nibh consectetur massa volutpat, vel euismod lectus blandit.
				</p>
			</div>
           
			<div className="sidebar">
				<h3>Recent Posts</h3>
				<ul>
					<li>
						<h4><Link to='/single-post'>Summer Yoga Classes</Link></h4>
						<span>April 7, 2023 </span>
					</li>
					<li>
						<h4><Link to='/single-post'>Inner peace</Link></h4>
						<span>April 6, 2023 </span>
					</li>
					<li>
						<h4><Link to='/single-post'>What is Yoga?</Link></h4>
						<span>April 5, 2023 </span>
					</li>
				</ul>
			</div>
          
		</div>
    </>
  )
}

export default Post