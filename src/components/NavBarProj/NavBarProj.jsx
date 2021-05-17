import * as React from "react";

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';





export const NavBarProj = () => {

    const classes = useStyles();

    const [activeNavBarProj, changeActiveNavBarProj] = React.useState ({

        activeObject: null,
        objects: [{id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}]

    });


    function handleActive (index) {

        changeActiveNavBarProj({...activeNavBarProj, activeObject: activeNavBarProj.objects[index] });

    }

    function toggleActiveStyles (index) {

        if(activeNavBarProj.objects[index] === activeNavBarProj.activeObject){

            return classes.active;

        } else {

            return classes.inactive;

        }


    }


    return(<div className={classes.navBarContent}>


            {activeNavBarProj.objects.map((elem, index) => (

            <IconButton key={index} className={classes.root+" "+toggleActiveStyles(index)} onClick={()=>{
                handleActive(index);
            }}>

                {toggleActiveStyles(index) === classes.active
                ? <img src={"/test-venturit/img/menu"+index+".png"} className={classes.navIcon} alt=""/>
                : <img src={"/test-venturit/img/menuInac"+index+".png"} className={classes.navIcon} alt=""/>
                }


            </IconButton>

        ))}

          </div>



    );



}

const useStyles = makeStyles({

    navBarContent: {

        boxSizing: "border-box",
        width: "inhereit",
        height: "inherit",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
    },

    navIcon: {

        width: "17px",
        height: "auto"

    },

    root: {

        width: "inherit",
        height: "55px",
        borderRadius: "0",
        boxSizing: "border-box",


        '&:hover': {
            backgroundColor: "rgba(0, 0, 0, 0.06);"
         },

    },

    active: {

        backgroundColor: "#005dff !important",

    },

    inactive: {

        backgroundColor: "none",

    },




});