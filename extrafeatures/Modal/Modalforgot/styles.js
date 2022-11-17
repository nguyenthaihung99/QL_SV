import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    viewmodalendclv: {
        width: 346,
        height: 304,
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
        backgroundColor: '#FFF5F7',
        marginTop: 8,
        marginLeft: 70,
        borderRadius: 4
    },
    textbutommodal: {
        textAlign: 'center',
        paddingVertical: 12,
        fontSize: 15,
        fontWeight: '600',
        color: '#FFFFFF'
    }
});

export default styles;
