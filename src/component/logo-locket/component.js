import React from 'react';
import { Typography, Box } from '@material-ui/core';

class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Box className={classes.BoxLoket}>
        <Typography className={classes.TypographyLoket}>Locket</Typography>

        <Typography className={classes.TypographyLoketCategory}>A</Typography>
      </Box>
    );
  }
}

export default component;
