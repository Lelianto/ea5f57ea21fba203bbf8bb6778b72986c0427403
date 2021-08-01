import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const buttonColor1 = {
	color: 'white',
	backgroundColor: '#424749',
	textTransform: 'none',
	fontSize: '16px'
}
const buttonColor2 = {
	color: '#6e7679',
	backgroundColor: '#f1f1f2',
	textTransform: 'none',
	fontSize: '16px'
}

const useStyles = makeStyles((theme) => ({
  grow: {
		flexGrow: 1,
		backgroundColor: 'white',
		position: 'fixed',
		zIndex: '225',
		marginTop: '110px'
	},
	shadowNone: {
		boxShadow: 'none !important'
	},	
	marginZero: {
		margin: '0px !important'
	},

	paddingButton: {
		padding: '5px 20px'
	}
}));

const DayNightMenu = (props) => {
	const classes = useStyles();
	let day = props.day
	let style1 = buttonColor1
	let style2 = buttonColor2 
	if (day===false) {
		style1 = buttonColor2
		style2 = buttonColor1
	}
	if (props.open) {
		return (
			<div>
				<AppBar position="static" className={[classes.grow, classes.shadowNone].join(' ')}>
					<Grid container className={classes.marginZero}>
					<Grid item xs={12} className={classes.paddingButton}>
						<ButtonGroup disableElevation variant="contained" fullWidth={true}>
							<Button style={style1} variant="contained" onClick={()=>props.handleDayNight(true)}>Lunch</Button>
							<Button style={style2} onClick={()=>props.handleDayNight(false)}>Dinner</Button>
						</ButtonGroup>
					</Grid>
					</Grid>
				</AppBar>
			</div>
		);
	} else {
		return (
			<div>

			</div>
		)
	}
}

export default DayNightMenu