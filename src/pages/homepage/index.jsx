import React, { Component } from 'react';
import _ from 'lodash';
import Header from '../../components/header/index';

class HomePage extends Component {
	constructor(props) {
    super(props);
    this.state = {
			address: 'Tokopedia Tower',
			item: [],
			paddingBottom: '75px'
		};
	}
	handleAddress = () => {
		this.setState({
			openAddress: true,
			resultAddress: []
		})
	}
	render() {
		return (
			<div style={{ paddingBottom: this.state.item.length !== 0 ? this.state.paddingBottom : '' }}>
				<Header address={this.state.address} handleAddress={()=>this.handleAddress()}/>
			</div>
		);
	}
}

export default HomePage;