import * as React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import SimpleAccordion from "../SimpleAccordion/SimpleAccordion";

export const ActivityElement = ({events, eventsToday}) => {

    const classes = useStyles();


    return(<div className={classes.eventContainer}>


            <div className={classes.upperRow}>

                <Typography className={classes.tittle}>Activity</Typography>
                <hr className={classes.lineTittle}></hr>

            </div>

            <div className={classes.lowerRow}>

                <SimpleAccordion></SimpleAccordion>

            </div>

           </div>



    );



}

ActivityElement.propTypes = {

    events: PropTypes.array,
    eventsToday: PropTypes.array,

}

const useStyles = makeStyles({

    eventContainer: {

        width: "inherit",
        height: "inherit",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start"


    },

    upperRow: {

        width: "inherit",
        height: "66px",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",



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
        flexDirection: "column",
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
        backgroundColor: "red"

    },

    lineTittle: {

        width: "88%",
        height: "0.5px",
        textAlign:"right",
        marginTop: "18px",
        borderTop: "1px solid #E8E8EE"

    },


});