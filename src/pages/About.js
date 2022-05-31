import React from 'react'
import lady from './../images/lady-in-yoga.jpg'
import {Link} from 'react-router-dom'
function About() {
  return (
      <>
    <h2>About</h2>
		<div className="content">
			<div>
				<h3>We Have Free Templates for Everyone</h3>
				<p>
					Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the <Link to={{pathname:"https://freewebsitetemplates.com/about/terms/"}} target="_blank">Terms of Use</Link>. You can even remove all our links if you want to.
				</p>
				<h3>We Have More Templates for You</h3>
				<p>
					Looking for more templates? Just browse through all our <Link to={{pathname: "https://freewebsitetemplates.com/"}} target="_blank" >Free Website Templates</Link> and find what you're looking for. But if you don't find any website template you can use, you can try our <Link to={{pathname: "https://freewebsitetemplates.com/freewebdesign/"}} target="_blank">Free Web Design</Link> service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.
				</p>
				<h3>Be Part of Our Community</h3>
				<p>
					If you're experiencing issues and concerns about this website template, join the discussion <Link to={{pathname: "https://freewebsitetemplates.com/forums/"}} target="_blank">on our forum</Link> and meet other people in the community who share the same interests with you.
				</p>
				<h3>Template Details</h3>
				<p>
					Design version 3. Code version 1. Website Template details, discussion and updates for this <Link to={{pathname: "https://freewebsitetemplates.com/discuss/rehabilitation-yoga/"}} target="_blank">Belle &amp; Carrie Rehabilitation Yoga Web Template</Link>. Website Template design by <Link to={{pathname: "https://freewebsitetemplates.com/"}} target="_blank">Free Website Templates</Link>. Please feel free to remove some or all the text and links of this page and replace it with your own About content.
				</p>
			</div>
            <img src={lady} alt="lady in yoga"></img>
		</div>
        </>
  )
}

export default About