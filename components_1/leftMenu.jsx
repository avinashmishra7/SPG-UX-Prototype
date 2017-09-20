import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import { Router, Route, Link, browserHistory, History ,RouterContext} from 'react-router';


const LeftMenu = React.createClass({
	
	getInitialState: function(){
		return {
			selectedLeft:this.props.selectedLeft,
		}
	},
	componentWillReceiveProps:function(nextProps){
		this.setState({
			selectedLeft:nextProps.selectedLeft,
		})
	},
		
	render: function() {
		return (
			<div className="col-xs-2 col-md-2 col-sm-2 col-lg-2 no-pad left_main_menu">
				<Accordion defaultActiveKey={"1"} className="col-xs-12 no-pad left_main_accord">
					
					<Panel header="Dashboard" eventKey="1" className="left_panel IT-Services top_fst_menu com_menu" onClick={()=>{this.props.leftMenuClick('dashboard')}}></Panel>
					
					<Panel header="Products & Services" eventKey="2" className="left_panel IT-Services top_fst_menu">
						<ul className="col-xs-12 no-pad left_panel_ul  ">
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12" onClick={()=>{this.props.leftMenuClick('allProducts')}}>
								<label id="Project_type">All products and services</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12" onClick={()=>{this.props.leftMenuClick('productUpdates')}}>
								<label  id="Geography">Product updates</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12" onClick={()=>{this.props.leftMenuClick('trials')}}>
								<label  id="Geography">Trials</label>
							</li>
						</ul>
					</Panel>
					
					<Panel header="Manage Access" eventKey="3" className="left_panel tablemain-cls top_fst_menu">
						<ul className="col-xs-12 no-pad left_panel_ul" >
							<li className="col-xs-12"  onClick={()=>{this.props.leftMenuClick('Users')}}>
								<label className="col-xs-12 no-pad" htmlFor="Project_Name">Users</label>
							</li>
							<li className="col-xs-12" onClick={()=>{this.props.leftMenuClick('Users')}}>
								<label className="col-xs-12 no-pad" htmlFor="Project_Name">Products</label>
							</li>
						</ul>
					</Panel>
					
					<Panel header="Billing & Orders" eventKey="4" className="left_panel IT-Services top_fst_menu">
						<ul className="col-xs-12 no-pad left_panel_ul  ">
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Subscriptions</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label  id="Geography">Upcoming Payments</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label  id="Geography">Order history</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label  id="Geography">Contracts</label>
							</li>
						</ul>
					</Panel>
					
					<Panel header="Reporting" eventKey="5" className="left_panel IT-Services top_fst_menu">
						<ul className="col-xs-12 no-pad left_panel_ul  ">
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Cloud service usege</label>
							</li>
						</ul>
					</Panel>
					
					<Panel header="Devices" eventKey="6" className="left_panel IT-Services top_fst_menu">
						<ul className="col-xs-12 no-pad left_panel_ul  ">
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices</label>
							</li>
						</ul>
					</Panel>
					<div className="separator"></div>
					<Panel header="Support" eventKey="7" className="left_panel IT-Services top_last_menues com_menu"></Panel>
					<Panel header="Send feedback" eventKey="8" className="left_panel IT-Services top_last_menues com_menu"></Panel>
					<Panel header="Contact us" eventKey="9" className="left_panel IT-Services top_last_menues com_menu"></Panel>
					<div className="separator"></div>
					<Panel header="Privacy statement" eventKey="10" className="left_panel IT-Services top_last_menues com_menu"></Panel>
					<Panel header="Legal Notices & Trademarks" eventKey="11" className="left_panel IT-Services top_last_menues com_menu"></Panel>
					
				</Accordion>
        
			</div>
		
		)
	}
});

module.exports = LeftMenu;