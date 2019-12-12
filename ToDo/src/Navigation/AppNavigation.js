
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import ReduxTodoScreen from '../Container/ReduxTodoScreen';
import ReduxSauceTodoScreen from '../Container/ReduxSauceTodoScreen';

const ReduxScreenStack = createStackNavigator({
  ReduxScreen: {
    screen: ReduxTodoScreen,
  },
});

const ReduxSauceScreenStack = createStackNavigator({
  ReduxSauceScreen: {
    screen: ReduxSauceTodoScreen,
  },
});

const TabNavigator = createBottomTabNavigator({
  Redux: ReduxScreenStack,
  ReduxSauce: ReduxSauceScreenStack,
});
  
export default createAppContainer(TabNavigator);
