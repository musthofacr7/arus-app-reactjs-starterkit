import React from "react";
import {
  Typography,
  Grid,
  Container,
  Box,
  CssBaseline,
  Button
} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AppBar from "../../component/appbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

class component extends React.Component {
  render() {
    const { classes } = this.props;
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
                    label="Nomor Induk Kewarganegaraan (NIK)"
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
                        value="end"
                        control={<Radio color="primary" />}
                        label="Laki Laki"
                        labelPlacement="end"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
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
                  disableRipple={true}
                  id="submit-button"
                  className={classes.button}
                  style={{ backgroundColor: "#F7A647" }}
                >
                  Simpan Perubahan
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default component;
