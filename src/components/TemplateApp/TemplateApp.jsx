import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

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
                    <div className={classes.searchMobile}>

                        <div className={classes.searchContainer+" "+classes.deskElement}>

                            <input className={classes.searchInput} type="text" placeholder="Search and Find"></input>

                            <IconButton aria-label="notification">
                                <img src="/test-venturit/img/search.svg" className={classes.search} alt=""/>
                            </IconButton>
                         </div>

                    </div>
                    {children[2]}
                </div>

            </div>



    );



}

const useStyles = makeStyles({

    searchContainer: {

        backgroundColor: "#F5F5FB",
        width: "311px",
        height: "50px",
        paddingLeft: "15px",
        paddingRight: "5px",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        boxSizing: "border-box",


    },

    search: {

        width: "13px",
        height: "13px"
    },

    searchInput: {

        border: "none",
        backgroundColor: "inherit",
        width: "90%",
        height: "80%",

        '&:focus': {
            outline: "none",
         },

         '&::placeholder': {
            color: "#9d9bb6",


            color: "#9d9bb6",
            fontFamily: "Nunito",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "-0.42857143px"


         }

    },


    searchMobile: {

        width: "100%",
        height: "97px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        display: "none",
        alignItems: "center",

        "@media (max-width: 1000px)": {

            display: "flex",

        },

    },



    template: {

        maxWidth: "1440px",
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
        boxShadow: "0 10px 6px -6px rgba(0, 0, 0, 0.05)"

    },

    navBar: {

        width: "55px",
        height: "100vh",
        backgroundColor: "#3D84FF",
        zIndex: "100",
        position: "fixed",
        top: "80px",

        "@media (max-width: 1000px)": {

            display: "none",

        }


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
