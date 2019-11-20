import React from 'react';
import {
  Typography,
  Grid,
  Container,
  List,
  ListItem,
  Box,
  Divider
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AppBar from '../../component/appbar';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.Container}>
        <AppBar goBack title="Riwayat Kunjungan" />

        <Grid
          item
          // align="center"
          style={{
            backgroundColor: 'white',
            width: '100%',
            height: '24%',
            padding: 0,
            marginTop: '11%'
          }}
        >
          <Typography className={classes.SedangBerjalan} style={{}}>
            Sedang Berjalan
          </Typography>
          <Box className={classes.BoxMiddle} style={{ marginTop: 10 }}>
            <Grid container spacing={5} item className={classes.GridTop}>
              <Grid
                align="center"
                item
                xs={4}
                style={{
                  borderRight: '1px solid #F1F1F1',
                  // borderimage: 'linear-gradient(#F1F1F1,#F1F1F1)',

                  borderBottomRightRadius: 40,
                  borderTopRightRadius: 40
                }}
              >
                <Typography className={classes.BoxList}>Tanggal</Typography>
                <Typography className={classes.BoxListInput}>
                  12/11/19
                </Typography>
              </Grid>
              <Grid
                align="center"
                item
                xs={4}
                style={{
                  borderRight: '1px solid #F1F1F1',
                  borderBottomRightRadius: 40,
                  borderTopRightRadius: 40
                }}
              >
                <Typography className={classes.BoxList}>No Antrian</Typography>
                <Typography className={classes.BoxListInput}> 12A</Typography>
              </Grid>
              <Grid
                align="center"
                item
                xs={3}
                // style={{
                //   borderRight: '1px solid #F1F1F1'
                // }}
              >
                <Typography className={classes.BoxList}>Loket</Typography>
                <Typography className={classes.BoxListInput}>
                  Locket A
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          container
          spacing={0}
          style={{ display: 'flex', flexDirection: 'column', padding: 30 }}
        >
          <Grid item style={{}}>
            <Grid
              container
              spacing={2}
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              <Grid item>
                <Typography className={classes.RiwayatKunjungan}>
                  Riwayat Kunjungan
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.JumlahRiwayat}>(4)</Typography>
              </Grid>
            </Grid>
            <Box
              className={classes.BoxMiddle}
              style={{ paddingTop: '1%', marginTop: 10 }}
            >
              <Grid container spacing={5} item className={classes.GridTop}>
                <Grid
                  align="center"
                  item
                  xs={4}
                  style={{
                    borderRight: '1px solid #F1F1F1',
                    borderWidth: 1
                  }}
                >
                  <Typography className={classes.BoxList}>Tanggal</Typography>
                  <Typography className={classes.BoxListInput}>
                    12/11/19
                  </Typography>
                </Grid>
                <Grid
                  align="center"
                  item
                  xs={4}
                  style={{
                    borderRight: '1px solid #F1F1F1',
                    borderWidth: 1
                  }}
                >
                  <Typography className={classes.BoxList}>
                    No Antrian
                  </Typography>
                  <Typography className={classes.BoxListInput}> 12A</Typography>
                </Grid>
                <Grid
                  align="center"
                  item
                  xs={3}
                  // style={{
                  //   borderRight: '1px solid #F1F1F1'
                  // }}
                >
                  <Typography className={classes.BoxList}>Loket</Typography>
                  <Typography className={classes.BoxListInput}>
                    Locket A
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box
              className={classes.BoxMiddle}
              style={{ paddingTop: '1%', marginTop: 10 }}
            >
              <Grid
                container
                spacing={5}
                align="center"
                item
                className={classes.GridTop}
              >
                <Grid
                  item
                  xs={4}
                  style={{
                    borderRight: '1px solid #F1F1F1',
                    borderWidth: 1
                  }}
                >
                  <Typography className={classes.BoxList}>Tanggal</Typography>
                  <Typography className={classes.BoxListInput}>
                    12/11/19
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{
                    borderRight: '1px solid #F1F1F1',
                    borderWidth: 1
                  }}
                >
                  <Typography className={classes.BoxList}>
                    No Antrian
                  </Typography>
                  <Typography className={classes.BoxListInput}> 12A</Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  // style={{
                  //   borderRight: '1px solid #F1F1F1'
                  // }}
                >
                  <Typography className={classes.BoxList}>Loket</Typography>
                  <Typography className={classes.BoxListInput}>
                    Locket A
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default component;
