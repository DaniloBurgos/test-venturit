import * as React from "react";
import { Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


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

                        <img src={"./img/header.png"} className={classes.welcomeBannerDesktop}></img>
                        <img src={"./img/welcomeMobile.png"} className={classes.welcomeMobile}></img>
                        <img src={"./img/bannerWelcomeTablet.png"} className={classes.welcomeTablet}></img>


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

const useStyles = makeStyles({

    welcomeTablet:{

        width: "100%",
        display: "none",


        "@media (max-width: 1000px) and (min-width: 620px)": {

            display: "block",

        },


    },

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
        letterSpacing: "-0.85714287px",

        marginTop: "23px"

    },

    languageCard: {

        width: "165px",
        height: "78px",
        backgroundColor: "white",
        borderRadius: "5px",

        boxShadow: "10px 14px 60px 0 rgba(0, 0, 0, 0.07), 0 6px 20px 0 rgba(0, 0, 0, 0.11)",

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
        height: "12px"

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
        position: "relative"

    },

    langFlag: {

        width: "100%",

    },

    welcomeBannerDesktop: {

        width: "100%",
        display: "block",

        "@media (max-width: 1000px)": {

            display: "none",

        },


    },

    welcomeMobile: {

        width: "100%",
        display: "none",

        "@media (max-width: 619px)": {

            display: "block",

        },


    },



    bannerInfo: {

        position: "absolute",
        top: "55%",
        left: "240px",
        transform: "translateY(-50%)",

        "@media (max-width: 1000px)": {

            top: "70%",
            left: "50%",
            position: "absolute",
            transform: "translate(-50%,-50%)",
            textAlign: "center",
            width: "73%",

        },

    },



    greeting: {

        color: "#f5f5fb",
        fontFamily: "Gotham",
        fontSize: "30px",
        fontWeight: "350",
        lineHeight: "36px",
        letterSpacing: "-0.85714287px",
        marginBottom: "10px",

        "@media (max-width: 1000px)": {

            fontSize: "6vw",
            lineHeight: "6vw"

        },

    },

    state: {

        color: "#ffffff",
        fontFamily: "Nunito",
        fontSize: "18px",
        fontWeight: "500",
        lineHeight: "26px",

        "@media (max-width: 1000px)": {

            fontSize: "4vw",


        },

    }





});
