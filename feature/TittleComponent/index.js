import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';
export const TitleComponent = (props) => {
    const { title } = props;
    const navigation = useNavigation();
    const UrlHUMG = 'https://humg.edu.vn/Pages/home.aspx';
    return (
        <View
            style={{
                flexDirection: 'column',
                height: 60
            }}>
            <View style={styles.viewtitel}>
                <View
                    style={{
                        flexDirection: 'row',
                        height: 60,
                        backgroundColor: '#EE0033',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10
                    }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ marginTop: 5, marginLeft: 16 }}>
                                <Icon
                                    name="arrow-back-circle-outline"
                                    size={45}
                                    color={'#FFFFFF'}
                                />
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text
                            style={[
                                styles.textqlsv,
                                {
                                    textAlign: 'center',
                                    marginLeft: 10
                                }
                            ]}>
                            {title}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => Linking.openURL(UrlHUMG)}>
                        <Image
                            style={[styles.imagelogo]}
                            source={require('../MainScreen/icon/ic_qlsv_logomains.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
