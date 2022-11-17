import { StyleSheet, Dimensions } from 'react-native';

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    imagebackground: {
        width: windownWidth,
        height: windownHeight
    },
    imagelogo: {
        width: 150,
        height: 150,
        position: 'absolute',
        marginTop: 40,
        marginLeft: 125
    },

    textnameapp: {
        marginLeft: 46,
        width: 300,
        fontSize: 30,
        marginTop: 245,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '900',
        position: 'absolute',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    viewinput: {
        width: 363,
        height: 50,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        marginTop: 8
    },
    textnameuser: {
        width: 100,
        marginTop: 350,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'FS PF BeauSans Pro',
        fontStyle: 'italic'
    },
    input: {
        marginLeft: 10,
        fontStyle: 'italic',
        fontSize: 16,
        width: 300
    },
    textpassword: {
        width: 100,
        marginTop: 16,
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'FS PF BeauSans Pro',
        fontStyle: 'italic'
    },
    viewbotton: {
        width: 340,
        height: 60,
        backgroundColor: 'orange',
        position: 'absolute',
        marginTop: 630,
        marginLeft: 25,
        borderRadius: 16
    },
    textdangnhap: {
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 13,
        fontSize: 25,
        color: '#FFFFFF',
        fontFamily: 'FS PF BeauSans Pro'
    },
    viewforgot: {
        position: 'absolute',
        marginTop: 710,
        width: 150,
        marginLeft: 125
    },
    textforgot: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'FS PF BeauSans Pro'
    }
});
1;
