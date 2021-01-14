import * as React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    template: {

        maxWidth: "1440px",
        minWidth: "1000px",
        position: "relative",
        margin: "0 auto",


    },

    appBar: {

        backgroundColor: "#FFFFFF",
        width: "100%",
        position: "sticky",
        top: "0",
        zIndex: "100",
        height: "80px",
        boxShadow: "0 10px 6px -6px rgba(0, 0, 0, 0.2)"

    },

    navBar: {

        width: "55px",
        height: "100vh",
        backgroundColor: "#3D84FF",
        zIndex: "100",
        position: "fixed",
        top: "80px",


    },

    dashContent: {

        position: "relative",
        width: "100%",
        height: "auto",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        paddingBottom: "43px"

    },


});

export const TemplateApp = ({children}) => {

    const classes = useStyles();


    return(<div className={classes.template}>


                <div className={classes.appBar}>
                    {children[0]}
                </div>

                <div className={classes.navBar}>
                     {children[1]}
                </div>

                <div className={classes.dashContent}>
                    {children[2]}
                </div>

            </div>



    );



}
