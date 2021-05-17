import * as React from "react";
import { Typography } from "@material-ui/core";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonBase } from '@material-ui/core';

export const NotifElement = ({content,date,icon}) => {

    const classes = useStyles();


    return(<ButtonBase className={classes.notifContainer}>

                <img src={icon} className={classes.notImage} alt=""/>

                <div className={classes.info}>

                <Typography classes={{root:classes.notifType}} >{content}</Typography>

                <Typography classes={{root:classes.date}}>{date}</Typography>

                </div>

          </ButtonBase>
    );
}

NotifElement.propTypes = {

    content: PropTypes.string,
    date: PropTypes.string,
    icon: PropTypes.string

}

const useStyles = makeStyles({

  notifContainer: {

      width: "283px",
      height: "50px",
      marginBottom: "25px",


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
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "flex-start",


  },

  notifType: {

      height: "20px",
      color: "#192452",
      fontFamily: 'Gilroy',
      fontSize: "15px",
      fontWeight: "400",
      lineHeight: "20px"
  },

  date: {


      color: "#9d9bb6",
      fontFamily: 'Gilroy',
      fontSize: "13px",
      fontWeight: "400",
      lineHeight: "17px"

  },



});
