import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Riwayat from './pages/riwayat';
import Login from './pages/login';
import PilihLocket from './pages/pilihLoket';
import SplashScreen from './pages/splashScreen';
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/riwayat" exact component={Riwayat} />
        <Route path="/login" exact component={Login} />
        <Route path="/pilih-locket" exact component={PilihLocket} />
        <Route path="/splashscreen" exact component={SplashScreen} />
      </Switch>
    );
  }
}

export default App;
