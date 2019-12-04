import React from 'react';
import Container from "@material-ui/core/Container"
import Grid from '@material-ui/core/Grid'
import AppBar from '../../component/appbar';
import ListData from '../../component/card-anggota';
import FAB from '../../component/fab';
import Axios from 'axios';

function ListAnggota(props) {
  const { classes } = props;
  const [data, setData] = React.useState([]);

  
  const ambilData = async () => {
    try {
      
      const response = await Axios.get(
        `https://api-arus.herokuapp.com/api/user/5/family`
      );
      console.log(response);
      setData(response.data.data.rows);
    } catch (error) {
      console.log(error);
    }
  };
  ambilData();
  return (
    <Container maxWidth="xs" className={classes.container}>
      <AppBar goBack title="Anggota Keluarga" />

      <Grid container spacing={4} className={classes.gridUpper}>
        {data.map(item => {
          return (
            <Grid item>
              <ListData nik={item.nik} name={item.name} />
            </Grid>
          );
        })}
      </Grid>
      <FAB />
    </Container>
  );
}

export default ListAnggota;
