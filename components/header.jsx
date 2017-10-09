import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import { Router, Route, Link, browserHistory, History ,RouterContext} from 'react-router';
import LeftMenu from './leftMenu.jsx';

const Header = React.createClass({
		
	render: function() {
		console.log("header come......",this.props.mobileDashboardClick);
		return (
			<div className="top_header">
				<div className="header">
					<header className="">
						<nav className="module moduleGlobal">
							<ul className="module moduleGlobalNav">
								<li className="left_menu">
									<a className="logo1" href="#"></a>
									<a className="logo2" href="#"></a>
									<a className={this.props.mobileDashboardClick?"mobile_close":"mobile_view"} href="#" onClick={this.props.mobileDashboard}></a>
									<a className="mobile_logo" href="#"></a>
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