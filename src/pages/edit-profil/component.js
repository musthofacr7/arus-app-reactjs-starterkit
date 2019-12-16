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
function EditProfile(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [name, setNama] = useState("");
  const [nik, setNik] = useState("");
  const { classes } = props;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const akun = async id => {
      const datas = await updateProfile(user.id);
      setData(datas);
      console.log(datas);
    };
    akun();
  }, []);
  const handleChangeName = e => {
    setNama(e.target.value);
    // console.log(name);
  };
  const handleChangeNik = e => {
    setNik(e.target.value);
    // console.log(nik);
  };

  const handleClick = () => {
    const data = {
      name: name,
      nik: nik
    };
    const updatingProfile = updateProfile(user.id, data).then(() => {
      props.history.push("/profil");
      setData(updatingProfile);
    });

    console.log(data);
  };

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
            <Link className={classes.link} onClick={() => alert("ganti foto?")}>
              <Typography className={classes.ganti}> Ganti Foto</Typography>
            </Link>
          </Grid>
          <Grid item xs={12} className={classes.gridForm}>
            <form className={classes.form}>
              <TextField
                margin="normal"
                label="NIK"
                type="number"
                value={data}
                onChange={handleChangeNik}
              />
              <TextField
                margin="normal"
                label="Name"
                value={data}
                onChange={handleChangeName}
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
        <Modal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleClick={handleClick}
        />
      </Container>
    </React.Fragment>
  );
}

export default EditProfile;
