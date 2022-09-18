import React from 'react'
import rocket from '../../images/rocket.png'
import './PageFive.scss'
import '../common.css'

function PageFive() {
	return (
		<div className='ContainerFive'>
			<div className='FiveLeft'>
				<img src={rocket} alt='freelancer portal'></img>
			</div>
			<div className='FiveRight'>
				<h1>
					Transform your solo mission into a collaborative journey
				</h1>
				<div className='FiveList'>
					<ul>
						<li>
							Strengthen your pitching and payment strategy to
							ensure seamless revenue generation.{' '}
						</li>
						<li>
							Upgrade your portfolio by working alongside industry
							experts and experienced creative professionals.
						</li>
						<li>
							Raise the bar for client delight. Scale up your
							services and fine-tune your servicing strategies.
						</li>
					</ul>
				</div>
				<p>
					Turn your Freelancing model into a full-blown Enterprise.{' '}
					<br />
					<div class='collab-btn'>
						<a
							href='https://www.google.com'
							target='_blank'
							rel='noreferrer'
						>
							Collaborate With Us
						</a>
					</div>
				</p>
			</div>
		</div>
	)
}

export default PageFive
