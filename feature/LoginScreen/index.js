import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { styles } from './styles';
import { ModalForgotpassword } from '../../extrafeatures/Modal/Modalforgot';

export const LoginScreen = () => {
    const navigation = useNavigation();
    const [showmodalforgot, setShowmodalforgot] = useState(false);
    const state = useSelector((state) => state.ReducerLogin);
    const dispatsh = useDispatch();

    const [username, setOnChangeusername] = useState('');
    const [password, setOnChangepassword] = useState('');
    const [isValidEmail, setValidEmail] = useState(true);
    const [isValidPassWord, setValidPassWord] = useState(true);
    const [erro, setErro] = useState([]);

    const onBlurUserName = () => {
        const verifyEmail = (username) => {
            let regex = new RegExp(
                /([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/
            );

            if (regex.test(username)) {
                return true;
            }
            return false;
        };
        const isValidMail = verifyEmail(username);
        isValidMail ? setValidEmail(true) : setValidEmail(false);
    };
    const onBlurPassWord = () => {
        const verifyPassword = (password) => {
            let regex = new RegExp(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
            );
            if (regex.test(password)) {
                return true;
            }
            return false;
        };
        const isValidPassWord = verifyPassword(password);
        isValidPassWord ? setValidPassWord(true) : setValidPassWord(false);
    };
    const LogoName = () => {
        return (
            <View>
                <ImageBackground
                    style={styles.imagebackground}
                    blurRadius={5}
                    source={require('./icon/ic_qlsv_backgroundlogin.png')}
                />
                <Text style={styles.textnameapp}>
                    Qu???n L?? ??i???m Danh Sinh Vi??n
                </Text>
                <Image
                    style={styles.imagelogo}
                    source={require('../WellcomeScreen/icon/ic_qlsv_logoHUMGs.png')}
                />
            </View>
        );
    };
    const login = async (username, password) =>
        dispatsh(login(username, password));
    const onPressSubmit = () => {
        if (!username && !password) {
            Alert.alert('', 'Vui l??ng nh???p t??i kho???n v?? m???t kh???u !!!');
            return;
        }
        if (isValidEmail === false || isValidPassWord === false) {
            Alert.alert(
                'T??i kho???n kh??ng h???p l???',
                'Vui l??ng nh???p ?????y ????? t??i kho???n v?? m???t kh???u theo ????ng y??u c???u !!!'
            );
            return;
        }
        try {
            navigation.push('DanhMucScreen');
        } catch (error) {}
    };
    const ButtonLogin = () => {
        return (
            <TouchableOpacity
                style={styles.viewbotton}
                onPress={() => onPressSubmit()}>
                <Text style={styles.textdangnhap}>????ng Nh???p</Text>
            </TouchableOpacity>
        );
    };
    const Forgotpassword = () => {
        return (
            <TouchableOpacity
                style={styles.viewforgot}
                onPress={() => setShowmodalforgot(true)}>
                <Text style={styles.textforgot}>Qu??n m???t kh???u ?</Text>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <LogoName />
            <View style={{ position: 'absolute', marginLeft: 16 }}>
                <Text style={styles.textnameuser}>UserName</Text>
                <View style={styles.viewinput}>
                    <TextInput
                        style={styles.input}
                        placeholder="User Name"
                        keyboardType="default"
                        maxLength={60}
                        onChangeText={(username) =>
                            setOnChangeusername(username)
                        }
                        onBlur={() => onBlurUserName()}
                    />
                </View>
                <Text
                    style={{
                        marginTop: 16,
                        fontSize: 13,
                        color: '#FFFFFF',
                        fontWeight: '900',
                        fontFamily: 'FS PF BeauSans Pro',
                        fontStyle: 'italic',
                        textDecorationLine: 'underline'
                    }}>
                    {isValidEmail ? '' : 'Email Kh??ng h???p l??? !'}
                </Text>
                <Text style={styles.textpassword}>PassWord</Text>
                <View style={styles.viewinput}>
                    <TextInput
                        style={styles.input}
                        placeholder="PassWord"
                        keyboardType="default"
                        maxLength={16}
                        secureTextEntry={true}
                        onChangeText={(pass_word) => {
                            setOnChangepassword(pass_word);
                        }}
                        onBlur={() => onBlurPassWord()}
                    />
                    <Text
                        style={{
                            marginTop: 16,
                            fontSize: 13,
                            color: '#FFFFFF',
                            fontWeight: '900',
                            fontFamily: 'FS PF BeauSans Pro',
                            fontStyle: 'italic',
                            textDecorationLine: 'underline'
                        }}>
                        {isValidPassWord
                            ? ''
                            : 'L???i c?? ph??p! M???t kh???u ph???i ch???a ??t nh???t 8 k?? t???, ch???a ??t nh???t 1 s???, m???t ch??? th?????ng, m???t ch??? hoa v?? m???t k?? t??? ?????c bi???t'}
                    </Text>
                </View>
            </View>
            <ButtonLogin />
            <Forgotpassword />
            <ModalForgotpassword
                showmodalforgot={showmodalforgot}
                setShowmodalforgot={setShowmodalforgot}
            />
        </ScrollView>
    );
};
