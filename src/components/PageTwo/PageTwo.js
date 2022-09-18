import React from 'react'
import './PageTwo.scss'
import '../common.css'

function PageTwo() {
	return (
		<div className='ContainerTwo'>
			<div className='text-3d header'>Your Ideal Ad Partner</div>
			<div className='service-cards'>
				<div className='content'>
					<h2>Brand Identity and Positioning</h2>
					<p>
						Breath life into your brand to change the way the world
						perceives it.
					</p>
					<ul className='check-list'>
						<li>Logo and tagline</li>
						<li>Brochures</li>
						<li>Catalogues</li>
						<li>One-pagers</li>
					</ul>
				</div>
				<div className='content'>
					<h2>Business communication</h2>
					<p>
						If communication is the key, we hand you the master key
						that unlocks the full potential of your business.
					</p>
					<ul className='check-list'>
						<li>Web Designs</li>
						<li>Google Ads</li>
						<li>Web Banners</li>
					</ul>
				</div>
				<div className='content'>
					<h2>Online Marketplace Development</h2>
					<p>
						Chuck the crowd! Create a space for your customers to
						connect, collaborate and interact with your business.
					</p>
					<ul className='check-list'>
						<li>Overall Social Media Optimization</li>
						<li>Facebook and instagram portfolio development</li>
						<li>Enhancing Engagement through Twitter handles</li>
						<li>Boosting Connectivity on LinkedIn</li>
					</ul>
				</div>
				<div className='content'>
					<h2>Community building</h2>
					<p>
						Turn your ideal audiences into a community of dedicated
						followers and watch your revenue grow!
					</p>
					<ul className='check-list'>
						<li>Mass mailers</li>
						<li>Emailers</li>
						<li>SMS</li>
						<li>Social Media Conversation Management</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default PageTwo
