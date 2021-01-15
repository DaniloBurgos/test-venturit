import * as React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { ProgressCards } from "../ProgressCards/ProgressCards";


export const ProgressComponent = ({events, eventsToday}) => {

    const classes = useStyles();


    return(<div className={classes.progressContainer}>


            <div className={classes.progressGraphic}>




            </div>

            <div className={classes.progressData}>

                <div className={classes.upperColumn}>

                    <div className={classes.progressTitle}>

                        <Typography className={classes.tittle}>Progress</Typography>
                        <hr className={classes.lineTittle}></hr>

                     </div>



                     <div className={classes.dataCards}>

                            <ProgressCards task="1" number="9"></ProgressCards>
                            <ProgressCards task="2" number="0"></ProgressCards>
                            <ProgressCards task="3" number="5"></ProgressCards>
                            <ProgressCards task="4" number="14"></ProgressCards>


                     </div>

                </div>

                <div className={classes.lowerConfirm}>

                    <div className={classes.lowerConfirmText}>

                        <Typography className={classes.firstLower}>Confirm your account details</Typography>
                        <Typography className={classes.secondLower}> Please confirm your email and phone number.😰</Typography>

                    </div>



                    <img className={classes.bannerFinal} src="./img/bannerFinal.png"></img>

                </div>


            </div>



           </div>



    );



}

ProgressComponent.propTypes = {

    events: PropTypes.array,
    eventsToday: PropTypes.array,

}

const useStyles = makeStyles({

    progressContainer: {

        width: "inherit",
        height: "inherit",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        "@media (max-width: 1000px)": {

            flexDirection: "column",


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

    progressGraphic: {

        width: "35%",
        height: "421px",
        backgroundColor: "#1A2D7D",
        borderRadius: "15px",

        "@media (max-width: 1000px)": {

            width: "100%",


        }



    },

    progressData: {

        width: "59%",
        height: "421px",



        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        "@media (max-width: 1000px)": {

            width: "100%",


        }

    },

    progressTitle: {

        width: "100%",
        height: "110px",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },

    lineTittle: {

        width: "75%",
        height: "0.5px",
        textAlign:"left",
        borderTop: "1px solid #E8E8EE"

    },

    bannerFinal: {
        width: "100%",
        height: "66px"
    },

    upperColumn:{

    },

    lowerConfirm: {
        position: "relative"
    },

    lowerConfirmText: {

        position: "absolute",
        top: "50%",
        left: "50%",
        width: "100%",
        textAlign: "center",

        transform: "translate(-50%,-50%)"


    },

    firstLower: {

        color: "#ffffff",
        fontFamily: "Nunito",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "26px",
        display: "inline"

    },

    secondLower: {

        color: "#ffffff",
        fontFamily: "Nunito",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "26px",
        display: "inline"

    },

    dataCards: {

        width: "100%",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",


        flexWrap: "wrap"

    }


});