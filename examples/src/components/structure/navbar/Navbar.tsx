import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import {
  withStyles,
  WithStyles,
  Drawer,
  Theme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';
import LogoSvg from './LogoSvg';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import BlockIcon from '@material-ui/icons/FormatQuote';
import { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { SlateEditListRoute } from '../../../packages/slate-edit-list/SlateEditListRoute';
import { SlateEditBlockquoteRoute } from '../../../packages/slate-edit-blockquote/SlateEditBlockquoteRoute';
import { drawerWidth } from './../../../const/drawer';
import { HomeRoute } from '../../pages/home/HomeRoute';
import classNames from 'classnames';

export interface NavbarProps
  extends WithStyles<typeof styles>,
    RouteComponentProps {}
const styles = (theme: Theme) => ({
  whiteText: {
    color: 'white',
  },
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
});

const MyLink: React.SFC<ButtonBaseProps> = props => (
  <a
    target="blank"
    href="https://github.com/guestbell/slate-plugins"
    {...props}
  />
);

const Navbar: React.SFC<NavbarProps> = props => {
  const { classes } = props;
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <a target="blank" href="https://guestbell.com">
          <LogoSvg />
          </a>
          <Typography variant="h6" className={classNames(classes.grow, classes.whiteText)}>
            Slate plugins
          </Typography>
          <IconButton component={MyLink}>
            <Icon className={classNames('fa fa-github', classes.whiteText)} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem
            button={true}
            color="inherit"
            component={p => (
              <NavLink to={HomeRoute()} className={p.className} exact={true}>
                {p.children}
              </NavLink>
            )}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider/>
          <ListItem
            button={true}
            color="inherit"
            component={p => (
              <NavLink to={SlateEditListRoute()} className={p.className}>
                {p.children}
              </NavLink>
            )}
          >
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Edit list" />
          </ListItem>
          <ListItem
            button={true}
            color="inherit"
            component={p => (
              <NavLink to={SlateEditBlockquoteRoute()} className={p.className}>
                {p.children}
              </NavLink>
            )}
          >
            <ListItemIcon>
              <BlockIcon />
            </ListItemIcon>
            <ListItemText primary="Edit blockquote" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default withStyles(styles)(withRouter(Navbar));
