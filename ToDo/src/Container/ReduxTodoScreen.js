import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native'
import reduxStore from '../Redux/store'
import List from '../Component/List'
import styles from './Styles/ReduxTodoScreenStyle'

const ReduxTodoScreen = () => {
    return (
        <Provider store={reduxStore}>
            <SafeAreaView style={styles.container}>
                <List />
            </SafeAreaView>
        </Provider>
    )
}

export default ReduxTodoScreen
