import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';


const DashBoard = React.createClass({
	
	getInitialState: function(){
		return {
		}
	},
		
	render: function() {
		return (
		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
		
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
				<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad"><h4 className="top_wish">Good afternoon, Jane</h4></div>
				
				<div className="col-xs-12 col-md-3 col-sm-3 col-lg-3 no-pad top_images1">
					<img src={'images/update.png'} className="const_img img_responsive img-responsive all_pad" />
				</div>
				
				<div className="col-xs-12 col-md-3 col-sm-3 col-lg-3 no-pad top_images1">
					<img src={'images/support.png'} className="const_img img_responsive img-responsive all_pad" />
				</div>
				
				<div className="col-xs-12 col-md-3 col-sm-3 col-lg-3 no-pad top_images1">
					<img src={'images/pending.png'} className="const_img img_responsive img-responsive all_pad" />
				</div>
				
				<div className="col-xs-12 col-md-3 col-sm-3 col-lg-3 no-pad top_images1">
					<img src={'images/cloud.png'} className="const_img img_responsive img-responsive all_pad" />
				</div>
			</div>
			
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
				
				<div className="col-xs-12 col-md-9 col-sm-12 col-lg-9 no-pad top_images1">
					<img src={'images/renew.png'} className="const_img img_responsive img-responsive all_pad" />
					<img src={'images/new.png'} className="const_img img_responsive img-responsive all_pad" />
				</div>
				
				<div className="col-xs-12 col-md-3 col-sm-12 col-lg-3 no-pad top_images1">
					<div className="col-xs-12 col-md-12 col-sm-6 col-lg-12 no-pad top_images1">
						<img src={'images/support_right.png'} className="const_img img_responsive img-responsive all_pad" />
					</div>	
					<div className="col-xs-12 col-md-12 col-sm-6 col-lg-12 no-pad top_images1">
						<img src={'images/feedback.png'} className="const_img img_responsive img-responsive all_pad" />
					</div>	
				</div>
				
			</div>
			
		</div>	
		
		)
	}
});

module.exports = DashBoard;