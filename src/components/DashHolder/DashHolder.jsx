import * as React from "react";
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles({

    dashHolder: {

        width: "80%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",

        "@media (max-width: 1000px)": {

            width: "87%",

        }

    },

    dashElement: {

        width: "100%",
        marginBottom: "7px",
        marginTop: "21px"

    }


});
