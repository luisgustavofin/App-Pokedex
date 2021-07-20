/**
 * @format
 */

import * as reactNative from 'react-native';
import App from './App';
import * as appJson from './app.json';

reactNative.AppRegistry.registerComponent(appJson.name, () => App);
