import { StyleSheet, Dimensions } from 'react-native';

const windownWidth = Dimensions.get('window').width;
const windownHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    imagebackground: {
        width: windownWidth,
        height: windownHeight
    },
    imagelogo: {
        width: 200,
        height: 200,
        position: 'absolute',
        marginTop: 300,
        marginLeft: 100
    },
    textnameschool: {
        fontSize: 60,
        fontWeight: '700',
        marginTop: 50,
        fontFamily: 'FS PF BeauSans Pro',
        width: windownWidth,
        color: '#FFFFFF',
        textAlign: 'center',
        position: 'absolute'
    },
    textnamekhoa: {
        width: windownWidth,
        fontSize: 30,
        marginTop: 130,
        fontFamily: 'FS PF BeauSans Pro',
        fontWeight: '500',
        position: 'absolute',
        color: '#FFFFFF',
        textAlign: 'center'
    }
});
