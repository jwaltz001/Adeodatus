import React, { Component } from 'react';
import NewProject from './new-project.js'

export default class AdminHomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageToShow: "HomeMenu"
		}
		this.handlePageChange = this.handlePageChange.bind(this);
	}
	handlePageChange(page){
		this.setState({
			pageToShow: page
		})
	}
	render() {
		if (this.state.pageToShow === "HomeMenu") {
			return(
				<div>
					<h2>Administrator Home Page</h2>
					<button className="btn" onClick={()=>{this.handlePageChange("NewProject")}}>Post a new project</button>
				</div>
			)
		}else if (this.state.pageToShow === "NewProject") {
			return(
				<NewProject user={this.props.user} handlePageChange={this.handlePageChange}/>
			)
		}

	}
}
