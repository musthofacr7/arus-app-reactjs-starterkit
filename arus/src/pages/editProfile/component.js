import React from 'react';
import { Container, Grid, Typography, TextField } from '@material-ui/core';
import Profile from '../../assets/Ellipse 8.png';
import BottomNavigation from '../../component/bottom-navigation';
import AppBar from '../../component/appbar';
import { Link } from 'react-router-dom';
import User from '../../assets/users.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.Container}>
        <AppBar goBack title="Edit Profile" />
        <Grid
          container
          align="center"
          spacing={0}
          className={classes.gridContainer}
        >
          <Grid item xs={2} className={classes.gridAvatar}>
            <img src={Profile} className={classes.image} />
          </Grid>
          <Grid item xs={2} className={classes.gridEdit}>
            <Link className={classes.link}>
              <Typography className={classes.editFoto}> Ganti Foto</Typography>
            </Link>
          </Grid>
          <Grid item xs={4} className={classes.gridField}>
            a
            {/* <form>
              <TextField label="NIK" defaultValue="Hello World"/>
              <TextField label="NIK" />
            </form> */}
          </Grid>
          <Grid item xs={4} className={classes.gridField}></Grid>
        </Grid>

        <Grid
          container
          align="center"
          spacing={0}
          className={classes.gridContainer}
        >
          <Grid item xs={2} className={classes.gridAvatar}>
            <img src={Profile} className={classes.image} />
          </Grid>
          <Grid item xs={2} className={classes.gridEdit}>
            <Link className={classes.link}>
              <Typography className={classes.editFoto}> Ganti Foto</Typography>
            </Link>
          </Grid>
          <Grid item xs={4} className={classes.gridField}>
            a
            {/* <form>
              <TextField label="NIK" defaultValue="Hello World"/>
              <TextField label="NIK" />
            </form> */}
          </Grid>
          <Grid item xs={4} className={classes.gridField}></Grid>
        </Grid>

        <BottomNavigation />
      </Container>
    );
  }
}

export default component;
