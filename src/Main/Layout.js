import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// import { format } from 'date-fns'
import avatar from './../images/avatar.png';


const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      float:'right'
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4',
      fontSize:55
    
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: '100%',
      marginLeft: drawerWidth,
    backgroundColor:'#b2b1b1'
    },
    date: {
      flexGrow: 1
    },
    toolbar: theme.mixins.toolbar,
    text:{
        fontSize:19
    }
  }
})

export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    { 
      text: 'مقاله های نوشته شده', 
      icon: <SubjectOutlined color="secondary" />, 
      path: '/my_articles' 
    },
    { 
      text: 'نوشتن مقاله', 
      icon: <AddCircleOutlineOutlined color="secondary" />, 
      path: '/write_article' ,
    },
    {
        text:'برگت به صفحه اصلی',
        icon:<KeyboardBackspaceIcon color="secondary"/>,
        path:'/'
    }
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar 
        position="fixed" 
        className={classes.appBar}
        elevation={0}
      >
        <Toolbar>
          <Typography variant='h3'>
          <Avatar alt="Remy Sharp" src={avatar} className={classes.large}/>

            {/* Today is the {format(new Date(), 'do MMMM Y')} */}
          </Typography>
          {/* <Typography>Mario</Typography> */}
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="right"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item.text} 
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemText className={classes.text} primary={item.text} />
              <ListItemIcon>{item.icon}</ListItemIcon>
            </ListItem>
          ))}
        </List>
        
      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        { children }
      </div>
    </div>
  )
}
