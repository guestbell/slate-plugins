import * as React from 'react';
import Markdown from './../../reusables/Markdown';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import path from 'path';
import Typography from '@material-ui/core/Typography';

export interface BasePageProps extends WithStyles<typeof styles> {
  packageName: string;
}
export interface BasePageState {
  docsMarkdown?: string;
}

const styles = (theme: Theme) => ({
  documentationMarkdown: {
    padding: `${theme.spacing.unit * 3}px`,
    backgroundColor: 'white',
  },
  docsContainer: {
    marginTop: `${theme.spacing.unit * 3}px`,
  },
});

class BasePage extends React.Component<BasePageProps, BasePageState> {
  constructor(props: BasePageProps) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(
      path.join(
        process.env.PUBLIC_URL,
        'docs',
        this.props.packageName,
        'Readme.md'
      )
    )
      .then(response => response.text())
      .then(docsMarkdown => {
        this.setState({
          docsMarkdown,
        });
      })
      .catch(error => {
        this.setState({
          docsMarkdown: `##Unable to load docs\n\`\`\`${JSON.stringify(error)}`,
        });
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.children && (
          <Typography variant="h2" gutterBottom={true}>
            Demo
          </Typography>
        )}
        {this.props.children}
        {this.state.docsMarkdown && (
          <div className={classes.docsContainer}>
            <Typography variant="h2" gutterBottom={true}>
              Docs
            </Typography>
            <Markdown className={classes.documentationMarkdown}>
              {this.state.docsMarkdown}
            </Markdown>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(BasePage);
