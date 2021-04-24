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
        top: 115,
        left: '35%'
    },
    arrowRight:{
        height:20,
        width: 20,
        position: 'absolute',
        top: 115,
        right: '35%'
    }
});

export { stylesNumber}