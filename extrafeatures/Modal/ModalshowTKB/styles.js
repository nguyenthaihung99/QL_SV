import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    viewmodaltkb: {
        width: 353,
        height: 500,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 16
    },
    imageerro: {
        width: 64,
        height: 64,
        marginTop: 20,
        marginLeft: 132
    },
    viewend: {
        width: 200,
        height: 48,
        backgroundColor: '#EE0033',
        marginTop: 42,
        marginLeft: 70,
        borderRadius: 4
    },
    viewcloses: {
        width: 200,
        height: 48,
        backgroundColor: 'red',
        marginTop: 50,
        marginLeft: 80,
        borderRadius: 4,
        bottom: 20
        // position: 'absolute'
    },
    textclosemodal: {
        textAlign: 'center',
        paddingVertical: 12,
        fontSize: 15,
        fontWeight: '700',
        color: '#FFFFFF',
        fontFamily: 'FS PF BeauSans Pro'
    },
    titlethu: {
        textAlign: 'center',
        paddingVertical: 12,
        fontSize: 20,
        fontWeight: '900',
        color: 'black',
        fontFamily: 'FS PF BeauSans Pro',
        textDecorationLine: 'underline'
    },
    texttime: {
        textDecorationLine: 'underline',
        marginTop: 5,
        fontSize: 14,
        marginLeft: 12,
        fontWeight: '900',
        color: 'black',
        color: 'red',
        fontFamily: 'FS PF BeauSans Pro'
    },
    textmon: {
        paddingVertical: 12,
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 12,
        width: 320,
        color: 'black',
        fontFamily: 'FS PF BeauSans Pro'
    },
    textma_mh: {
        marginTop: -8,
        fontSize: 14,
        marginLeft: 12,
        fontWeight: '900',
        color: 'black',
        fontFamily: 'FS PF BeauSans Pro'
    },
    textphonghoc: {
        marginTop: 8,
        fontSize: 14,
        marginLeft: 12,
        fontWeight: '900',
        color: 'black',
        fontFamily: 'FS PF BeauSans Pro'
    },
    texttietbd: {
        marginTop: 8,
        fontSize: 14,
        marginLeft: 12,
        fontWeight: '900',
        color: 'black',
        fontFamily: 'FS PF BeauSans Pro'
    },
    viewline: {
        width: 290,
        marginLeft: 30,
        height: 0.5,
        backgroundColor: 'black',
        marginTop: 10
    },
    viewlineend: {
        width: 353,
        height: 1.5,
        backgroundColor: 'black',
        marginTop: 10
    },
    touchviewtkb: {
        width: 150,
        height: 48,
        backgroundColor: 'red',
        marginLeft: 190,
        borderRadius: 8
    }
});

export default styles;
