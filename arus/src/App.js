import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Riwayat from './pages/riwayat';
import Login from './pages/login';
import PilihLocket from './pages/pilihLoket';
import SplashScreen from './pages/splashScreen';
import Profile from './pages/profil';
import EditProfile from './pages/edit-profil';
import ListAnggota from './pages/listAngota';
import EditKeluarga from './pages/edit-anggota-keluarga';
import AddAnggotaKeluarga from './pages/add-anggota-keluarga';
import DetailKeluarga from './pages/detail-anggota-keluarga';
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/riwayat" exact component={Riwayat} />
        <Route path="/login" exact component={Login} />
        <Route path="/pilih-loket" exact component={PilihLocket} />
        <Route path="/splashscreen" exact component={SplashScreen} />
        <Route path="/profil" exact component={Profile} />
        <Route path="/edit-profil" exact component={EditProfile} />
        <Route path="/list-anggota" exact component={ListAnggota} />
        <Route path="/add-keluarga" exact component={AddAnggotaKeluarga} />
        <Route path="/edit-profil-keluarga" exact component={EditKeluarga} />
        <Route path="/detail-anggota-keluarga" exact component={DetailKeluarga}
        />
      </Switch>
    );
  }
}

export default App;
