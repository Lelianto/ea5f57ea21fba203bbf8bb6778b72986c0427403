import React from 'react';
import '../../App.css';
import food1 from '../../assets/image/food1.jpg'
import { makeStyles } from '@material-ui/core/styles';
import {thousandsSeparators} from 'currency-thousand-separator';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const buttonColor1 = {
	color: 'white',
	backgroundColor: '#f9423a',
	textTransform: 'none',
	fontSize: '12px'
}

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
		padding: '0px 20px'
  },
  media: {
    height: 250,
	},
	fontTitle: {
		fontSize: '16px',
		color: '#424749',
		fontWeight: '600'
	},
	textJustify: {
		textAlign: 'justify',
		padding: '16px 16px 5px 16px'
	},
	star: {
		margin: '-25px 0px 0px 30px',
    position: 'absolute'
	},
	fontSub: {
		fontSize: '12px',
		color: '#424749',
		fontWeight: '400'
	},
	padd16: {
		padding: '16px',
		justifyContent: 'space-between'
	},
	floatRight: {
		float:'right'
	}
});

const MediaCard = (props) => {
	const classes = useStyles()
  return (
		<div className={classes.root}>
			{
				[...Array(4)].map((item, index)=>(
				<Card className='card'>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image={food1}
							title="Contemplative Reptile"
						/>
						<CardContent className={classes.textJustify}>
							<Typography className={classes.fontTitle}>4.5</Typography>
							<Rating
								className={classes.star}
								name="customized-empty"
								defaultValue={4.5}
								precision={0.5}
								emptyIcon={<StarBorderIcon fontSize="inherit" />}
							/>
							<Typography className={classes.fontTitle}>Roasted Chicken with Scramble Egg</Typography>
							<Typography className={classes.fontSub} variant="body2" color="textSecondary" component="p">
								by Kulina &middot;  
								<span>
									{
										props.day?
										<span>
											Uptown Lunch
										</span>
										:
										<span>
											Lunar Dinner
										</span>
									}
								</span>
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className={classes.padd16}>
				<Typography className={classes.fontTitle}>Rp {thousandsSeparators(35000).split(',').join('.')}</Typography>
						<Button style={buttonColor1} onClick={()=>props.handleCart({qty:1,price:35000})} size="small">
							ADD +
						</Button>
					</CardActions>
				</Card>
				))
			}
		</div>
  );
}

export default MediaCard;