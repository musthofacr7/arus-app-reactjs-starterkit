import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AppBar from "../../component/appbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { createAnggota } from "../../services/anggota";
import Axios from "axios";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { RadioGroup } from "@material-ui/core";
function AddKeluarga(props) {
  const [data, setData] = useState({
    name: "",
    gender: "",
    nik: parseInt(),
    date_of_birth: new Date(""),
    place_of_birth: ""
  });
  const handleChange = async e => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
    console.log(newData);
  };

  // useEffect(() => {}, []);
  // const [errNik, setErrNik] = useState(false);

  const handleAdd = () => {
    if (data.nik.length < 15) {
      alert("Nik must at least 16");
    } else {
      createAnggota(data)
        .then(res => {
          console.log(res);
        })

        .catch(error => {
          if (error) {
            console.log(error);
          }
        });
    }
  };
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Tambah Data Anggota Keluarga" />
        <Grid container spacing={0}>
          <Grid item xs={12} className={classes.gridTop}>
            <Grid container spacing={0} className={classes.containerCard}>
              <Grid item xs={12} className={classes.gridInputNIK}>
                <TextField
                  onChange={handleChange}
                  // error={errNik}
                  id="standard-password-input"
                  label="Nomor Induk Kewarganegaraan (NIK)"
                  className={classes.textField}
                  type="number"
                  autoComplete="current-password"
                  name="nik"
                />
              </Grid>
              <Grid item xs={12} className={classes.gridInputNIK}>
                <TextField
                  onChange={handleChange}
                  id="standard-password-input"
                  label="Nama"
                  className={classes.textField}
                  type="text"
                  name="name"
                />
              </Grid>

              <Grid item xs={12} className={classes.radioGrid}>
                <Typography className={classes.textGender}>
                  Jenis Kelamin
                </Typography>
                <Grid container spacing={0}>
                  <RadioGroup
                    className={classes.radioGroup}
                    aria-label="gender"
                    onChange={handleChange}
                  >
                    <Grid item xs={6}>
                      <FormControlLabel
                        className={classes.gender}
                        value="male"
                        control={<Radio color="primary" />}
                        label="Laki Laki"
                        labelPlacement="end"
                        name="gender"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <FormControlLabel
                        className={classes.gender}
                        value="female"
                        control={<Radio color="primary" />}
                        label="Perempuan"
                        labelPlacement="end"
                        name="gender"
                      />
                    </Grid>
                  </RadioGroup>
                </Grid>
              </Grid>
              <Grid item xs={12} className={classes.gridInputNIK}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    format="MM/dd/yyyy"
                    onChange={handleChange}
                    id="standard-password-input"
                    placeholder="Tanggal Lahir"
                    className={classes.textField}
                    value="date_of_birth"
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                    name="date_of_birth"
                  />
                </MuiPickersUtilsProvider>
              </Grid>
              <Grid
                item
                xs={12}
                style={{ paddingBottom: "5%" }}
                className={classes.gridInputNIK}
              >
                <TextField
                  onChange={handleChange}
                  id="standard-password-input"
                  label="Tempat Lahir"
                  className={classes.textField}
                  type="text"
                  name="place_of_birth"
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
                onClick={handleAdd}
              >
                <Typography style={{ textTransform: "none" }}>
                  Tambah
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default AddKeluarga;
