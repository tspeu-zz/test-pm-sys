import {RouterConfig} from '@angular/router';
import {Login} from './login.component';

//noinspection TypeScriptValidateTypes
export const LoginRoutes: RouterConfig = [
  {
    path: '',
    component: Login
  },
  {
    path: 'login',
    component: Login
  }
];
