import * as React from "react";
import { Typography } from "@material-ui/core";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonBase } from '@material-ui/core';




export const TodayEvent = ({type,date}) => {

    const classes = useStyles();

    function renderEvent(param) {
        switch(param) {
          case "1":
            return <Typography classes={{root:classes.notifType}} >Webinar: the basics of…</Typography>;
          case "2":
            return <Typography classes={{root:classes.notifType}} >Team Building Activity🔥</Typography>;
        }
      }


    return(<ButtonBase className={classes.eventContainer}>

                <img src={"/test-venturit/img/thumbFinal.png"} className={classes.notImage} alt=""/>

                <div className={classes.info}>

                   <Typography classes={{root:classes.date}}>{date}</Typography>

                    {
                    renderEvent(type)
                    }



                </div>

          </ButtonBase>
    );
}

TodayEvent.propTypes = {

    type: PropTypes.string,
    date: PropTypes.string,

}

const useStyles = makeStyles({

    eventContainer: {

        width: "100%",
        height: "109px",

        paddingLeft: "21px",
        paddingRight: "21px",

        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "15px",

        '&:hover': {
            backgroundColor: "#F5F5F5"
         },


         "@media (max-width: 1000px)": {

            width: "100%",
            height: "200px",

            paddingBottom: "21px",
            paddingTop: "21px",

            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",

        }



    },

    notImage: {

        width: "64px",
        height: "64px",
        marginRight: "19px"

    },

    info: {


        height: "inherit",
        width:"auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",


    },

    notifType: {

        height: "auto",
        color: "#192452",
        fontFamily: 'Gilroy',
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "24px",
        textAlign: "left",
    },

    date: {


        color: "#9d9bb6",
        fontFamily: 'Gilroy',
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "21px"

    },



});
