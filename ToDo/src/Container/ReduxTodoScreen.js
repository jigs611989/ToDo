import React from 'react'
import {SafeAreaView} from 'react-native'
import List from '../Component/List'

const ReduxTodoScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f0f0f0'}}>
      <List />
    </SafeAreaView>
  )
}

ReduxTodoScreen.navigationOptions = () => ({
  title: 'Redux',
})

export default ReduxTodoScreen
