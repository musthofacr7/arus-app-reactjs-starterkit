import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Ecclipse from '../../assets/Ellipse.png';
import Logo from '../../assets/Group 27.png';
class component extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="xs" className={classes.Container}>
        <img
          alt="ecclipse"
          src={Ecclipse}
          style={{
            marginTop: '50%',
            marginLeft: '50%',
            transform: 'translate(-50%, 50%)',
            opacity: 0.4,
            width: 128
          }}
        />
        <img
          alt="logo"
          src={Logo}
          style={{
            marginLeft: '50%',
            transform: 'translate(-50%, 0%)',
            width: 74,
            marginTop: '-30px'
          }}
        />
        <Typography
          align="center"
          style={{
            marginTop: 47,
            fontfamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '24px',
            lineheight: '31px',
            color: '#FFFFFF'
          }}
        >
          Arus
        </Typography>
        <Typography
          align="center"
          style={{
            marginTop: 5,
            fontfamily: 'Nunito Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '14px',
            lineheight: '21px',
            color: '#FFFFFF'
          }}
        >
          Antrian Rumah Sakit
        </Typography>
      </Container>
    );
  }
}

export default component;
