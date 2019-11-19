import React from "react";
import Appbar from "../../component/appbar";
import BottomNavigation from "../../component/bottom-navigation";

class component extends React.Component {
  render() {
    return (
      <div>
        <Appbar title="home" />

        <BottomNavigation />
      </div>
    );
  }
}

export default component;
