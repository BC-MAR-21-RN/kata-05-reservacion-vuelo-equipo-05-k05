import {StyleSheet} from 'react-native';

const stylesSignUp = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 21,
    color: '#5C6DF8',
    paddingTop: 8,
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
  },
  subTitle: {
    fontFamily: 'AvenirNext-Regular',
    color: '#333333',
  },
  form: {
    flexDirection: 'column',
    paddingTop: 25,
  },
  inputText: {
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderRadius: 2,
    marginVertical: 4,
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderColor: '#5E656F',
  },
  inputTextFocus: {
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderRadius: 2,
    marginVertical: 4,
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderColor: '#5C6DF8',
  },

  inputPassword: {
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  eye: {
    marginEnd: 25,
  },
  passwordWidth: {
    maxWidth: 200,
    width: 200,
  },
  txtReqPass: {
    fontFamily: 'AvenirNext-Regular',
    color: '#5E656F',
    fontSize: 11,
  },
  checkboxes: {
    flexDirection: 'column',
    paddingVertical: 5,
  },
  checkbox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  txtChBx: {
    fontFamily: 'AvenirNext-Regular',
    color: '#9CA5B4',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#5C6DF8',
    padding: 10,
    borderRadius: 10,
  },
  btnDisable: {
    alignItems: 'center',
    backgroundColor: '#b8b4bc',
    padding: 10,
    borderRadius: 10,
  },
  btnGoogle: {
    backgroundColor: '#5C6DF8',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnGoogleDisable: {
    backgroundColor: '#b8b4bc',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  or: {
    fontFamily: 'AvenirNext-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  btnTxt: {
    color: 'white',
    justifyContent: 'center',
    fontSize: 16,
  },

  errorText: {
    color: '#FF3366',
  },
  underLine: {
    textDecorationLine: 'underline',
  },
  txtLinkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 3,
  },
  txtLink: {
    fontFamily: 'AvenirNext-Regular',
    color: '#9CA5B4',
    fontSize: 16,
  },
  link: {
    fontFamily: 'AvenirNext-Regular',
    color: '#5C6DF8',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  iconGoogle: {
    width: 18,
    height: 18,
    marginRight: 28,
  },
});

export {stylesSignUp};
