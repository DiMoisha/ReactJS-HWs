import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { orange, teal } from '@material-ui/core/colors';
import { useStyles } from './hooks/useStyles'
import { Header } from "./components/Header";
import { Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Chates } from "./pages/Chates";
import { NoMatchPage } from "./pages/NoMatchPage";
import { Lesson8 } from "./pages/Lesson8";

const appTheme = createTheme({
  palette: {
    primary: {
      light: teal[50],
      main: teal[500],
      dark: teal[200],
    },
    secondary: {
      light: orange[50],
      main: orange[500],
    },
    background: {
      default: 'linear-gradient(45deg, #ebfbfb 30%, #f9f4e8 90%)',
    },
  },
});

function App(props) {
  const classes = useStyles(appTheme);

  return (
    <ThemeProvider theme={appTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <Header classes={classes} appHeading={props.appHeading} />
        <Box className={classes.appBody}>
          <Switch>
            <Route exact path="/" render={() => <Home classes={classes} />} />
            <Route path="/profile">
              <Profile classes={classes} />
            </Route>
            <Route path="/chates">
              <Chates classes={classes} />
            </Route>
            <Route path="/lesson8">
              <Lesson8 />
            </Route>
            <Route component={NoMatchPage} />
          </Switch>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
