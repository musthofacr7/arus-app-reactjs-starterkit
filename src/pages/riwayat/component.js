import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "../../component/appbar";
import ContentLoader from "react-content-loader";
import { getHistory } from "../../services/loket";
import CircularProgress from "@material-ui/core/CircularProgress";

function Riwayat(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [listHistory, setHistory] = useState([]);
  const [qurrentQueue, setQurrentQueue] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const listHistory = async () => {
      const history = await getHistory(user.id);
      console.log(history.row.data);
      setHistory(history.row.data);
      setQurrentQueue(history.row.data);
    };
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
    listHistory();
  }, []);
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Riwayat Kunjungan" />

        {isLoading == true ? (
          <div className={classes.loader}>
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={0} style={{ paddingTop: "4em" }}>
            <Grid item xs={12} className={classes.gridTop}>
              <div style={{ paddingTop: "1em" }}>
                <Typography className={classes.textTop}>
                  Sedang Berjalan
                </Typography>
              </div>
              {qurrentQueue.map(items => {
                return (
                  <Grid container spacing={0} style={{ display: "flex" }}>
                    <Grid item xs={12} className={classes.itemBottom}>
                      <Grid className={classes.gridBox}>
                        <Grid container spacing={0}>
                          <Grid item xs={4} className={classes.itemContent}>
                            <Typography className={classes.content}>
                              Tanggal
                            </Typography>
                            <Typography className={classes.input}>
                              {items.queue_date}
                            </Typography>
                          </Grid>
                          <Grid item xs={4} className={classes.itemContent}>
                            <Typography className={classes.content}>
                              No Antrian
                            </Typography>
                            <Typography className={classes.input}>
                              {items.queue_number}
                              {items.counter_id == 1 && "A"}
                              {items.counter_id == 2 && "B"}
                              {items.counter_id == 3 && "C"}
                            </Typography>
                          </Grid>
                          <Grid item xs={4} className={classes.itemLoket}>
                            <Typography className={classes.content}>
                              Loket
                            </Typography>
                            <Typography className={classes.input}>
                              Loket {items.counter_id == 1 && "A"}
                              {items.counter_id == 2 && "B"}
                              {items.counter_id == 3 && "C"}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={7} className={classes.gridRiwayat}>
                  <Typography className={classes.textBottom}>
                    Riwayat Kunjungan
                  </Typography>
                </Grid>
                <Grid item xs={5} className={classes.gridRiwayat}>
                  <Typography className={classes.textNumber}>
                    ( {listHistory.length} )
                  </Typography>
                </Grid>
              </Grid>

              {listHistory.map(items => {
                return (
                  <Grid container spacing={0}>
                    <Grid item xs={12} className={classes.itemBottomHistory}>
                      <Grid className={classes.gridBoxBottom}>
                        <Grid container spacing={0}>
                          <Grid item xs={4} className={classes.itemContent}>
                            <Typography className={classes.content}>
                              Tanggal
                            </Typography>
                            <Typography className={classes.input}>
                              {items.queue_date}
                            </Typography>
                          </Grid>
                          <Grid item xs={4} className={classes.itemContent}>
                            <Typography className={classes.content}>
                              No Antrian
                            </Typography>
                            <Typography className={classes.input}>
                              {items.queue_number}
                              {items.counter_id == 1 && "A"}
                              {items.counter_id == 2 && "B"}
                              {items.counter_id == 3 && "C"}
                            </Typography>
                          </Grid>
                          <Grid item xs={4} className={classes.itemLoket}>
                            <Typography className={classes.content}>
                              Loket
                            </Typography>
                            <Typography className={classes.input}>
                              Loket {items.counter_id == 1 && "A"}
                              {items.counter_id == 2 && "B"}
                              {items.counter_id == 3 && "C"}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        )}
      </Container>
    </React.Fragment>
  );
}

export default Riwayat;
