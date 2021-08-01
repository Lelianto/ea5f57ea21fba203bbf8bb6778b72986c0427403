import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import Header from '../../components/header/index';
import DatePicker from '../../components/datePicker/index';
import DayNightMenu from '../../components/dayNightMenu/index';
import ChoosenDate from '../../components/choosenDate/index';
import MediaCard from '../../components/cardMenu/index';
import CardSnakeBar from '../../components/cartSnakeBar/index';
import SearchAddress from '../../components/searchLocation/index';

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
	handleCart = (e) => {
		let data = this.state.item
		data.push(e)
		this.setState({
			item: data
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
	handleChange = (e) => {
		this.handleSearch(e.target.value)
	}
	handleSearch = _.debounce(e => {
		let search = e
		let limit = 3
		if (search) {
			axios.get(`https://api.locationiq.com/v1/autocomplete.php?key=416a4b95f299db&q=${search}&limit=${limit}`)
				.then((response)=>{
					let result = []
					if (response.data.length!==0) {
						response.data.forEach((data, index)=>{
							result.push(data)
						})
					}
					this.setState({
						resultAddress: result
					})
				})
		} else {
			this.setState({
				resultAddress: []
			})
		}
	}, 500)
	handleAddress = () => {
		this.setState({
			openAddress: true,
			resultAddress: []
		})
	}
	handleClose = () => {
		this.setState({
			openAddress: false,
			resultAddress: []
		})
	}
	handleClick = (e) => {
		this.setState({
			address : e.display_place,
			openAddress: false,
			resultAddress: []
		})
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
				<SearchAddress openAddress={this.state.openAddress} handleClose={()=>this.handleClose()} resultAddress={this.state.resultAddress} handleChange={(e)=>this.handleChange(e)} handleClick={(e)=>this.handleClick(e)}/>
				<ChoosenDate choosenDate={this.state.choosenDate}/>
				<MediaCard day={this.state.day} handleCart={(e)=>this.handleCart(e)}/>
				<CardSnakeBar item={this.state.item} />
			</div>
		);
	}
}

export default HomePage;