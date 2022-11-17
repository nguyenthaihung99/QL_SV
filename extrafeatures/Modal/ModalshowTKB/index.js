import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export const ModalTKB = (props) => {
    const navigation = useNavigation();
    const { showmodalTKB, setShowmodalTKB, dataTKB } = props;
    const [sang, setSang] = useState([]);
    const [chieu, setChieu] = useState([]);

    useEffect(() => {
        setSang([]), setChieu([]);
        dataTKB &&
            dataTKB?.cahoc?.forEach((item) =>
                item?.tiet_bd < 5
                    ? setSang((sang) => [...sang, item])
                    : setChieu((chieu) => [...chieu, item])
            );
    }, [dataTKB]);

    const closemodalTKB = () => {
        setShowmodalTKB(!showmodalTKB);
    };
    const onPressOpenInfoSV = (value, item) => {
        navigation.navigate('DanhSachSinhVien', (value = { value, item }));
        setShowmodalTKB(false);
    };
    return (
        <View>
            {dataTKB && (
                <Modal
                    animationType="fade"
                    transparent={true}
                    isVisible={showmodalTKB}
                    onBackdropPress={closemodalTKB}
                    backdropColor={'rgba(0, 0, 0, 0.5)'}>
                    <View style={styles.viewmodaltkb}>
                        <Text style={styles.titlethu}>{dataTKB?.title}</Text>
                        <ScrollView style={{ flex: 1 }}>
                            <Text style={styles.texttime}>Sáng</Text>
                            {sang?.map((item) => {
                                return (
                                    <View key={item.id}>
                                        <Text style={styles.textmon}>
                                            Môn: {item.ten_mh}
                                        </Text>
                                        <Text style={styles.textma_mh}>
                                            Mã môn học: {item.ma_mh}
                                        </Text>
                                        <Text style={styles.textphonghoc}>
                                            Phòng học: {item.phong_hoc}
                                        </Text>
                                        <Text style={styles.texttietbd}>
                                            Tiết bắt đầu: {item.tiet_bd}
                                        </Text>
                                        <Text style={styles.texttietbd}>
                                            Đến hết tiết:{' '}
                                            {Number(item.tiet_bd) +
                                                Number(item.so_tiet) -
                                                1}
                                        </Text>

                                        <View style={styles.viewline} />
                                    </View>
                                );
                            })}
                            <Text style={styles.texttime}>Chiều</Text>
                            {chieu?.map((item) => {
                                return (
                                    <View key={item.id}>
                                        <Text style={styles.textmon}>
                                            Môn: {item.ten_mh}
                                        </Text>
                                        <Text style={styles.textma_mh}>
                                            Mã môn học: {item.ma_mh}
                                        </Text>
                                        <Text style={styles.textphonghoc}>
                                            Phòng học: {item.phong_hoc}
                                        </Text>
                                        <Text style={styles.texttietbd}>
                                            Tiết bắt đầu: {item.tiet_bd}
                                        </Text>
                                        <Text style={styles.texttietbd}>
                                            Đến hết tiết:{' '}
                                            {Number(item.tiet_bd) +
                                                Number(item.so_tiet) -
                                                1}
                                        </Text>

                                        <View style={styles.viewline} />
                                    </View>
                                );
                            })}
                            <TouchableOpacity
                                style={styles.viewcloses}
                                onPress={() => setShowmodalTKB(false)}>
                                <Text style={styles.textclosemodal}>Đóng</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </Modal>
            )}
        </View>
    );
};
