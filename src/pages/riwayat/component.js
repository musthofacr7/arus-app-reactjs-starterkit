import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "../../component/appbar";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    height={746}
    width={400}
    speed={2}
    primaryColor="#e6e6e6"
    secondaryColor="#f4f4f4"
  >
    <rect x="172" y="63" rx="4" ry="10" width="57" height="47" />
    <rect x="282" y="60" rx="4" ry="4" width="57" height="47" />
    <rect x="61" y="161" rx="4" ry="4" width="57" height="47" />
    <rect x="171" y="161" rx="4" ry="4" width="57" height="47" />
    <rect x="283" y="160" rx="4" ry="4" width="57" height="47" />
    <rect x="60" y="260" rx="4" ry="4" width="57" height="47" />
    <rect x="173" y="257" rx="4" ry="4" width="57" height="47" />
    <rect x="287" y="258" rx="4" ry="4" width="57" height="47" />
    <rect x="62" y="358" rx="4" ry="4" width="57" height="47" />
    <rect x="172" y="357" rx="4" ry="4" width="57" height="47" />
    <rect x="288" y="353" rx="4" ry="4" width="57" height="47" />
  </ContentLoader>
);

function Riwayat(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  });
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs" className={classes.container}>
        <AppBar goBack title="Riwayat Kunjungan" />

        {isLoading == true ? (
          <div
            style={{
              marginTop: 100,
              width: "100%",
              backgroundColor: "white"
            }}
          >
            <MyLoader />
          </div>
        ) : (
          <Grid container spacing={0} style={{ paddingTop: "4em" }}>
            <Grid item xs={12} className={classes.gridTop}>
              <Grid container spacing={0}>
                <Grid item xs={12} className={classes.itemTop}>
                  <Typography className={classes.textTop}>
                    Sedang Berjalan
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.itemBottom}>
                  <Grid className={classes.gridBox}>
                    <Grid container spacing={0}>
                      <Grid item xs={4} className={classes.itemContent}>
                        <Typography className={classes.content}>
                          Tanggal
                        </Typography>
                        <Typography className={classes.input}>
                          12/11/19
                        </Typography>
                      </Grid>
                      <Grid item xs={4} className={classes.itemContent}>
                        <Typography className={classes.content}>
                          No Antrian
                        </Typography>
                        <Typography className={classes.input}> 12A</Typography>
                      </Grid>
                      <Grid item xs={4} className={classes.itemLoket}>
                        <Typography className={classes.content}>
                          Loket
                        </Typography>
                        <Typography className={classes.input}>
                          Loket A
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={0}>
                <Grid item xs={12} className={classes.itemTop}>
                  <Grid item xs={7} className={classes.gridRiwayat}>
                    <Typography className={classes.textBottom}>
                      Riwayat Kunjungan
                    </Typography>
                  </Grid>
                  <Grid item xs={5} className={classes.gridRiwayat}>
                    <Typography className={classes.textNumber}>
                      ( 2 )
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} className={classes.itemBottomHistory}>
                  <Grid className={classes.gridBoxBottom}>
                    <Grid container spacing={0}>
                      <Grid item xs={4} className={classes.itemContent}>
                        <Typography className={classes.content}>
                          Tanggal
                        </Typography>
                        <Typography className={classes.input}>
                          10/11/19
                        </Typography>
                      </Grid>
                      <Grid item xs={4} className={classes.itemContent}>
                        <Typography className={classes.content}>
                          No Antrian
                        </Typography>
                        <Typography className={classes.input}> 12A</Typography>
                      </Grid>
                      <Grid item xs={4} className={classes.itemLoket}>
                        <Typography className={classes.content}>
                          Loket
                        </Typography>
                        <Typography className={classes.input}>
                          Loket A
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Container>
    </React.Fragment>
  );
}

export default Riwayat;
