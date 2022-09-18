import React from 'react'
import PageOne from '../PageOne/PageOne'
import PageTwo from '../PageTwo/PageTwo'
// import PageFour from '../PageFour/PageFour'
import PageThree from '../PageThree/PageThree'
import PageFive from '../PageFive/PageFive'
import PageSix from '../PageSix/PageSix'
import PageSeven from '../PageSeven/PageSeven'
import './Homepage.css'

function Homepage() {
	return (
		<div className='container'>
			<div className='noise'></div>
			<div className='shape-top'></div>
			<div className='shape-bottom'></div>
			<PageOne />
			<PageTwo />
			<PageThree />
			<PageSeven />
			{/* <PageFour /> */}
			<PageFive />
			<PageSix />
		</div>
	)
}

export default Homepage
