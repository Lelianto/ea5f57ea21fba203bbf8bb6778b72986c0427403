import React from 'react';
import $ from "jquery";
import '../../App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  grow: {
		flexGrow: 1,
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: '200',
    marginTop: '40px'
	},
	shadowNone: {
		boxShadow: 'none !important'
  },
  circleBox: {
    color: 'black',
    display: 'inline',
    padding: '0px 5px'
  },
  date: {
    marginLeft: '-14px',
    position: 'relative',
    bottom: '-6px',
    fontSize: '16px',
    fontWeight: '600'
  },
  day: {
    position: 'relative',
    top: '-11px',
    fontSize: '8px',
    fontWeight: '300'
  },
  date1: {
    color:'black',
    marginLeft: '-14px',
    position: 'relative',
    bottom: '-6px',
    fontSize: '16px',
    fontWeight: '600'
  },
  day1: {
    color:'black',
    position: 'relative',
    top: '-11px',
    fontSize: '8px',
    fontWeight: '300'
  }
}));

$(document).ready(function(){
  document.getElementById('center').scrollIntoView({ inline: 'center' });
});

const DatePicker = (props) => {
  let dates = props.listDate
  const classes = useStyles();
  if (dates.length === 0) {
    return (
      <div>

      </div>
    )
  } else {
    return (
      <div>
        <AppBar position="static" className={[classes.grow, classes.shadowNone].join(' ')}>
          <Grid container id="div">
            <ul className='paddingZero'>
              {
                dates.map((date, index)=>(
                  <span>
                    {
                      index===7?
                      <span>
                        {
                          date.date>9? 
                          <li onClick={()=>props.handleChoosenDate(date)} className={classes.circleBox} id='center'>
                            {
                              date.date===props.choosenDate.date?
                              <span className="lettercircle2">
                                <span className={classes.day}>
                                  {date.day.split('').slice(0,3).join('').toUpperCase()}
                                </span>
                                <span className={classes.date}>
                                  {date.date}
                                </span>
                              </span>
                              :
                              <span className="lettercircle4">
                                <span className={classes.day1}>
                                  {date.day.split('').slice(0,3).join('').toUpperCase()}
                                </span>
                                <span className={classes.date1}>
                                  {date.date}
                                </span>
                              </span>
                            }
                          </li> 
                          :
                          <li onClick={()=>props.handleChoosenDate(date)} className={classes.circleBox} id='center'>
                            {
                              date.date===props.choosenDate.date?
                              <span className="lettercircle">
                                <span className={classes.day}>
                                  {date.day.split('').slice(0,3).join('').toUpperCase()}
                                </span>
                                <span className={classes.date}>
                                  {date.date}
                                </span>
                              </span>
                              :
                              <span className="lettercircle3">
                                <span className={classes.day1}>
                                  {date.day.split('').slice(0,3).join('').toUpperCase()}
                                </span>
                                <span className={classes.date1}>
                                  {date.date}
                                </span>
                              </span>
                            }
                          </li>   
                        }
                      </span>
                      :
                      <span>
                        {
                          date.date>9?
                          <li onClick={()=>props.handleChoosenDate(date)} className={classes.circleBox}>
                            {
                              date.date===props.choosenDate.date?
                              <span className="lettercircle2">
                                <span className={classes.day}>
                                  {date.day.split('').slice(0,3).join('').toUpperCase()}
                                </span>
                                <span className={classes.date}>
                                  {date.date}
                                </span>
                              </span>
                              :
                              <span className="lettercircle4">
                                <span className={classes.day1}>
                                  {date.day.split('').slice(0,3).join('').toUpperCase()}
                                </span>
                                <span className={classes.date1}>
                                  {date.date}
                                </span>
                              </span>
                            }
                          </li>
                          :
                          <li onClick={()=>props.handleChoosenDate(date)} className={classes.circleBox}>
                            {
                              date.date===props.choosenDate.date?
                              <span className="lettercircle">
                                <span className={classes.day}>
                                  {date.day.split('').slice(0,3).join('').toUpperCase()}
                                </span>
                                <span className={classes.date}>
                                  {date.date}
                                </span>
                              </span>
                              :
                              <span className="lettercircle3">
                                <span className={classes.day1}>
                                  {date.day.split('').slice(0,3).join('').toUpperCase()}
                                </span>
                                <span className={classes.date1}>
                                  {date.date}
                                </span>
                              </span>
                            }
                          </li>
                        }
                      </span>
                    }
                  </span>
                ))
              }
            </ul>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default DatePicker