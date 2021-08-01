import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  grow: {
		flexGrow: 1,
		backgroundColor: 'white',
		paddingTop: '180px',
		paddingLeft: '20px'
	},
	shadowNone: {
		boxShadow: 'none !important'
	},	
	marginZero: {
		margin: '0px !important',
		color: '#424749',
		fontSize: '16px',
		fontWeight: '600',
		marginBottom: '20px !important'
	}
}));

const month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const ChoosenDate = (props) => {
	const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={[classes.grow, classes.shadowNone].join(' ')}>
				<Grid container className={classes.marginZero}>
					{props.choosenDate.day}, {props.choosenDate.date} {month[props.choosenDate.month]} {props.choosenDate.year}
				</Grid>
      </AppBar>
    </div>
  );
}

export default ChoosenDate