import React from "react";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { deleteAnggota } from "../../services/anggota";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  };
}

function SimpleModal(props) {
  const { classes, handleDelete } = props;
  const [modalStyle] = React.useState(getModalStyle);
  const { open, handleClose, name } = props;
  console.log("test", classes.paper);

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      onClose={handleClose}
    >
      {props.loadingUpdate ? (
        <div style={modalStyle} className={classes.paper}>
          <Grid container align="center" className={classes.container}>
            <Grid item xs className={classes.gridItemText}>
              <Typography className={classes.question}>
                Harap tunggu...
              </Typography>
            </Grid>
            <div align="center" style={{ marginTop: 10 }}>
              <CircularProgress />
            </div>
          </Grid>
        </div>
      ) : (
        <div style={modalStyle} className={classes.paper}>
          <Grid container align="center" className={classes.container}>
            <Grid item xs className={classes.gridItemTwo}>
              <Typography className={classes.question}>
                Apakah anda yakin ingin menghapus
                <strong className={classes.name}> {name}</strong> dari data
                anggota Keluarga?
              </Typography>
            </Grid>
            <Grid item xs className={classes.gridItemTwo}>
              <Grid container spacing={0} align="center">
                <Grid item xs>
                  <Button
                    className={classes.buttonCancel}
                    onClick={handleClose}
                  >
                    <Typography
                      style={{
                        textTransform: "none",
                        color: "#F7A647",
                        fontSize: "14px"
                      }}
                    >
                      Batal
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs>
                  <Button
                    className={classes.buttonAgree}
                    style={{
                      background: "#F7A647"
                    }}
                    onClick={handleDelete}
                  >
                    <Typography
                      style={{
                        textTransform: "none",
                        color: "#FFFFFF",
                        fontSize: "14px"
                      }}
                    >
                      Iya
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      )}
    </Modal>
  );
}
export default SimpleModal;
