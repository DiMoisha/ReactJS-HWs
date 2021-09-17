import { makeStyles } from '@material-ui/core/styles';

const appBarHeight = [52, 64];            // Высота хедера
const appDrawerWidth = [300, 400, 500];  // Ширина списка чатов
const appContentPadding = [20, 30, 50]; // Боковые отступы контена

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  toolbar: props => ({
    backgroundColor: props.palette.primary.main,
    borderBottom: `4px solid ${props.palette.secondary.main}`,
    paddingRight: 24,
    minHeight: appBarHeight[0],
    [theme.breakpoints.up('xs')]: {
      minHeight: appBarHeight[0],
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: appBarHeight[1],
    },
  }),

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

  appBarButton: props => ({
    cursor: 'pointer',
    color: props.palette.secondary.main + '!important',
  }),

  chatMenuButton: {
    cursor: 'pointer',
    [theme.breakpoints.up('sm')]: {
      display: 'none!important',
    },
  },

  appTitle: props => ({
    flexGrow: 1,
    textAlign: 'center',
    color: props.palette.primary.contrastText,
  }),

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

  chatMenu: {
    display: 'flex',
  },

  btnChatMenu: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },

  chatMenuPaper: {
    overflowX: 'hidden',
    position: 'static!important',
    zIndex: 'auto!important',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    [theme.breakpoints.up('sm')]: {
      maxWidth: appDrawerWidth[0],
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: appDrawerWidth[1],
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: appDrawerWidth[2],
    },
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

  appContent: props => ({
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottom: '1px solid #ddd',
    background: props.palette.background.default,
    padding: `0 ${appContentPadding[0]}px 10px`,
    [theme.breakpoints.up('md')]: {
      padding: `0 ${appContentPadding[1]}px 20px`,
    },
    [theme.breakpoints.up('lg')]: {
      padding: `0 ${appContentPadding[2]}px 30px`,
    },
  }),

  msgList: {
    width: '100%',
  },

  msgItem: {
    borderRadius: 3,
    margin: '20px 0 5px',
    border: '1px solid #ddd',
    padding: 0,
  },

  msgItemTop: props => ({
    display: 'flex',
    margin: 0,
    padding: '5px 10px',
    backgroundColor: props.palette.primary.light,
    fontSize: 12,
  }),

  msgItemDat: {

  },

  msgItemAuthor: {
    marginLeft: 20,
    fontWeight: 'bold',
  },

  msgItemText: props => ({
    borderRadius: 3,
    margin: '0',
    padding: '20px 10px',
    fontSize: 16,
    textAlign: 'left',
    backgroundColor: props.palette.secondary.light,
  }),

  msgInputForm: props => ({
    width: '100%',
    borderRadius: 3,
    margin: '20px 0',
    padding: 20,
    backgroundColor: props.palette.primary.dark,
    border: '1px solid #aaa',
    textAlign: 'center',
  }),

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

  loginForm: props => ({
    borderRadius: 3,
    maxWidth: 300,
    margin: '20px 0',
    padding: 20,
    backgroundColor: props.palette.primary.dark,
    border: '1px solid #aaa',
    textAlign: 'center',
  }),

  loginFormGroupControl: {
    padding: 0,
    margin: '0 0 20px 0',
  },

  loginFormLbl: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  loginFormInput: {
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

  // container: {
  //   paddingTop: theme.spacing(4),
  //   paddingBottom: theme.spacing(4),
  // },

  // paper: {
  //   padding: theme.spacing(2),
  //   display: 'flex',
  //   overflow: 'auto',
  //   flexDirection: 'column',
  // },

  // fixedHeight: {
  //   height: 240,
  // },
  textCenter: {
    textAlign: 'center',
  },

  title: {
    margin: '20px 0!important',
  },

  error: {
    color: 'red',
    textShadow: '0 0 1px red',
  },

  btn1: {
    cursor: 'pointer',
    border: '1px solid grey',
    borderRadius: 5,
    textDecoration: 'none',
    padding: '5px 20px',
    boxShadow: '0 0 2px black',
    '&:hover': {
      background: 'white',
      color: 'red',
      boxShadow: '0 0 10px grey',
    },
  },

  profileForm: props => ({
    borderRadius: 3,
    maxWidth: 300,
    margin: '20px 0',
    padding: 20,
    backgroundColor: props.palette.primary.dark,
    border: '1px solid #aaa',
    textAlign: 'center',
  }),

  profileGroupControl: {
    padding: 0,
    margin: '0 0 20px 0',
    textAlign: 'center',
  },

  profileInput: {
    margin: '10px 0 0 0',
    maxWidth: 350,
    fontSize: 16,
    color: '#555',
  },

  footer: props => ({
    backgroundColor: '#444',
    borderTop: `4px solid ${props.palette.secondary.main}`,
    paddingTop: 20,
    paddingBottom: 20,
    color: '#bbb',
    textShadow: '0 0 2px black',
    fontSize: 16,
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  }),
}));