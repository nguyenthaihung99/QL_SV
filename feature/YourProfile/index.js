import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';

export const YourProfile = () => {
    const state = useSelector((state) => state.mainReducer.Info_GV);

    const navigation = useNavigation();
    const Profile = () => {
        return (
            <View>
                {state.map((item) => (
                    <View style={styles.viewprofile} key={item.id}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.imageavt}
                                source={require('../MainScreen/icon/ic_qlsv_avt.png')}
                            />
                            <View
                                style={{
                                    flexDirection: 'column',
                                    marginLeft: 20
                                }}>
                                <Text style={styles.textname}>
                                    {item.ho_ten}
                                </Text>
                                <Text style={styles.textmagv}>
                                    Mã Giảng Viên: {item.ma_gv}
                                </Text>
                                <Text style={styles.textmagv}>
                                    Khoa: {item.khoa}
                                </Text>
                                <Text style={styles.textmagv}>
                                    Ngành: {item.chuyen_nganh}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        );
    };
    const DanhMucProfile = () => {
        return (
            <View style={styles.viewdanhmuc}>
                <TouchableOpacity
                    style={styles.touchdanhmucquanly}
                    onPress={() => navigation.goBack('Main')}>
                    <Image
                        style={styles.imageback}
                        source={require('./icon/ic_qlsv_back.png')}
                    />
                    <Text style={styles.textdanhmucquanly}>
                        Quay Về Danh Mục Quản Lý
                    </Text>
                    <Image
                        style={styles.imagechosefirst}
                        source={require('./icon/ic_qlsv_chose.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchprofile}
                    onPress={() => navigation.navigate('Info_GV')}>
                    <Image
                        style={styles.imageback}
                        source={require('./icon/ic_qlsv_ediuser.png')}
                    />
                    <Text style={styles.textdanhmucinfogv}>
                        Thông Tin Giảng Viên
                    </Text>
                    <Image
                        style={styles.imagechose}
                        source={require('./icon/ic_qlsv_chose.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.touchprofile}
                    onPress={() => navigation.push('Login')}>
                    <Image
                        style={styles.imageback}
                        source={require('./icon/ic_qlsv_signout.png')}
                    />
                    <Text style={styles.textdanhmucinfogv}>Đăng Xuất</Text>
                    <Image
                        style={styles.imagechoseout}
                        source={require('./icon/ic_qlsv_chose.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <SafeAreaView>
            <Profile />
            <DanhMucProfile />
        </SafeAreaView>
    );
};
