import * as React from "react";
import { Typography } from "@material-ui/core";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonBase } from '@material-ui/core';


export const ProgressCards = ({task,number,special}) => {

    const classes = useStyles();


    return(special ?
            <ButtonBase className={classes.taskCardContainerSpecial}>
              <div className={classes.info}>
                <Typography classes={{root:classes.notifType}} >{task}</Typography>
                <Typography classes={{root:classes.taskNumber}}>{number}</Typography>
              </div>
            </ButtonBase>
            :            <ButtonBase className={classes.taskCardContainer}>
            <div className={classes.info}>
              <Typography classes={{root:classes.notifType}} >{task}</Typography>
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
       },

       "@media (max-width: 1370px)": {

        width: "48%",

    }

  },

  taskCardContainerSpecial: {

    width: "205px",
    /* minWidth: "170px",*/
     height: "83px",
     marginBottom: "25px",
     paddingLeft: "25px",
     paddingRight: "25px",
     backgroundColor: "#1884FF",
     borderRadius: "10px",

     display: "flex",
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center",
     boxShadow: "10px 14px 30px 0 rgb(24 112 206 / 40%);",

     '&:hover': {
         backgroundColor: "#1870ce"
      },

      "@media (max-width: 1370px)": {

        width: "48%",

    },

     '& >div>p': {
       color: "white"
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
