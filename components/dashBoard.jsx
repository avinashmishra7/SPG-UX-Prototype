import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
//import PieChart from "react-svg-piechart"

const DashBoard = React.createClass({
	
	getInitialState: function(){
		return {
			index: 0,
			direction: null,
		}
	},
	
	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction
		});
	},

		
	render: function() {
		
		return (
		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 fix_width">
		
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
					<h4 className="top_wish">Good afternoon, Jane</h4>
				</div>
				<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad features ul_mobile_view">
					<li className="col-xs-12 col-md-3 col-sm-3 col-lg-3 com_pad_top">
						<div className="com_back_li" onClick={this.props.leftMenuClick.bind(this,'productUpdates')}>
							<div className="com_icon updates"></div>
							<div className="text_right">2</div>
							<span className="below_content">New updates</span>
						</div>	
					</li>
					
					<li className="col-xs-12 col-md-3 col-sm-3 col-lg-3 com_pad_top">
						<a href="aaa" target="blank">
						<div className="com_back_li">
							<div className="com_icon support_case"></div>
							<div className="text_right">4</div>
							<span className="below_content">Support cases</span>
						</div>	
						</a>
					</li>
					
					<li className="col-xs-12 col-md-3 col-sm-3 col-lg-3 com_pad_top">
						<div className="com_back_li" onClick={this.props.leftMenuClick.bind(this,'users')}>
							<div className="com_icon invites"></div>
							<div className="text_right">3</div>
							<span className="below_content">Pending invites</span>
						</div>
					</li>
					
					<li className="col-xs-12 col-md-3 col-sm-3 col-lg-3 com_pad_top">
						<div className="com_back_li"  onClick={this.props.leftMenuClick.bind(this,'cloud_service')}>
							<div className="com_icon cloud"></div>
							<div className="text_right">250</div>
							<span className="below_content">Cloud credits</span>
						</div>	
					</li>
				</ul>
				
			</div>
			
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
				<div className="col-xs-12 col-md-9 col-sm-12 col-lg-9 no-pad">
					<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top btn_grp desktop_view">
						
						<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad div_hov">
							<li className="col-xs-12 col-md-4 col-sm-4 col-lg-4 no-pad li_border_left">
								<div className="revit_update"></div>
								<div className="button_upper_text">2 new revit updates avilable</div>
								<div className="btn_div"><input onClick={this.props.leftMenuClick.bind(this,'productUpdates')} type="button" name="asas" className="btn_desig btn_download" value="Download now"/></div>
								<div className="btn_seperator"></div>
							</li>
							<li className="col-xs-12 col-md-4 col-sm-4 col-lg-4 no-pad ">
								<div className="auto_cad"></div>
								<div className="button_upper_text">AutoCAD is expiring on <br/> October 21,2017</div>
								<div className="btn_div"><input type="button" name="asas" className="btn_desig btn_renew" value="Renew now"/></div>
								<div className="btn_seperator"></div>
							</li>
							<li className="col-xs-12 col-md-4 col-sm-4 col-lg-4 no-pad li_border_right">
								<div className="auto_desk"></div>
								<div className="button_upper_text">Get to know your Autodesk <br/>Account</div>
								<div className="btn_div"><input type="button" name="asas" className="btn_desig btn_tour" value="Take a tour"/></div>
							</li>
						</div>
					</ul>
					
					{/*Carousel start here*/}
					<Carousel className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top slider" 
					 activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} >
					
						<Carousel.Item className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top carousel_height">
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad ">
								<div className="revit_update"></div>
								<div className="button_upper_text">2 new revit updates avilable</div>
								<div className="btn_div"><input type="button" name="asas" className="btn_desig btn_download" value="Download now"/></div>
							</div>
						</Carousel.Item>
						
						<Carousel.Item className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top carousel_height">
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad ">
								<div className="auto_cad"></div>
								<div className="button_upper_text">AutoCAD is expiring on <br/> October 21,2017</div>
								<div className="btn_div"><input type="button" name="asas" className="btn_desig btn_renew" value="RENEW NOW"/></div>
							</div>
						</Carousel.Item>
						
						<Carousel.Item className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top carousel_height">
							<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad ">
								<div className="auto_desk"></div>
								<div className="button_upper_text">Get to know your Autodesk <br/>Account</div>
								<div className="btn_div"><input type="button" name="asas" className="btn_desig btn_tour" value="TAKE A TOUR"/></div>
							</div>
						</Carousel.Item>
					</Carousel>
					{/*Carousel end here*/}
					
					<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_contents">
						<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad new_header">
							<h2>What's new</h2>
						</li>
						<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li1">
							Download preference now available under global setting
						</li>
						<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
							<a href="#aaa" target="blank"> New account feature - Download preference </a>
						</li>
						<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
							<a href="#aaa" target="blank"> Learn more about new improvement to subscription management </a>
						</li>
						<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li">
							<a href="#aaa" target="blank"> New release of Revit available, download now </a>
						</li>
						<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad sub_li sub_li_border">
							<a href="#aaa" target="blank"> Your subscrition of Navisworks(3 seats) expired on December 1 2017 </a>
						</li>
					</ul>
				</div>
				
				<div className="col-xs-12 col-md-3 col-sm-12 col-lg-3 no-pad top_images1">
					<ul className="col-xs-12 col-md-12 col-sm-6 col-lg-12 support_box com_box">
						<li className="new_header"><h2>Support</h2></li>
						<li className="sub_li sub_li2"><a href="#aaa" target="blank" >My Support</a></li>
						<li className="sub_li"><a href="#aaa" target="blank" >Open support case(2)</a></li>
						<li className="sub_li"><a href="#aaa" target="blank" >Contact support</a></li>
						<li className="sub_li sub_li_bottom"><a href="#aaa" target="blank" >Access commmunity and user forums</a></li>
					</ul>
					<ul className="col-xs-12 col-md-12 col-sm-6 col-lg-12 feedback_box com_box">
						<li className="new_header"><h2>Feedback</h2></li>
						<li className="sub_li sub_li2">Send feedback</li>
						<li className="sub_li"><a href="#aaa" target="blank" >Take a quick survey</a></li>
						<li className="sub_li sub_li_bottom"><a href="#aaa" target="blank" >Join an upcoming research study</a></li>
					</ul>	
				</div>
				
			</div>
			
		</div>	
		
		)
	}
});

module.exports = DashBoard;