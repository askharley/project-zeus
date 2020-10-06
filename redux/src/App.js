import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

export default function App() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}
