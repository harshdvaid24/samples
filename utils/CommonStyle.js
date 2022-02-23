import {StyleSheet, Platform, StatusBar} from 'react-native';
import GlobalStyle from './GlobalStyles';
import {W, H, statusbarHeight} from './GlobalStyles';

const CommonStyle = StyleSheet.create({
  topPadding: {
    paddingTop: Platform.OS == 'ios' ? 0 : H(47),
  },
  HomeTopPadding: {
    paddingTop: Platform.OS == 'ios' ? 0 : H(27),
  },
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colorSet.listingBg,
  },
  flex1: {
    flex: 1,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container20: {
    flex: 1,
    backgroundColor: GlobalStyle.colorSet.listingBg,
    paddingLeft: W(20),
    paddingRight: W(20),
  },
  container15: {
    flex: 1,
    // backgroundColor: GlobalStyle.colorSet.white,
    paddingLeft: W(15),
    paddingRight: W(15),
  },
  PlainContainer: {
    flex: 1,
    backgroundColor: GlobalStyle.colorSet.white,
  },

  SimpleContainer: {
    backgroundColor: GlobalStyle.colorSet.white,
    width: '100%',
    height: '100%',
  },

  darkContainer: {
    backgroundColor: GlobalStyle.colorSet.listingBg,
    width: '100%',
    height: '100%',
  },

  FlexRow: {
    flexDirection: 'row',
  },
  FlexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  FlexCol: {
    flexDirection: 'column',
    width: '50%',
  },
  FlexReverseRow: {
    flexDirection: 'row-reverse',
  },
  FlexWrap: {
    flexWrap: 'wrap',
  },

  containerPaddingLR: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: GlobalStyle.colorSet.white,
    paddingLeft: W(47),
    paddingRight: W(47),
  },
  ContainerCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyle.colorSet.white,
  },
  VerticalCenter: {
    justifyContent: 'center',
  },

  HorizontalCenter: {
    alignItems: 'center',
  },
  alignLeft: {
    alignSelf: 'flex-start',
  },
  alignRight: {
    alignSelf: 'flex-end',
  },

  alignItemsLeft: {
    alignItems: 'flex-start',
  },
  alignItemsRight: {
    alignItems: 'flex-end',
  },

  alignSelfTop: {
    alignSelf: 'flex-start',
  },
  alignSelfBottom: {
    alignSelf: 'flex-end',
  },

  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },

  alignContentLR: {
    justifyContent: 'space-between',
  },

  LoginContainer: {
    // width:'100%',
    marginTop: H(30),
    marginBottom: H(80),
    paddingBottom: H(40),
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: W(50),
    marginHorizontal: W(27),
    backgroundColor: GlobalStyle.colorSet.white,
  },
  SignUpContainer: {
    marginTop: H(30),
    marginBottom: H(20),
    paddingBottom: H(20),
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: W(50),
    marginHorizontal: W(27),
    backgroundColor: GlobalStyle.colorSet.white,
  },

  SimpleCardWithBorderRadius: {
    paddingBottom: H(40),
    alignItems: 'center',
    borderWidth: 0,
    borderRadius: W(50),
    marginHorizontal: W(27),
    backgroundColor: GlobalStyle.colorSet.white,
  },

  LoginTitleView: {
    marginTop: H(200),
    paddingLeft: W(27),
    paddingRight: W(27),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  SignUpTitleView: {
    marginTop: H(80),
    paddingLeft: W(27),
    paddingRight: W(27),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  LoginTitle: {
    fontSize: W(30),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.white,
  },
  BusinessTitle: {
    fontSize: W(22),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.primary,
  },
  LoginSubTitle: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.white,
    textAlign: 'center',
  },
  SignUpSubTitle: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.white,
    textAlign: 'center',
  },
  LoginSubBoldTitle: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.white,
    textAlign: 'center',
  },

  Links: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.white,
    textDecorationLine: 'underline',
  },

  underline: {
    textDecorationLine: 'underline',
  },

  BtnFacebook: {
    width: '100%',
    backgroundColor: GlobalStyle.colorSet.BtnFB,
    height: W(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: W(3),
  },

  BtnOTP: {
    width: '100%',
    backgroundColor: GlobalStyle.colorSet.primary,
    height: W(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: W(20),
  },
  Icon10: {
    height: H(10),
    width: W(10),
  },
  Icon12: {
    height: H(12),
    width: W(12),
  },
  Icon15: {
    height: H(15),
    width: W(15),
  },
  Icon20: {
    height: W(20),
    width: W(20),
  },
  Icon25: {
    height: W(25),
    width: W(25),
  },
  Icon28: {
    height: H(28),
    width: H(28),
  },
  Icon30: {
    height: W(30),
    width: W(30),
    // backgroundColor:GlobalStyle.colorSet.grey
  },
  Icon34: {
    height: H(34),
    width: W(34),
  },
  Icon40: {
    height: W(40),
    width: W(40),
  },
  Icon45: {
    height: W(45),
    width: W(45),
  },
  Icon50: {
    height: W(50),
    width: W(50),
  },
  Icon60: {
    height: W(60),
    width: W(60),
  },
  Icon70: {
    height: W(70),
    width: W(70),
  },
  Icon80: {
    height: W(80),
    width: W(80),
  },
  Icon90: {
    height: W(90),
    width: W(90),
  },
  Icon100: {
    height: W(100),
    width: W(100),
  },
  BtnOTPText: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.white,
  },
  BtnOTPTextAlreadyReg: {
    fontSize: W(14),
    color: GlobalStyle.colorSet.grey,
    fontFamily: GlobalStyle.fontSet.SemiBold,
  },
  greyLinkButton: {
    fontSize: W(14),
    color: GlobalStyle.colorSet.grey,
    fontFamily: GlobalStyle.fontSet.SemiBold,
    textDecorationLine: 'underline',
  },

  BlackLinkButton: {
    fontSize: W(14),
    color: GlobalStyle.colorSet.black,
    fontFamily: GlobalStyle.fontSet.SemiBold,
    textDecorationLine: 'underline',
  },
  BtnOTPTextSignIn: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.white,
  },

  BtnFacebookText: {
    fontSize: W(15),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.white,
  },
  MTitle: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.black,
  },
  MTitleGrey: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.lightGrey,
  },
  MLinkGrey: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.lightGrey,
  },
  XLBTitle: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.black,
  },
  XLBlackTitle: {
    fontSize: W(30),
    fontFamily: GlobalStyle.fontSet.AmericanTypewriter,
    color: GlobalStyle.colorSet.black,
  },
  LBTitle: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.black,
  },
  LBTitleGrey: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.lightGrey,
  },
  MBTitle: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.black,
  },

  MBlueTitle: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.btnBlue,
    textDecorationLine: 'underline',
  },

  LWhiteTitle: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.white,
    marginLeft: W(5),
    marginRight: W(5),
  },
  MWhiteTitle: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.white,
    marginLeft: W(5),
    marginRight: W(5),
  },
  MredTitle: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.red,
    marginLeft: W(5),
    marginRight: W(5),
  },
  LredTitle: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.txtRed,
    marginLeft: W(5),
    marginRight: W(5),
  },
  LWhiteTitle: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.white,
    marginLeft: W(5),
    marginRight: W(5),
  },
  MredSBTitle: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.red,
    marginLeft: W(5),
    marginRight: W(5),
  },
  SredSBTitle: {
    fontSize: W(13),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.txtRed,
    marginLeft: W(5),
    marginRight: W(5),
  },

  MredSBLink: {
    fontSize: W(14),
    textDecorationLine: 'underline',
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.txtRed,
    marginLeft: W(5),
    marginRight: W(5),
  },

  LredSBLink: {
    fontSize: W(16),
    // textDecorationLine: 'underline',
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.txtRed,
    marginLeft: W(5),
    marginRight: W(5),
  },

  SimpleInput: {
    height: H(45),
    fontSize: W(16),
    marginHorizontal: W(20),
    justifyContent: 'center',
    fontFamily: GlobalStyle.fontSet.Regular,
    borderBottomWidth: 0.9,
    borderWidth: 0,
    borderBottomColor: GlobalStyle.colorSet.borderGrey,
    borderRadius: W(1),
    color: GlobalStyle.colorSet.black,
    // backgroundColor: 'white',
    marginTop: W(15),
    paddingLeft: W(15),
  },
  SimpleInputWithoutMargin: {
    height: H(45),
    fontSize: W(16),
    justifyContent: 'center',
    fontFamily: GlobalStyle.fontSet.Regular,
    borderBottomWidth: 0.9,
    borderWidth: 0,
    borderBottomColor: GlobalStyle.colorSet.borderGrey,
    borderRadius: W(1),
    color: GlobalStyle.colorSet.black,
    // backgroundColor: 'white',
    marginTop: W(15),
    paddingLeft: W(15),
  },

  SimpleInputFixedWidth: {
    height: H(45),
    fontSize: W(16),
    justifyContent: 'center',
    fontFamily: GlobalStyle.fontSet.Regular,
    borderBottomWidth: 0.9,
    borderWidth: 0,
    borderBottomColor: GlobalStyle.colorSet.borderGrey,
    borderRadius: W(1),
    color: GlobalStyle.colorSet.black,
    width: W(120),
    // backgroundColor: 'white',
    marginTop: W(15),
    // paddingLeft:W(15),
  },
  SimpleSmallInput: {
    height: H(45),
    fontSize: W(16),
    justifyContent: 'center',
    fontFamily: GlobalStyle.fontSet.Regular,
    borderBottomWidth: 0.9,
    borderWidth: 0,
    borderBottomColor: GlobalStyle.colorSet.borderGrey,
    borderRadius: W(1),
    marginHorizontal: W(10),
    color: GlobalStyle.colorSet.black,
    // backgroundColor: 'white',
    marginTop: W(15),
  },
  SimpleDatePicker: {
    height: H(45),
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: GlobalStyle.fontSet.Regular,
    borderBottomWidth: 0.9,
    borderWidth: 0,
    borderBottomColor: GlobalStyle.colorSet.borderGrey,
    borderRadius: W(1),
    color: GlobalStyle.colorSet.black,
    // backgroundColor: 'white',
    marginTop: W(15),
    paddingLeft: W(5),
  },
  Dropdown: {
    // height: H(75),
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Regular,
    borderBottomWidth: 0.9,
    color: GlobalStyle.colorSet.white,
    // backgroundColor: 'white',
    borderBottomColor: GlobalStyle.colorSet.appBlack,
    marginTop: W(15),
    paddingLeft: W(15),
    width: '100%',
  },
  CustomTextInput: {
    marginLeft: W(55),
    height: W(40),
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Regular,
    borderBottomWidth: 0.9,
    color: GlobalStyle.colorSet.white,
    // backgroundColor: 'white',
    borderBottomColor: GlobalStyle.colorSet.appBlack,
    marginTop: W(15),
    width: '80%',
  },

  // Navigation header title
  HeaderTitle: {
    height: H(38),
    paddingLeft: W(10),
    width: '80%',
    justifyContent: 'center',
  },

  DriverTextInput: {
    height: W(40),
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Regular,
    borderBottomWidth: 0.9,
    color: GlobalStyle.colorSet.white,
    // backgroundColor: 'white',
    borderBottomColor: GlobalStyle.colorSet.appBlack,
    marginTop: W(15),
    width: '90%',
  },

  CountryInput: {
    // paddingLeft: W(20),
    fontSize: W(14),
    justifyContent: 'center',
    maxWidth: W(60),
    // height: W(50),
    color: GlobalStyle.colorSet.white,
    fontFamily: GlobalStyle.fontSet.Regular,
    marginTop: Platform.OS === 'ios' ? W(27) : W(17),
  },
  CountryCodeView: {width: W(60), alignItems: 'center'},

  TextAlineLeft: {
    textAlign: 'left',
  },
  TextAlineRight: {
    textAlign: 'right',
  },
  TextAlineCenter: {
    textAlign: 'center',
  },
  AlignItemsStart: {
    alignItems: 'flex-start',
  },
  AlignItemsEnd: {
    alignItems: 'flex-end',
  },
  ColorTxtRed: {
    color: GlobalStyle.colorSet.txtRed,
  },
  ColorTxtGrey: {
    color: GlobalStyle.colorSet.grey,
  },
  ColorWhite: {
    color: GlobalStyle.colorSet.white,
  },
  BGColorRed: {
    backgroundColor: GlobalStyle.colorSet.btnRed,
  },
  BGColorWhite: {
    backgroundColor: GlobalStyle.colorSet.white,
  },
  BGColorBlack: {
    backgroundColor: GlobalStyle.colorSet.black,
  },
  border1: {
    borderColor: GlobalStyle.colorSet.black,
    borderWidth: 1,
  },
  borderGrey: {
    borderColor: GlobalStyle.colorSet.black,
    borderWidth: 1,
  },
  borderPrimary2: {
    borderColor: GlobalStyle.colorSet.primary,
    borderWidth: 2,
  },
  SelectedGrey: {
    backgroundColor: GlobalStyle.colorSet.whiteLight,
  },
  borderBottomGrey: {
    borderBottomColor: GlobalStyle.colorSet.borderGrey,
    borderBottomWidth: 1,
  },
  borderBottomDarkGrey: {
    borderBottomColor: GlobalStyle.colorSet.grey,
    borderBottomWidth: 1,
  },

  buttonBorder: {
    borderWidth: 0.5,
  },
  borderBottomAppBlack: {
    borderBottomColor: GlobalStyle.colorSet.appBlack,
    borderBottomWidth: 1,
  },
  borderRadius2: {
    borderRadius: 2,
  },
  borderRadius5: {
    borderRadius: 5,
  },
  borderRadius7: {
    borderRadius: 7,
  },
  borderRadius10: {
    borderRadius: 10,
  },
  borderRadius20: {
    borderRadius: 20,
  },
  borderRadius30: {
    borderRadius: 30,
  },
  borderRadius40: {
    borderRadius: W(40) / 2,
  },
  borderRadius60: {
    borderRadius: W(60) / 2,
  },
  borderRadius70: {
    borderRadius: W(70) / 2,
  },
  headerContainer: {
    height: Platform.OS === 'ios' ? H(53) : H(83),
    borderColor: GlobalStyle.colorSet.black,
    borderWidth: 1,
    elevation: 0,
    shadowOpacity: 0,
    shadowColor: 'transparent',
    shadowRadius: 0,
    borderBottomColor: GlobalStyle.colorSet.white,
    borderBottomWidth: 0,

    backgroundColor: GlobalStyle.colorSet.white,
    // flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    // flexDirection: 'row',
  },

  HeaderSec: {
    height: H(38),
    width: '90%',
    alignItems: 'center',
  },

  headerContainerCart: {
    height: H(80),
    backgroundColor: GlobalStyle.colorSet.white,
    paddingTop: Platform.OS === 'ios' ? W(20) : W(20),
    flexDirection: 'row',
  },
  headerTransparentContainer: {
    // position: 'absolute',
    height: Platform.OS === 'ios' ? H(53) : H(83),
    borderColor: GlobalStyle.colorSet.black,
    borderWidth: 1,
    elevation: 0,
    shadowOpacity: 0,
    shadowColor: 'transparent',
    shadowRadius: 0,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,

    backgroundColor: 'red',
    // flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    // flexDirection: 'row',
  },

  headerWhiteContainer: {
    height: Platform.OS === 'ios' ? H(80) : H(83),
    // borderColor: GlobalStyle.colorSet.black,
    // borderWidth: 1,
    backgroundColor: GlobalStyle.colorSet.white,
    paddingTop: Platform.OS === 'ios' ? H(28) : StatusBar.currentHeight,
  },

  HeaderLeftBtn: {
    marginBottom: W(5),
    paddingVertical: W(10),
    paddingHorizontal: W(25),
  },
  headerTransparentLeftBtn: {
    marginBottom: W(5),
    paddingVertical: W(10),
    paddingHorizontal: W(25),
  },

  TransparentHeader: {
    position: 'absolute',
    height: H(50),
    top: Platform.OS == 'ios' ? 10 : H(50),
    justifyContent: 'center',
    // borderWidth: W(1),
    // borderColor: GlobalStyle.colorSet.borderGrey,
  },

  BottomBtnSection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: H(70),
    backgroundColor: GlobalStyle.colorSet.white,
  },

  BottomSaveBtnSection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: H(80),
    backgroundColor: GlobalStyle.colorSet.white,
  },
  BottomRedButton: {
    height: H(50),
    width: W(127),
    borderRadius: W(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyle.colorSet.btnRed,
  },
  PrimaryBtn: {
    height: H(40),
    width: W(277),
    borderRadius: W(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  PrimaryBtnSmall: {
    height: H(40),
    // width: W(277),
    marginHorizontal: W(20),
    borderRadius: W(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  BottomRedFullButton: {
    height: H(50),
    width: '100%',
    borderRadius: W(3),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyle.colorSet.btnRed,
  },

  TransparentBackBtn: {
    height: H(40),
    width: H(40),
    top: H(39),
    position: 'absolute',
    // backgroundColor: 'white',
    left: H(20),
    justifyContent: 'center',
  },

  // height: H(18), width: H(10)

  DrawerToggle: {
    position: 'absolute',
    top: W(40),
    left: W(30),
  },

  DrowDownWithInputContainer: {
    height: H(55),
    flexDirection: 'row',
    alignItems: 'center',
  },
  DropdownContainer: {
    height: H(48),
    width: W(300),
    borderWidth: H(1),
    borderRadius: W(8),
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: GlobalStyle.colorSet.textBoxBGColor,
    borderColor: GlobalStyle.colorSet.TextBoxBorderColor,
    marginTop: H(8),
    paddingHorizontal: W(15),
  },
  HalfDropdownContainer: {
    height: H(48),
    width: W(147),
    borderWidth: H(1),
    borderRadius: W(8),
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: GlobalStyle.colorSet.textBoxBGColor,
    borderColor: GlobalStyle.colorSet.TextBoxBorderColor,
    marginTop: H(8),
    paddingHorizontal: W(15),
  },
  SmallDropdownContainer: {
    height: H(48),
    paddingRight: W(10),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  DropdownWithBorder: {
    justifyContent: 'space-between',
    width: W(250),
    borderBottomColor: GlobalStyle.colorSet.borderGrey,
  },
  HalfDropdownWithBorder: {
    justifyContent: 'space-between',
    width: W(100),
    borderBottomColor: GlobalStyle.colorSet.borderGrey,
  },
  smallDropdownWithBorder: {
    borderBottomColor: GlobalStyle.colorSet.borderGrey,
  },
  smallDropdownIcon: {
    position: 'absolute',
    right: -W(10),
    top: H(5),
    height: W(10),
    width: W(10),
  },
  DropdownIcon: {
    position: 'absolute',
    right: -W(10),
    top: H(5),
    height: W(10),
    width: W(10),
  },
  DropDownText: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.black,
    // marginLeft:W(10)
  },
  DropDownDisabledText: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.borderGrey,
  },

  more: {
    position: 'absolute',
    right: -10,
    top: -10,
  },
  card: {
    //  width:"100%",
    marginVertical: H(8),
    elevation: 0,
    borderWidth: W(1),
    borderColor: 'rgba(0, 71, 204, 0.05)',
    borderRadius: W(5),
    backgroundColor: GlobalStyle.colorSet.white,
    padding: W(15),
  },
  smallCard: {
    width: '100%',
    marginVertical: H(5),
    elevation: 0,
    borderRadius: W(5),
    backgroundColor: GlobalStyle.colorSet.white,
    padding: W(5),
  },
  SelectableButton: {
    flexDirection: 'row',
    width: '100%',
    marginRight: W(20),
    borderRadius: W(5),
    justifyContent: 'space-between',
    alignItems: 'center',
    color: GlobalStyle.colorSet.primary,
    backgroundColor: GlobalStyle.colorSet.white,
    borderColor: GlobalStyle.colorSet.borderGrey,
    borderWidth: 1,
    padding: W(10),
  },
  ActiveSelectableButton: {
    flexDirection: 'row',
    width: '90%',
    marginRight: W(20),
    borderRadius: W(5),
    justifyContent: 'space-between',
    alignItems: 'center',
    color: GlobalStyle.colorSet.white,
    backgroundColor: GlobalStyle.colorSet.primary,
    borderColor: GlobalStyle.colorSet.primary,
    borderWidth: 2,
    padding: W(10),
  },
  SelectableButtonTxt: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.grey,
  },
  ActiveSelectableButtonTxt: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.white,
  },

  //  Spalsh screen

  spalshView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GlobalStyle.colorSet.white,
  },
  width5p: {width: '5%'},
  width10p: {width: '10%'},
  width15p: {width: '15%'},
  width20p: {width: '20%'},
  width25p: {width: '25%'},
  width27p: {width: '27%'},
  width30p: {width: '30%'},
  width35p: {width: '35%'},
  width40p: {width: '40%'},
  width45p: {width: '45%'},
  width50p: {width: '50%'},
  width60p: {width: '60%'},
  width65p: {width: '65%'},
  width70p: {width: '70%'},
  width75p: {width: '75%'},
  width80p: {width: '80%'},
  width85p: {width: '85%'},
  width90p: {width: '90%'},
  width95p: {width: '95%'},
  width100p: {width: '100%'},

  marginTop1: {marginTop: H(1)},
  marginTop2: {marginTop: H(2)},
  marginTop5: {marginTop: H(5)},
  marginTop6: {marginTop: H(6)},
  marginTop7: {marginTop: H(7)},
  marginTop10: {marginTop: H(10)},
  marginTop20: {marginTop: H(20)},
  marginTop30: {marginTop: H(30)},
  marginTop40: {marginTop: H(40)},
  marginTop50: {marginTop: H(50)},
  marginTop60: {marginTop: H(60)},

  marginTop15: {marginTop: W(15)},
  marginTop25: {marginTop: W(25)},
  marginTop35: {marginTop: W(35)},
  marginTop45: {marginTop: W(45)},

  marginBottom2: {marginBottom: W(2)},
  marginBottom5: {marginBottom: W(5)},
  marginBottom10: {marginBottom: W(10)},
  marginBottom20: {marginBottom: W(20)},
  marginBottom30: {marginBottom: W(30)},
  marginBottom40: {marginBottom: W(40)},

  marginBottom15: {marginBottom: W(15)},
  marginBottom25: {marginBottom: W(25)},
  marginBottom35: {marginBottom: W(35)},
  marginBottom45: {marginBottom: W(45)},
  marginBottom55: {marginBottom: W(55)},
  marginBottom65: {marginBottom: W(65)},


  marginR5: {marginRight: W(5)},
  marginR10: {marginRight: W(10)},
  marginR15: {marginRight: W(15)},
  marginR20: {marginRight: W(20)},
  marginR22: {marginRight: W(22)},
  marginR30: {marginRight: W(30)},
  marginR40: {marginRight: W(40)},
  marginR50: {marginRight: W(50)},

  marginLR5: {marginLeft: W(5), marginRight: W(5)},
  marginLR10: {marginLeft: W(10), marginRight: W(10)},
  marginLR15: {marginLeft: W(15), marginRight: W(15)},
  marginLR16: {marginLeft: W(16), marginRight: W(16)},
  marginLR20: {marginLeft: W(20), marginRight: W(20)},
  marginLR22: {marginLeft: W(22), marginRight: W(22)},
  marginLR30: {marginLeft: W(30), marginRight: W(30)},
  marginLR40: {marginLeft: W(40), marginRight: W(40)},
  marginLR50: {marginLeft: W(50), marginRight: W(50)},
  marginLR70: {marginLeft: W(70), marginRight: W(70)},
  marginLR100: {marginLeft: W(100), marginRight: W(100)},

  marginTB5: {marginTop: H(5), marginBottom: H(5)},
  marginTB10: {marginTop: H(10), marginBottom: H(10)},
  marginTB15: {marginTop: H(15), marginBottom: H(15)},
  marginTB20: {marginTop: H(20), marginBottom: H(20)},
  marginTB30: {marginTop: H(30), marginBottom: H(30)},
  marginTB40: {marginTop: H(40), marginBottom: H(40)},
  marginTB50: {marginTop: H(50), marginBottom: H(50)},

  // Padding
  paddingTop10: {paddingTop: W(10)},
  paddingTop20: {paddingTop: W(20)},
  paddingTop30: {paddingTop: W(30)},
  paddingTop40: {paddingTop: W(40)},
  paddingTop50: {paddingTop: W(50)},

  paddingTop15: {paddingTop: W(15)},
  paddingTop25: {paddingTop: W(25)},
  paddingTop35: {paddingTop: W(35)},
  paddingTop45: {paddingTop: W(45)},

  paddingBottom10: {paddingBottom: W(10)},
  paddingBottom20: {paddingBottom: W(20)},
  paddingBottom30: {paddingBottom: W(30)},
  paddingBottom40: {paddingBottom: W(40)},

  paddingBottom15: {paddingBottom: W(15)},
  paddingBottom25: {paddingBottom: W(25)},
  paddingBottom35: {paddingBottom: W(35)},
  paddingBottom45: {paddingBottom: W(45)},
  paddingBottom65: {paddingBottom: W(65)},

  paddingTB5: {paddingTop: W(5), paddingBottom: W(5)},
  paddingTB10: {paddingTop: W(10), paddingBottom: W(10)},
  paddingTB15: {paddingTop: W(15), paddingBottom: W(15)},
  paddingTB20: {paddingTop: W(20), paddingBottom: W(20)},
  paddingTB30: {paddingTop: W(30), paddingBottom: W(30)},
  paddingTB40: {paddingTop: W(40), paddingBottom: W(40)},
  paddingTB50: {paddingTop: W(50), paddingBottom: W(50)},

  paddingLR5: {paddingLeft: W(5), paddingRight: W(5)},
  paddingLR10: {paddingLeft: W(10), paddingRight: W(10)},
  paddingLR15: {paddingLeft: W(15), paddingRight: W(15)},
  paddingLR20: {paddingLeft: W(20), paddingRight: W(20)},
  paddingLR30: {paddingLeft: W(30), paddingRight: W(30)},
  paddingLR40: {paddingLeft: W(40), paddingRight: W(40)},
  paddingLR50: {paddingLeft: W(50), paddingRight: W(50)},

  paddingL10: {paddingLeft: W(10)},
  paddingL15: {paddingLeft: W(15)},
  paddingL20: {paddingLeft: W(20)},
  paddingL30: {paddingLeft: W(30)},
  paddingL40: {paddingLeft: W(40)},
  paddingL50: {paddingLeft: W(50)},

  paddingR10: {paddingRight: W(10)},
  paddingR20: {paddingRight: W(20)},
  paddingR30: {paddingRight: W(30)},
  paddingR40: {paddingRight: W(40)},
  paddingR50: {paddingRight: W(50)},

  //  Text

  //Black
  xsdarkBlackRegular: {
    fontSize: W(10),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.darkBlack,
  },
  sdarkBlackRegular: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.darkBlack,
  },

  mdarkBlackRegular: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.darkBlack,
  },

  ldarkBlackRegular: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.darkBlack,
  },

  mdarkBlackSemiBold: {
    fontSize: 14,
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.darkBlack,
  },

  ldarkBlackSemiBold: {
    fontSize: 16,
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.darkBlack,
  },


  xldarkBlackRegular: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.darkBlack,
  },

  //Black
  xsBlackRegular: {
    fontSize: W(10),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.black,
  },

  s11BlackRegular: {
    fontSize: W(11),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.black,
  },
  s13BlackRegular: {
    fontSize: W(13),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.black,
  },

  sBlackRegular: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.black,
  },

  mBlackRegular: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.black,
  },

  lBlackRegular: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.black,
  },

  xlBlackRegular: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.black,
  },

  // white

  sWhiteRegular: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.white,
  },
  s11WhiteRegular: {
    fontSize: W(11),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.white,
  },
  s13WhiteRegular: {
    fontSize: W(13),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.white,
  },

  mWhiteRegular: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.white,
  },

  lWhiteRegular: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.white,
  },
  xlWhiteRegular: {
    fontSize: W(20),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.white,
  },
  xxlWhiteRegular: {
    fontSize: W(22),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.white,
  },

  // primary
  xsPrimaryRegular: {
    fontSize: W(10),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.primary,
  },
  sPrimaryRegular: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.primary,
  },

  mPrimaryRegular: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.primary,
  },

  lPrimaryRegular: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.primary,
  },

  xlPrimaryRegular: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.primary,
  },


  sBlueGreyRegular: {
    fontSize: W(11),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.bluishGrey,
  },
  mBlueGrey13Regular: {
    fontSize: W(13),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.bluishGrey,
  },
  mBlueGreyRegular: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.bluishGrey,
  },

  // grey
  xsGreyRegular: {
    fontSize: W(10),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.grey,
  },
  s11GreyRegular: {
    fontSize: W(11),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.grey,
  },
  s11BlueGreyRegular: {
    fontSize: W(11),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.bluishGrey,
  },
  sGreyRegular: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.grey,
  },
 

  mGreyRegular: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.grey,
  },
  xmGreyRegular: {
    fontSize: W(15),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.grey,
  },

  lGreyRegular: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.grey,
  },
  xlGreyRegular: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.grey,
  },

  // grey
  xsLightBlackRegular: {
    fontSize: W(10),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.lightBlack,
  },
  sLightBlackRegular: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.lightBlack,
  },

  mLightBlackRegular: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.lightBlack,
  },

  lLightBlackRegular: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.lightBlack,
  },
  xlLightBlackRegular: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.Regular,
    color: GlobalStyle.colorSet.lightBlack,
  },

  // semi bold

  //Black
  sBlackSemiBold: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.black,
  },
  s13BlackSemiBold: {
    fontSize: W(13),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.black,
  },

  mBlackSemiBold: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.black,
  },

  CamelCase:{
    textTransform:'capitalize'
  },

  lBlackSemiBold: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.black,
  },

  xlBlackSemiBold: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.black,
  },
  xlBlackSemiBold20: {
    fontSize: W(20),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.black,
  },
  xxlBlackSemiBold: {
    fontSize: W(25),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.black,
  },
  xxxlBlackSemiBold: {
    fontSize: W(30),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.black,
  },

  // white
  sWhiteSemiBold: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.white,
  },

  mWhiteSemiBold: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.white,
  },

  lWhiteSemiBold: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.white,
  },
  l18WhiteSemiBold: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.white,
  },
  xlWhiteSemiBold: {
    fontSize: W(20),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.white,
  },
  xxlWhiteSemiBold: {
    fontSize: W(22),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.white,
  },

  // primary
  sPrimarySemiBold: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.primary,
  },

  mPrimarySemiBold: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.primary,
  },

  lPrimarySemiBold: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.primary,
  },

  xlPrimarySemiBold: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.primary,
  },

  // grey
  xsGreySemiBold: {
    fontSize: W(11),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.bluishGrey,
  },
  sGreySemiBold: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.bluishGrey,
  },

  mGreySemiBold: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.lightGrey,
  },

  lGreySemiBold: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.lightGrey,
  },

  xlGreySemiBold: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.SemiBold,
    color: GlobalStyle.colorSet.lightGrey,
  },

  // bold

  //Black
  sBlackBold: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.black,
  },

  mBlackBold: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.black,
  },

  lBlackBold: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.black,
  },
  xlBlackBold: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.black,
  },
  xxlBlackBold: {
    fontSize: W(22),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.black,
  },

  // white
  sWhiteBold: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.white,
  },

  mWhiteBold: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.white,
  },

  lWhiteBold: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.white,
  },
  xlWhiteBold: {
    fontSize: W(20),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.white,
  },
  xxlWhiteBold: {
    fontSize: W(22),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.white,
  },

  // primary
  sPrimaryBold: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.primary,
  },

  mPrimaryBold: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.primary,
  },

  lPrimaryBold: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.primary,
  },

  xlPrimaryBold: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.primary,
  },

  // Secondary
  sSecondaryBold: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.btnSecondary,
  },

  mSecondaryBold: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.btnSecondary,
  },

  lSecondaryBold: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.btnSecondary,
  },

  xlSecondaryBold: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.btnSecondary,
  },

  // grey
  sGreyBold: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.lightGrey,
  },

  mGreyBold: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.lightGrey,
  },

  lGreyBold: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.lightGrey,
  },

  xlGreyBold: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.lightGrey,
  },

  // Italic

  // primary
  sPrimaryItalic: {
    fontSize: W(12),
    fontFamily: GlobalStyle.fontSet.Italic,
    color: GlobalStyle.colorSet.primary,
  },

  mPrimaryItalic: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Italic,
    color: GlobalStyle.colorSet.primary,
  },

  lPrimaryItalic: {
    fontSize: W(16),
    fontFamily: GlobalStyle.fontSet.Italic,
    color: GlobalStyle.colorSet.primary,
  },

  xlPrimaryItalic: {
    fontSize: W(18),
    fontFamily: GlobalStyle.fontSet.Italic,
    color: GlobalStyle.colorSet.primary,
  },
  FontWeight400: {
    fontWeight: '400',
  },
  FontWeight500: {
    fontWeight: '500',
  },
  FontWeight600: {
    fontWeight: '600',
  },
  FontWeight700: {
    fontWeight: '700',
  },

  // opacity

  opacity1: {
    opacity: 0.1,
  },
  opacity15: {
    opacity: 0.15,
  },
  opacity2: {
    opacity: 0.2,
  },
  opacity3: {
    opacity: 0.3,
  },
  opacity4: {
    opacity: 0.4,
  },
  opacity5: {
    opacity: 0.5,
  },
  opacity6: {
    opacity: 0.6,
  },
  opacity65: {
    opacity: 0.65,
  },
  opacity7: {
    opacity: 0.7,
  },
  opacity8: {
    opacity: 0.8,
  },
  opacity9: {
    opacity: 0.9,
  },
  opacity10: {
    opacity: 1,
  },

  textareaContainer: {
    marginHorizontal: W(20),
    height: H(80),
    padding: W(5),
    borderBottomWidth: 0.9,
    borderWidth: 0,
    borderBottomColor: GlobalStyle.colorSet.borderGrey,
    backgroundColor: GlobalStyle.colorSet.white,
  },
  textarea: {
    fontSize: W(16),
    textAlignVertical: 'top', // hack android
    height: H(80),
    color: '#333',
  },

  searchBar: {
    elevation: 0,
    borderWidth: 0,
    borderRadius: 7,
    borderColor: GlobalStyle.colorSet.borderGrey,
    backgroundColor: GlobalStyle.colorSet.white,
  },

  FixedLabel: {
    fontFamily: GlobalStyle.colorSet.lightGrey,
    fontSize: W(15),
    color: GlobalStyle.colorSet.lightGrey,
    position: 'absolute',
    top: 0,
    left: W(10),
  },

  requiredTxt: {
    fontSize: W(14),
    fontFamily: GlobalStyle.fontSet.Bold,
    color: GlobalStyle.colorSet.red,
  },

  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: W(25),
  },

  //Header Logo

  headerLogo: {
    height: H(30),
    width: W(90),
  },
  headerSeprator: {
    backgroundColor: GlobalStyle.colorSet.textBoxBGColor,
    height: H(15),
    width: '100%',
  },
  headerWithTitle: {
    paddingTop: Platform.OS == 'android' ? H(20) : H(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: GlobalStyle.colorSet.white,
    paddingBottom: H(20),
    paddingHorizontal: W(20),
  },
  AuthHeader: {
    flexDirection: 'row',
    paddingHorizontal: W(20),
    paddingTop: Platform.OS == 'android' ? H(20) : 0,
    backgroundColor: GlobalStyle.colorSet.white,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  AuthHeader2: {
    flexDirection: 'row',
    paddingHorizontal: W(20),
    paddingTop: Platform.OS == 'android' ? H(40) : 0,
    backgroundColor: GlobalStyle.colorSet.white,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // cart
  qtyContainer: {
    borderWidth: 1,
    borderColor: GlobalStyle.colorSet.borderGrey,
    width: W(85),
    height: H(28),
    borderRadius: W(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qtyBtn: {
    height: H(28),
    width: H(28),
  },
  qtyBtnIcon: {
    height: H(28),
    width: H(28),
  },
  noBottomBorder: {
    borderBottomWidth: 0,
  },
  roundedImage:{
    height:W(60),
    width:W(60),
    backgroundColor:GlobalStyle.colorSet.borderGrey
  },
  SmallroundedImage:{
    height:W(50),
    width:W(50),
    backgroundColor:GlobalStyle.colorSet.borderGrey
  },
  isDisabled:{
    opacity:0.5
  }
});

export default CommonStyle;
