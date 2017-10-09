import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
import ScrollArea  from 'react-scrollbar';
import { Router, Route, Link, browserHistory, History ,RouterContext} from 'react-router';



const QuickLinks = React.createClass({
	
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
				console.log("selected left menu...111"+this.props.selectedRight);
		return (

				<PanelGroup collapsible   aria-multiselectable="true" className="col-xs-12 no-pad left_main_accord bottom_link">
					<Panel header="Quick Links" collapsible  className="left_panel IT-Services com_hover  link_bot" >
						{this.props.selectedRight=="dashboard" ?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link">
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link one</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Sherpa link two</label>
							</li>
							<div className="separator"></div>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices1</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices1</label>
							</li>
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices1</label>
							</li>
						</ul>
						: null }
						
						{(this.props.selectedRight=="allProducts" || this.props.selectedRight=="productUpdates" || this.props.selectedRight=="trials")?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link">
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices2</label>
							</li>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices2</label>
							</li>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices2</label>
							</li>
						</ul>
						:null}
						
						{(this.props.selectedRight=="Users" || this.props.selectedRight=="Products") ?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link">
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices3</label>
							</li>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices3</label>
							</li>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices3</label>
							</li>
						</ul>
						:null}
						
						
						{(this.props.selectedRight=="contracts" || this.props.selectedRight=="order_history" || this.props.selectedRight=="upcoming_payments" || this.props.selectedRight=="subscriptions")?
						<ul className="col-xs-12 no-pad left_panel_ul  quick_link">
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices4</label>
							</li>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<label id="Project_type">Manage devices4</label>
							</li>
							
							<li className="col-xs-12 col-sm-12 col-md-12 col-lg-12 link_down">
								<label id="Project_type">Manage devices4</label>
							</li>
						</ul>
						:null}
						
					</Panel>
				</PanelGroup>
				
					
		
		)
	}
});

module.exports = QuickLinks;