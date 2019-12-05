import React, {useState} from 'react';
import { Container, Typography } from '@material-ui/core';
import OtpInput from 'react-otp-input';

function SplashScreen(props) {
  const { classes } = props;
  const [otp,setOtp] = useState('')

  const handleChange = otp => {
    setOtp({otp})
  }
  return (
    <Container maxWidth="xs" className={classes.Container}>
      <OtpInput
        onChange={otp => console.log(otp)}
        numInputs={4}
        separator={<span>-</span>}
        containerStyle={classes.otp}
      />
    </Container>
  );
}

export default SplashScreen;
