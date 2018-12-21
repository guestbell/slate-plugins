
import * as React from 'react';
import { Route, Switch, RouteProps, matchPath } from 'react-router-dom';
import Layout from './components/structure/layout/MainLayout';
import posed, { PoseGroup } from 'react-pose';

import PageNotFound from './components/pages/pageNotFound/PageNotFound';

import { HomeRoute } from './components/pages/home/HomeRoute';
import Home from './components/pages/home/Home';

import { SlateEditListRoute } from './packages/slate-edit-list/SlateEditListRoute';
import SlateEditList from './packages/slate-edit-list/SlateEditList';

import { SlateEditBlockquoteRoute } from './packages/slate-edit-blockquote/SlateEditBlockquoteRoute';
import SlateEditBlockquote from './packages/slate-edit-blockquote/SlateEditBlockquote';

const RouteContainer = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 100,
    beforeChildren: true,
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 200 },
  },
});

export const routesConfig: (RouteProps & { className?: string })[] = [
  {
    exact: true,
    path: HomeRoute(),
    component: Home,
    className: 'home',
  },
  {
    path: SlateEditListRoute(),
    component: SlateEditList,
    className: 'slate-edit-list',
  },
  {
    path: SlateEditBlockquoteRoute(),
    component: SlateEditBlockquote,
    className: 'slate-edit-blockquote',
  },
  {
    component: PageNotFound,
  },
];

export const routes = (
  <Route
    render={({ location }) => {
      const match = routesConfig.find(conf => {
        const m = matchPath(location.pathname, {
          path: conf.path,
          exact: conf.exact,
          strict: conf.strict,
        });
        return Boolean(m);
      });
      const className = match && match.className;
      return (
        <Layout className={className}>
          <PoseGroup>
            <RouteContainer key={location.pathname} className="d-flex flex-column">
              <Switch location={location}>
                {routesConfig.map((route, index) => (
                  <Route {...route} key={index} />
                ))}
              </Switch>
            </RouteContainer>
          </PoseGroup>
        </Layout>
      );
    }}
  />
);
