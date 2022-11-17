import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    viewmodaladdstudent: {
        width: 346,
        height: 650,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: 16
    },
    textadd: {
        fontFamily: 'FS PF BeauSans Pro',
        marginTop: 16,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '900',
        color: '#FF0000'
    },
    textstt: {
        fontFamily: 'FS PF BeauSans Pro',
        marginTop: 12,
        marginLeft: 16,
        fontSize: 14,
        fontWeight: '900',
        fontStyle: 'italic'
    },
    viewinput: {
        width: 300,
        marginLeft: 23,
        height: 50,
        borderRadius: 16,
        backgroundColor: '#FFFFFF',
        marginTop: 8
    },
    input: {
        marginLeft: 10,
        fontStyle: 'italic',
        fontSize: 16,
        width: 250
    },
    texttouchadd: {
        fontFamily: 'FS PF BeauSans Pro',
        marginTop: 7,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '900',
        color: 'black'
    }
});

export default styles;
