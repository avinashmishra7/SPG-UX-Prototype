import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import { Router, Route, Link, browserHistory, History ,RouterContext} from 'react-router';
import LeftMenu from './leftMenu.jsx';

const Header = React.createClass({
	
	getInitialState: function(){
		return {
			active :false,
			notificationContent:false,
			helpContent:false,
		}
	},
	
	toggleClass() {
		if(!this.state.active){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick, false);
		}
		 this.setState({ active: !this.state.active });
	}, 
	
	toggleNotification() {
		if(!this.state.notificationContent){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick1, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick1, false);
		}
        this.setState({ notificationContent: !this.state.notificationContent });
    },
	toggleHelp() {
		if(!this.state.helpContent){
			// attach/remove event handler
			document.addEventListener('click', this.handleOutsideClick2, false);
		} else {
			document.removeEventListener('click', this.handleOutsideClick2, false);
		}
        this.setState({ helpContent: !this.state.helpContent });
    },
	handleOutsideClick(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
		return;
		}
		this.toggleClass();
	},
	handleOutsideClick1(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
		return;
		}
		this.toggleNotification();
	},
	handleOutsideClick2(e) {
	// ignore clicks on the component itself
		if (this.node.contains(e.target)) {
		return;
		}
		this.toggleHelp();
	},

	
	render: function() {
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
								<li className="user">
									<span className="devide"></span>
									<span className="avatar" onClick={this.toggleClass} ></span>									
								</li>
								<li className="com_icon">
									<span className="notification" onClick={this.toggleNotification}></span>
									<span className="question" onClick={this.toggleHelp}></span>
								</li>
							</ul>
						</nav>
					</header>
					{this.state.active ?
					<div className="com_cont notice" ref={node => { this.node = node; }}>
						<img src="images/Profile-dropdown.png" className="const_img img_responsive" />
					</div> : null}
					
					{this.state.notificationContent ?
					<div className="com_cont notice2"  ref={node => { this.node = node; }}>
						<img src="images/Notification-dropdown.png" className="const_img img_responsive" />
					</div> : null}
					
					{this.state.helpContent ?
					<div className="com_cont notice1"  ref={node => { this.node = node; }}>
						<img src="images/Help-drpdown.png" className="const_img img_responsive" />
					</div> : null}
					
					
				</div>
			</div>
		)
	}
});

module.exports = Header;