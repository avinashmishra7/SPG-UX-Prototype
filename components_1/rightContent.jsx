import React from 'react';
import Dashboard from './dashBoard.jsx';
import Trial from './trial.jsx';
import AllProducts from './allProducts.jsx';
import ProductUpdates from './productUpdates.jsx';


class RightContent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			rightJsx:this.props.selectedRight,
		}
	}
	componentWillMount(){
		console.log('[RightContent] is will mount');
	}
	componentDidMount(){
		console.log('[RightContent] is did mount');
	}
	componentWillReceiveProps(nextProps){
		console.log('[RightContent] is will receiveProps');
		this.setState({
			rightJsx:nextProps.selectedRight,
		})
	}
	componentWillUnmount(){
		console.log('[RightContent] is will unmount');
	}
	render(){
		return(
			<div className="col-xs-10 col-md-10 col-lg-10 col-sm-10 no-pad flex">
				{this.state.rightJsx=='dashboard'?<Dashboard />:null}
				{this.state.rightJsx=='trials'?<Trial />:null}
				{this.state.rightJsx=='allProducts'?<AllProducts />:null}
				{this.state.rightJsx=='productUpdates'?<ProductUpdates />:null}
			</div>
		)
	}
}
module.exports=RightContent;