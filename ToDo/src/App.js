import React from 'react';
import AppNvigator from './Navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './StateManagment/store';

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <AppNvigator />
       </Provider>
   ) 
}

export default App;