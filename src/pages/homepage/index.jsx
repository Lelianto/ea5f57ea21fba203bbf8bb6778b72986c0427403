import React, { Component } from 'react';
import _ from 'lodash';
import Header from '../../components/header/index';
import DatePicker from '../../components/datePicker/index';
import DayNightMenu from '../../components/dayNightMenu/index';

class HomePage extends Component {
	constructor(props) {
    super(props);
    this.state = {
			listDate: [],
			listDay: ['Minggu','Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
			scroll:0,
			day: true,
			choosenDate: {},
			item: [],
			open: true,
			resultAddress: [],
			address: 'Tokopedia Tower',
			openAddress: false,
			paddingBottom: '75px'
		};
	}
	handleAddress = () => {
		this.setState({
			openAddress: true,
			resultAddress: []
		})
	}
	getListDate = () => {
		let listDate = []
		for (let index = 0; index < 14; index++) {
			let date = new Date()
			let pastDate = date.getDate() + (index-7) 
			date.setDate(pastDate)
			let data = {
				day: this.state.listDay[date.getDay()],
				date: date.getDate(),
				month: date.getMonth(),
				year: date.getFullYear()
			}
			listDate.push(data)
			if (index===7) {
				this.setState({
					choosenDate: data
				})
			}
		}
		this.setState({
			listDate: listDate
		})
	}
	handleChoosenDate = async (e) => {
		this.setState({
			choosenDate: await e
		})
	}
	handleDayNight = (e) => {
		this.setState({
			day: e
		})
	}
	handleScroll = (e) => {
		let positionY = window.pageYOffset
		if (positionY!==0) {
			this.setState({
				open: false
			})
		} else {
			this.setState({
				open: true
			})
		}
	}
	componentDidMount() {
		this.getListDate()
		window.addEventListener('scroll', this.handleScroll)
	}
	render() {
		return (
			<div style={{ paddingBottom: this.state.item.length !== 0 ? this.state.paddingBottom : '' }}>
				<Header address={this.state.address} handleAddress={()=>this.handleAddress()}/>
				<DatePicker choosenDate={this.state.choosenDate} listDate={this.state.listDate} handleChoosenDate={(e)=>this.handleChoosenDate(e)}/>
				<DayNightMenu open={this.state.open} day={this.state.day} handleDayNight={(e)=>this.handleDayNight(e)}/>
			</div>
		);
	}
}

export default HomePage;