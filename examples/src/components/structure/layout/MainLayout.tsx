import * as React from 'react';
import classNames from 'classnames';
import Navbar from '../navbar/Navbar';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { drawerWidth } from './../../../const/drawer';

const styles = (theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  } as CSSProperties,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginLeft: drawerWidth,
  } as CSSProperties,
  toolbar: theme.mixins.toolbar,
});

export interface MainLayoutProps extends WithStyles<typeof styles> {
  className?: string;
}

const MainLayout: React.SFC<MainLayoutProps> = props => {
  const { classes } = props;
  return (
    <div className={classNames('main-layout', props.className, classes.root)}>
      <Navbar />
      <main className={classNames(classes.content)}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

export default withStyles(styles)(MainLayout);
