// App
import {AppState} from "./app.state";
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import * as services from './services';
export * from './app.component';

const mapValuesToArray = (obj) => Object.keys(obj).map(key => obj[key]);

// Application wide providers
export const APP_PROVIDERS = [
	...mapValuesToArray(services),
  AppState,
  AuthGuard,
  AuthService
];
