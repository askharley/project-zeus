import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import 'antd/dist/antd.css';
import './scss/style.scss';
import { Spin } from 'antd';

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

function OnError() {
  return (
    <div>Something went wrong...</div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={<Spin />}>
        <Switch>
          <ErrorBoundary FallbackComponent={OnError}>
            <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
          </ErrorBoundary>
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}
