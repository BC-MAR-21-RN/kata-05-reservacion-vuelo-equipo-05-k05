import {StyleSheet} from 'react-native';

const stylesMyFlight = StyleSheet.create({
  containerMyFlights: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleMyflights: {
    fontSize: 30,
    color: '#5C6DF8',
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
    paddingBottom: 15,
    paddingLeft: 10,
    paddingTop: 10,
  },
  containerListFlights: {
    paddingHorizontal: '5%',
    width: '100%',
  },
  btnNewFlight: {
    backgroundColor: '#5C6DF8',
    borderRadius: 100,
    height: 70,
    width: 70,
    position: 'absolute',
    bottom: 25,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  containerFlight: {
    flexDirection: 'column',
    marginVertical: 7,
  },
  titleAbr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  country: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b6',
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#8c8c8c',
  },
  iconPlane: {
    height: 24,
    width: 24,
    marginTop: 10,
  },
  textAbr: {
    fontSize: 24,
    color: '#131415',
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
  },
  textPassDate: {
    color: '#333435',
    fontSize: 14,
    fontFamily: 'AvenirNext-Regular',
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 8,
  },
  textCountry: {
    fontSize: 13,
    color: '#b5b5b6',
    fontFamily: 'AvenirNext-Regular',
    marginVertical: 7,
  },
});

export {stylesMyFlight};
