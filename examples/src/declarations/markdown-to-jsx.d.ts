declare module 'markdown-to-jsx' {
  import * as React from 'react';
  export interface MarkdownComponentProps {
    className?: string;
  }

  export interface ReactMarkdownOptions {
    forceBlock?: boolean;
    forceInline?: boolean;
    overrides?: {
      [key: string]: {
        component: React.ComponentType<MarkdownComponentProps>;
        props?: MarkdownComponentProps;
      };
    };
    slugify?: (str: string) => string;
  }

  export interface ReactMarkdownProps {
    className?:string;
    options?: ReactMarkdownOptions;
  }

  export default class ReactMarkdown extends React.Component<
    ReactMarkdownProps
  > {}
}
