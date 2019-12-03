import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  CssBaseline
} from "@material-ui/core";
import Profile from "../../assets/Ellipse 8.png";
import AppBar from "../../component/appbar";
import { Link } from "react-router-dom";
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xs" className={classes.container}>
          <AppBar goBack title="Edit Profile" />
          <Grid
            container
            align="center"
            spacing={0}
            className={classes.gridContainer}
          >
            <Grid item xs={12} className={classes.gridAvatar}>
              <img src={Profile} className={classes.image} alt="avatar" />
            </Grid>
            <Grid item xs={12} className={classes.gridEdit}>
              <Link className={classes.link} onClick={()=> alert('ganti foto?')}>
                <Typography className={classes.ganti}> Ganti Foto</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} className={classes.gridForm}>
              <form className={classes.form}>
                <TextField
                  margin="normal"
                  label="NIK"
                  defaultValue="09012329817328371"
                />
                <TextField
                  margin="normal"
                  label="Name"
                  defaultValue="Kina Gatie Putri"
                />
              </form>
              <Grid item xs={12} align="center" className={classes.saveButton}>
                <Button
                  variant="contained"
                  disableRipple={true}
                  style={{ backgroundColor: "#F7A647" }}
                  className={classes.button}
                  onClick={() => alert("Anda yakin melakukan perubahan ")}
                >
                  <Typography className={classes.save}>
                    Simpan Perubahan
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default component;
