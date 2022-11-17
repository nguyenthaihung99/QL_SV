import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
export const TitleComponent = (props) => {
    const { title } = props;
    const navigation = useNavigation();
    const UrlHUMG = 'https://humg.edu.vn/Pages/home.aspx';
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={styles.viewtitel}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => Linking.openURL(UrlHUMG)}>
                        <Image
                            style={styles.imagelogo}
                            source={require('../MainScreen/icon/ic_qlsv_logomains.png')}
                        />
                    </TouchableOpacity>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textnameapp}>HUMG</Text>
                            <Image
                                style={styles.imageiconkhunglong}
                                source={require('../MainScreen/icon/ic_qlsv_iconkhunglong.png')}
                            />
                        </View>
                        <Text style={styles.textstudent}>
                            Student Management
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                style={{
                                    height: 40,
                                    width: 40,
                                    marginTop: 50,
                                    bottom: 20,
                                    marginLeft: 70
                                }}
                                source={require('../YourProfile/icon/ic_qlsv_back.png')}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.viewtitels}>
                <Text style={styles.textqlsv}>{title}</Text>
            </View>
        </View>
    );
};
