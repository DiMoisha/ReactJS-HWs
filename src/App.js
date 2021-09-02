import React, { useState } from 'react';
import faker from 'faker';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { orange, teal } from '@material-ui/core/colors';
import { useStyles } from './hooks/useStyles'
import { useMessageList } from './hooks/useMessage'
import { Header } from "./components/Header";
import { Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Chates } from "./pages/Chates";
import { NoMatchPage } from "./pages/NoMatchPage";

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
  const [chates, setChates] = useState([
    { id: "chat0", name: "GreekBrains группа" },
    { id: "chat1", name: "Работа-коллеги" },
    { id: "chat2", name: "Валентин Петрович" },
    { id: "chat3", name: "Людмила" },
    { id: "chat4", name: "Евгений-автослесарь" },
    { id: "chat5", name: "Окна Rehau на Василеостровской" },
    { id: "chat6", name: "Одноклассники шк. № 28" },
    { id: "chat7", name: "Дима Баринов" },
  ]);

  const handleRemove = (id) => {
    const newChates = chates.filter((item) => item.id !== id);
    setChates(newChates);
  }

  const createChat = (newName) => {
    let newChat = { id: faker.datatype.uuid(), name: newName };
    setChates([...chates, newChat]);
  }

  const classes = useStyles(appTheme);

  const [messages, , setNewMessage] = useMessageList([]);

  return (
    <ThemeProvider theme={appTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <Header classes={classes} appHeading={props.appHeading} />
        <Box className={classes.appBody}>
          <Switch>
            <Route exact path="/" render={() => <Home classes={classes} />} />
            {/* <Home />
            </Route> */}
            <Route path="/profile">
              <Profile classes={classes} />
            </Route>
            <Route path="/chates">
              <Chates
                classes={classes}
                chates={chates}
                messages={messages}
                setNewMessage={setNewMessage}
                handleRemove={handleRemove}
                onSubmit={createChat}
              />
            </Route>
            <Route component={NoMatchPage} />
          </Switch>
          {/* <br /> */}
          {/*<Switch>*/}
          {/*  {*/}
          {/*    routes.map(({path, component, exact}, index) => (<Route key={index} component={component} exact={exact} path={path}/>))*/}
          {/*  }*/}
          {/*</Switch>*/}
          {/* </div> */}
          {/* </Box> */}
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;