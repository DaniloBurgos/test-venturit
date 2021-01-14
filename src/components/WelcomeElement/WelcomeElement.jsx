import * as React from "react";
import { Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const useStyles = makeStyles({

    welcomeContainer: {

        width: "inherit",
        height: "inherit"

    },

    upperRow: {

        width: "inherit",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start"

    },

    tittle: {

        color: "#103460",
        fontFamily: "Gotham",
        fontSize: "30px",
        fontWeight: "350",
        lineHeight: "36px",
        letterSpacing: "-0.85714287px"

    },

    languageCard: {

        width: "165px",
        height: "80px",
        backgroundColor: "white",

        boxShadow: "0 4px 3px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.11)",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"


    },

    langCurrent: {

        color: "#9d9bb6",
        fontFamily: 'Gilroy',
        fontSize: "12px",
        fontWeight: "400",
        lineHeight: "16px",

    },

    languageBadge: {

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "105px"

    },


    langName: {


        color: "#192452",
        fontFamily: 'Gilroy',
        fontSize: "24px",
        fontWeight: "400",
        lineHeight: "32px",
        marginLeft: "3px"

    },

    lowerRow: {

        width: "100%",
        height: "146",
        position: "relative"

    },

    langFlag: {

        width: "100%",


    },



    bannerInfo: {

        position: "absolute",
        top: "55%",
        left: "240px",
        transform: "translateY(-50%)"

    },



    greeting: {

        color: "#f5f5fb",
        fontFamily: "Gotham",
        fontSize: "30px",
        fontWeight: "350",
        lineHeight: "36px",
        letterSpacing: "-0.85714287px"

    },

    state: {

        color: "#ffffff",
        fontFamily: "Nunito",
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "26px",

    }





});

export const WelcomeElement = ({userName, state, language}) => {

    const classes = useStyles();


    return(<div className={classes.welcomeContainer}>


            <div className={classes.upperRow}>

                <Typography className={classes.tittle}>Dashboard</Typography>

                <ButtonBase className={classes.languageCard}>

                    <Typography className={classes.langCurrent} >Currently Learning</Typography>

                    <div className={classes.languageBadge}>
                        <img src={`./img/${language.toLowerCase()}.png`} className={classes.langFlag}></img>
                        <Typography className={classes.langName}>{language}</Typography>
                    </div>

                </ButtonBase>

            </div>

            <div className={classes.lowerRow}>

                        <img src={"./img/header.png"} className={classes.langFlag}></img>


                        <div className={classes.bannerInfo}>
                            <Typography className={classes.greeting}>Welcome back, {userName}</Typography>
                            <Typography className={classes.state}>{state}🥳</Typography>
                        </div>



            </div>

           </div>



    );



}

WelcomeElement.propTypes = {

    userName: PropTypes.string,
    state: PropTypes.string,
    language: PropTypes.string,

}
