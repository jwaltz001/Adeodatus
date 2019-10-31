import React, { Component } from 'react';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h1>What We Do</h1>
				<h3>Build. The Right Way</h3>
				<p>B&H Construction Company is committed to giving you the building that you want. Whether it's a simple bungalow or a towering skyscraper, you can be sure that you will get the building that you want.</p>
				<div class="card bg-dark text-white">
				  	<img src="/images/derek-torsani-9gwPgCa8y-E-unsplash.jpg" class="card-img" alt="..."/>
				  	<div class="card-img-overlay">
				    	<h5 class="card-title">Residential</h5>
				  	</div>
				</div>
				<div class="card bg-dark text-white">
				  	<img src="/images/renan-araujo-NBd11uHwGho-unsplash.jpg" class="card-img" alt="..."/>
				  	<div class="card-img-overlay">
				    	<h5 class="card-title">Commercial</h5>
				  	</div>
				</div>
			</div>
		);
	}
}
