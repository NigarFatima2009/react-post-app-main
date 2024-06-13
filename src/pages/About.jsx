import React from 'react'

export default function About() {
	return (
		<div className='about__container'>
			<h1 style={{textAlign: 'center', marginTop: '20px'}}>About</h1>
			<div style={{ marginTop: '20px' }}>
			A simple blog display typically consists of a frontend interface that allows users to view blog posts in a structured and visually appealing manner. 
			<br></br>
			<br></br>

			Here's a brief description of what a simple blog display might include:
            <br></br>
			<br></br>

			Homepage/List of Blog Posts: The main page where users land, displaying a list of blog posts. Each post usually shows a title, delete, and open.
            <br></br>
			<br></br>

    		Individual Blog Post Page: Clicking on a open link takes the user to a dedicated page for that blog post. This page displays the full content of the post like id, description and comments.
            <br></br>
			<br></br>

			Navigation: Navigation elements such as a header menu, to allow users to browse through different pages of blog posts and a sort posts by name and description.
            <br></br>
			<br></br>

			Search Functionality: A search bar to enable users to search for specific blog posts based on keywords.
</div>
		</div>
	)
}
