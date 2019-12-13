import React from 'react'
import {SafeAreaView} from 'react-native'
import List from '../Component/List'

const ReduxSauceTodoScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f0f0f0'}}>
      <List useSauce />
    </SafeAreaView>
  )
}

ReduxSauceTodoScreen.navigationOptions = () => ({
  title: 'ReduxSauce',
})

export default ReduxSauceTodoScreen
