import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import Divider from '../Divider/Divider'
import './PageSeven.scss'
import '../common.css'

function PageSeven() {
	return (
		<div className='ContainerSeven'>
			<div className='SevenLeft'>
				<h2>Find Customized Advertising Solutions Here!</h2>
				<span>
					Advertising gets hassle-free once you let the professionals
					do what they do the best. Brief us of your requirements to
					start with result-oriented campaigns for your business.
				</span>
				<div className='quote-btn'>
					<a
						href='https://google.com'
						target='_blank'
						rel='noreferrer'
					>
						<div className='quote-btn-content'>
							<div>Ask for Quote</div>
							<div className='quote-icon'>
								<FontAwesomeIcon icon={faUpRightFromSquare} />
							</div>
						</div>
					</a>
				</div>
			</div>
			<Divider />
			<div className='row-adjust'>
				<div className='SevenRight'>
					<h2>Connect, Collaborate, and Create!</h2>
					<span>
						As the world of Advertising thrives by merging other art
						forms, Wordgenie® brings together versatile minds with
						varied passions to drive branding campaigns to fruition.
						If you are an artist, creator or a anyone looking to
						follow your passion while staying independent, Wordgenie
						Freelance Collective is a platform designed just for
						you. Join us to work with individuals sharing similar
						and complimenting professions and boost your career as a
						freelancer.
					</span>
					<div className='join-btn'>
						<a
							href='https://google.com'
							target='_blank'
							rel='noreferrer'
						>
							<div className='quote-btn-content'>
								<div>Join Us</div>
								<div className='quote-icon'>
									<FontAwesomeIcon
										icon={faUpRightFromSquare}
									/>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PageSeven
