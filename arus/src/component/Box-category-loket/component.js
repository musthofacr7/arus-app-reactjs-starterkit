import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import BoxLogoLoket from '../logo-locket';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.BoxMain}>
        <Grid
          container
          spacing={2}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 30
          }}
        >
          <Grid item>
            <BoxLogoLoket />
          </Grid>
          <Grid item>
            <Grid
              container
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Grid item>
                <Typography className={classes.TypographyNomorAntrian}>
                  Nomor Antrian Saat ini
                </Typography>
              </Grid>

              <Typography className={classes.TypographyNomorAntrianSaatIni}>
                124 A
              </Typography>
              <Grid item>
                <Typography className={classes.TypographyNomorAntrian}>
                  Nomor Antrian Terakhir
                </Typography>
                <Typography className={classes.TypographyNomorAntrianTerakhir}>
                  124 A
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default component;
