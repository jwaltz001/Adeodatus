import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navbar from './components/navbar.js';
import Home from './components/home.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
import Administrator from './components/admin/administrator.js';
import Footer from './components/footer.js';

function App() {
  	return (
		<Router>
			<div className="container-fluid">
				<Navbar />
				<div id="header-img-div"></div>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/projects" component={Projects} />
				<Route path="/contact" component={Contact} />
				<Route path="/administrator" component={Administrator} />
				<Footer />
			</div>
	    </Router>
  );
}

export default App;
