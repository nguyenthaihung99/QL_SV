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
                <Text style={styles.textinfogeranal}>Thông tin chung</Text>
                <Text style={styles.textkhoa}>Khoa : {infogv.khoa}</Text>
            </View>
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <ImageBackground
                    style={{ width: '100%', height: 1000 }}
                    source={require('./icon/ic_qlsv_bginfo.png')}
                />
                <TitleAvtName />
                <InfoGeneral />
            </ScrollView>
        </View>
    );
}
