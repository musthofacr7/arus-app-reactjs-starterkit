import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import AppBar from "../../component/appbar";
import Modal from "../../component/modal-hapus-datakeluarga";
import { getDetailAnggota } from "../../services/anggota";
import ContentLoader from "react-content-loader";
import { deleteAnggota } from "../../services/anggota";
const MyLoader = () => (
  <ContentLoader
    height={375}
    width={400}
    speed={2}
    primaryColor="#e6e6e6"
    secondaryColor="#f4f4f4"
  >
    <rect x="14" y="60" rx="0" ry="0" width="204" height="27" />
    <rect x="14" y="120" rx="0" ry="0" width="204" height="27" />
    <rect x="14" y="180" rx="0" ry="0" width="204" height="27" />
    <rect x="14" y="240" rx="0" ry="0" width="204" height="27" />
    <rect x="14" y="300" rx="0" ry="0" width="204" height="27" />
  </ContentLoader>
);
function DetailAnggota(props) {
  const [open, setOpen] = useState(false);
  const { classes } = props;
  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const id = props.match.params.id;
    const getDetail = async () => {
      const detail = await getDetailAnggota(id, user.id);
      setDetail(detail.row);
      console.log(detail.row);
    };
    setTimeout(() => setIsLoading(true), 2500);
    getDetail();
  }, []);

  const handleDelete = () => {
    const deleteMethod = async id => {
      console.log("bodoamat");
    };
    deleteMethod();
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Profil Keluarga" />

        <Grid container spacing={0}>
          {isLoading == false ? (
            <div
              style={{
                marginTop: 40,
                width: "100%",
                backgroundColor: "white"
              }}
            >
              <MyLoader />;
            </div>
          ) : (
            <Grid item xs={12} className={classes.gridTop}>
              <Grid container spacing={0} className={classes.gridContent}>
                <Grid item xs={12} className={classes.gridItem}>
                  <Typography className={classes.content}>Nama</Typography>
                  <Typography className={classes.input}>
                    {detail.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                  <Typography className={classes.content}>
                    Nomor Induk Kependudukan (NIK)
                  </Typography>
                  <Typography className={classes.input}>
                    {detail.nik}
                  </Typography>
                </Grid>

                <Grid item xs={12} className={classes.gridItem}>
                  <Typography className={classes.content}>
                    Jenis Kelamin
                  </Typography>
                  <Typography className={classes.input}>
                    {detail.gender}
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                  <Typography className={classes.content}>
                    Tanggal Lahir
                  </Typography>
                  <Typography className={classes.input}>
                    {detail.date_of_birth}
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridItem}>
                  <Typography className={classes.content}>
                    Tempat Lahir
                  </Typography>
                  <Typography className={classes.input}>
                    {detail.place_of_birth}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          )}
          <Grid item xs={12} className={classes.gridButton}>
            <Button
              onClick={handleOpen}
              disableRipple={true}
              id="submit-button"
              className={classes.button}
            >
              <Typography style={{ textTransform: "none", fontSize: "14px" }}>
                Hapus Data Anggota Keluarga
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Modal
          handleDelete={handleDelete}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          name={detail.name}
        />
      </Container>
    </React.Fragment>
  );
}

export default DetailAnggota;
