import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    ImageBackground
} from 'react-native';
import Modal from 'react-native-modal';
import { useId } from 'react-id-generator';

import styles from './styles';

export const ModalAddStudent = (props) => {
    const {
        showmodaladdstudent,
        setShowmodaladdstudent,
        datastudent,
        setDatastudent,
        dssinhvien
    } = props;
    const closemodalforgot = () => {
        setShowmodaladdstudent(!showmodaladdstudent);
    };
    const AddStudent = () => {
        dssinhvien.push({ check: false, ...datastudent });
        setShowmodaladdstudent(false);
    };
    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                isVisible={showmodaladdstudent}
                onBackdropPress={closemodalforgot}
                backdropColor={'rgba(0, 0, 0, 0.5)'}>
                <View style={styles.viewmodaladdstudent}>
                    <ImageBackground
                        style={{
                            width: 346,
                            height: 650,
                            position: 'absolute'
                        }}
                        borderRadius={16}
                        blurRadius={5}
                        source={require('./icon/ic_qlsv_modal_imagemodal.png')}
                    />
                    <View>
                        <Text style={styles.textadd}>Thêm Mới Sinh Viên</Text>
                        <Text style={styles.textstt}>Số thứ tự</Text>
                        <View style={styles.viewinput}>
                            <TextInput
                                style={styles.input}
                                placeholder="Số thứ tự"
                                keyboardType="numeric"
                                maxLength={2}
                                onChangeText={(stt) =>
                                    setDatastudent({ ...datastudent, stt: stt })
                                }
                            />
                        </View>
                        <Text style={styles.textstt}>Mã Sinh Viên</Text>
                        <View style={styles.viewinput}>
                            <TextInput
                                style={styles.input}
                                placeholder="Mã Sinh Viên"
                                keyboardType="numeric"
                                maxLength={10}
                                onChangeText={(msv) =>
                                    setDatastudent({
                                        ...datastudent,
                                        ma_sv: msv
                                    })
                                }
                            />
                        </View>
                        <Text style={styles.textstt}>Tên Sinh Viên</Text>
                        <View style={styles.viewinput}>
                            <TextInput
                                style={styles.input}
                                placeholder="Tên Sinh Viên"
                                keyboardType="default"
                                maxLength={60}
                                onChangeText={(name) =>
                                    setDatastudent({
                                        ...datastudent,
                                        ho_ten: name
                                    })
                                }
                            />
                        </View>
                        <Text style={styles.textstt}>Mã Lớp</Text>
                        <View style={styles.viewinput}>
                            <TextInput
                                style={styles.input}
                                placeholder="Mã Lớp"
                                keyboardType="default"
                                maxLength={20}
                                onChangeText={(ma_lop) =>
                                    setDatastudent({
                                        ...datastudent,
                                        ma_lop: ma_lop
                                    })
                                }
                            />
                        </View>
                        <Text style={styles.textstt}>Tên Lớp</Text>
                        <View style={styles.viewinput}>
                            <TextInput
                                style={styles.input}
                                placeholder="Tên Lớp"
                                keyboardType="default"
                                maxLength={50}
                                onChangeText={(ten_lop) =>
                                    setDatastudent({
                                        ...datastudent,
                                        ten_lop: ten_lop
                                    })
                                }
                            />
                        </View>
                        <Text style={styles.textstt}>Số Điện Thoại</Text>
                        <View style={styles.viewinput}>
                            <TextInput
                                style={styles.input}
                                placeholder="Số Điện Thoại"
                                keyboardType="numeric"
                                maxLength={10}
                                onChangeText={(sdt) =>
                                    setDatastudent({
                                        ...datastudent,
                                        so_dien_thoai: sdt
                                    })
                                }
                            />
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={{
                                width: 230,
                                height: 40,
                                backgroundColor: '#66FF00',
                                borderRadius: 16,
                                marginTop: 20,
                                marginLeft: 16
                            }}
                            onPress={() => AddStudent(datastudent)}>
                            <Text style={styles.texttouchadd}>
                                Thêm Sinh Viên
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: 73,
                                height: 40,
                                borderRadius: 15,
                                backgroundColor: 'red',
                                marginLeft: 250,
                                position: 'absolute',
                                marginTop: 20
                            }}
                            onPress={() => setShowmodaladdstudent(false)}>
                            <Text
                                style={{
                                    fontFamily: 'FS PF BeauSans Pro',
                                    marginTop: 7,
                                    textAlign: 'center',
                                    fontSize: 18,
                                    fontWeight: '900',
                                    color: '#FFFFFF'
                                }}>
                                Thoát
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
