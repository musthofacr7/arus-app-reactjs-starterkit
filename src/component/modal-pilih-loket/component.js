import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconPopUp from '../../assets/alert-circle.png';
import { Grid, Typography, Box } from '@material-ui/core';
// import LogoLocket from "../locket-logo/component";
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
    width: '280px',
    height: '311px',
    backgroundColor: theme.palette.background.paper,
    border: '0.1px solid #FFFFFF',
    borderRadius: '8px',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  question: {
    color: '#00000',
    fontSize: '14px'
  },
  locket: {
    color: ' #26CAC0',
    fontWeight: 'bold',
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxLocket: {
    paddingTop: '12px',
    background: '#E9F9F8',
    border: ' 1px solid #26CAC0',
    boxSizing: 'border-box',
    borderRadius: '8px',
    width: '86px',
    height: '86px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  typographyLoket: {
    fontfamily: 'Google-Sans',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '18px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textalign: 'center',
    color: '#26CAC0',
    justifyContent: 'center'
  },
  TypographyLoketCategory: {
    fontfamily: 'Google-Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '48px',
    lineHeight: '61px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textalign: 'center',
    color: '#26CAC0',
    justifyContent: 'center'
  }
}));

function SimpleModal(props) {
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
            <Box className={classes.boxLocket}>
              <Typography className={classes.typographyLoket}>
                Locket
              </Typography>
              <Typography className={classes.TypographyLoketCategory}>
                A
              </Typography>
            </Box>
            {/* <LogoLocket title="Ass" /> */}
          </Grid>
          <Grid item>
            <Typography className={classes.question}>
              Apakah anda yakin memilih
              <Typography className={classes.locket}>locket A</Typography>
            </Typography>
          </Grid>

          <SimpleModal />
        </Grid>
      </div>
    </Modal>
  );
}
export default SimpleModal;
