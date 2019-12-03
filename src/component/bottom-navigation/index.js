import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { withRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";

const styles = {
  
  stickToBottom: {
    width: "100%",
    maxWidth: 446,
    position: "fixed",
    bottom: 0,
    border: "0px solid #e0e0e0",
    boxShadow: "0px 0px 2px #9e9e9e"
  },
  root: {
    color: "#a3a3a3",
    fill: "#a3a3a3",
    "&$selected": {
      color: "#26CAC0",
      fill: "#26CAC0"
    },
    width: "100%"

  },
  selected: {}
};

class BottomNavigationApp extends React.Component {
  state = {
    value: 0
  };

  componentDidMount() {
    let value = 0;
    switch (this.props.location.pathname) {
      case "/":
        value = 0;
        break;
      case "/riwayat":
        value = 1;
        break;
      case "/profil":
        value = 2;
        break;
      default:
        value = 0;
    }
    this.setState({ value: value });
  }

  handleChange = (event, value) => {
    this.setState({ value });
    switch (value) {
      case 0:
        this.props.history.push("/");
        return;
      case 1:
        this.props.history.push("/riwayat");
        return;
      case 2:
        this.props.history.push("/profil");
        return;
      default:
        return;
    }
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const actionClasses = this.props.classes;

    return (
      <Box
        boxShadow={1}
        display="flex"
        justifyContent="center"
        bgcolor="background.paper"
      >
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.stickToBottom}
        >
          <BottomNavigationAction
            classes={actionClasses}
            label={<b style={{ fontSize: "8px" }}>Beranda</b>}
            icon={
              <svg
                width="30"
                height="24"
                viewBox="0 0 30 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 26H20V25V19C20 17.3431 18.6569 16 17 16H15C13.3431 16 12 17.3431 12 19V25V26H13H19Z"
                  stroke="#9AA3AA"
                  stroke-width="2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25 22.0001V15.3256C25 14.4873 24.6492 13.6872 24.0326 13.1192L18.0326 7.59188C16.8841 6.53383 15.1159 6.53383 13.9674 7.59188L7.96738 13.1192C7.35079 13.6872 7 14.4873 7 15.3256V22.0001C7 23.657 8.34315 25.0001 10 25.0001H13H19H22C23.6569 25.0001 25 23.657 25 22.0001ZM6.6123 11.6482C5.58465 12.5949 5 13.9284 5 15.3256V22.0001C5 24.7615 7.23858 27.0001 10 27.0001H13H19H22C24.7614 27.0001 27 24.7615 27 22.0001V15.3256C27 13.9284 26.4154 12.5949 25.3877 11.6482L19.3877 6.12091C17.4735 4.35748 14.5265 4.35748 12.6123 6.12091L6.6123 11.6482Z"
                />
              </svg>
            }
          />
          <BottomNavigationAction
            classes={actionClasses}
            label={<b style={{ fontSize: "8px" }}>Riwayat</b>}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  classes={actionClasses}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.1875 3.08331C14.5757 3.08331 12.4583 5.20063 12.4583 7.81248C12.4583 10.4243 14.5757 12.5416 17.1875 12.5416C19.7994 12.5416 21.9167 10.4243 21.9167 7.81248C21.9167 5.20063 19.7994 3.08331 17.1875 3.08331ZM10.4583 7.81248C10.4583 6.39706 10.8953 5.08371 11.6418 3.99998H8C5.79086 3.99998 4 5.79085 4 7.99998V17C4 19.2091 5.79086 21 8 21H17C19.2091 21 21 19.2091 21 17V13.3582C19.9163 14.1046 18.6029 14.5416 17.1875 14.5416C13.4711 14.5416 10.4583 11.5289 10.4583 7.81248ZM8 1.99998H13.7947C14.7908 1.41728 15.9502 1.08331 17.1875 1.08331C20.9039 1.08331 23.9167 4.09606 23.9167 7.81248C23.9167 9.04983 23.5827 10.2092 23 11.2053V17C23 20.3137 20.3137 23 17 23H8C4.68629 23 2 20.3137 2 17V7.99998C2 4.68628 4.68629 1.99998 8 1.99998ZM6.77082 5.77081C6.21854 5.77081 5.77082 6.21853 5.77082 6.77081C5.77082 7.3231 6.21854 7.77081 6.77082 7.77081H7.50001C8.05229 7.77081 8.50001 7.3231 8.50001 6.77081C8.50001 6.21853 8.05229 5.77081 7.50001 5.77081H6.77082ZM5.77081 12.5C5.77081 11.9477 6.21853 11.5 6.77081 11.5H8.99997C9.55225 11.5 9.99997 11.9477 9.99997 12.5C9.99997 13.0523 9.55225 13.5 8.99997 13.5H6.77081C6.21853 13.5 5.77081 13.0523 5.77081 12.5ZM6.77081 17.2291C6.21853 17.2291 5.77081 17.6769 5.77081 18.2291C5.77081 18.7814 6.21853 19.2291 6.77081 19.2291H13.5416H16.6666H18.2291C18.7814 19.2291 19.2291 18.7814 19.2291 18.2291C19.2291 17.6769 18.7814 17.2291 18.2291 17.2291H16.6666H13.5416H6.77081ZM17.6667 5.2083C17.6667 4.65602 17.219 4.2083 16.6667 4.2083C16.1144 4.2083 15.6667 4.65602 15.6667 5.2083V8.3333C15.6667 8.88559 16.1144 9.3333 16.6667 9.3333H19.7917C20.344 9.3333 20.7917 8.88559 20.7917 8.3333C20.7917 7.78102 20.344 7.3333 19.7917 7.3333H17.6667V5.2083Z"
                />
              </svg>
            }
          />
          <BottomNavigationAction
            classes={actionClasses}
            label={<b style={{ fontSize: "8px" }}>Profile</b>}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  classes={actionClasses}
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.5219 6.52246C15.5219 8.46307 13.9572 10.0225 12.044 10.0225C10.1309 10.0225 8.56617 8.46307 8.56617 6.52246C8.56617 4.58185 10.1309 3.02246 12.044 3.02246C13.9572 3.02246 15.5219 4.58185 15.5219 6.52246ZM17.5219 6.52246C17.5219 9.56003 15.0694 12.0225 12.044 12.0225C9.0187 12.0225 6.56617 9.56003 6.56617 6.52246C6.56617 3.48489 9.0187 1.02246 12.044 1.02246C15.0694 1.02246 17.5219 3.48489 17.5219 6.52246ZM3.1395 19.2559C4.64953 16.7296 7.90157 16 12.044 16C16.1939 16 19.5007 16.7359 21.0356 19.2714C21.1781 19.5067 21.1834 19.658 21.173 19.7478C21.1607 19.8552 21.1062 20.0168 20.9418 20.211C20.5905 20.6256 19.8823 21 19.0454 21H5.14079C4.30373 21 3.59347 20.6259 3.23921 20.2089C3.07315 20.0134 3.01685 19.8494 3.0037 19.7388C2.99262 19.6457 2.9982 19.4922 3.1395 19.2559ZM12.0444 14C7.39096 14 3.38288 14.9505 1.4228 18.2297C0.00601816 20.6 2.37936 23 5.14079 23H19.0454C21.8068 23 24.1766 20.598 22.7465 18.2357C20.7592 14.9529 16.7006 14 12.0444 14Z"
                />
              </svg>
            }
          />
        </BottomNavigation>
      </Box>
    );
  }
}

BottomNavigationApp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(BottomNavigationApp));
