import React from 'react'
import Lottie from 'react-lottie'
import { useMediaQuery } from 'react-responsive'
import * as animationData from '../../json/creation.json'
import './PageThree.scss'
import '../common.css'

function PageThree() {
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
		<div className='ContainerThree'>
			<div className='ThreeRight'>
				<h2>Creator for your Niche</h2>
				<span>
					Every niche is unique and so are the creators working on
					your brand. We collaborate with professionals carrying
					industry proven experience to transform your brief into a
					series of indulging narratives.
				</span>
			</div>
			<div className='ThreeLeft'>
				{isMobile ? (
					<Lottie
						options={defaultOptions}
						height={500}
						// width={300}
						// isStopped={this.state.isStopped}
						// isPaused={this.state.isPaused}
					/>
				) : (
					<Lottie
						options={defaultOptions}
						height={900}
						width={700}
						// isStopped={this.state.isStopped}
						// isPaused={this.state.isPaused}
					/>
				)}
			</div>
		</div>
	)
}

export default PageThree
