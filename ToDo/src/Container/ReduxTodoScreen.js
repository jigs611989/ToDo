import React from 'react'
import { SafeAreaView } from 'react-native'
// import List from '../Component/List'
import ListHooks from '../Component/ListHooks'
import ThemeContext, { themes } from '../Contexts/ThemeContext'

const ReduxTodoScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      {/* <List /> */}
      <ThemeContext.Provider value={themes.dark}>
        <ListHooks />
      </ThemeContext.Provider>
    </SafeAreaView>
  )
}

ReduxTodoScreen.navigationOptions = () => ({
  title: 'Redux',
})

export default ReduxTodoScreen
