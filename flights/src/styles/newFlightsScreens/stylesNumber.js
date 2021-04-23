import {StyleSheet} from 'react-native';

const stylesNumber = StyleSheet.create({
    pikerNum:{
        position: 'relative',
        height:250,
    },
    arrowLeft:{
        height:20,
        width: 20,
        position: 'absolute',
        top: 301,
        left: '40%'
    },
    arrowRight:{
        height:20,
        width: 20,
        position: 'absolute',
        top: 301,
        right: '40%'
    }
});

export { stylesNumber}