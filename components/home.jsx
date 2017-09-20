import React from 'react';
import Header from './header.jsx';
import LeftMenu from './leftMenu.jsx';
import RightContent from './rightContent.jsx';

{/* import LeftMenuDemo from './leftMenuDemo.jsx'; */}


class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			selectedLeft:'dashboard',
			selectedRight:'dashboard',
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
	render(){
		return(
			<div>
				<Header/>
					<div className="main_content">
					{/* <LeftMenuDemo /> */}
						<LeftMenu selectedLeft={this.state.selectedLeft} leftMenuClick={(val)=>{this.setState({selectedLeft:val,selectedRight:val})}}/>	
						<RightContent selectedRight={this.state.selectedRight}/>
					</div>
			</div>
		)
	}
}
module.exports=Home;