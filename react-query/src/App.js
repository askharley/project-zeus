import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import 'antd/dist/antd.css';
import { useEkko } from 'use-ekko';
import { Spin } from 'antd';
import { UserContext } from './shared/context';

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

function OnError() {
  return (
    <div>Something went wrong...</div>
  );
}

export default function App() {
  const [user, setUser] = useEkko('user');

  return (
    <UserContext.Provider value={[user, setUser]}>
      <HashRouter>
        <React.Suspense fallback={<Spin />}>
          <Switch>
            <ErrorBoundary FallbackComponent={OnError}>
              <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
            </ErrorBoundary>
          </Switch>
        </React.Suspense>
      </HashRouter>
    </UserContext.Provider>
  );
}
