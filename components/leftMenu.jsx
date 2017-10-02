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
		
		console.log("selected left menu..."+this.state.selectedLeft);
		return (
			<div className="col-xs-2 col-md-2 col-sm-2 col-lg-2 no-pad left_main_menu">
				<ScrollArea speed={0.8} className="area leftScroll" contentClassName="content" horizontal={false}>
					<PanelGroup  collapsible defaultExpanded  aria-multiselectable="true" className="col-xs-12 no-pad left_main_accord left_menu_height">
						
						<Panel collapsible header="Dashboard"  defaultExpanded  className={this.state.selectedLeft=="dashboard"?"select_active left_panel IT-Services com_hover dashboard com_menu":"non_active left_panel IT-Services com_hover dashboard com_menu"} onClick={()=>{this.props.leftMenuClick('dashboard')}}></Panel>
						
						{/* <Panel  aria-expanded="true" collapsible defaultExpanded header="Products & Services"  className="left_panel IT-Services com_hover top_fst_menu"> */}
						
						
						<Panel  onClick={()=>{this.props.leftMenuClick('allProducts')}} className={(this.state.selectedLeft=="allProducts" || this.state.selectedLeft=="productUpdates" || this.state.selectedLeft=="trials") ?"left_panel IT-Services com_hover top_fst_menu header_active ":"left_panel IT-Services com_hover top_fst_menu header_non_active"} aria-expanded="true" collapsible defaultExpanded header="Products & Services"  >						
							<ul className="col-xs-12 no-pad left_panel_ul  ">
								<li className={this.state.selectedLeft=="allProducts"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"}  onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('allProducts')}}>
									<label id="Project_type">All products and services</label>
								</li>
								<li className={this.state.selectedLeft=="productUpdates"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"}  onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('productUpdates')}}>
									<label  id="Geography">Product updates</label>
								</li>
								<li className={this.state.selectedLeft=="trials"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('trials')}}>
									<label  id="Geography">Trials</label>
								</li>
							</ul>
						</Panel>
						
						<Panel  onClick={()=>{this.props.leftMenuClick('Users')}} aria-expanded="true" collapsible header="Manage Access" defaultExpanded className={(this.state.selectedLeft=="Users" || this.state.selectedLeft=="Products") ?"left_panel tablemain-cls com_hover manage header_active ":"left_panel tablemain-cls com_hover manage header_non_active"}>
							<ul className="col-xs-12 no-pad left_panel_ul" >
								<li onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('Users')}} className={this.state.selectedLeft=="Users"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
									<label className="col-xs-12 no-pad" htmlFor="Project_Name">Users</label>
								</li>
								<li onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('Products')}} className={this.state.selectedLeft=="Products"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
									<label className="col-xs-12 no-pad" htmlFor="Project_Name">Products</label>
								</li>
							</ul>
						</Panel>
						
						<Panel  className={(this.state.selectedLeft=="contracts" || this.state.selectedLeft=="order_history" || this.state.selectedLeft=="upcoming_payments" || this.state.selectedLeft=="subscriptions") ?"left_panel IT-Services com_hover billing header_active ":"left_panel IT-Services com_hover billing header_non_active"} onClick={()=>{this.props.leftMenuClick('subscriptions')}} aria-expanded="true" collapsible header="Billing & Orders" defaultExpanded >
							<ul className="col-xs-12 no-pad left_panel_ul  ">
								<li  className={this.state.selectedLeft=="subscriptions"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('subscriptions')}} >
									<label id="Project_type">Subscriptions</label>
								</li>
								<li  className={this.state.selectedLeft=="upcoming_payments"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('upcoming_payments')}} >
									<label  id="Geography">Upcoming Payments</label>
								</li>
								<li  className={this.state.selectedLeft=="order_history"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('order_history')}} >
									<label  id="Geography">Order history</label>
								</li>
								<li  className={this.state.selectedLeft=="contracts"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('contracts')}} >
									<label  id="Geography">Contracts</label>
								</li>
							</ul>
						</Panel>
						
						<Panel  className={(this.state.selectedLeft=="cloud_service") ?"left_panel IT-Services com_hover reporting header_active ":"left_panel IT-Services com_hover reporting header_non_active"} onClick={()=>{this.props.leftMenuClick('cloud_service')}} aria-expanded="true" collapsible header="Reporting" defaultExpanded >
							<ul className="col-xs-12 no-pad left_panel_ul">
								<li className={this.state.selectedLeft=="cloud_service"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={()=>{this.props.leftMenuClick('cloud_service')}}>
									<label id="Project_type">Cloud service usege</label>
								</li>
							</ul>
						</Panel>
						
						<Panel  onClick={()=>{this.props.leftMenuClick('manage_devices')}} className={(this.state.selectedLeft=="manage_devices") ?"left_panel IT-Services com_hover device_menu header_active ":"left_panel IT-Services com_hover device_menu header_non_active"} aria-expanded="true" collapsible header="Devices" defaultExpanded>
							<ul className="col-xs-12 no-pad left_panel_ul  ">
								<li className={this.state.selectedLeft=="manage_devices"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={()=>{this.props.leftMenuClick('manage_devices')}}>
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
						
						
						 <Panel header="Quicl Link" collapsible defaultExpanded className="left_panel IT-Services com_hover  link_bot" ></Panel> */}
						<div className="separator"></div>
						
					</PanelGroup>
				
				
				<div className="privacy">
					<div className="">Privacy statement</div>
					<div className="">Legal Notices & Trademarks</div>
					<div className="">Report Noncompliance</div>
					<div className="autodesk">@2017 Autodesk Inc</div>
					<div className="">All rights reserved</div>
				</div>
				</ScrollArea>
				
				<PanelGroup collapsible defaultExpanded  aria-multiselectable="true" className="col-xs-12 no-pad left_main_accord bottom_link">
					<Panel header="Quick Links" collapsible defaultExpanded className="left_panel IT-Services com_hover  link_bot" ></Panel>
				</PanelGroup>
					
				
			</div>
		
		)
	}
});

module.exports = LeftMenu;