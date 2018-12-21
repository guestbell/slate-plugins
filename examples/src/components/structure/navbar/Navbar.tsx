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
  ListItemText
} from '@material-ui/core';
import LogoSvg from './LogoSvg';
import ListIcon from '@material-ui/icons/List';
import BlockIcon from '@material-ui/icons/FormatQuote';
import { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { SlateEditListRoute } from '../../../packages/slate-edit-list/SlateEditListRoute';
import { SlateEditBlockquoteRoute } from '../../../packages/slate-edit-blockquote/SlateEditBlockquoteRoute';
import { drawerWidth } from './../../../const/drawer';

export interface NavbarProps extends WithStyles<typeof styles>, RouteComponentProps {}
const styles = (theme: Theme) => ({
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
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <LogoSvg />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Slate plugins
          </Typography>
          <IconButton color="inherit" component={MyLink}>
            <Icon className="fa fa-github" />
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

export default (withStyles(styles)(withRouter(Navbar)));
