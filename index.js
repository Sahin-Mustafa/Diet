/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import App from './src/Wrapper';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['Require cycle: node_modules/victory']);
AppRegistry.registerComponent(appName, () => App);
