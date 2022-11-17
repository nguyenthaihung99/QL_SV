import {
    View,
    Text,
    PermissionsAndroid,
    TouchableOpacity,
    Alert
} from 'react-native';
import React from 'react';
import { writeFile, readFile, DownloadDirectoryPath } from 'react-native-fs';
import XLSX from 'xlsx';
// import { VictoryPie, VictoryLabel } from 'victory-native';
// import { map } from 'lodash';
// import { Svg } from 'react-native-svg';
// import Styles from '../../common/Styles';

export default function XuatFileExcel() {
    const exportDataToExcel = () => {
        let sample_data = [
            {
                id: '1',
                name: 'khiem',
                phone: '123456'
            },
            {
                id: '2',
                name: 'khiem',
                phone: '16534'
            },
            {
                id: '3',
                name: 'khiem',
                phone: '999999',
                age: '22'
            }
        ];

        let wb = XLSX.utils.book_new();
        let ws = XLSX.utils.json_to_sheet(sample_data);
        XLSX.utils.book_append_sheet(wb, ws, 'Users');
        const wbout = XLSX.write(wb, { type: 'binary', bookType: 'xlsx' });

        writeFile(DownloadDirectoryPath + '/tessstExcel.xlsx', wbout, 'ascii')
            .then((res) => {
                alert('Export Data ...');
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
                        message: 'Your app needs permission.',
                        buttonNeutral: 'Ask Me Later',
                        buttonPositive: 'OK'
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    exportDataToExcel();
                    console.log('Premisson granted');
                } else {
                    console.log('Presmisson denied');
                }
            } else {
                exportDataToExcel();
            }
        } catch (e) {
            console.log('Error while checking permisson');
            console.log(e);
            return;
        }
    };

    const data = [
        {
            name: 'Thù lao giao',
            value: 1.7,
            color: '#4C91F6'
        },
        {
            name: 'Thù lao nhận',
            value: 2.2,
            color: '#F5A623'
        },
        {
            name: 'Thù lao khai thác',
            value: 8.6,
            color: '#EE0033'
        },
        {
            name: 'Thù lao chuyên cần',
            value: 1.2,
            color: '#22C999'
        },
        {
            name: 'Thù lao các chương trình kích thích',
            value: 1.24,
            color: '#DE650E'
        }
    ];

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => handleClick()}
                style={{ backgroundColor: 'blue' }}>
                <Text style={{ fontSize: 20, color: '#FFFFFF' }}>
                    XuatFileExcel
                </Text>
            </TouchableOpacity>

            <View>
                {/* <VictoryPie
                    colorScale={map(data, 'color')}
                    data={map(data, 'value')}
                    padAngle={2}
                    innerRadius={100}
                    labelRadius={115}
                    labels={map(data, (i) => `${i.value}\n${i.color}`)}
                    labelComponent={
                        <VictoryLabel
                            style={{
                                fontFamily: Styles.CoreSanGsRegular,
                                fill: 'black'
                            }}
                        />
                    }
                    events={[
                        {
                            target: 'data',
                            eventHandlers: {
                                onPressIn: () => {
                                    return [
                                        {
                                            target: 'data',
                                            mutation: (dataProps) => {
                                                Alert.alert(
                                                    'tbao',
                                                    `${dataProps.index}`
                                                );
                                                return {};
                                            }
                                        }
                                    ];
                                },
                                onPressOut: () => {}
                            }
                        }
                    ]}
                /> */}

                <View style={{ position: 'absolute', top: 185, left: 185 }}>
                    <Text style={{ fontSize: 25 }}>pie</Text>
                </View>
            </View>
        </View>
    );
}
