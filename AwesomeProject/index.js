/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { UserProvider } from './src/context/userContext';
AppRegistry.registerComponent(appName, () => App);
