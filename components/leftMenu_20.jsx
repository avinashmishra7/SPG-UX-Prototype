import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
//import Select from 'react-select';
import ScrollArea  from 'react-scrollbar';
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
				<ScrollArea speed={0.8} className="area leftScroll" contentClassName="content" horizontal={false}>
					<PanelGroup  collapsible defaultExpanded  aria-multiselectable="true" className="col-xs-12 no-pad left_main_accord left_menu_height">
						
						<Panel collapsible header="Dashboard"  defaultExpanded className="left_panel IT-Services com_hover dashboard com_menu" onClick={()=>{this.props.leftMenuClick('dashboard')}}></Panel>
						
						<Panel  aria-expanded="true" collapsible defaultExpanded header="Products & Services"  className="left_panel IT-Services com_hover top_fst_menu">
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
						
						<Panel  aria-expanded="true" collapsible header="Manage Access" defaultExpanded className="left_panel tablemain-cls com_hover manage">
							<ul className="col-xs-12 no-pad left_panel_ul" >
								<li className="col-xs-12"  onClick={()=>{this.props.leftMenuClick('Users')}}>
									<label className="col-xs-12 no-pad" htmlFor="Project_Name">Users</label>
								</li>
								<li className="col-xs-12" onClick={()=>{this.props.leftMenuClick('Users')}}>
									<label className="col-xs-12 no-pad" htmlFor="Project_Name">Products</label>
								</li>
							</ul>
						</Panel>
						
						<Panel  aria-expanded="true" collapsible header="Billing & Orders" defaultExpanded className="left_panel IT-Services com_hover billing">
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
						
						<Panel  aria-expanded="true" collapsible header="Reporting" defaultExpanded className="left_panel IT-Services com_hover reporting">
							<ul className="col-xs-12 no-pad left_panel_ul  ">
								<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<label id="Project_type">Cloud service usege</label>
								</li>
							</ul>
						</Panel>
						
						<Panel  aria-expanded="true" 	collapsible header="Devices" defaultExpanded className="left_panel IT-Services com_hover device_menu">
							<ul className="col-xs-12 no-pad left_panel_ul  ">
								<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<label id="Project_type">Manage devices</label>
								</li>
							</ul>
						</Panel>
						<div className="separator"></div>
						<Panel header="Support" collapsible defaultExpanded className="left_panel IT-Services top_last_menues com_menu"></Panel>
						<Panel header="Send feedback"  defaultExpanded collapsible  className="left_panel IT-Services top_last_menues com_menu"></Panel>
						<Panel header="Contact us" defaultExpanded collapsible  className="left_panel IT-Services top_last_menues com_menu"></Panel>
						
						
						{/*<Panel header="Privacy statement" defaultExpanded collapsible  className="left_panel IT-Services top_last_menues com_menu"></Panel>
						<Panel defaultExpanded header="Legal Notices & Trademarks" collapsible className="left_panel IT-Services top_last_menues com_menu"></Panel>
						
						
						 <Panel header="Quick Link" collapsible defaultExpanded className="left_panel IT-Services com_hover  link_bot" ></Panel> */}
						<div className="separator"></div>
					</PanelGroup>
				</ScrollArea>
				
				<div className="privacy">
					<div className="">Privacy statement</div>
					<div className="">Legal Notices & Trademarks</div>
					<div className="">Report Noncompliance</div>
					<div className="autodesk">@2017 Autodesk Inc</div>
					<div className="">All rights reserved</div>
				</div>
				
				
				<PanelGroup collapsible defaultExpanded  aria-multiselectable="true" className="col-xs-12 no-pad left_main_accord bottom_link">
					<Panel header="Quick Links" collapsible defaultExpanded className="left_panel IT-Services com_hover  link_bot" ></Panel>
				</PanelGroup>
					
				
			</div>
		
		)
	}
});

module.exports = LeftMenu;