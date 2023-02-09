import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';

export const ModalInfoSV = (props) => {
    const { showModalInfoSV, dataRow, closeModal = () => {} } = props;

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                isVisible={showModalInfoSV}
                onBackdropPress={closeModal}
                backdropColor={'rgba(0, 0, 0, 0.5)'}>
                <View style={[styles.viewmodalendclv]}>
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 15
                        }}>
                        <Icon name={'user'} size={40} color={'#EE0033'} />
                    </Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: '900',
                            lineHeight: 24,
                            marginTop: 20,
                            fontFamily: 'Open Sans'
                        }}>
                        Thông tin Sinh Viên
                    </Text>
                    <View style={{ marginLeft: 16 }}>
                        <Text>Số thứ tự: {dataRow?.stt}</Text>
                        <Text>Họ và tên sinh viên: {dataRow?.ho_ten}</Text>
                        <Text>Mã sinh viên: {dataRow?.ma_sv}</Text>
                        <Text>Mã lớp: {dataRow?.ma_lop}</Text>
                        <Text>Tên lớp: {dataRow?.ten_lop}</Text>
                        <Text>Số điện thoại: {dataRow?.so_dien_thoai}</Text>
                        <Text>
                            Đã nghỉ số tiết :{' '}
                            <Text style={{ color: '#EE0033' }}>
                                Chưa update !!
                            </Text>{' '}
                            (Nghỉ bao nhiêu phần trăm số buổi rồi)
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={[
                            styles.viewcloses,
                            {
                                backgroundColor: '#EE0033',
                                bottom: 20,
                                marginTop: 30,
                                justifyContent: 'center',
                                alignContent: 'center'
                            }
                        ]}
                        onPress={() => closeModal()}>
                        <Text
                            style={{
                                textAlign: 'center',
                                paddingVertical: 12,
                                fontSize: 15,
                                fontWeight: '700',
                                color: '#FFFFFF',
                                fontFamily: 'Open Sans'
                            }}>
                            Đóng
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};
