import React from 'react';
import Header from './header.jsx';
import LeftMenu from './leftMenu.jsx';
import RightContent from './rightContent.jsx';

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			selectedLeft:'dashboard',
			selectedRight:'dashboard',
			mobileDashboardClick:false,
		}
	}
	componentWillMount(){
		console.log('[HOME] is will mount');
	}
	componentDidMount(){
		console.log('[HOME] is did mount');
	}
	componentWillUnmount(){
		console.log('[HOME] is will unmount');
	}
	mobileDashboard(){
		this.setState({
			mobileDashboardClick:!this.state.mobileDashboardClick,
		})
	}
	render(){
		console.log('mobileDashboardClick',this.state.mobileDashboardClick);
		return(
			<div>
				<Header mobileDashboard={this.mobileDashboard.bind(this)} mobileDashboardClick={this.state.mobileDashboardClick}/>
					<div className="main_content">
						<LeftMenu mobileDashboardClick={this.state.mobileDashboardClick} mobileDashboard={this.mobileDashboard.bind(this)} selectedLeft={this.state.selectedLeft} leftMenuClick={(val)=>{this.setState({selectedLeft:val,selectedRight:val,mobileDashboardClick:!this.state.mobileDashboardClick})}}/>	
						<RightContent  mobileDashboardClick={this.state.mobileDashboardClick} mobileDashboard={this.mobileDashboard.bind(this)} selectedRight={this.state.selectedRight}  leftMenuClick={(val)=>{this.setState({selectedLeft:val,selectedRight:val,mobileDashboardClick:!this.state.mobileDashboardClick})}}/>
					</div>
			</div>
		)
	}
}
module.exports=Home;