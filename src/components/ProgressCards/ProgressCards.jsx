import * as React from "react";
import { Typography } from "@material-ui/core";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonBase } from '@material-ui/core';


export const ProgressCards = ({task,number,special}) => {

    const classes = useStyles();

    function renderEvent(param) {
        switch(param) {
          case "1":
            return <Typography classes={{root:classes.notifType}} >Total Webinars</Typography>;
          case "2":
            return <Typography classes={{root:classes.notifType}} >Pending Assignments</Typography>;
          case "3":
            return <Typography classes={{root:classes.notifType}} >Total Units</Typography>;
          case "4":
            return <Typography classes={{root:classes.notifType}} >Total Readings</Typography>;
          case "5":
            return <Typography classes={{root:classes.notifType}} >Total Videos</Typography>;
        }
      }



    return( <ButtonBase className={classes.taskCardContainer}>



      <div className={classes.info}>

          {
          renderEvent(task)
          }

      <Typography classes={{root:classes.taskNumber}}>{number}</Typography>

      </div>




        </ButtonBase>


    );
}

ProgressCards.propTypes = {

    task: PropTypes.string,
    number: PropTypes.string,
    special: PropTypes.bool

}

const useStyles = makeStyles({

  taskCardContainer: {

      width: "205px",
     /* minWidth: "170px",*/
      height: "83px",
      marginBottom: "25px",
      paddingLeft: "25px",
      paddingRight: "25px",
      backgroundColor: "white",
      borderRadius: "10px",

      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",

      '&:hover': {
          backgroundColor: "rgba(0, 0, 0, 0.04);"
       }

  },

  taskCardContainerSpecial: {

    width: "205px",
    /* minWidth: "170px",*/
     height: "83px",
     marginBottom: "25px",
     paddingLeft: "25px",
     paddingRight: "25px",
     backgroundColor: "black",
     borderRadius: "10px",

     display: "flex",
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center",

     '&:hover': {
         backgroundColor: "rgba(0, 0, 0, 0.04);"
      }

  },

  notImage: {

      width: "50px",
      height: "50px",

  },

  info: {

      width: "222px",
      height: "inherit",

      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "left"


  },

  notifType: {

      color: "#9c9ab5",
      fontFamily: "Gotham",
      fontSize: "17px",
      fontWeight: "400",
      lineHeight: "18px",
      letterSpacing: "-0.4857143px"
  },

  date: {


      color: "#9d9bb6",
      fontFamily: 'Gilroy',
      fontSize: "13px",
      fontWeight: "400",
      lineHeight: "17px"

  },

  taskNumber: {

      color: "#103460",
      fontFamily: "Gotham",
      fontSize: "40px",
      fontWeight: "350",
      lineHeight: "48px",
      letterSpacing: "-1.1428572px",

  }



});
