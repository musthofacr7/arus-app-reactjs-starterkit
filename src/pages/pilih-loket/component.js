import React from "react";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AppBar from "../../component/appbar";
import BoxCategoryLocket from "../../component/Box-category-loket";
import BottomNavigation from "../../component/bottom-navigation";
import { Link } from "react-router-dom";
import Modal from "../../component/modal-pilih-loket";

function PilihLocket(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { classes } = props;

  return (
    <Container maxWidth="xs" className={classes.Container}>
      <AppBar goBack title="Pilih Loket Antrian" />

      <Grid container spacing={4} className={classes.gridUpper}>
        <Link className={classes.link} onClick={handleOpen}>
          <Grid item>
            <BoxCategoryLocket title="A" />
          </Grid>
        </Link>
        <Link className={classes.link} onClick={handleOpen}>
          <Grid item>
            <BoxCategoryLocket title="B" />
          </Grid>
        </Link>
        <Link className={classes.link} onClick={handleOpen}>
          <Grid item>
            <BoxCategoryLocket title="C" />
          </Grid>
        </Link>
      </Grid>
      <Modal open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <BottomNavigation />
    </Container>
  );
}

export default PilihLocket;
