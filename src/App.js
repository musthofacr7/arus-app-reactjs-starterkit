import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./pages/home";
import Riwayat from "./pages/riwayat";
import Login from "./pages/login";
import PilihLocket from "./pages/pilih-loket";
import SplashScreen from "./pages/splash-screen";
import Profile from "./pages/profil";
import EditProfile from "./pages/edit-profil";
import ListAnggota from "./pages/list-anggota";
import EditKeluarga from "./pages/edit-anggota-keluarga";
import AddAnggotaKeluarga from "./pages/add-anggota-keluarga";
import DetailKeluarga from "./pages/detail-anggota-keluarga";
import CekJadwalDokter from "./pages/cek-jadwal-dokter";
import EditAnggotaKeluarga from "./pages/edit-anggota-keluarga";
import DetailDokter from "./pages/detail-dokter";
import Otp from "./pages/otp";
import Register from "./pages/register";
import LoginEmail from "./pages/login-email";
import BottomNavigation from "./component/bottom-navigation";

function App(props) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLogin, setIsLogin] = React.useState(false);
  const homeRoute = ["/", "/pilih-loket", "/profil", "/riwayat"];
  useEffect(() => {
    if (localStorage.getItem("login")) {
      console.log("login");
    } else {
      console.log("belum login");
      props.history.push("/login");
      // props.history.push('/login/email');
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading == true) {
    return <SplashScreen />;
  }
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/riwayat" exact component={Riwayat} />
        <Route path="/login" exact component={Login} />
        <Route path="/login/email" exact component={LoginEmail} />
        <Route path="/pilih-loket" exact component={PilihLocket} />
        <Route path="/profil" exact component={Profile} />
        <Route path="/edit-profil" exact component={EditProfile} />
        <Route path="/list-anggota" exact component={ListAnggota} />
        <Route path="/list-anggota/:id" component={DetailKeluarga} />
        <Route
          path="/edit-profil-keluarga/:id/family/:id"
          exact
          component={EditKeluarga}
        />
        <Route path="/add-keluarga" exact component={AddAnggotaKeluarga} />

        <Route path="/cek-jadwal-dokter" exact component={CekJadwalDokter} />
        <Route path="/cek-jadwal-dokter/:id" exact component={DetailDokter} />
        <Route
          path="/edit-anggota-keluarga"
          exact
          component={EditAnggotaKeluarga}
        />
        <Route path="/login/otp" exact component={Otp} />
        <Route path="/register" exact component={Register} />
      </Switch>
      {homeRoute.indexOf(props.location.pathname) != -1 && <BottomNavigation />}
    </React.Fragment>
  );
}

export default withRouter(App);
