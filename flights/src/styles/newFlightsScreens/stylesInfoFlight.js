import {StyleSheet} from 'react-native';

const stylesInfoFlight = StyleSheet.create({
  containerMyFlights: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerFlight: {
    flexDirection: 'column',
    marginTop:10
  },
  titleAbr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0
  },
  country: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#b5b5b6',
    marginTop: -5,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderStyle: 'solid',
  },
  iconPlane: {
    height: 22,
    width: 22,
  },
  textAbr: {
    fontSize: 18,
    color: '#131415',
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'bold',
  },
  textPassDate: {
    color: '#333435',
    fontSize: 14,
    fontFamily: 'AvenirNext-Regular',
    fontWeight: 'bold',
  },
  textCountry: {
    fontSize: 13,
    color: '#b5b5b6',
    fontFamily: 'AvenirNext-Regular',
    marginVertical: 2,
  },
});

export { stylesInfoFlight }