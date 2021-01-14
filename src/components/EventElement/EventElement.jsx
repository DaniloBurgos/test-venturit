import * as React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { TodayEvent } from "../TodayEvent/TodayEvent";



const useStyles = makeStyles({

    eventContainer: {

        width: "inherit",
        height: "inherit",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",



    },

    upperRow: {




        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",

        width: "100%",


        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "25px"

    },

    tittle: {

        color: "#103460",
        fontFamily: "Gotham",
        fontSize: "30px",
        fontWeight: "350",
        lineHeight: "36px",
        letterSpacing: "-0.85714287px"

    },

    lowerRow: {

        width: "100%",
        height: "146",
        position: "relative",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"


    },

    carousel: {

        width: "69%",
        height: "280px",
        backgroundColor: "yellow"
    },

    eventsToday: {

        width: "29%",
        height: "280px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"


    },

    lineTittle: {

        width: "88%",
        height: "0.5px",
        textAlign:"right",
        marginTop: "18px",
        borderTop: "1px solid #E8E8EE"

    },


    tittleTwo: {

        color: "#103460",
        fontFamily: "Gotham",
        fontSize: "15px",
        fontWeight: "400",
        lineHeight: "26px",
        letterSpacing: "1px",
        width:"100%"

    },


});

export const EventElement = ({events, eventsToday}) => {

    const classes = useStyles();


    return(<div className={classes.eventContainer}>


            <div className={classes.upperRow}>

                <Typography className={classes.tittle}>Events</Typography>

            </div>

            <div className={classes.lowerRow}>

                        <div className={classes.carousel}>





                        </div>

                        <div className={classes.eventsToday}>

                        <div className={classes.upperRow}>

                            <Typography className={classes.tittleTwo}>Events Today</Typography>
                            <hr className={classes.lineTittle}></hr>

                            </div>

                            <TodayEvent type="1" date="10:30AM"></TodayEvent>
                            <TodayEvent type="2" date="2:15PM"></TodayEvent>

                        </div>



            </div>

           </div>



    );



}

EventElement.propTypes = {

    events: PropTypes.array,
    eventsToday: PropTypes.array,

}
