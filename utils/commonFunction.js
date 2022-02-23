// Default Components .....
import {Alert, PermissionsAndroid, Linking, Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {apiManager} from './../ApiManager/ApiManager';
import messaging from '@react-native-firebase/messaging';
import SendBird from 'sendbird';
import Toast from 'react-native-root-toast';
import strings from '../Constants/Strings';
import {currencySymbols} from './constants';
import PushNotification from 'react-native-push-notification';

// Donwload files
export const downloadFile = async (fileUrl, type) => {
  console.log('downloadFile:', fileUrl);
  console.log('downloadFile:type:', type);
  // Function to check the platform
  // If Platform is Android then check for permissions.

  if (Platform.OS === 'ios') {
    if (type) {
      // downloadReport(fileUrl,type);
      Linking.openURL(fileUrl);
    } else {
      download(fileUrl);
    }
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message: 'Application needs access to your storage to download File',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Start downloading
        if (type) {
          downloadReport(fileUrl, type);
        } else {
          download(fileUrl, type);
        }

        console.log('Storage Permission Granted.');
      } else {
        // If permission denied then show alert
        Alert.alert('Error', 'Storage Permission Not Granted');
      }
    } catch (err) {
      // To handle permission related exception
      console.log('++++' + err);
    }
  }
};

const download = (fileUrl, type) => {
  LongToast('File Downloading...', true);
  // Get today's date to add the time suffix in filename
  let date = new Date();
  // File URL which we want to download
  let FILE_URL = fileUrl;
  // Function to get extention of the file url
  let file_ext = getFileExtention(FILE_URL);

  file_ext = '.' + file_ext[0];

  // config: To get response by passing the downloading related options
  // fs: Root directory path to download
  const {config, fs} = RNFetchBlob;
  // let RootDir = fs.dirs;
  const {DownloadDir} = fs.dirs;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      path: `${DownloadDir}/${type}` + file_ext,
      // path:
      //   RootDir+
      //   '/file_' +
      //   Math.floor(date.getTime() + date.getSeconds() / 2) +
      //   file_ext,
      description: 'downloading file...',
      notification: true,
      // useDownloadManager works with Android only
      useDownloadManager: true,
      showNotification: true,
    },
  };
  config(options)
    .fetch('GET', FILE_URL)
    .then((res) => {
      LongToast('', false);
      setTimeout(() => {
        toast('File Downloaded Successfully.');
      }, 2000);

      // Alert after successful downloading
      // console.log('res -> ', JSON.stringify(res));
      // alert('File Downloaded Successfully.');
    });
};

const downloadReport = (fileUrl, type) => {
  console.log('downloadReport:type:', type);
  LongToast('File Downloading...', true);
  // Get today's date to add the time suffix in filename
  let date = new Date();
  // File URL which we want to download
  let FILE_URL = fileUrl;
  // Function to get extention of the file url
  let file_ext = getFileExtention(FILE_URL);

  file_ext = '.' + file_ext[0];

  // config: To get response by passing the downloading related options
  // fs: Root directory path to download
  const {config, fs} = RNFetchBlob;

  const {DownloadDir} = fs.dirs;

  const fPath = DownloadDir + '/' + type + file_ext;

  console.log('File path :-', fPath);

  let options = {
    fileCache: true,
    notification: true,
    path: fPath,
    addAndroidDownloads: {
      path: fPath,
      // path:
      //   RootDir+
      //   '/file_' +
      //   Math.floor(date.getTime() + date.getSeconds() / 2) +
      //   file_ext,
      description: 'downloading file...',
      notification: true,
      // useDownloadManager works with Android only
      useDownloadManager: true,
      showNotification: true,
    },
  };
  config(options)
    .fetch('GET', FILE_URL)
    .then((res) => {
      setTimeout(() => {
        toast('File Downloaded Successfully.');
      }, 2000);
      let details = {
        /* iOS and Android properties */
        allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
        repeatTime: 1,
        title: 'File Downloaded Successfully.', // (optional)
        message: ' Downloaded Successfully.', // (required)
      };
      PushNotification.presentLocalNotification(details);

      PushNotification.localNotificationSchedule({
        //... You can use all the options from localNotifications
        message: 'File Downloaded Successfully.', // (required)
        date: new Date(Date.now() + 10 * 1000), // in 60 secs
        allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

        /* Android Only Properties */
        repeatTime: 1, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
      });
      // Alert after successful downloading
      // console.log('res -> ', JSON.stringify(res));
      // alert('File Downloaded Successfully.');
    });
};

const getFileExtention = (fileUrl) => {
  // To get the file extension
  return /[.]/.exec(fileUrl) ? /[^.]+$/.exec(fileUrl) : undefined;
};

// ##Method :: Email Validate
export const IsValidateEmail = (email) => {
  var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(String(email).toLowerCase());
};

// ##Method :: Check Empty Field
export const isEmptyField = (field) => {
  var isFieldEmpty = field === '' ? true : false;
  return isFieldEmpty;
};

export const checkOnlyAlphabatic = (input) => {
  return input.match(/^[a-zA-Z ]+$/);
};

// ##Method :: Check phonenumber is valid
export const checkPhoneNumber = (number) => {
  var isnum = /^[6-9][0-9]{9}$/.test(number);
  return isnum;
};

// ##Method :: Check number is valid
export const checkNumber = (number) => {
  var isnum = /^[0-9]{8,15}$/.test(number);
  return isnum;
};

// ##Method :: Check for minimum password length
export const validPasswordLength = (password, length) => {
  var isPasswordLength = password.length >= length ? true : false;
  return isPasswordLength;
};

// ##Method :: Check for Website url
export const validWebsite = (url) => {
  var isUrl = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/.test(
    url,
  );
  return isUrl;
};

// ##Method :: Check GST NO is valid
export const checkGSTNumber = (number) => {
  var isnum = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/.test(
    number,
  );
  return isnum;
};

// DD / MM / YYYY
export const DateFomat = (date) => {
  var selected = date;
  var dd = selected.getDate();
  var mm = selected.getMonth() + 1;

  var yyyy = selected.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  var formatedDate = dd + '/' + mm + '/' + yyyy;
  return formatedDate;
};

// DD/Mon/YYYY
export const DateFomat2 = (date) => {
  var selected = date;
  var dd = selected.getDate();

  let monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let monthIndex = selected.getMonth();
  let monthName = monthNames[monthIndex];

  var yyyy = selected.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  var formatedDate = dd + ' ' + monthName + ', ' + yyyy;
  return formatedDate;
};

// ##Method :: Compare two string
export const matchString = (string1, string2) => {
  var isMatchString = string1 === string2 ? true : false;
  return isMatchString;
};

export const toConvertFloat = (v) => {
  let value = parseFloat(v, 2);
  console.log('toFloat:', value);
  return value;
};

export function toCamelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

// convert digits to words
export const inWords = (num) => {
  var a = [
    '',
    'one ',
    'two ',
    'three ',
    'four ',
    'five ',
    'six ',
    'seven ',
    'eight ',
    'nine ',
    'ten ',
    'eleven ',
    'twelve ',
    'thirteen ',
    'fourteen ',
    'fifteen ',
    'sixteen ',
    'seventeen ',
    'eighteen ',
    'nineteen ',
  ];
  var b = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if ((num = num.toString()).length > 9) return 'overflow';
  let n = ('000000000' + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  var str = '';
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore '
      : '';
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh '
      : '';
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand '
      : '';
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred '
      : '';
  str +=
    n[5] != 0
      ? (str != '' ? 'and ' : '') +
        (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]])
      : '';
  return str;
};

export const addTocart = (cartItems, qty, productId) => {
  // console.log("addTocart cartItems:",cartItems);
  // console.log("addTocart qty:",qty);
  // console.log("addTocart productId:",productId);

  let updatedCartItems = cartItems;
  let newItem = {
    id: productId,
    quantity: qty,
  };
  if (updatedCartItems.length != 0) {
    if (qty == 0) {
      updatedCartItems.splice(
        updatedCartItems.findIndex((a) => a.id === productId.id),
        1,
      );
    } else {
      let idExists = updatedCartItems.findIndex(
        (cartItem) => cartItem.id == newItem.id,
      );
      if (idExists > -1) {
        updatedCartItems[idExists] = newItem;
      } else {
        updatedCartItems.push(newItem);
      }
    }
  } else {
    updatedCartItems.push(newItem);
  }
  //  console.log("addTocart updatedCartItems:",updatedCartItems);
  return updatedCartItems;
};

// Toast
export function toast(msg) {
  Toast.show(msg, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: false,
  });
}
// Toast
export function LongToast(msg, IsVisible) {
  let toast = '';
  console.log('LongToast:', IsVisible);
  if (IsVisible) {
    toast = Toast.show(msg, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
      onShow: () => {
        // calls on toast\`s appear animation start
      },
      onShown: () => {
        // calls on toast\`s appear animation end.
      },
      onHide: () => {
        // calls on toast\`s hide animation start.
      },
      onHidden: () => {
        // calls on toast\`s hide animation end.
      },
    });
  } else {
    Toast.hide(toast);
  }
}

// Notification functions
export const notificationSetup = async () => {
  Platform.OS === 'ios' && checkIosPermission();
  Platform.OS === 'android' && checkPermission();
};

//  checks notification permission for android and ios
checkPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getToken();
    console.log('Authorization status:', authStatus);
  }
};
export const checkIosPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    getToken();
  }
};

// checks in local storage and call save fcm api
export const getToken = async () => {
  console.log('getToken Token :-');
  let existingFCM = await AsyncStorage.getItem('DeviceToken');
  if (!existingFCM) {
    let fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('Device Token :-', fcmToken);
      AsyncStorage.setItem('DeviceToken', fcmToken);
      saveFCM(fcmToken);
    }
  } else {
    console.log('existingFCM :-', existingFCM);
    saveFCM(existingFCM);
  }
};

export const saveFCM = async (fcm) => {
  let data = {
    token: fcm,
    platform: Platform.OS,
  };
  apiManager
    .SaveFCMToken(data)
    .then((response) => {
      console.log('SaveFCMToken Response', response);
    })
    .catch((error) => {
      console.log('SaveFCMToken Error', error);
    });
};

export const updateTokenToSB = async () => {
  const sb = SendBird.getInstance();
  console.log('updateTokenToSB SB Response:-');
  try {
    if (Platform.OS === 'ios') {
      const token = await messaging().getAPNSToken();
      let response = await sb.registerAPNSPushTokenForCurrentUser(token);
      console.log('iOS SB Response:-', response);
    } else {
      console.log('updateTokenToSB andorid SB Response:-');
      const token = await messaging().getToken();
      let response = await sb.registerGCMPushTokenForCurrentUser(token);
      console.log('updateTokenToSB Android SB Response:-', token);
    }
  } catch (error) {
    console.log('updateTokenToSB SB  error:-', error);
  }
};

export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const priceSignByCode = (code) => {
  console.log('priceSignByCode:', code);
  const sign = currencySymbols[code];
  if (sign) {
    console.log('priceSignByCode:sign', sign);
    return sign;
  } else {
    // If no currency symbol specified for currency code, return currency code
    return code;
  }
};

// 24 hours to 12 hours
export const transformTime = (time) => {
  let [hours, minutes] = time.split(':');
  let modifier = +hours < 12 ? ' AM' : ' PM';
  hours = +hours % 12 || 12;
  minutes = +minutes === 0 ? ':00' : `:${minutes}`;
  return hours + minutes + modifier;
};

export const FileActionItems = [
  {
    id: 1,
    label: strings.Capture_Image,
  },
  {
    id: 2,
    label: strings.Open_Photos,
  },
  {
    id: 3,
    label: strings.Select_File,
  },
];

export const actionItems = [
  {
    id: 1,
    label: strings.Capture_Image,
  },
  {
    id: 2,
    label: strings.Select_File,
  },
];
