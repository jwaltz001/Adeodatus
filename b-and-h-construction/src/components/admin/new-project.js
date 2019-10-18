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
		return(
			<div>
				<p>Form for new project</p>
			</div>
		)
	}
}
