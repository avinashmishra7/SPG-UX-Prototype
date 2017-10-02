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
								<li className="left_menu">
									<a className="logo" href="#"></a>
								</li>
								<li className="user"><span className="devide"></span><span className="avatar"></span></li>
								<li className="com_icon">
									<span className="notification"></span>
									<span className="question"></span>
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