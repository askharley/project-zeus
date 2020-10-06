import React from 'react'
import { routeKeys } from './shared/utils/constants';

const LoginForm = React.lazy(() => import('./modules/auth/components/LoginForm'));
const CharacterList = React.lazy(() => import('./modules/characters/components/CharacterList'));
const CharacterDetails = React.lazy(() => import('./modules/characters/components/CharacterDetails'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: routeKeys.LOGIN, name: 'Login', component: LoginForm },  
  { path: routeKeys.CHARACTERS, name: 'Characters', component: CharacterList, exact: true },
  { path: `${routeKeys.CHARACTERS}/:id`, name: 'Character Details', component: CharacterDetails },
]

export default routes;
