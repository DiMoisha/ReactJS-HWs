import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { orange, teal } from '@material-ui/core/colors';
// import './App.css';
import { useMessageList } from './hooks/useMessage'
import { useDidUpdate } from './hooks/useDidUpdate'
import { MessageList } from './components/MessageList';
import { MessageInputForm } from './components/MessageInputForm';
import { ChatList } from './components/ChatList';

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

const appBarHeight = [52, 64];            // Высота хедера
const appDrawerWidth = [300, 400, 500];  // Ширина списка чатов
const appContentPadding = [20, 30, 50]; // Боковые отступы контена


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  toolbar: {
    backgroundColor: appTheme.palette.primary.main,
    borderBottom: `4px solid ${appTheme.palette.secondary.main}`,
    paddingRight: 24,
    minHeight: appBarHeight[0],
    [theme.breakpoints.up('xs')]: {
      minHeight: appBarHeight[0],
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: appBarHeight[1],
    },
  },

  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  menuButton: {
    marginRight: 36,
    color: appTheme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },

  title: {
    flexGrow: 1,
    color: appTheme.palette.primary.contrastText,
  },

  appBody: {
    [theme.breakpoints.up('xs')]: {
      marginTop: appBarHeight[0],
    },
    [theme.breakpoints.up('sm')]: {
      marginTop: appBarHeight[1],
    },
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  drawerBox: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },

  drawerBoxShow: {
    display: 'flex',
  },

  drawerPaper: {
    overflowX: 'hidden',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: appDrawerWidth[0],
    [theme.breakpoints.up('md')]: {
      width: appDrawerWidth[1],
    },
    [theme.breakpoints.up('lg')]: {
      width: appDrawerWidth[2],
    },
  },

  drawerMaxWidth: {
    width: '100%!important',
  },

  chatItemText: {
    fontSize: '0.8rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1rem',
    },
  },

  appContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '1px solid #ddd',
    background: appTheme.palette.background.default,
    padding: `0 ${appContentPadding[0]}px`,
    [theme.breakpoints.up('md')]: {
      padding: `0 ${appContentPadding[1]}px`,
    },
    [theme.breakpoints.up('lg')]: {
      padding: `0 ${appContentPadding[2]}px`,
    },
  },

  appContentHidden: {
    display: 'none',
  },

  msgItem: {
    borderRadius: 3,
    margin: '20px 0 5px',
    border: '1px solid #ddd',
    padding: 0,
  },

  msgItemTop: {
    display: 'flex',
    margin: 0,
    padding: '5px 10px',
    backgroundColor: appTheme.palette.primary.light,
    fontSize: 12,
  },

  msgItemAuthor: {
    marginLeft: 20,
    fontWeight: 'bold',
  },

  msgItemText: {
    borderRadius: 3,
    margin: '0',
    padding: '20px 10px',
    fontSize: 16,
    textAlign: 'left',
    backgroundColor: appTheme.palette.secondary.light,
  },

  msgInputForm: {
    borderRadius: 3,
    margin: '20px 0',
    padding: 20,
    backgroundColor: appTheme.palette.primary.dark,
    border: '1px solid #aaa',
    textAlign: 'center',
  },

  msgInputFormGroupControl: {
    padding: 0,
    margin: '0 0 20px 0',
  },

  msgInputFormLbl: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  msgInputFormInput: {
    margin: '10px 0 0 0',
    width: '100%',
    maxWidth: '100%',
    fontSize: 16,
    color: '#555',
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },

  fixedHeight: {
    height: 240,
  },
}));


function App(props) {
  const chates = [
    { id: "chat0", name: "GreekBrains группа" },
    { id: "chat1", name: "Работа-коллеги" },
    { id: "chat2", name: "Валентин Петрович" },
    { id: "chat3", name: "Людмила" },
    { id: "chat4", name: "Евгений-автослесарь" },
    { id: "chat5", name: "Окна Rehau на Василеостровской" },
    { id: "chat6", name: "Одноклассники шк. № 28" },
    { id: "chat7", name: "Дима Баринов" },
  ];

  const [messages, setNewMessage] = useMessageList([]);
  const classes = useStyles();

  useDidUpdate(() => {
    let i = messages.length - 1;
    if (i >= 0 && !messages[i].isBot) {
      let message = { id: Date.now(), dat: new Date().toLocaleString('ru-RU'), author: 'bot', text: `${messages[i].author}, ваше сообщение опубликовано!`, isBot: true };
      window.setTimeout(() => {
        setNewMessage(message);
      }, 1500);
    }
  }, messages)

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar className={classes.appBar} >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              {props.heading}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box className={classes.appBody}>
          <Drawer
            variant="permanent"
            className={clsx(classes.drawerBox, {[classes.drawerBoxShow]: open, [classes.drawerMaxWidth]: open })}
            classes={{
              paper: clsx(classes.drawerPaper, {[classes.drawerPaper]: open, [classes.drawerMaxWidth]: open })
            }}
          >
            <Divider />
            <ChatList classes={classes} chates={chates} />
            <Divider />
          </Drawer>
          <Box component="main" 
            className={clsx(classes.appContent, open && classes.appContentHidden)}
          >
            <MessageList classes={classes} messages={messages} />
            <hr style={{ width: '100%' }} />
            <MessageInputForm classes={classes} onSubmit={setNewMessage} />
          </Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;