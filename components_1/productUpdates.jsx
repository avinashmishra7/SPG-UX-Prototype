import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';



const ProductUpdates = React.createClass({
	
	getInitialState: function(){
		return {
		}
	},
		
	render: function() {
		return (
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
				<div className="right_contents">
						<img src={'images/const10.png'} className="const_img img_responsive" />
				</div>	
			</div>
		
		)
	}
});

module.exports = ProductUpdates;