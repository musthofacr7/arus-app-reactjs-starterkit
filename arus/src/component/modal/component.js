import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconPopUp from '../../assets/alert-circle.png';
import { Grid, Typography } from '@material-ui/core';
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '0.1px solid #FFFFFF',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    alignItems: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  question: {
    color: '#00000'
  }
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const { open, handleClose } = props;
  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
    >
      <div style={modalStyle} className={classes.paper}>
        <Grid container align="center" className={classes.container}>
          <Grid item>
            <img src={IconPopUp} align="center" alt="icon"/>
          </Grid>
          <Grid item>
            <Typography className={classes.question}>
              Apakah anda yakin memilih <Typography>locket A</Typography>
            </Typography>
          </Grid>

          <SimpleModal />
        </Grid>
      </div>
    </Modal>
  );
}
