import React from 'react'
import Logo from '../../images/Logo.png'
import Lottie from 'react-lottie'
import { useMediaQuery } from 'react-responsive'
import * as animationData from '../../json/mvp.json'
import './PageOne.scss'
import '../../images/waves.svg'

function PageOne() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}
	const isMobile = useMediaQuery({ query: '(max-width: 481px)' })

	return (
		<div>
			<div className='Logo'>
				<img src={Logo} alt='WordGenie'></img>
			</div>
			<div className='ContainerOne'>
				<div className='OneLeft'>
					<h1>
						Stop hustling! Let our pool of artists be your creative
						workforce.
					</h1>
					<p>
						While you focus on your business, we are here to help
						you discover the true impact of advertising for your
						brand.
					</p>
				</div>
				<div className='OneRight'>
					{isMobile ? (
						<Lottie
							options={defaultOptions}
							height={480}
							width={480}
							// isStopped={this.state.isStopped}
							// isPaused={this.state.isPaused}
						/>
					) : (
						<Lottie
							options={defaultOptions}
							height={650}
							width={650}
							// isStopped={this.state.isStopped}
							// isPaused={this.state.isPaused}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default PageOne
