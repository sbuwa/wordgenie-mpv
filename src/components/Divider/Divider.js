import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnDown } from '@fortawesome/free-solid-svg-icons'
import './Divider.scss'

export default function Divider() {
	return (
		<div className='DividerContainer'>
			<div className='label reverse'>
				Businesses <FontAwesomeIcon icon={faArrowTurnDown} />
			</div>
			<b className='hr anim'></b>
			<div className='label'>
				Freelancers{' '}
				<FontAwesomeIcon
					className='icon-adjust'
					icon={faArrowTurnDown}
				/>
			</div>
		</div>
	)
}
