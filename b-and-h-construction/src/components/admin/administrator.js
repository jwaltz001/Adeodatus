import React, { Component } from 'react';
import NewProject from './new-project.js'
import axios from 'axios';

export default class Administrator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loggedInUser: null,
			username: '',
			password: ''
		}

		this.onChangeUsername = this.onChangeUsername.bind(this);
		this.onChangePassword = this.onChangePassword.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

  	onChangeUsername(e) {
    	this.setState({
      		username: e.target.value
    	});
  	}

	onChangePassword(e) {
    	this.setState({
      		password: e.target.value
    	});
  	}

	onSubmit(e){
		e.preventDefault();
		const userLoginInfo = {
			username: this.state.username,
			password: this.state.password
		};
		console.log(userLoginInfo);
	}
	render() {
		if(this.state.user) {
			return(
				<NewProject user={this.state.user}/>
			)
		}else{
			return (
				<div>
					<p>You are on the Administrator Login component!</p>
					<form onSubmit={this.onSubmit}>
						<div className="form-group">
							<label>Username:</label>
							<input type="text"
								required
								className="form-control"
								placeholder="Enter Administrator Username"
								onChange={this.onChangeUsername}/>
							<input type="password"
								required
								className="form-control"
								placeholder="Enter Administrator Password"
								onChange={this.onChangePassword}/>
						</div>
						<div className="form-group">
            				<input type="submit" value="Login" className="btn btn-primary" />
          				</div>
					</form>
				</div>
			);
		}
	}
}
