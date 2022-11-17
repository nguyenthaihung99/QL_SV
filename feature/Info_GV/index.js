import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import { useSelector } from 'react-redux';

import { styles } from './styles';

export default function Info_GV({ navigation }) {
    const state = useSelector((state) => state?.mainReducer?.Info_GV);
    const [infogv, setInfogv] = useState();
    useEffect(() => {
        state?.forEach((element) => {
            setInfogv(element);
        });
    }, []);
    const TitleAvtName = () => {
        return (
            <View style={styles.viewavt}>
                <TouchableOpacity
                    style={styles.touchback}
                    onPress={() => navigation.goBack()}>
                    <Image
                        style={styles.imageback}
                        source={require('../YourProfile/icon/ic_qlsv_back.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.texttitle}>Thông tin cá nhân</Text>
                <TouchableOpacity style={styles.touchavt}>
                    <Image
                        style={styles.imageavt}
                        source={require('../MainScreen/icon/ic_qlsv_avt.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.textname}>{infogv?.ho_ten}</Text>
                <Text style={styles.textmagv}>{infogv?.ma_gv}</Text>
            </View>
        );
    };
    const InfoGeneral = () => {
        return (
            <View style={styles.viewinfogerenal}>
                <View>
                    <Text style={styles.textinfogeranal}>Thông tin chung</Text>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.texttitlekhoa}>Khoa </Text>
                        <Text style={styles.textkhoa}>{infogv?.khoa}</Text>
                    </View>
                    <View style={styles.viewlinehalf} />
                    <View>
                        <Text style={styles.texttitlechuyennganh}>
                            Chuyên Ngành
                        </Text>
                        <Text style={styles.textchuyennganh}>
                            {infogv?.chuyen_nganh}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: 363,
                            height: 0.5,
                            backgroundColor: 'red',
                            marginTop: 80,
                            marginLeft: 16
                        }}
                    />
                    <View>
                        <Text style={styles.texttitletrinhdo}>Trình Độ </Text>
                        <Text style={styles.texttrinhdo}>
                            {infogv?.chuc_vu}
                        </Text>
                    </View>
                </View>
                <View style={styles.viewline} />
                <View>
                    <Text style={styles.infopersonal}>Thông tin cá nhân</Text>
                    <View
                        style={{
                            flexDirection: 'column'
                        }}>
                        <Text style={styles.texttitlekhoa}>Giới Tính </Text>
                        <Text style={styles.textkhoa}>{infogv?.gioi_tinh}</Text>
                    </View>
                    <View style={styles.viewlinehalf} />
                    <View>
                        <Text style={styles.texttitlechuyennganh}>
                            Ngày Sinh
                        </Text>
                        <Text style={styles.textchuyennganh}>
                            {infogv?.ngay_sinh}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: 363,
                            height: 0.5,
                            backgroundColor: 'red',
                            marginTop: 80,
                            marginLeft: 16
                        }}
                    />
                    <View>
                        <Text style={styles.texttitletrinhdo}>
                            Số Điện Thoại
                        </Text>
                        <Text style={styles.texttrinhdo}>
                            {infogv?.so_dien_thoai}
                        </Text>
                    </View>
                    <View
                        style={{
                            width: 363,
                            height: 0.5,
                            backgroundColor: 'red',
                            marginTop: 80,
                            marginLeft: 16
                        }}
                    />
                    <View>
                        <Text style={styles.texttitleemail}>Email</Text>
                        <Text style={styles.texttrinhdo}>{infogv?.email}</Text>
                    </View>
                </View>
            </View>
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <ImageBackground
                    style={{ width: '100%', height: 1200 }}
                    source={require('./icon/ic_qlsv_bginfo.png')}
                />
                <TitleAvtName />
                <InfoGeneral />
            </ScrollView>
        </View>
    );
}
