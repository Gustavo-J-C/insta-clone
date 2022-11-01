import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Nav from './src/Nav';
import storeConfig from './src/store/storeConfig';
import { Provider } from 'react-redux';

const store = storeConfig()

export default function App() {

    const comments =[{
    nickname: 'Joana Elena Silva',
    comment: 'Excelente Foto'
    },{
        nickname: 'Rafael Alberto',
        comment: 'Muito ruim faço melhor'
    }]
    return (
        <Provider store={store}>
            <NavigationContainer>
                <StatusBar hidden={true} />
                <Nav />
            </NavigationContainer>
        </Provider>
    );
}
