import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {
	render() {
		return(
			<footer>
				<Link to="/administrator" className="nav-link">Administrator Login</Link>
			</footer>
		);
	}
}
