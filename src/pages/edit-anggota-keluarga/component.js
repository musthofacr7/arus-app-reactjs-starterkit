import React from "react";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField";
import AppBar from "../../component/appbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

function EditAnggotaKeluarga(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Edit Data Anggota Keluarga" />

        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.gridTop}>
            <Grid container spacing={0} className={classes.containerCard}>
              <Grid item xs={12} className={classes.gridInputNIK}>
                <TextField
                  id="standard-password-input"
                  label="NIK"
                  className={classes.textField}
                  type="text"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12} className={classes.gridInputNIK}>
                <TextField
                  id="standard-password-input"
                  label="Nama"
                  className={classes.textField}
                  type="text"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12} className={classes.gridInputNIK}>
                <TextField
                  id="standard-password-input"
                  label="Umur"
                  className={classes.textField}
                  type="text"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12} className={classes.radioGrid}>
                <Typography className={classes.textGender}>
                  Jenis Kelamin
                </Typography>
                <Grid container spacing={0}>
                  <Grid item xs={6}>
                    <FormControlLabel
                      className={classes.gender}
                      value="end"
                      control={<Radio color="primary" />}
                      label="Laki Laki"
                      labelPlacement="end"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      className={classes.gender}
                      value="end"
                      control={<Radio color="primary" />}
                      label="Perempuan"
                      labelPlacement="end"
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.gridInputNIK}>
                <TextField
                  id="standard-password-input"
                  label="Tanggal Lahir"
                  className={classes.textField}
                  type="text"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ paddingBottom: "5%" }}
                className={classes.gridInputNIK}
              >
                <TextField
                  id="standard-password-input"
                  label="Tempat Lahir"
                  className={classes.textField}
                  type="text"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} className={classes.gridButton}>
            <Box className={classes.buttonBox}>
              <Button
                onClick={() =>
                  alert("Apakah anda yakin ingin melakukan perubahan?")
                }
                disableRipple={true}
                id="submit-button"
                className={classes.button}
                style={{ backgroundColor: "#F7A647" }}
              >
                <Typography style={{ textTransform: "none" }}>
                  Simpan Perubahan
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default EditAnggotaKeluarga;