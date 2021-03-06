import * as React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { TodayEvent } from "../TodayEvent/TodayEvent";


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

                        <div className={classes.upperRowToday}>

                            <Typography className={classes.tittleTwo}>EVENTS TODAY</Typography>
                            <hr className={classes.lineTittle}></hr>

                            </div>

                            <TodayEvent type="1" date="10:30AM"></TodayEvent>
                            <TodayEvent type="2" date="2:15PM"></TodayEvent>

                        </div>

                        <div className={classes.eventsTodayMobile}>

                        <div className={classes.upperRowToday}>

                            <Typography className={classes.tittleTwo}>EVENTS TODAY</Typography>
                            <hr className={classes.lineTittle}></hr>

                            </div>

                            <div className={classes.containerTodayMobile}>

                            <TodayEvent type="1" date="10:30AM"></TodayEvent>
                            <div className={classes.separador}></div>
                            <TodayEvent type="2" date="2:15PM"></TodayEvent>

                            </div>



                        </div>



            </div>

           </div>



    );



}

EventElement.propTypes = {

    events: PropTypes.array,
    eventsToday: PropTypes.array,

}

const useStyles = makeStyles({

    separador: {

        width: "5%",
        height: "auto"

    },

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

    upperRowToday: {

        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "15px",

        "@media (max-width: 1000px)": {

            width: "100%",
            marginTop: "32px"

        }

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
        position: "relative",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        "@media (max-width: 1000px)": {

            flexDirection: "column",

        }


    },

    carousel: {

        width: "69%",
        height: "280px",
        backgroundColor: "yellow",
        borderRadius: "15px",

        "@media (max-width: 1000px)": {

            width: "100%",
            height: "280px",

        }
    },

    eventsToday: {

        width: "29%",
        height: "280px",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        "@media (max-width: 1000px)": {

            display: "none !important",

        },
    },

        eventsTodayMobile: {

            /*
            width: "29%",
            height: "280px",


            flexDirection: "column",
            justifyContent: "space-between",
            */

           display: "none",

            "@media (max-width: 1000px)": {

                display: "flex",
                flexDirection: "column",
                width: "100%",

            },



    },


    containerTodayMobile: {

        display: "flex",
        flexDirection: "row"
    },

    lineTittle: {

        width: "125%",
        height: "0.5px",
        textAlign:"right",
        marginTop: "10px",
        borderTop: "1px solid #E8E8EE",

        "@media (max-width: 1350px)": {

            display: "none",

        }

    },


    tittleTwo: {

        color: "#2F4E75",
        fontFamily: "Gotham",
        fontSize: "15px",
        fontWeight: "600",
        lineHeight: "26px",
        letterSpacing: "1px",
        width:"100%",



    },


});
