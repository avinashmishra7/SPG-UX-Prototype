import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
//import Select from 'react-select';
import Header from './header.jsx';
import LeftMenu from './leftMenu.jsx';


const Main = React.createClass({
	
	getInitialState: function(){
		return {
		}
	},
		
	render: function() {
		return (
		<div>
			<Header/>
			<LeftMenu/>	
		</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));