import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Linking,
    ScrollView,
    FlatList,
    Animated,
    Dimensions
} from 'react-native';

import { styles } from './styles';
import { dataTinTuc } from './data';
import { Info_GV } from '../../datafake/dataInfogv';

export const DanhMucScreen = ({ navigation }) => {
    let scrollValue = 0,
        scrolled = 0;
    const numberOfdata = dataTinTuc.length;
    const windownWidth = Dimensions.get('window').width;
    const [data, setData] = useState(dataTinTuc);
    const UrlHUMG = 'https://humg.edu.vn/Pages/home.aspx';
    const TitleComponent = () => {
        return (
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
                    <TouchableOpacity
                        style={styles.touchyourinfo}
                        onPress={() => navigation.navigate('Profile')}>
                        <Image
                            style={styles.imageavt}
                            source={require('../MainScreen/icon/ic_qlsv_avt.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    const InFoGv = () => {
        return (
            <View>
                {Info_GV?.map((item) => {
                    return (
                        <View key={item.id} style={styles.viewinfo}>
                            <Text style={styles.texttitle}>
                                Ch??o m???ng {item.ho_ten} ?????n v???i danh m???c qu???n l??
                                c???a gi???ng vi??n !! ????????
                            </Text>
                            <Text style={styles.texttengv}>
                                T??n Gi???ng Vi??n: {item.ho_ten}
                            </Text>
                            <Text style={styles.textinfogv}>
                                M?? gi???nh vi??n: {item.ma_gv}
                            </Text>
                            <Text style={styles.textinfogv}>
                                Khoa: {item.khoa}
                            </Text>
                            <Text style={styles.textinfogv}>
                                Chuy??n ng??nh: {item.chuyen_nganh}
                            </Text>
                        </View>
                    );
                })}
            </View>
        );
    };
    const DanhMucTKB = () => {
        return (
            <View style={styles.viewdanhmuc}>
                <TouchableOpacity
                    style={styles.viewtouchtkb}
                    onPress={() => navigation.navigate('Main')}>
                    <Image
                        style={styles.imagetkb}
                        source={require('./icon/ic_qlsv_tkb.png')}
                    />
                    <Text style={styles.texttkb}>Th???i Kh??a Bi???u</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 90,
                        marginTop: -93,
                        marginLeft: 120
                    }}
                    onPress={() => navigation.navigate('ClassTodays')}>
                    <Image
                        style={{
                            width: 30,
                            height: 37,
                            marginLeft: 10,
                            marginTop: 17
                        }}
                        source={require('../ClassTodays/icon/ic_qlsv_listsv.png')}
                    />
                    <Text style={styles.texttkb}>Qu???n L?? Sinh Vi??n</Text>
                </TouchableOpacity>
            </View>
        );
    };
    const initifiteScroll = () => {};
    const TinTuc = () => {
        useEffect(() => {
            setData(dataTinTuc);
            initifiteScroll(data);
        }, []);

        const onPress = (item) => {
            const urls = String(item?.item?.url);
            urls && Linking.openURL(urls);
        };

        const RenderItemTinTuc = (item) => {
            return (
                <TouchableOpacity
                    style={{ width: windownWidth }}
                    key={item.id}
                    onPress={() => onPress(item)}>
                    <Image
                        style={styles.imagetintuc}
                        source={item?.item.image}
                    />
                    <View
                        style={{
                            width: windownWidth,
                            height: 100,
                            borderBottomWidth: 0.5,
                            borderColor: '#666666'
                        }}>
                        <Text style={styles.texttiteltintuc}>
                            {item?.item.text}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        };
        const scrollX = new Animated.Value(0);
        const position = Animated.divide(scrollX, windownWidth);
        return (
            <View>
                <FlatList
                    ref={(flatList) =>
                        setInterval(function () {
                            scrolled++;
                            if (scrolled < numberOfdata)
                                scrollValue = scrollValue + windownWidth;
                            else {
                                scrollValue = 0;
                                scrolled = 0;
                            }
                            flatList?.scrollToOffset({
                                animated: true,
                                offset: scrollValue
                            });
                            clearInterval();
                        }, 8000)
                    }
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={dataTinTuc}
                    renderItem={RenderItemTinTuc}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                />
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    {dataTinTuc.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 0, 0.3],
                            extrapolate: 'clamp'
                        });
                        return (
                            <Animated.View
                                key={i}
                                style={{
                                    opacity,
                                    height: 10,
                                    width: 10,
                                    backgroundColor: 'black',
                                    borderRadius: 5,
                                    marginLeft: 10,
                                    marginTop: 10
                                }}
                            />
                        );
                    })}
                </View>
            </View>
        );
    };
    const Bottom = () => {
        return (
            <View
                style={{
                    backgroundColor: 'orange',
                    width: 363,
                    borderRadius: 16,
                    marginLeft: 16,
                    bottom: 20,
                    height: 100,
                    marginTop: 40
                }}></View>
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <TitleComponent />
            <ScrollView showsVerticalScrollIndicator={false}>
                <InFoGv />
                <DanhMucTKB />
                <TinTuc />
                <Bottom />
            </ScrollView>
        </View>
    );
};
