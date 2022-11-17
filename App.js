import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';

import { FlashScreen } from './feature/FlashScreen/index';
import { MainScreen } from './feature/MainScreen/index';
import { YourProfile } from './feature/YourProfile';
import { DanhMucScreen } from './feature/DanhMucScreen';
import { DanhSachSinhVien } from './feature/DanhSachSV';
import { ClassTodays } from './feature/ClassTodays';
import Info_GV from './feature/Info_GV';
import { store } from './store';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={FlashScreen} />
                    <Stack.Screen name="Main" component={MainScreen} />
                    <Stack.Screen name="Profile" component={YourProfile} />
                    <Stack.Screen
                        name="DanhMucScreen"
                        component={DanhMucScreen}
                    />
                    <Stack.Screen
                        name="DanhSachSinhVien"
                        component={DanhSachSinhVien}
                    />
                    <Stack.Screen name="ClassTodays" component={ClassTodays} />
                    <Stack.Screen name="Info_GV" component={Info_GV} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
