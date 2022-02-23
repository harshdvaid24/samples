import {Dimensions, Platform} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

// current device width & height
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

// status bar height
export const statusbarHeight = getStatusBarHeight();

// MOCKUP DEVICE WIDTH
export const MOCKUP_DEVICE_WIDTH = 360;

// MOCKUP DEVICE HEIGHT
export const MOCKUP_DEVICE_HEIGHT = 780;

// calculates Width
export const W = (pixel) => {
  return (pixel * WINDOW_WIDTH) / MOCKUP_DEVICE_WIDTH;
};

// calculates Height
export const H = (pixel) => {
  return (pixel * WINDOW_HEIGHT) / MOCKUP_DEVICE_HEIGHT;
};

// all the colors
const _colorSet = {
  alertSectionBg: '#FDF8E2',
  black: '#1E282D',
  white: '#FFFFFF',
  primary: '#0071ce',
  primaryYellow:'#ffe43e',
  bgYellow:'#FFFFE0',
  lightPrimary: '#0a84ff',
  bgBlue:'#93ceff',
  fontBlue: '#007aff',
  bgBlack: '#202023',
  lightBlack: '#1e272e',
  grey: '#BBBEC0',
  bgPriary:'#d4e6f7',
  outOfStockBg:'#4a4a4a',
  bluishGrey: '#808e9b',
  red: 'red',
  lightGrey: '#808e9b',
  borderGrey: '#e5e5e5',
  textBoxBGColor: '#F6F7F7',
  TextBoxBorderColor: '#BBBEC0',
  dotGrey: '#999999',
  failedBg:'#fde2e3',
  chatBg:'#f8f8f8'
};

// all the fonts
const _fontSet = {
  Regular: 'GoogleSans-Regular',
  Bold: 'GoogleSans-Bold',
  SemiBold: 'GoogleSans-Medium',
  Italic: 'GoogleSans-Italic',
};

const GlobalStyle = {
  colorSet: _colorSet,
  fontSet: _fontSet,
  windowW: WINDOW_WIDTH,
  windowH: WINDOW_HEIGHT,
};

export default GlobalStyle;
