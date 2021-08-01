import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  grow: {
		flexGrow: 1,
		backgroundColor: 'white',
		position: 'fixed',
		zIndex: '250'
	},
	shadowNone: {
		boxShadow: 'none !important'
	},	
	arrowBack: {
		color: '#424749',
	},
	arrowMore: {
		color: 'red',
		marginBottom: '-7px'
	},
	paddingArrow: {
		padding: '15px !important'
	},
	headerText: {
		color: '#424749',
		textAlign: 'left'
	},
	fontSize12: {
		fontSize:'10px'
	},
	fontSize16: {
		fontSize:'16px'
	},
	paddingAddress: {
		padding: '0px !important',
	},
	fontWeight600: {
		fontWeight: '600'
	},
	paddingLeft30: {
		paddingLeft: '30px !important'
	},
	paddingTextAddress: {
		padding: '10px 0px 0px 0px !important'
	},
	marginZero: {
		margin: '0px !important'
	}
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={[classes.grow, classes.shadowNone].join(' ')}>
				<Grid container className={classes.marginZero}>
					<Grid item xs={1} className={classes.paddingArrow}>
						<ArrowBackIcon
							className={classes.arrowBack}
						/>
					</Grid>
					<Grid item xs={11} className={[classes.headerText, classes.paddingLeft30].join(' ')}>
						<Grid container>
							<Grid item xs={12} className={[classes.fontSize12, classes.paddingTextAddress].join(' ')}>
								Alamat Pengiriman
							</Grid>
							<Grid item xs={12} className={[classes.fontSize16, classes.paddingAddress, classes.fontWeight600].join(' ')}>
								<span onClick={()=>props.handleAddress()}>
									{props.address}
								</span>
								<ExpandMoreIcon
									onClick={()=>props.handleAddress()}
									className={classes.arrowMore}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
      </AppBar>
    </div>
  );
}

export default Header