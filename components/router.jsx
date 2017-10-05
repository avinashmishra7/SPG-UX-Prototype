import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';

import DashBoard from './dashBoard.jsx';
import Trial from './trial.jsx';
import AllProducts from './allProducts.jsx';
import ProductUpdates from './productUpdates.jsx';
import Home from './home.jsx';
import QuickLinks from './quickLinks.jsx';






const CustomRouter = React.createClass({  
	componentWillMount: function(){
		console.log("Component Mounting [CustomRouter] ");
    },
	componentWillUnmount: function() {
		console.log("Component Unmounting [CustomRouter] ");
	},
	render: function() {
	    return (
			<Router history={hashHistory}>
            <Route path="/" component={Home} />
			</Router>
			)
	}
});

ReactDOM.render(<CustomRouter />, document.getElementById('app'));