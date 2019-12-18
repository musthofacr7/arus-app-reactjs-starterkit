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
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { updateAnggota, getDetailAnggota } from "../../services/anggota";
import swal from "sweetalert";
import { RadioGroup } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

function EditAnggotaKeluarga(props) {
  const { classes, match } = props;
  const [data, setData] = useState({
    name: "",
    gender: "",
    nik: parseInt(),
    date_of_birth: new Date(""),
    place_of_birth: ""
  });
  const [isLoading, setIsLoading] = useState(true);
  const handleChange = async e => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
    console.log(newData);
  };
  const handleDateChange = date => {
    setData({ ...data, date_of_birth: date });
  };
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    console.log(user);
    const family_id = match.params.id;
    console.log(family_id);
    const change = async () => {
      getDetailAnggota(family_id, user.id)
        .then(datas => {
          setData(datas.row);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
          alert("ups, terjadi kesalahan");
        });
    };
    change();
  }, []);
  const handleClickEdit = id => {
    if (data === null) {
      return alert("Data Tidak Boleh Kosong");
    }
    setIsLoading(true);

    const obj = JSON.parse(localStorage.getItem("user"));
    let user_id = obj.id;
    const id = match.params.id;

    updateAnggota(user_id, id)
      .then(res => {
        console.log(res);
        props.history.push("/list-anggota");
      })
      .catch(error => {
        setIsLoading(false);
        console.log(error);
      });

    // const user = JSON.parse(localStorage.getItem("user"));
    // const family_id = match.params.id;
    // updateAnggota(user.id, family_id)
    //   .then(() => {
    //     props.history.push("/list-anggota");
    //   })
    //   .catch(error => {
    //     if (error) {
    //       swal("Fill the blank please!");
    //     }
    //     if (error.response.statusText == "Unauthenticated") {
    //       swal(
    //         "Ups!",
    //         "The token is expired. Refresh the page, please",
    //         "warning"
    //       );
    //     }
    //     if (error.response.statusText == "Unauthenticated") {
    //       swal(
    //         "Ups!",
    //         "The token is expired. Refresh the page, please",
    //         "warning"
    //       );
    //     }
    //   });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Edit Data Anggota Keluarga" />
        {isLoading ? (
          <div align="center" style={{ marginTop: 200 }}>
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={0}>
            <Grid item xs={12} className={classes.gridTop}>
              <Grid container spacing={0} className={classes.containerCard}>
                <Grid item xs={12} className={classes.gridInputNIK}>
                  <TextField
                    onChange={handleChange}
                    id="standard-password-input"
                    label="NIK"
                    className={classes.textField}
                    type="number"
                    name="nik"
                    value={data.nik}
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
                    value={data.name}
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
                      value={data.gender}
                    >
                      <Grid item xs={6}>
                        <FormControlLabel
                          value="male"
                          className={classes.gender}
                          control={<Radio color="primary" />}
                          label="Laki Laki"
                          name="gender"
                          labelPlacement="end"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormControlLabel
                          value="female"
                          className={classes.gender}
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
                      name="date_of_birth"
                      format="MM/dd/yyyy"
                      onChange={handleDateChange}
                      value={data.date_of_birth}
                      id="standard-password-input"
                      placeholder="Tanggal Lahir"
                      className={classes.textField}
                      KeyboardButtonProps={{
                        "aria-label": "change date"
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12} className={classes.gridInputNIK}>
                  <TextField
                    onChange={handleChange}
                    id="standard-password-input"
                    label="Tempat Lahir"
                    className={classes.textField}
                    type="text"
                    value={data.place_of_birth}
                    name="place_of_birth"
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} className={classes.gridButton}>
              <Box className={classes.buttonBox}>
                <Button
                  onClick={handleClickEdit}
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
        )}
      </Container>
    </React.Fragment>
  );
}

export default EditAnggotaKeluarga;
