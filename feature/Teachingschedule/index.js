import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    Linking,
    Image
} from 'react-native';
import { useSelector } from 'react-redux';
import {
    RecyclerListView,
    LayoutProvider,
    DataProvider
} from 'recyclerlistview';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment/moment';

import { styles } from './styles';
import { dataThu } from './dataTKB';
import { ModalTKB } from '../../extrafeatures/Modal/ModalshowTKB';

export const Teachingschedule = () => {
    const [showmodalTKB, setShowmodalTKB] = useState(false);
    const [showmodaldate, setShowModalDate] = useState(false);
    const state = useSelector((state) => state.mainReducer.dataThu);
    // console.log(state);
    const [startDate, setStartDate] = useState(
        moment(new Date()).format('DD/MM/YYYY')
    );

    const hideDateTKB = () => {
        setShowModalDate(false);
    };
    const handleConfirm = (date) => {
        hideDateTKB();
        setStartDate(moment(date).format('DD/MM/YYYY'));
    };
    const [tkb, setTkb] = useState({});

    const UrlFb = 'https://www.facebook.com/groups/cnpmhumg/';

    const InfoGV = () => {
        return (
            <View
                style={{
                    backgroundColor: '#66FF66',
                    height: 80,
                    width: 363,
                    marginLeft: 16,
                    borderRadius: 16
                }}>
                <Text style={styles.texttitle}>
                    Chào mừng bạn đến với danh mục quản lý thời khóa biểu của
                    giảng viên !! 🎇🎇
                </Text>
            </View>
        );
    };
    const Dates = () => {
        return (
            <View>
                <TouchableOpacity
                    style={styles.touchdate}
                    onPress={() => setShowModalDate(true)}>
                    <Text style={styles.textdate}>{startDate}</Text>
                    <Image
                        style={styles.imagedate}
                        source={require('./icon/ic_qlsv_tkb_date.png')}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    const layoutProvider = new LayoutProvider(
        () => 'Row',
        (type, dimention) => {
            switch (type) {
                case 'Row':
                    dimention.width = 200;
                    dimention.height = 396;
                    break;
                default:
                    dimention.width = 0;
                    dimention.height = 0;
            }
        }
    );
    const getLayoutProvider = layoutProvider;

    function getVisibleDriverData() {
        const _dataProvider = new DataProvider((r1, r2) => {
            return r1 !== r2;
        });
        const dataProvider = _dataProvider.cloneWithRows(state);
        return dataProvider;
    }
    const data = getVisibleDriverData();
    //===
    const onPressShowModal = (item) => {
        setShowmodalTKB(true);
        setTkb(item);
    };
    const ItemTKB = (type, item) => {
        switch (type) {
            case 'Row':
                return (
                    <View key={item.id}>
                        <View>
                            <View style={{ height: 130, marginBottom: 20 }}>
                                <Text style={styles.texttkb}>{item.title}</Text>
                            </View>
                            {item.cahoc?.map((value) => {
                                return (
                                    <View
                                        key={value.id}
                                        style={{
                                            marginTop: 80,
                                            flexDirection: 'column'
                                        }}>
                                        <Text
                                            style={{
                                                marginTop: -210,
                                                marginLeft: 95,
                                                fontWeight: '900',
                                                width: 270,
                                                fontFamily:
                                                    'FS PF BeauSans Pro',
                                                color: '#000000'
                                            }}>
                                            Tên môn học: {value.ten_mh}
                                        </Text>
                                        <Text
                                            style={{
                                                marginTop: -170,
                                                marginLeft: 95,
                                                fontWeight: '900',
                                                fontFamily:
                                                    'FS PF BeauSans Pro',
                                                color: '#000000',
                                                position: 'absolute'
                                            }}>
                                            Mã môn học: {value.ma_mh}
                                        </Text>
                                        <View
                                            style={{
                                                width: 200,
                                                height: 1,
                                                backgroundColor: 'red',
                                                marginTop: 40,
                                                marginLeft: 125
                                            }}
                                        />
                                    </View>
                                );
                            })}
                            <TouchableOpacity
                                style={styles.tochxemthem}
                                onPress={() => onPressShowModal(item)}>
                                <Text style={styles.textxemthem}>Xem thêm</Text>
                            </TouchableOpacity>
                            <View
                                style={{
                                    width: 363,
                                    height: 2,
                                    marginLeft: 16,
                                    backgroundColor: 'black'
                                }}
                            />
                        </View>
                        <View
                            style={{
                                height: '100%',
                                backgroundColor: 'black',
                                width: 2,
                                marginTop: 12,
                                marginLeft: 70,
                                position: 'absolute'
                            }}
                        />
                    </View>
                );
            default:
                return null;
        }
    };
    const TitelBotton = () => {
        return (
            <View style={{ marginTop: 20 }}>
                <Text style={styles.textbottom}>
                    Mọi thắc mắc liên hệ facebook ngành công nghệ thông tin
                    trường Đại Học Mỏ Địa Chất:
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            height: 30,
                            marginTop: 30,
                            bottom: 20,
                            marginLeft: 190
                        }}
                        onPress={() => Linking.openURL(UrlFb)}>
                        <View style={{ flexDirection: 'column' }}>
                            <Image
                                style={styles.imagefb}
                                source={require('./icon/ic_qlsv_Ts_fb.png')}
                            />
                            <Text style={styles.textfb}>FaceBook</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    const BackGround = () => {
        return (
            <View>
                <ImageBackground
                    style={{
                        width: 363,
                        height: 2445,
                        position: 'absolute',
                        marginTop: 131.5,
                        marginLeft: 16
                    }}
                    blurRadius={5}
                    borderRadius={16}
                    source={require('../../extrafeatures/icon/ic_qlsv_bg.png')}
                />
            </View>
        );
    };
    return (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <BackGround />
            <InfoGV />
            <Dates />
            <View style={{ flex: 1, minHeight: 1 }}>
                <RecyclerListView
                    layoutProvider={getLayoutProvider}
                    dataProvider={data}
                    rowRenderer={ItemTKB}
                    canChangeSize={true}
                    forceNonDeterministicRendering={true}
                />
            </View>
            <TitelBotton />
            <ModalTKB
                showmodalTKB={showmodalTKB}
                setShowmodalTKB={setShowmodalTKB}
                dataTKB={tkb}
            />
            <DateTimePicker
                isVisible={showmodaldate}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDateTKB}
                display="spinner"
            />
        </ScrollView>
    );
};
