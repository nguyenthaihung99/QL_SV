import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { styles } from './styles';

export const WellComeScreen = () => {
    return (
        <View>
            <ImageBackground
                style={styles.imagebackground}
                source={require('./icon/ic_qlsv_backgroundblue.png')}
            />
            <Text style={styles.textnameschool}>HUMG</Text>
            <Text style={styles.textnamekhoa}>Information Technology</Text>
            <Image
                style={styles.imagelogo}
                source={require('./icon/ic_qlsv_logoHUMGs.png')}
            />
        </View>
    );
};
