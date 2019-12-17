import React from 'react'
import AppNvigator from './Navigation/AppNavigation'
import { Provider } from 'react-redux'
import store from './StateManagment/store'
import ThemeContext, { themes } from './Contexts/ThemeContext'

const App: () => React$Node = () => {
  return (
    <ThemeContext.Provider value={themes.light}>
      <Provider store={store}>
        <AppNvigator />
      </Provider>
    </ThemeContext.Provider>
  )
}

export default App
