import React, { useContext, useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Profile from "../../assets/avatar.png";
import AppBar from "../../component/appbar";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../context/profile";
import { updateProfile } from "../../services/profile";
import Modal from "../../component/modal-simpan-perubahan";
import { getProfile } from "../../services/profile";
import CircularProgress from "@material-ui/core/CircularProgress";

function EditProfile(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [name, setNama] = useState("");
  const [nik, setNik] = useState("");
  const { classes } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const akun = async id => {
      getProfile(user.id)
        .then(datas => {
          setData(datas.row);
          console.log(datas);
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
          setIsLoading(false);
          alert("ups, terjadi kesalahan");
        });
    };
    akun();
  }, []);
  const handleChange = async e => {
    const newData = { ...data, [e.target.name]: e.target.value };
    setData(newData);
    console.log(newData);
  };

  const [errNik, setErrNik] = useState(false);
  const users = JSON.parse(localStorage.getItem("user"));

  const handleClick = () => {
    setLoadingUpdate(true);
    localStorage.setItem("name", JSON.stringify(data.name));
    localStorage.setItem("nik", JSON.stringify(data.nik));
    updateProfile(users.id, data)
      .then(() => {
        console.log(data);
        props.history.push("/profil");
      })
      .catch(error => {
        alert("terjadi kesalahan");
        setLoadingUpdate(false);
      });
    console.log(data);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Edit Profile" />
        {isLoading ? (
          <div align="center" style={{ marginTop: 200 }}>
            <CircularProgress />
          </div>
        ) : (
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
              <Link
                className={classes.link}
                onClick={() => alert("ganti foto?")}
              >
                <Typography className={classes.ganti}> Ganti Foto</Typography>
              </Link>
            </Grid>
            <Grid item xs={12} className={classes.gridForm}>
              <form className={classes.form}>
                <TextField
                  margin="normal"
                  label="NIK"
                  type="number"
                  value={data.nik}
                  onChange={handleChange}
                  name="nik"
                />
                <TextField
                  margin="normal"
                  label="Name"
                  value={data.name}
                  onChange={handleChange}
                  name="name"
                />
              </form>
              <Grid item xs={12} align="center" className={classes.saveButton}>
                <Button
                  variant="contained"
                  disableRipple={true}
                  style={{ backgroundColor: "#F7A647" }}
                  className={classes.button}
                  onClick={handleOpen}
                >
                  <Typography className={classes.save}>
                    Simpan Perubahan
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}

        <Modal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleClick={handleClick}
          loadingUpdate={loadingUpdate}
        />
      </Container>
    </React.Fragment>
  );
}

export default EditProfile;
