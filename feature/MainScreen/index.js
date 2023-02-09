import React, { Fragment, useState } from 'react';
import { Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Provider as PaperProvider } from 'react-native-paper';

import { Teachingschedule } from '../Teachingschedule';
import { ClassTodays } from '../ClassTodays';
import { TitleComponent } from '../TittleComponent';

export const MainScreen = () => {
    const [tab, setTab] = useState(0);
    const scrollTab = React.createRef();
    const windowWidth = Dimensions.get('window').width;

    const TabViewExample = () => {
        const scale = (size) => (windowWidth / 375) * size;

        const state = [
            { id: 0, key: 'TKB', title: 'Teaching Schedule' },
            { id: 1, key: 'ClassToday', title: 'Class Today' }
        ];
        const FirstRoute = () => <Teachingschedule />;
        const SecondRoute = () => <ClassTodays />;
        const renderScene1 = SceneMap({
            TKB: FirstRoute,
            ClassToday: SecondRoute
        });
        const renderItem = ({ item, index, drag, isActive }) => {
            return (
                <TouchableOpacity
                    style={{
                        opacity: isActive ? 0.5 : 1,
                        marginLeft: 16,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottomWidth: tab === index ? 2 : 0,
                        borderBottomColor: tab === index ? '#FFFFFF' : 'black',
                        width: Dimensions.get('window').width / 2 - 24,
                        height: 50,
                        borderRadius: tab === index ? 16 : 16,
                        backgroundColor:
                            tab === index ? '#00CC00' : 'rga(255,250,250)'
                    }}
                    scrollTab={scrollTab}
                    onLongPress={drag}
                    onPress={() => {
                        scrollTab?.current?.scrollToIndex({
                            animation: false,
                            index,
                            viewPositon: 0.5
                        });
                        setTab(index);
                    }}>
                    <Text
                        style={{
                            fontFamily: 'FS PF BeauSans Pro',
                            color: index === tab ? '#FFFFFF' : 'black',
                            width: 100,
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: '900'
                        }}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
            );
        };
        const renderTabBar1 = () => {
            return null;
        };
        return (
            <PaperProvider>
                <Fragment>
                    <FlatList
                        ref={scrollTab}
                        onContentSizeChange={() =>
                            scrollTab?.current?.scrollToIndex({
                                index: tab,
                                animation: false,
                                viewPositon: 0.5
                            })
                        }
                        extraData={[tab, state]}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={state}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index}
                        containerStyle={{ maxHeight: scale(39) }}
                    />
                    <TabView
                        style={{ marginTop: -650 }}
                        navigationState={{ index: tab, routes: state }}
                        renderScene={renderScene1}
                        onIndexChange={(index) => {
                            setTab(index);
                        }}
                        initialLayout={windowWidth}
                        renderTabBar={renderTabBar1}
                    />
                </Fragment>
            </PaperProvider>
        );
    };

    return (
        <PaperProvider>
            <Fragment>
                <TitleComponent title={'Thời Khóa Biểu'} />
                <Teachingschedule />
            </Fragment>
        </PaperProvider>
    );
};
