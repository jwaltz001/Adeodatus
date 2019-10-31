import React, { Component } from 'react';
import AdminHomePage from './admin-homepage.js'
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

	// setLoggedInUser(username){
	// 	this.setState({
	// 		loggedInUser: username,
	// 		username: '',
	// 		password: ''
	// 	});
	// }

	onSubmit(e){
		e.preventDefault();
		const userLoginInfo = {
			username: this.state.username,
			password: this.state.password
		};
		console.log(userLoginInfo);
		axios.post('http://localhost:3001/admin/', userLoginInfo)
			.then(res => {
					const user = res.data.data.sessionUser;
					this.setState({
						loggedInUser: user.username
					});
			}, err => {
				console.log(err)
			})

	}

	componentDidMount() {
		axios.get('http://localhost:3001/admin/account')
			.then(res => {
				console.log(res);
				// const user = res.data.data.sessionUser;
				// this.setState({
				// 	loggedInUser: user.username
				// });
			}, err => {
				console.log(err);
			})
	}

	render() {
		if(this.state.loggedInUser) {
			return(
				<AdminHomePage user={this.state.loggedInUser}/>
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
