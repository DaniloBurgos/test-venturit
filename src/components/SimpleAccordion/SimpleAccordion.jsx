import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PropTypes from 'prop-types';

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
      lineHeight: "26px"
  },

  editAcordion: {

    boxShadow: "none",
    marginBottom: "10px"

  }

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

export default function SimpleAccordion() {
  const classes = useStyles();
  const classes2 = useStyles2();

  return (
    <div className={classes.root}>


      <Accordion className={classes2.editAcordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes2.acordionHeading}>You have new 5 followers including Kathryn Crawford and Piper Shaw</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes2.acordionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes2.editAcordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes2.acordionHeading}>3 new events were added to your calendar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes2.acordionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes2.editAcordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes2.acordionHeading}>You have 3 pending readings to complete 🤓</Typography>
        </AccordionSummary>
        <AccordionDetails>
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