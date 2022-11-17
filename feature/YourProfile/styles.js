import { StyleSheet, Dimensions } from 'react-native';

const windownWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
    viewprofile: {
        width: windownWidth,
        height: 150,
        backgroundColor: '#00DD00'
    },
    imageavt: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 30,
        marginLeft: 16
    },
    textname: {
        fontSize: 22,
        fontWeight: '700',
        fontFamily: 'FS PF BeauSans Pro',
        color: '#FFFFFF',
        marginLeft: 16,
        marginTop: 20
    },
    textmagv: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'FS PF BeauSans Pro',
        color: '#FFFFFF',
        marginLeft: 16,
        marginTop: 8
    },
    viewdanhmuc: {
        width: windownWidth,
        backgroundColor: '#EEEEEE'
    },
    imageback: {
        width: 40,
        height: 40,
        marginTop: 10,
        marginLeft: 16
    },
    touchdanhmucquanly: {
        flexDirection: 'row',
        width: windownWidth,
        height: 60,
        marginTop: 32,
        borderBottomWidth: 0.5,
        borderColor: '#BBBBBB'
    },
    textdanhmucquanly: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'FS PF BeauSans Pro',
        color: 'black',
        marginLeft: 16,
        marginTop: 16
    },
    touchprofile: {
        flexDirection: 'row',
        width: windownWidth,
        height: 60,
        borderBottomWidth: 0.5,
        borderColor: '#BBBBBB'
    },
    textdanhmucinfogv: {
        fontSize: 14,
        fontWeight: '700',
        fontFamily: 'FS PF BeauSans Pro',
        color: 'black',
        marginLeft: 16,
        marginTop: 18
    },
    imagechose: {
        width: 26,
        height: 26,
        marginTop: 20,
        marginLeft: 150
    },
    imagechosefirst: {
        width: 26,
        height: 26,
        marginTop: 20,
        marginLeft: 111
    },
    imagechoseout: {
        width: 26,
        height: 26,
        marginTop: 20,
        marginLeft: 220
    }
});
