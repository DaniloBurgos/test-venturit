import * as React from "react";
import { Typography } from "@material-ui/core";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { ButtonBase } from '@material-ui/core';

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


export const NotifElement = ({type,date}) => {

    const classes = useStyles();

    function renderEvent(param) {
        switch(param) {
          case "1":
            return <Typography classes={{root:classes.notifType}} >You have a new session to Re</Typography>;
          case "2":
            return <Typography classes={{root:classes.notifType}} >You have a virtual</Typography>;
          case "3":
            return <Typography classes={{root:classes.notifType}} >You have a face to face</Typography>;
          case "4":
            return <Typography classes={{root:classes.notifType}} >Daniel has messaged you</Typography>;
          case "5":
            return <Typography classes={{root:classes.notifType}} >María has messaged you</Typography>;
          case "6":
            return <Typography classes={{root:classes.notifType}} >Ana has messaged you</Typography>;
        }
      }


    return(<ButtonBase className={classes.notifContainer}>

                <img src={"./img/not"+type+".png"} className={classes.notImage} alt=""/>

                <div className={classes.info}>

                    {
                    renderEvent(type)
                    }

                <Typography classes={{root:classes.date}}>{date}</Typography>

                </div>

          </ButtonBase>
    );
}

NotifElement.propTypes = {

    type: PropTypes.string,
    date: PropTypes.string,

}
