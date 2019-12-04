import React from "react";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Profile from "../../assets/avatar.png";
import AppBar from "../../component/appbar";
import { Link } from "react-router-dom";


function EditProfile(props){
    const { classes } = props;
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


export default EditProfile;
