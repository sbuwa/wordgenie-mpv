import React from 'react'
import './PageSix.css'
import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'
import gmail from '../../images/gmail.png'

function PageSix() {
	return (
		<div>
			<div className='ContainerSix'>
				<div className='circleEmboss'>
					<a
						href='https://www.facebook.com/thewordgeniecontentstudio/'
						target='_blank'
						rel='noreferrer'
					>
						<div>
							<img src={facebook} alt=''></img>
						</div>
					</a>
				</div>
				<div className='circleEmboss'>
					<a
						href='https://www.instagram.com/thewordgenie'
						target='_blank'
						rel='noreferrer'
					>
						<div>
							<img src={instagram} alt=''></img>
						</div>
					</a>
				</div>
				<div className='circleEmboss'>
					<a
						href='https://twitter.com/wordgenie_in'
						target='_blank'
						rel='noreferrer'
					>
						<div>
							<img src={twitter} alt=''></img>
						</div>
					</a>
				</div>
				<div className='circleEmboss'>
					<a
						href='mailto:wordgenie99@gmail.com'
						target='_blank'
						rel='noreferrer'
					>
						<div>
							<img src={gmail} alt=''></img>
						</div>
					</a>
				</div>
			</div>
			<div className='copyright'>®2020 WordGenie</div>
		</div>
	)
}

export default PageSix
