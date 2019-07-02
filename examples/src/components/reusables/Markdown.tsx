import * as React from 'react';
import ReactMarkdown, {
  MarkdownComponentProps,
  ReactMarkdownProps
} from 'markdown-to-jsx';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => ({
  listItem: {
    marginTop: theme.spacing.unit,
  },
});

export interface ListLiProps
  extends WithStyles<typeof styles>,
    MarkdownComponentProps {}

const ListLi: React.SFC<ListLiProps> = ({ classes, ...props }) => (
  <li className={classes.listItem}>
    <Typography component="span" {...props} />
  </li>
);

const ListLiWrapped = withStyles(styles)(ListLi);

const options = {
  overrides: {
    h1: {
      component: (props: MarkdownComponentProps) => (
        <Typography gutterBottom={true} variant="h4" {...props} />
      ),
    },
    h2: {
      component: (props: MarkdownComponentProps) => (
        <Typography gutterBottom={true} variant="h6" {...props} />
      ),
    },
    h3: {
      component: (props: MarkdownComponentProps) => (
        <Typography gutterBottom={true} variant="subtitle1" {...props} />
      ),
    },
    h4: {
      component: (props: MarkdownComponentProps) => (
        <Typography
          gutterBottom={true}
          variant="caption"
          paragraph={true}
          {...props}
        />
      ),
    },
    p: {
      component: (props: MarkdownComponentProps) => (
        <Typography paragraph={true} {...props} />
      ),
    },
    li: {
      component: ListLiWrapped,
    },
  },
};

export interface MarkdownProps extends ReactMarkdownProps {
  className?: string;
}

const Markdown: React.SFC<MarkdownProps> = props => {
  return (
    <div className="slate-editor">
      <ReactMarkdown options={options} {...props} />
    </div>
  );
};

export default Markdown;
