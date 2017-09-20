import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';

const Header = React.createClass({
	
	getInitialState: function(){
		return {
		}
	},
		
	render: function() {
		return (
			<div className="top_header">
				<div className="header">
					<header className="">
						<nav className="module moduleGlobal">
							<ul className="module moduleGlobalNav">
								<li className="left_menu"><a className="logo" href="#">Autodesk Account</a></li>
								<li className="user"><a><img className="avatar"></img></a></li>
								<li className="com_icon">
									<i className="glyphicon glyphicon-bell bell"></i>
									<i className="fa fa-question-circle"></i>
									<i className="icon-question"></i>
								</li>
							</ul>
						</nav>
					</header>
				</div>
			</div>
		
		)
	}
});

module.exports = Header;