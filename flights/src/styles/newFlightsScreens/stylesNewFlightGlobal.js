import {StyleSheet} from 'react-native';

const stylesNewFlightGlobal = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '5%',
        paddingBottom: 10,
        backgroundColor: 'white',
        paddingHorizontal: '10%',
        position: 'relative'
      },
    arrow:{
        height:20,
        width: 20,
        marginTop: 15
    },
    question:{
        paddingTop: 33,
        fontFamily: 'AvenirNext-Bold',
        fontSize: 23,
        fontWeight: 'bold',
        position: 'absolute',
        top: 105,
        left: 35
    },
    questionAlternative:{
        fontFamily: 'AvenirNext-Bold',
        fontSize: 23,
        fontWeight: 'bold',
        marginTop: 2,
        marginBottom: -5
    },
    btnCenter :{
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
        marginHorizontal: '5%',
    },
    btnNext:{
        backgroundColor: '#5C6DF8',
        padding: 10,
        borderRadius: 11,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        position: 'absolute',
         top: 450,
        //  top: '90%',
        left: 35,
        right:0
    },
    btnText:{
        color: '#fff',
        justifyContent: 'center',
        fontSize: 16,
    },
    inputView:{
        paddingTop: 30,
        position: 'absolute',
        top: 220,
        left: 35,
        width: "95%"
    },
    input: {
        borderStyle: 'solid',
        borderBottomWidth: 1.5,
        height: 40,
        justifyContent: 'center',
        textDecorationLine: 'underline',
        marginBottom: 30,
    }
    
});


export {stylesNewFlightGlobal}