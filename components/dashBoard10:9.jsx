import React from 'react';
import ReactDOM from 'react-dom';
import ReactBootstrap from 'react-bootstrap';
import {Navbar,Carousel,Item,Caption,Popover,Tooltip,OverlayTrigger,Table,Tabs,Tab,Input, Nav,NavItem,NavDropdown,MenuItem, Accordion,Panel, PanelGroup,Glyphicon } from 'react-bootstrap';
//import PieChart from "react-svg-piechart"

const DashBoard = React.createClass({
	
	getInitialState: function(){
		return {
		}
	},
		
	render: function() {
		
		const data = [
            {label: "Facebook", value: 100, color: "#3b5998"},
            {label: "Twitter", value: 60, color: "#00aced"},
            {label: "Google Plus", value: 30, color: "#dd4b39"},
            {label: "Pinterest", value: 20, color: "#cb2027"},
            {label: "Linked In", value: 10, color: "#007bb6"},
        ]
		const {expandedSector} = this.state
		
		return (
		<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12">
		
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
			 <div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad">
					<h4 className="top_wish">Good afternoon, Jane</h4>
				</div>
				<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad features ul_mobile_view">
					<li className="col-xs-12 col-md-3 col-sm-3 col-lg-3 com_pad_top">
						<div className="com_back_li">
							<div className="com_icon updates"></div>
							<div className="text_right">2</div>
							<span className="below_content">New updates</span>
						</div>	
					</li>
					
					<li className="col-xs-12 col-md-3 col-sm-3 col-lg-3 com_pad_top">
						<div className="com_back_li">
							<div className="com_icon support_case"></div>
							<div className="text_right">4</div>
							<span className="below_content">Support cases</span>
						</div>	
					</li>
					
					<li className="col-xs-12 col-md-3 col-sm-3 col-lg-3 com_pad_top">
						<div className="com_back_li">
							<div className="com_icon invites"></div>
							<div className="text_right">3</div>
							<span className="below_content">Pending invites</span>
						</div>	
					</li>
					
					<li className="col-xs-12 col-md-3 col-sm-3 col-lg-3 com_pad_top">
						<div className="com_back_li">
							<div className="com_icon cloud"></div>
							<div className="text_right">250</div>
							<span className="below_content">Cloud credits</span>
						</div>	
					</li>
				</ul>
				
			</div>
			
			<div className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad main_content1">
				<div className="col-xs-12 col-md-9 col-sm-12 col-lg-9 no-pad">
					<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top btn_grp">
						<li className="col-xs-12 col-md-4 col-sm-4 col-lg-4 no-pad ">
							<div className="revit_update"></div>
							<div className="button_upper_text">2 new revit updates avilable</div>
							<div className="btn_div"><input type="button" name="asas" className="btn_desig btn_download" value="Download now"/></div>
							<div className="btn_seperator"></div>
						</li>
						<li className="col-xs-12 col-md-4 col-sm-4 col-lg-4 no-pad ">
							<div className="auto_cad"></div>
							<div className="button_upper_text">AutoCAD is expiring on <br/> October 21,2017</div>
							<div className="btn_div"><input type="button" name="asas" className="btn_desig btn_renew" value="RENEW NOW"/></div>
							<div className="btn_seperator"></div>
						</li>
						<li className="col-xs-12 col-md-4 col-sm-4 col-lg-4 no-pad ">
							<div className="auto_desk"></div>
							<div className="button_upper_text">Get to know your Autodesk <br/>Account</div>
							<div className="btn_div"><input type="button" name="asas" className="btn_desig btn_tour" value="TAKE A TOUR"/></div>
						</li>
					</ul>
					
					<ul className="col-xs-12 col-md-12 col-sm-12 col-lg-12 com_pad_top new_contents">
						<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad new_header">
							<h2>What's new</h2>
						</li>
						<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad ">
						Download preference now available under global setting
						</li>
						<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad ">
						New account feature - Download preference
						</li>
						<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad ">
						Learn more about new improvement to subscription management
						</li>
						<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad ">
						New release of Revit available, download now
						</li>
						<li className="col-xs-12 col-md-12 col-sm-12 col-lg-12 no-pad ">
						Your subscrition of Navisworks(3 seats) expired on December 1 2017
						</li>
					</ul>
				</div>
				
				<div className="col-xs-12 col-md-3 col-sm-12 col-lg-3 no-pad top_images1">
					<ul className="col-xs-12 col-md-12 col-sm-6 col-lg-12 support_box com_box">
						<li className="new_header"><h2>Support</h2></li>
						<li className="sub_li">My Support</li>
						<li className="sub_li">Open support case(2)</li>
						<li className="sub_li">Contact support</li>
						<li className="sub_li sub_li_bottom">Access commmunity and user forums</li>
					</ul>
					<ul className="col-xs-12 col-md-12 col-sm-6 col-lg-12 feedback_box com_box">
						<li className="new_header"><h2>Feedback</h2></li>
						<li className="sub_li">Send feedback</li>
						<li className="sub_li">Take a quick survey</li>
						<li className="sub_li sub_li_bottom">Join an upcoming research study</li>
					</ul>	
				</div>
				
			</div>

			 {/* <div className="col-xs-12 col-md-6 col-sm-12 col-lg-6 no-pad">
                <PieChart
                    data={ data }
                    expandedSector={expandedSector}
                    onSectorHover={this.handleMouseEnterOnSector}
                    sectorStrokeWidth={2}
                    expandOnHover
                    shrinkOnTouchEnd
					className="col-xs-12 col-md-9 col-sm-12 col-lg-9 no-pad"
                />
                <div className="col-xs-12 col-md-3 col-sm-12 col-lg-3 no-pad chart_details">
                {
                    data.map((element, i) => (
                        <div key={i}>
                            <span style={{background: element.color}}></span>
                            <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                                {element.label} : {element.value} : 
								<span className="color_details"></span>
								
								
                            </span>
                        </div>
                    ))
                }
                </div>
            </div> */}
			
		</div>	
		
		)
	}
});

module.exports = DashBoard;