import React, { Component } from 'react';
import NewProject from './new-project.js'

export default class Administrator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		}
	}
	render() {
		if(this.state.user) {
			return(
				<NewProject user={this.state.user}/>
			)
		}
		return (
			<div>
				<p>You are on the Administrator Login component!</p>

			</div>
		);
	}
}
