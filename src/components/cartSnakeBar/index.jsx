import React from 'react';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import {thousandsSeparators} from 'currency-thousand-separator';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  grow: {
		flexGrow: 1,
		backgroundColor: 'white',
		paddingTop: '100vh',
		paddingLeft: '20px'
	},
	padd16: {
		padding: '8px 10px 0px 10px !important',
		justifyContent: 'space-between'
	},
	fontTitle: {
		fontSize: '12px',
		color: 'white',
		fontWeight: '600'
	},
	fontSub: {
		fontSize: '10px',
		marginTop: '-8px',
		color: 'white',
		fontWeight: '200'
	},
	cartIcon: {
		marginBottom: '-18px',
		marginRight: '30px',
		color: 'white'
	},
	arrowRight: {
		marginTop: '-20px',
		color: 'white'
	}
}));


const CardSnakeBar = (props) => {
	const classes = useStyles();
	let item = props.item
	if(item.length===0) {
		return (
			<div>
			</div>
		)
	} else {
		let totalItem = 0
		let totalPrice = 0
		item.forEach((data, index)=>{
			totalItem += data.qty
			totalPrice += data.price
		})
		return (
			<BottomNavigation className='cart'>
				<Card className='cart-data'>
					<CardActions className={classes.padd16}>
						<Typography className={classes.fontTitle}>{totalItem} Items | Rp {thousandsSeparators(totalPrice).split(',').join('.')}</Typography>
						<ShoppingCartOutlinedIcon className={classes.cartIcon}/>
					</CardActions>
					<CardActions className={classes.padd16}>
						<Typography className={classes.fontSub}>Termasuk ongkos kirim</Typography>
						<ChevronRightIcon className={classes.arrowRight}/>
					</CardActions>
				</Card>
			</BottomNavigation>
		);
	}
}

export default CardSnakeBar