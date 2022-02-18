import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'



const SignedInLinks = (props) => {
	return (
		<ul>
			<li><NavLink to='/create'class="ul">New Project</NavLink></li>
			<li><a onClick={props.signOut} class="ul">Log out</a></li>
			<li><NavLink to='/' id="avatar">
				{props.profile.initials}
			</NavLink></li>
		</ul>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(null, mapDispatchToProps)(SignedInLinks)