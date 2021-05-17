import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

export default function SimpleAccordion() {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <div className={classes.root}>


      <Accordion className={classes2.editAcordion}>
        <AccordionSummary
          expandIcon={<img src="/test-venturit/img/expandAccordion.png"></img>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes2.headerAcordion}
        >
          <div className={classes2.headerAcordion}>

          <img className={classes2.acordionIcon} src="/test-venturit/img/activity1.png"></img>
          <Typography className={classes2.acordionHeading}>You have new 5 followers including <p>Kathryn Crawford</p> and <p>Piper Shaw</p></Typography>

          </div>

        </AccordionSummary>
        <AccordionDetails className={classes2.acordionDetails}>
          <Typography className={classes2.acordionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes2.editAcordion}>
        <AccordionSummary
          expandIcon={<img src="/test-venturit/img/expandAccordion.png"></img>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes2.headerAcordion}
        >
          <div className={classes2.headerAcordion}>

          <img className={classes2.acordionIcon} src="/test-venturit/img/activity2.png"></img>
          <Typography className={classes2.acordionHeading}>3 new events were added to your calendar</Typography>

          </div>

        </AccordionSummary>
        <AccordionDetails className={classes2.acordionDetails}>
          <Typography className={classes2.acordionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion className={classes2.editAcordion}>
        <AccordionSummary
          expandIcon={<img src="/test-venturit/img/expandAccordion.png"></img>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes2.headerAcordion}
        >
          <div className={classes2.headerAcordion}>

          <img className={classes2.acordionIcon} src="/test-venturit/img/activity3.png"></img>
          <Typography className={classes2.acordionHeading}>You have 3 pending readings to complete 🤓</Typography>

          </div>

        </AccordionSummary>
        <AccordionDetails className={classes2.acordionDetails}>
          <Typography className={classes2.acordionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}

SimpleAccordion.propTypes = {

    events: PropTypes.array,
    eventsToday: PropTypes.array,

}

const useStyles2 = makeStyles({

  acordionText: {
  color: "#103460",
  fontFamily: "Nunito",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "25px"
},

acordionHeading: {

    color: "#9d9bb6",
    fontFamily: "Nunito",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "26px",
    display: "inline",

    "& >p":{

        color: "#3d84ff",
        fontFamily: "Nunito",
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "26px",
        display: "inline"

    }
},

editAcordion: {

  boxShadow: "none",
  marginBottom: "10px",
  borderRadius: "10px",
  marginBottom: "20px",

  '&::before': {
    display: "none",
 },

},

headerAcordion: {

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingRight: "26px"
},

acordionIcon: {

  marginLeft: "5px",
  marginRight: "17px"

},

acordionDetails: {
  paddingLeft: "80px",
  marginBottom: "20px"
},

});

const useStyles = makeStyles((theme) => ({
root: {
  width: '100%',
},
heading: {
  fontSize: theme.typography.pxToRem(15),
  fontWeight: theme.typography.fontWeightRegular,
},

}));