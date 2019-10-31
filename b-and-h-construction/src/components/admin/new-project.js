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
				<button onClick={()=>{this.props.handlePageChange("HomeMenu")}}>Back to Home Page</button>
			</div>
		)
	}
}
