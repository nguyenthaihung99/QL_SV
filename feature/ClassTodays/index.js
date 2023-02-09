import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,
    Linking
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment/moment';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { styles } from './styles';
import { Info_GV } from '../../datafake/dataInfogv';
import { dataThu } from './data';
import { TitleComponent } from '../TittleComponent';

export const ClassTodays = ({ navigation }) => {
    const ho_ten = Info_GV.map((item) => item.ho_ten);
    const [showmodaldate, setShowModalDate] = useState(false);
    const [startDate, setStartDate] = useState(
        moment(new Date()).format('DD/MM/YYYY')
    );

    const onPressModalDate = () => {
        setShowModalDate(true);
    };
    const hideDateTKB = () => {
        setShowModalDate(false);
    };
    const handleConfirm = (date) => {
        hideDateTKB();
        setStartDate(moment(date).format('DD/MM/YYYY'));
    };
    const TitleWellCome = () => {
        return (
            <View style={styles.viewWelcome}>
                <Text style={styles.texttitle}>
                    Chào mừng giảng viên {ho_ten} đến với danh mục quản lý thời
                    khóa biểu theo ngày
                </Text>
            </View>
        );
    };
    const DateChose = () => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <DateTimePicker
                    isVisible={showmodaldate}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDateTKB}
                    display="spinner"
                />
                <Text style={styles.textdate}>Ngày:</Text>
                <TouchableOpacity
                    style={styles.touchchosedate}
                    onPress={() => onPressModalDate()}>
                    <Text style={styles.textchosedate}>{startDate}</Text>
                    <Text style={{ marginTop: 3 }}>
                        <Icon name="calendar-alt" size={15} color={'#000000'} />
                    </Text>
                </TouchableOpacity>
                {/* </View> */}
            </View>
        );
    };

    const Datachose = dataThu?.filter((item) => item?.date === startDate);
    const [sang, setSang] = useState([]);
    const [chieu, setChieu] = useState([]);

    useEffect(() => {
        setSang([]), setChieu([]);
        const data = [];
        Datachose?.forEach((item) => data.push(...item?.cahoc));
        data?.forEach((value) =>
            value?.tiet_bd < 5
                ? setSang((sang) => [...sang, value])
                : setChieu((chieu) => [...chieu, value])
        );
    }, [startDate]);

    const ThoiKhoaBieuComponent = () => {
        const onPressShowListStudent = (value, item) => {
            navigation.navigate('DanhSachSinhVien', (value = { value, item }));
        };
        return (
            <View style={styles.viewtkb}>
                {Datachose.length > 0 ? (
                    <View>
                        <ImageBackground
                            style={{
                                width: 363,
                                height: '100%',
                                position: 'absolute',
                                borderRadius: 16
                            }}
                            borderRadius={16}
                            blurRadius={2}
                            source={require('./icon/ic_qlsv_bgtkb.png')}
                        />
                        {Datachose.map((item) => {
                            return (
                                <View key={item.id}>
                                    <Text style={styles.textthu}>
                                        {item.title}
                                    </Text>
                                    <View
                                        style={{
                                            width: 343,
                                            height: 2,
                                            marginLeft: 10,
                                            backgroundColor: 'red',
                                            marginTop: 20
                                        }}
                                    />
                                    <View>
                                        <Text style={styles.textsang}>
                                            Sáng
                                        </Text>
                                        {sang?.map((value) => {
                                            return (
                                                <View key={value.id}>
                                                    <Text style={styles.textmh}>
                                                        Môn học: {value.ten_mh}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.texttietbd
                                                        }>
                                                        Mã môn học:{' '}
                                                        {value.ma_mh}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.texttietbd
                                                        }>
                                                        Tiết bắt đầu :{' '}
                                                        {value.tiet_bd}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.texttietbd
                                                        }>
                                                        Đến hết tiết:{' '}
                                                        {Number(value.tiet_bd) +
                                                            Number(
                                                                value.so_tiet
                                                            ) -
                                                            1}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.texttietbd
                                                        }>
                                                        Phòng học:{' '}
                                                        {value.phong_hoc}
                                                    </Text>
                                                    <TouchableOpacity
                                                        onPress={() =>
                                                            onPressShowListStudent(
                                                                value,
                                                                item
                                                            )
                                                        }
                                                        style={
                                                            styles.touchviewds
                                                        }>
                                                        <Text
                                                            style={{
                                                                marginLeft: 4,
                                                                marginTop: 8
                                                            }}>
                                                            <Icon
                                                                name="list-ul"
                                                                size={30}
                                                                color={'black'}
                                                            />
                                                        </Text>
                                                        <View
                                                            style={{
                                                                width: 1,
                                                                height: 35,
                                                                backgroundColor:
                                                                    'black',
                                                                marginLeft: 5,
                                                                marginTop: 5
                                                            }}
                                                        />

                                                        <Text
                                                            style={
                                                                styles.textds
                                                            }>
                                                            Danh Sách Sinh Viên
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <View
                                                        style={{
                                                            width: 303,
                                                            height: 2,
                                                            backgroundColor:
                                                                'red',
                                                            marginLeft: 30,
                                                            marginTop: 20
                                                        }}
                                                    />
                                                </View>
                                            );
                                        })}
                                    </View>
                                    <View>
                                        <Text style={styles.textsang}>
                                            Chiều
                                        </Text>
                                        {chieu?.map((value) => {
                                            return (
                                                <View key={value.id}>
                                                    <Text style={styles.textmh}>
                                                        Môn học: {value.ten_mh}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.texttietbd
                                                        }>
                                                        Mã môn học:{' '}
                                                        {value.ma_mh}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.texttietbd
                                                        }>
                                                        Tiết bắt đầu :{' '}
                                                        {value.tiet_bd}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.texttietbd
                                                        }>
                                                        Đến hết tiết:{' '}
                                                        {Number(value.tiet_bd) +
                                                            Number(
                                                                value.so_tiet
                                                            ) -
                                                            1}
                                                    </Text>
                                                    <Text
                                                        style={
                                                            styles.texttietbd
                                                        }>
                                                        Phòng học:{' '}
                                                        {value.phong_hoc}
                                                    </Text>
                                                    <TouchableOpacity
                                                        onPress={() =>
                                                            onPressShowListStudent(
                                                                value,
                                                                item
                                                            )
                                                        }
                                                        style={
                                                            styles.touchviewds
                                                        }>
                                                        <Text
                                                            style={{
                                                                marginLeft: 4,
                                                                marginTop: 8
                                                            }}>
                                                            <Icon
                                                                name="list-ul"
                                                                size={30}
                                                                color={'black'}
                                                            />
                                                        </Text>
                                                        <View
                                                            style={{
                                                                width: 1,
                                                                height: 35,
                                                                backgroundColor:
                                                                    'black',
                                                                marginLeft: 5,
                                                                marginTop: 5
                                                            }}
                                                        />

                                                        <Text
                                                            style={
                                                                styles.textds
                                                            }>
                                                            Danh Sách Sinh Viên
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <View
                                                        style={{
                                                            width: 303,
                                                            height: 2,
                                                            backgroundColor:
                                                                'red',
                                                            marginLeft: 30,
                                                            marginTop: 20
                                                        }}
                                                    />
                                                </View>
                                            );
                                        })}
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                ) : (
                    <View>
                        <ImageBackground
                            style={{
                                width: 363,
                                height: 1200
                            }}
                            borderRadius={16}
                            source={require('./icon/ic_qlsv_bgtkb.png')}
                        />
                        <Text
                            style={{
                                position: 'absolute',
                                fontFamily: 'FS PF BeauSans Pro',
                                fontSize: 20,
                                fontWeight: '900',
                                color: 'red',
                                marginTop: 30,
                                marginLeft: 37,
                                textAlign: 'center'
                            }}>
                            Hiện Tại Không Có Môn Học Nào Hôm Nay !
                        </Text>
                    </View>
                )}
            </View>
        );
    };

    const Bottom = () => {
        return (
            <View style={styles.viewbottom}>
                <Text style={styles.texthappy}>
                    Chúc bạn có một ngày làm việc vui vẻ 🎆🎇🎆
                </Text>
            </View>
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <TitleComponent title={'Quản Lý Sinh Viên'} />
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}>
                <TitleWellCome />
                <DateChose />
                <ThoiKhoaBieuComponent />
                <Bottom />
            </ScrollView>
        </View>
    );
};
