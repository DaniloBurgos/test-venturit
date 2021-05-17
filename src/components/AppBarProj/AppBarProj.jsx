import * as React from "react";
import { Typography } from "@material-ui/core";

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Popover from '@material-ui/core/Popover';
import { NotifElement } from "../NotifElement/NotifElement";


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
         content: "Daniel has messaged you",
         icon: "/test-venturit/img/not4.png"},

         {id: "2",
         date:"Yesterday, 9:45PM",
         content: "María has messaged you",
         icon: "/test-venturit/img/not5.png",},

         {id: "3",
         date:"Yesterday, 10:00PM",
         content: "Ana has messaged you",
         icon: "/test-venturit/img/not6.png"}
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
         content: "You have a new session to Re",
         icon: "/test-venturit/img/not1.png"},

         {id: "2",
         date:"Yesterday, 9:45PM",
         content: "You have a virtual",
         icon: "/test-venturit/img/not2.png"},

         {id: "3",
         date:"Yesterday, 10:00PM",
         content: "You have a face to face",
         icon: "/test-venturit/img/not3.png"}
    ]);

    /*////////////////////////////////////////////////////////////////////////////////////////////*/

    /*//////////////////////////////////////   Message and Notif    //////////////////////////////*/
    const [notification, changeNotification] = React.useState (true);
    const [message, changeMessage] = React.useState (true);

    /*////////////////////////////////////////////////////////////////////////////////////////////*/


    return(<div className={classes.appBarContent}>

                <IconButton className={classes.onlyMobile} aria-label="notification">
                    <img src="/test-venturit/img/menuMobileIcon.svg" className={classes.menuMobile} alt=""/>
                </IconButton>

                <img src="/test-venturit/img/logo.png" className={classes.logo} alt=""/>

                <div className={classes.searchContainer+" "+classes.deskElement}>

                  <input className={classes.searchInput} type="text" placeholder="Search and Find"></input>

                  <IconButton aria-label="notification">
                     <img src="/test-venturit/img/search.svg" className={classes.search} alt=""/>
                  </IconButton>
                </div>


                <div className={classes.rightSide}>

                    <Button variant="contained" disableElevation className={classes.root}>
                        <img src="/test-venturit/img/add.svg" className={classes.add} alt=""/> ADD
                    </Button>

                    <IconButton className={classes.deskElement} aria-describedby={id} aria-label="notification" onClick={handleClick}>
                        <img src="/test-venturit/img/notification.png" className={classes.function}/>
                        {notification===true
                         ?<img src="/test-venturit/img/new.png" className={classes.new} alt=""/>
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

                            return <NotifElement key={not.id} content={not.content} date={not.date} icon={not.icon}></NotifElement>

                        })

                        }

                    </Popover>

                    <IconButton className={classes.deskElement} aria-describedby={idMess} aria-label="message" onClick={handleClickMess}>
                        <img src="/test-venturit/img/message.png" className={classes.function} alt=""/>
                        {message===true
                         ?<img src="/test-venturit/img/new.png" className={classes.new} alt=""/>
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

                            return <NotifElement key={not.id} content={not.content} date={not.date}  icon={not.icon}></NotifElement>

                        })

                        }

                    </Popover>

                    <Typography className={classes.userName+" "+classes.deskElement}>{userName}</Typography>

                    <img src={userPhoto} className={classes.thumbNail} alt=""/>

                    <IconButton className={classes.deskElement+" "+classes.downNavbarButton} aria-label="message">
                        <img src="/test-venturit/img/downNavbar.png" className={classes.downNavbar} alt=""/>
                    </IconButton>

                </div>
          </div>
    );
}

AppBarProj.propTypes = {

    userName: PropTypes.string,
    userPhoto: PropTypes.string,

}

const useStyles = makeStyles({

    downNavbarButton: {
        marginRight: "16px"
    },

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

        "@media (max-width: 1000px)": {

            paddingLeft: "5%",
            paddingRight: "5%",

        }

    },

    menuMobile: {

        width: "24px",

    },

    onlyMobile: {

        display: "none",
        "@media (max-width: 1000px)": {

            display: "block",

        }

    },

    deskElement: {
        "@media (max-width: 1000px)": {

            display: "none !important",

        }
    },

    logo: {
        display: "block",
        height: "58%",
        marginLeft: "2px"

    },

    root: {

        backgroundColor: "#3D84FF",
        '&:hover': {
            backgroundColor: "#3374D1",
         },
         borderRadius: "15px",

        fontSize: "0.78rem",
         fontStyle: "normal",
         fontWeight: "500",
         color: 'white',
         fontFamily: "Nunito",

         height: "45px",
         width: "79px",
         marginRight:"40px",

         "@media (max-width: 1236px)": {

            display: "none",

        }

    },

    add: {

        width: "7px",
        marginRight: "5px",
        marginBottom: "1px",

        color: "#ffffff",
        fontSize: "13px",
        fontWeight: "350",
        lineHeight: "16px"

    },

    function: {

        width: "auto",
        height: "24px"

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
        paddingLeft: "15px",
        paddingRight: "5px",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        boxSizing: "border-box",
        marginLeft: "193px"

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
        top: "24px",
        left: "26px",
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
