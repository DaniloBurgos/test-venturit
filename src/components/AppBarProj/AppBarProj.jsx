import * as React from "react";
import { Typography } from "@material-ui/core";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Popover from '@material-ui/core/Popover';
import { NotifElement } from "../NotifElement/NotifElement";



const useStyles = makeStyles({



    appBarContent: {

        width: "100%",
        height: "100%",
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        paddingLeft: "10px",
        paddingRight: "10px",

    },

    logo: {
        display: "block",
        height: "58%"

    },

    root: {

        backgroundColor: "#3D84FF",
        '&:hover': {
            backgroundColor: "#3374D1",
         },
         borderRadius: "15px",

        fontSize: "0.8rem",
         fontStyle: "normal",
         fontWeight: "300",
         color: 'white',
         fontFamily: "Gotham",

         height: "45px",
         width: "79px",
         marginRight:"10px"

    },

    add: {

        width: "7px",
        marginRight: "5px",

        color: "#ffffff",
        fontfamily: "Gotham",
        fontSize: "13px",
        fontWeight: "350",
        lineHeight: "16px"

    },

    function: {

        width: "20px",

    },

    downNavbar: {

        width: "13px",

    },

    userName: {

        margin: "0 12px",
        color: "#3e3a6f",
        fontFamily: "Nunito",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "26px"

    },

    thumbNail: {

        width: "56px"

    },

    rightSide: {

        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },

    searchContainer: {

        backgroundColor: "#F5F5FB",
        width: "311px",
        height: "50px",
        padding: "0 15px",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

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

    new: {

        position: "absolute",
        top: "21px",
        left: "24px",
        width: "13px",
        height: "13px"
    },

    miPopOver: {

        width: "335px",
        backgroundColor: "white",
        padding: "25px 25px 0px 25px",
        boxSizing: "border-box"
    }

});


export const AppBarProj = ({userName,userPhoto}) => {

    const classes = useStyles();







    /*//////////////////////////////////////   MessageNotifications  /////////////////////////////*/

    const [anchorElMess, setAnchorElMess] = React.useState(null);

    const handleClickMess = (event) => {
        setAnchorElMess(event.currentTarget);
        changeMessage(false);
    };

    const handleCloseMess = () => {
        setAnchorElMess(null);
    };

    const openMess = Boolean(anchorElMess);
    const idMess = openMess ? 'simple-popover' : undefined;

    /*/////////////   PopOverMessages Object  //////////////////*/

    const [popMessage, changePopMessages] = React.useState ([
        {id: "1",
         date:"Today, 10:30AM",
         type: "4"},

         {id: "2",
         date:"Yesterday, 9:45PM",
         type: "5"},

         {id: "3",
         date:"Yesterday, 10:00PM",
         type: "6"}
    ]);

    /*////////////////////////////////////////////////////////////////////////////////////////////*/









    /*//////////////////////////////////////   PopOverNotifications  /////////////////////////////*/

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      changeNotification(false);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    /*/////////////   PopOverNotifications Object  //////////////////*/

    const [popNotifications, changePopNotifications] = React.useState ([
        {id: "1",
         date:"Today, 10:30AM",
         type: "1"},

         {id: "2",
         date:"Yesterday, 9:45PM",
         type: "2"},

         {id: "3",
         date:"Yesterday, 10:00PM",
         type: "3"}
    ]);

    /*////////////////////////////////////////////////////////////////////////////////////////////*/

    /*//////////////////////////////////////   Message and Notif    //////////////////////////////*/
    const [notification, changeNotification] = React.useState (true);
    const [message, changeMessage] = React.useState (true);

    function handleNotif () {

        changeNotification(!notification);

    }

    function handleMessage () {

        changeMessage(false);

    }

    /*////////////////////////////////////////////////////////////////////////////////////////////*/


    return(<div className={classes.appBarContent}>

                <img src="/img/logo.png" className={classes.logo} alt=""/>

                <div className={classes.searchContainer}>

                  <input className={classes.searchInput} type="text" placeholder="Search and Find"></input>

                  <IconButton aria-label="notification">
                     <img src="/img/search.svg" className={classes.search} alt=""/>
                  </IconButton>
                </div>


                <div className={classes.rightSide}>

                    <Button variant="contained" disableElevation className={classes.root}>
                        <img src="/img/add.svg" className={classes.add} alt=""/> ADD
                    </Button>

                    <IconButton aria-describedby={id} aria-label="notification" onClick={handleClick}>
                        <img src="/img/notification.png" className={classes.function}/>
                        {notification===true
                         ?<img src="/img/new.png" className={classes.new} alt=""/>
                         :null
                        }
                    </IconButton>

                    <Popover

                        classes={{paper: classes.miPopOver}}

                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}

                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                    >

                        {popNotifications.map((not)=>{

                            return <NotifElement key={not.id} type={not.type} date={not.date}></NotifElement>

                        })

                        }

                    </Popover>

                    <IconButton aria-describedby={idMess} aria-label="message" onClick={handleClickMess}>
                        <img src="/img/message.png" className={classes.function} alt=""/>
                        {message===true
                         ?<img src="/img/new.png" className={classes.new} alt=""/>
                         :null
                        }
                    </IconButton>

                    <Popover

                        classes={{paper: classes.miPopOver}}

                        id={idMess}
                        open={openMess}
                        anchorEl={anchorElMess}
                        onClose={handleCloseMess}

                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                        >

                        {popMessage.map((not)=>{

                            return <NotifElement key={not.id} type={not.type} date={not.date}></NotifElement>

                        })

                        }

                    </Popover>

                    <Typography className={classes.userName}>{userName}</Typography>

                    <img src={userPhoto} className={classes.thumbNail} alt=""/>

                    <IconButton aria-label="message">
                        <img src="/img/downNavbar.png" className={classes.downNavbar} alt=""/>
                    </IconButton>

                </div>
          </div>
    );
}

AppBarProj.propTypes = {

    userName: PropTypes.string,
    userPhoto: PropTypes.string,

}
