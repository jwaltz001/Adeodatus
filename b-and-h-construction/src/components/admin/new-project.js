import React, {Component} from 'react';

export default class NewProject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projectInfo: {
				title: '',
				constructionType: '',
				streetAddress: '',
				city: '',
				state: '',
				zipcode: null,
				description: '',
				images:[],
				postedBy: {adminID:this.props.user.id, adminUsername:this.props.user.username, date:{}}
			}
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.onChangeFormField = this.onChangeFormField.bind(this);
	}
	onSubmit(e) {
		e.preventDefault();

	}

	onChangeFormField(e) {
		const key = e.target.name;
		const value = e.target.value;
		switch (key) {
			case "title":
				this.setState({
					title: value
				});
				break;
			case "constructionType":
				this.setState({
					constructionType: value
				});
				break;
			case "streetAddress":
				this.setState({
					streetAddress: value
				});
				break;
			case "city":
				this.setState({
					city: value
				});
				break;
			case "state":
				this.setState({
					state: value
				});
				break;
			case "zipcode":
				this.setState({
					zipcode: value
				});
				break;
			case "description":
				this.setState({
					description: value
				});
				break;
			case "images":
				this.setState({
					images: value
				});
				break;
			default:
				return;
			}
		}

	render() {
		if (!this.props.user) {
			return(
				<p>Must be logged in as an Administrator to view this page</p>
			)
		}
		return(
			<div>
				<p>Form for new project</p>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Title:</label>
						<input type="text"
							required
							name="title"
							className="form-control"
							placeholder="Enter title to display"
							onChange={this.onChangeFormField}/>
						<label>Construction Type:</label>
						<select type="text"
							required
							name="constructionType"
							className="form-control"
							onChange={this.onChangeFormField}>
							<option value="residential">Residential</option>
							<option value="commercial">Commercial</option>
						</select>
						<label>Street Address:</label>
						<input type="text"
							required
							name="streetAddress"
							className="form-control"
							placeholder="Enter Street Address"
							onChange={this.onChangeFormField}/>
						<label>City:</label>
						<input type="text"
							required
							name="city"
							className="form-control"
							placeholder="Enter city for address"
							onChange={this.onChangeFormField}/>
						<label>State:</label>
						<input type="text"
							required
							name="state"
							className="form-control"
							placeholder="Enter state for address"
							onChange={this.onChangeFormField}/>
						<label>Zipcode:</label>
						<input type="text"
							required
							name="zipcode"
							className="form-control"
							placeholder="Enter zipcode for address"
							onChange={this.onChangeFormField}/>
						<label>Description:</label>
						<textarea rows="4" cols="50"
							required
							placeholder="Description to display"
							name="description"
							className="form-control"
							onChange={this.onChangeFormField}>
						</textarea>
					</div>
					<div className="form-group">
						<input type="submit" value="Submit" className="btn btn-primary"/>
					</div>
				</form>
				<button onClick={()=>{this.props.handlePageChange("HomeMenu")}}>Back to Home Page</button>
			</div>
		)
	}
}
