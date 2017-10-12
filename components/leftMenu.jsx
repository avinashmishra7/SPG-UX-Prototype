import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import ScrollArea  from 'react-scrollbar';
import { Router, Route, Link, browserHistory, History ,RouterContext} from 'react-router';

import QuickLinks from './quickLinks.jsx';


const LeftMenu = React.createClass({
	
	getInitialState: function(){
		return {
			selectedLeft:this.props.selectedLeft,
			open :true,
			mobileDashboardClick:this.props.mobileDashboardClick || false,
		}
	},
	componentWillReceiveProps:function(nextProps){
		this.setState({
			selectedLeft:nextProps.selectedLeft,
			mobileDashboardClick:nextProps.mobileDashboardClick,
		})
	},
		
	render: function() {
		
		return (
			<div className={this.state.mobileDashboardClick?"col-xs-2 col-md-2 col-sm-2 col-lg-2 no-pad left_main_menu":"col-xs-2 col-md-2 col-sm-2 col-lg-2 no-pad left_main_menu iphoneDashboard "} ref="left">
				<ScrollArea speed={0.8} className="area leftScroll" contentClassName="content" horizontal={false}>
					<PanelGroup className="col-xs-12 no-pad left_main_accord left_menu_height">
						
						<Panel collapsible header="Dashboard"  defaultExpanded  className={this.state.selectedLeft=="dashboard"?"select_active left_panel IT-Services com_hover dashboard com_menu":"non_active left_panel IT-Services com_hover dashboard com_menu"} onClick={()=>{this.props.leftMenuClick('dashboard')}}></Panel>
												
						
						<Panel collapsible="false"  expanded={this.state.open}
						onClick={()=>{this.props.leftMenuClick('allProducts')}} 
						className={(this.state.selectedLeft=="allProducts" || this.state.selectedLeft=="productUpdates" || this.state.selectedLeft=="trials") ?
						"left_panel IT-Services com_hover top_fst_menu header_active ":"left_panel IT-Services com_hover top_fst_menu header_non_active"} 
						header="Products & Services"  >		

							<ul className="col-xs-12 no-pad left_panel_ul  ">
								
								<li className={this.state.selectedLeft=="allProducts"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"}  
								onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('allProducts');}}>
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
						
						<Panel  collapsible="false"  expanded={this.state.open} header="Manage Access" onClick={()=>{this.props.leftMenuClick('Users')}} 
						className={(this.state.selectedLeft=="devices" || this.state.selectedLeft=="Users" || this.state.selectedLeft=="Products") ?
						"left_panel tablemain-cls com_hover manage header_active ":"left_panel tablemain-cls com_hover manage header_non_active"}>
						
							<ul className="col-xs-12 no-pad left_panel_ul" >
								<li onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('Users')}} className={this.state.selectedLeft=="Users"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
									<label className="col-xs-12 no-pad" htmlFor="Project_Name">Users</label>
								</li>
								<li onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('Products')}} className={this.state.selectedLeft=="Products"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
									<label className="col-xs-12 no-pad" htmlFor="Project_Name">Products</label>
								</li>
								<li onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('devices')}} className={this.state.selectedLeft=="devices"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
									<label className="col-xs-12 no-pad" htmlFor="Project_Name">Devices</label>
								</li>
							</ul>
						</Panel>
						
						<Panel className={(this.state.selectedLeft=="contracts" || this.state.selectedLeft=="order_history" || this.state.selectedLeft=="upcoming_payments" || this.state.selectedLeft=="subscriptions") ?"left_panel IT-Services com_hover billing header_active ":"left_panel IT-Services com_hover billing header_non_active"} 
						onClick={()=>{this.props.leftMenuClick('subscriptions')}} 
						collapsible="false" expanded={this.state.open} header="Billing & Orders" >
						
							<ul className="col-xs-12 no-pad left_panel_ul  ">
								<li  className={this.state.selectedLeft=="subscriptions"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('subscriptions')}} >
									<label id="Project_type">Subscriptions</label>
								</li>
								
								<li  className={this.state.selectedLeft=="upcoming_payments"?"sub_pad active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"sub_pad non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('upcoming_payments')}} >
									<label  id="Geography">Upcoming Payments</label>
								</li>
								<li  className={this.state.selectedLeft=="order_history"?"sub_pad active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":" sub_pad non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('order_history')}} >
									<label  id="Geography">Order history</label>
								</li>
								
								<li  className={this.state.selectedLeft=="contracts"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('contracts')}} >
									<label  id="Geography">Contracts</label>
								</li>
							</ul>
						</Panel>
						
						<Panel  className={(this.state.selectedLeft=="summary" || this.state.selectedLeft=="cloud_service") ?"left_panel IT-Services com_hover reporting header_active ":"left_panel IT-Services com_hover reporting header_non_active"} 
						onClick={()=>{this.props.leftMenuClick('cloud_service')}} 
						collapsible="false" expanded={this.state.open} header="Reporting">
						
							<ul className="col-xs-12 no-pad left_panel_ul">
								<li className={this.state.selectedLeft=="cloud_service"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('cloud_service')}}>
									<label id="Project_type">Cloud service usege</label>
								</li>
								<li className={this.state.selectedLeft=="summary"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={(event)=>{event.stopPropagation();this.props.leftMenuClick('summary')}}>
									<label id="Project_types">Summary</label>
								</li>
							</ul>
						</Panel>
						
						{/* <Panel  onClick={()=>{this.props.leftMenuClick('manage_devices')}} className={(this.state.selectedLeft=="manage_devices") ?"left_panel IT-Services com_hover device_menu header_active ":"left_panel IT-Services com_hover device_menu header_non_active"} aria-expanded="true" collapsible header="Devices" defaultExpanded>
							<ul className="col-xs-12 no-pad left_panel_ul  ">
								<li className={this.state.selectedLeft=="manage_devices"?"active_li col-xs-12 col-sm-12 col-md-12 col-lg-12":"non_active col-xs-12 col-sm-12 col-md-12 col-lg-12"} onClick={()=>{this.props.leftMenuClick('manage_devices')}}>
									<label id="Project_type">Manage devices</label>
								</li>
							</ul>
						</Panel> */}
						<div className="separator"></div>
						
						<Panel header="Support" collapsible defaultExpanded className="extra_header left_panel IT-Services top_last_menues com_menu"></Panel>
						<Panel header="Send feedback"  defaultExpanded collapsible  className="extra_header left_panel IT-Services top_last_menues com_menu"></Panel>
						<Panel header="Contact us" defaultExpanded collapsible  className="extra_header left_panel IT-Services top_last_menues com_menu"></Panel>
						
						<div className="separator"></div>
						
					</PanelGroup>
				
				
					<div className="privacy">
						<div className="">Privacy statement</div>
						<div className="">Legal Notices & Trademarks</div>
						<div className="">Report Noncompliance</div>
						<div className="autodesk">@2017 Autodesk Inc</div>
						<div className="all_rights">All rights reserved</div>
					</div>
				</ScrollArea>
				<QuickLinks selectedRight={this.state.selectedLeft}/>
					
				
			</div>
		
		)
	}
});

module.exports = LeftMenu;