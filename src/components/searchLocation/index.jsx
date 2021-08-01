import React from 'react';
import google from '../../assets/image/google.webp';
import '../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  grow: {
		flexGrow: 1,
		position: 'fixed',
		zIndex: '500',
		marginTop: '110px',
		height:'100vh',
		backgroundColor: 'transparent'
	},
	shadowNone: {
		boxShadow: 'none !important'
	},
	textJustify: {
		textAlign: 'left',
		position: 'relative',
    top: '-30px'
	},
	positionControl: {
		margin: '0px !important',
		marginTop: '20px !important',
		position: 'relative',
		top: '-30px'
	},
	styleIcon: {
		position: 'relative',
    top: '-57.5px',
    left: '-140px',
		color: '#f9423a',
		fontSize: 'medium'
	},
	multiLoc: {
		fontSize: 'medium',
		color: '#6e7679',
		position: 'relative',
    zIndex: '10'
	},
	styleTitle: {
		textAlign: 'left',
		fontWeight: '600'
	},
	descTitle: {
		textAlign: 'left',
		fontWeight: '200',
		fontSize:'10px',
		overflow:'hidden',
		width: '100%',
		display: 'inline-block',
		textOverflow:'ellipsis',
		whiteSpace:'nowrap'
	},
	textControl: {
		position: 'relative',
		right: '-10px',
		zIndex:'10'
	},
	iconControl: {
		position: 'relative',
    right: '-5px',
    bottom: '-5px'
	},
	controlBack: {
		display: 'block',
    height: '20px',
    width: '20px',
    backgroundColor: '#e2e4e4',
    color: 'transparent',
    position: 'relative',
    borderRadius: '50%',
    top: '-22px',
    right: '-3px',
    zIndex: '0'
	},

	backgroundAll: {
		position: 'fixed',
		zIndex: '275',
		backgroundColor:'#424749',
		opacity: '0.5',
		color:'transparent',
		height: '100vh'
	},
	close: {
		position: 'relative',
		top: '-50px',
    right: '-165px'
	},
	cardData: {
		position: 'relative',
		top: '-30px'
	},
	setGoogle: {
		width: '65px'
	},
	supportGoogleText: {
		position: 'relative',
		fontSize: '12px',
		top: '-30px',
		left: '-3px'
	},
	supportGoogle: {
		position: 'relative',
    bottom: '-150px'
	}
}));

const SearchAddress = (props) => {
	const classes = useStyles()
	if (props.openAddress) {
		return (
			<div>
				<AppBar className={classes.backgroundAll}>
					background
				</AppBar>
				<AppBar position="static" className={[classes.grow, classes.shadowNone].join(' ')}>
					<Card className='card-control'>
					<span onClick={()=>props.handleClose()} className={classes.close}>&#10006;</span>
						<Typography className={classes.textJustify} variant="h5">Cek makanan yang tersedia di lokasi kamu!</Typography>
						<TextField
							id="outlined-full-width"
							placeholder="Cari di suatu lokasi"
							fullWidth
							className={classes.positionControl}
							margin="normal"
							onChange={(e)=>props.handleChange(e)}
							variant="outlined"
						/>
						<LocationOnIcon className={classes.styleIcon}/>
	
						{
							props.resultAddress.length!==0?
								<span>
									<CardActionArea className={classes.cardData}>
										{
											props.resultAddress.map((data, index)=>(
											<Grid onClick={()=>props.handleClick(data)} container className='result-data'>
												<Grid item xs={1} className={classes.iconControl}>
													<LocationOnIcon className={classes.multiLoc}/>
													<span className={classes.controlBack}>.</span>
												</Grid>
												<Grid item xs={10} className={classes.textControl}>
													<div className={classes.styleTitle}>
														<span>
															{data.display_place}
														</span>
													</div>
													<div className={classes.descTitle}>
														{data.display_name}
													</div>
												</Grid>
											</Grid>
											))
										}
									</CardActionArea>
									<Typography variant="h5">
										<span className={classes.supportGoogleText}>
											Support by 
										</span> 
										<img className={classes.setGoogle} src={google} alt=""/>
									</Typography>
								</span>
							:
								<span>
									<Typography className={classes.supportGoogle} variant="h5">
										<span className={classes.supportGoogleText}>
											Support by 
										</span> 
										<img className={classes.setGoogle} src={google} alt=""/>
									</Typography>
								</span>
						}
					</Card>
				</AppBar>
			</div>
		)
	} else {
		return (
			<div></div>
		)
	}
}

export default SearchAddress