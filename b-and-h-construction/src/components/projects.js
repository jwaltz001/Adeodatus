import React, { Component } from 'react';

export default class Projects extends Component {

	//function that gets the projects from db and then updates state
	render() {
		return (
			<div>
				<p>You are on the Projects component!</p>
				<div class="card" style={{width: '18rem'}}>
				  	<img src="..." class="card-img-top" alt="..."/>
				  	<div class="card-body">
					    <h5 class="card-title">Card title</h5>
					    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					</div>
				</div>
			</div>
		);
	}
}
