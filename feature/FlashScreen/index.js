import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { WellComeScreen } from '../WellcomeScreen/index';
import { LoginScreen } from '../LoginScreen/index';

export const FlashScreen = () => {
    const [login, setLogin] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLogin(true);
        }, 5000);
    }, []);
    return (
        <View>{login === false ? <WellComeScreen /> : <LoginScreen />}</View>
    );
};
