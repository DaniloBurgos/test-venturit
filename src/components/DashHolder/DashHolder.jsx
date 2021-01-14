import * as React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

    dashHolder: {

        width: "80%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"

    },

    dashElement: {

        width: "100%",
        marginBottom: "7px",
        marginTop: "25px"

    }


});

export const DashHolder = ({children}) => {

    const classes = useStyles();


    return(<div className={classes.dashHolder}>

                <div className={classes.dashElement}>
                    {children[0]}
                </div>

                <div className={classes.dashElement}>
                     {children[1]}
                </div>

                <div className={classes.dashElement}>
                    {children[2]}
                </div>

                <div className={classes.dashElement}>
                    {children[3]}
                </div>

           </div>



    );



}
