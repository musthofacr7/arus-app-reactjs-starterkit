import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import IconPopUp from '../../assets/alert-circle.png';
import { Grid, Typography, Box, Button } from '@material-ui/core';
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
  },
  gridItemTwo: {
    paddingTop: '2em'
  },
  gridItemTwo: {
    paddingTop: '2em'
  },
  buttonAgree: {
    border: '2px solid #F7A647',
    background: '#F7A647',
    minWidth: '118px',
    minHeight: '48px'
  },
  buttonCancel: {
    border: '2px solid #F7A647',
    background: '#FFFFFF',
    minWidth: '118px',
    minHeight: '48px'
  }
}));

function SimpleModal(props) {
  const classes = useStyles();
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
          <Grid item xs>
            <Box className={classes.boxLocket}>
              <Typography className={classes.typographyLoket}>
                Locket
              </Typography>
              <Typography className={classes.TypographyLoketCategory}>
                A
              </Typography>
            </Box>
          </Grid>
          <Grid item xs className={classes.gridItemTwo}>
            <Typography className={classes.question}>
              Apakah anda yakin memilih
              <Typography className={classes.locket}>locket A</Typography>
            </Typography>
          </Grid>
          <Grid item xs className={classes.gridItemTwo}>
            <Grid container spacing={0} align="center">
              <Grid item xs>
                <Button className={classes.buttonCancel} onClick={handleClose}>Batal</Button>
              </Grid>
              <Grid item xs>
                <Button className={classes.buttonAgree}>Iya</Button>
              </Grid>
            </Grid>
          </Grid>

          <SimpleModal />
        </Grid>
      </div>
    </Modal>
  );
}
export default SimpleModal;
