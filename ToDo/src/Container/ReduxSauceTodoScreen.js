import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
import reduxSauceStore from '../ReduxSauce/store';
import List from '../Component/List';

const ReduxTodoScreen = () => {
    return (
        <Provider store={reduxSauceStore}>
            <SafeAreaView style={{ flex: 1}}>
                <List useSauce/>
            </SafeAreaView>
        </Provider>
    )
}

export default ReduxTodoScreen
