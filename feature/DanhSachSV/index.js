import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    PermissionsAndroid,
    Image,
    Alert,
    ImageBackground
} from 'react-native';
import { useSelector } from 'react-redux';
import { Cell, Row, Table, TableWrapper } from 'react-native-table-component';
import { utils, write } from 'xlsx';
import Modal from 'react-native-modal';
import { DownloadDirectoryPath, writeFile } from 'react-native-fs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { TitleComponent } from '../TittleComponent';
import { styles } from './styles';
import { ModalAddStudent } from '../../extrafeatures/Modal/Modaladdstudent';
import { ModalInfoSV } from '../../extrafeatures/Modal/ModalInfo';

export const DanhSachSinhVien = (props) => {
    const state = useSelector((state) => state?.mainReducer?.DsSinhVien);
    const datainfoclass = props?.route?.params?.value;
    const [datastudent, setDatastudent] = useState({
        stt: '',
        ma_sv: '',
        ho_ten: '',
        ma_lop: '',
        ten_lop: '',
        so_dien_thoai: ''
    });
    const [dssinhvien, setDssinhvien] = useState([]);
    useEffect(() => {
        state?.forEach((item) => (item.check = false));
        setDssinhvien(state);
    }, []);
    const [showmodaladdstudent, setShowmodaladdstudent] = useState(false);
    const [showModalInfoSV, setShowModalInfoSV] = useState(false);
    const [dataSelect, setDataSelect] = useState();
    const closeModalInfoSV = () => {
        setShowModalInfoSV(!showModalInfoSV);
        setDataSelect('');
    };
    const InfoClass = () => {
        return (
            <View style={styles.viewinfoclass}>
                <Text style={styles.texttenmh}>
                    Tên Môn Học: {datainfoclass.ten_mh}
                </Text>
                <Text style={styles.textmamh}>
                    Mã Môn Học: {datainfoclass.ma_mh}
                </Text>
                <Text style={styles.textmamh}>
                    Số tín chỉ: {datainfoclass.so_tin_chi}
                </Text>
                <Text style={styles.textmamh}>
                    Tiết Bắt Đầu: {datainfoclass.tiet_bd}
                </Text>
                <Text style={styles.textmamh}>
                    Đến hết tiết:{' '}
                    {Number(datainfoclass.tiet_bd) +
                        Number(datainfoclass.so_tiet) -
                        1}
                </Text>
                <Text style={styles.textmamh}>
                    Phòng học: {datainfoclass.phong_hoc}
                </Text>
            </View>
        );
    };
    const ListStudent = () => {
        const headers = [
            'Danh Mục Quản Lý',
            'STT',
            'Mã Sinh Viên',
            'Tên Sinh Viên',
            'Mã Lớp',
            'Tên Lớp',
            'SĐT'
        ];
        const widthArray = [150, 40, 100, 160, 80, 200, 90];

        const TouchClick = (dataRow, index, check) => {
            const onPressCLickMember = (dataRow, index) => {
                dataRow.check = !dataRow.check;
                dssinhvien[index] = dataRow;
                setDssinhvien([...dssinhvien]);
            };
            const onPressDelete = (stt, dataRow) => {
                Alert.alert('Bạn có muốn xóa sinh viên', `${dataRow?.ho_ten}`, [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => {
                            const dataupdate = dssinhvien?.filter(
                                (item) => item.stt !== stt
                            );
                            setDssinhvien(dataupdate);
                        }
                    }
                ]);
            };
            const onPressShowInfo = (dataRow) => {
                setShowModalInfoSV(true);
                setDataSelect(dataRow);
            };
            return (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{
                            marginLeft: 10,
                            width: 40,
                            height: 40,
                            borderRadius: 4,
                            backgroundColor:
                                check === true ? '#008000' : '#FFFFFF',
                            marginTop: -2
                        }}
                        onPress={() =>
                            onPressCLickMember(dataRow, index, check)
                        }>
                        {check === true ? (
                            <Text style={{ marginLeft: 5, marginTop: 4 }}>
                                <Icon
                                    name="check"
                                    size={30}
                                    color={'#66FF66'}
                                />
                            </Text>
                        ) : null}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.tochClickDetete,
                            {
                                marginLeft: 5,
                                backgroundColor: '#FFFFFF',
                                borderRadius: 4
                            }
                        ]}
                        onPress={() => onPressShowInfo(dataRow)}>
                        <Text style={{ marginLeft: 5, marginTop: 4.5 }}>
                            <Icon name="user-alt" size={30} color={'#E9967A'} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.tochClickDetete,
                            { borderRadius: 4, backgroundColor: '#FFFFFF' }
                        ]}
                        onPress={() => onPressDelete(dataRow.stt, dataRow)}>
                        <Text style={{ marginLeft: 6, marginTop: 4.5 }}>
                            <Icon name="trash" size={30} color={'#EE0033'} />
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        };
        return (
            <View style={styles.viewtable}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View>
                        <Table
                            borderStyle={{
                                borderWidth: 1,
                                borderColor: '#FFFFFF'
                            }}></Table>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Table
                                borderStyle={{
                                    borderWidth: 1,
                                    borderColor: '#FFFFFF'
                                }}>
                                <Row
                                    key={headers.index}
                                    data={headers}
                                    style={{
                                        backgroundColor: 'orange',
                                        flex: 1
                                    }}
                                    textStyle={styles.textheaderTable}
                                    widthArr={widthArray}
                                    height={40}
                                />
                                {dssinhvien?.map((dataRow, index) => (
                                    <TableWrapper
                                        key={index}
                                        style={{
                                            flexDirection: 'row'
                                        }}>
                                        {Object.values(dataRow).map(
                                            (cellData, cellIndex) => (
                                                <Cell
                                                    key={cellIndex}
                                                    data={
                                                        cellIndex === 0
                                                            ? TouchClick(
                                                                  dataRow,
                                                                  index,
                                                                  dataRow.check
                                                              )
                                                            : cellData
                                                    }
                                                    textStyle={styles.textCell}
                                                    height={50}
                                                    width={
                                                        widthArray[cellIndex]
                                                    }
                                                />
                                            )
                                        )}
                                    </TableWrapper>
                                ))}
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    };
    // Export Excel
    const ExampleExel = () => {
        const data = dssinhvien?.map((item) => {
            return {
                'Điểm Danh': item?.check === true ? 'Có mặt' : 'Không có mặt',
                'Số Thứ Tự': item?.stt,
                'Mã Sinh Viên': item?.ma_sv,
                'Họ tên': item?.ho_ten,
                'Mã lớp': item?.ma_lop,
                'Tên lớp': item?.ten_lop,
                'Số Điện Thoại': item?.so_dien_thoai
            };
        });
        const dateclass = props?.route?.params?.item?.date;
        const date = String(dateclass?.split('/'));
        const datetodaysaveexcel = date.replace(/,/g, '');
        let wb = utils.book_new(),
            ws = utils.json_to_sheet(data);
        utils.book_append_sheet(wb, ws, 'Users');
        const wbout = write(wb, { type: 'binary', bookType: 'xlsx' });

        writeFile(
            DownloadDirectoryPath + `/${datetodaysaveexcel}.xlsx`,
            wbout,
            'ascii'
        )
            .then((res) => {
                Alert.alert(
                    'Thông báo',
                    'Đã Lưu file ExCel vào thư mục Download...'
                );
            })
            .catch((e) => {
                console.log('Error writeFile', e);
            });
    };
    const handleClick = async () => {
        try {
            let isPermitedExternalStorage = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            );
            if (!isPermitedExternalStorage) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Storahe premisson needed',
                        buttonNeutral: 'Ask Me Later',
                        buttonPositive: 'OK'
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    ExampleExel();
                    console.log('Premisson granted');
                } else {
                    console.log('Presmisson denied');
                }
            } else {
                ExampleExel();
            }
        } catch (e) {
            console.log('Error while checking permisson');
            console.log(e);
            return;
        }
    };
    const ExportExel = () => {
        return (
            <View>
                {dssinhvien.length > 0 && (
                    <View>
                        <TouchableOpacity
                            style={styles.touchexel}
                            onPress={() => handleClick()}>
                            <Text style={styles.textexel}>Export ExCel</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        );
    };
    //------------
    const AddStudent = () => {
        return (
            <View>
                {dssinhvien.length > 0 && (
                    <View>
                        <TouchableOpacity
                            style={styles.touchaddstudent}
                            onPress={() => setShowmodaladdstudent(true)}>
                            <Text style={styles.textadd}>ADD STUDENT</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        );
    };
    const BackGround = () => {
        return (
            <View>
                <ImageBackground
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: 1800
                    }}
                    blurRadius={1}
                    source={require('./icon/ic_qlsv_background_Listsv.png')}
                />
            </View>
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <TitleComponent title={'Danh Sách Sinh Viên'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <BackGround />
                <InfoClass />
                <ListStudent />
                <AddStudent />
                <ExportExel />
                <ModalAddStudent
                    setShowmodaladdstudent={setShowmodaladdstudent}
                    showmodaladdstudent={showmodaladdstudent}
                    datastudent={datastudent}
                    setDatastudent={setDatastudent}
                    dssinhvien={dssinhvien}
                />
                <ModalInfoSV
                    showModalInfoSV={showModalInfoSV}
                    setShowModalInfoSV={setShowModalInfoSV}
                    closeModal={closeModalInfoSV}
                    dataRow={dataSelect}
                />
            </ScrollView>
        </View>
    );
};
