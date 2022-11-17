import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';

import { useDispatch } from 'react-redux';
export const ModalForgotpassword = (props) => {
    const { showmodalforgot, setShowmodalforgot } = props;

    const closemodalforgot = () => {
        setShowmodalforgot(!showmodalforgot);
    };
    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                isVisible={showmodalforgot}
                onBackdropPress={closemodalforgot}
                backdropColor={'rgba(0, 0, 0, 0.5)'}>
                <View style={styles.viewmodalendclv}>
                    <Image style={styles.imageerro} />
                    <View
                        style={{
                            width: 261,
                            marginLeft: 40
                        }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 15,
                                fontWeight: '500',
                                lineHeight: 24
                            }}>
                            Bạn có chắc chắn muốn kết thúc
                            {
                                <Text style={{ color: 'rgba(238, 0, 51, 1)' }}>
                                    Ca làm việc
                                </Text>
                            }
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={styles.viewend}
                        onPress={() => {
                            setShowmodalforgot(false);
                        }}>
                        <Text style={styles.textbutommodal}>Kết thúc</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.viewcloses}
                        onPress={() => setShowmodalforgot(false)}>
                        <Text
                            style={{
                                textAlign: 'center',
                                paddingVertical: 12,
                                fontSize: 15,
                                fontWeight: '600',
                                color: '#EE0033'
                            }}>
                            Đóng
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};
