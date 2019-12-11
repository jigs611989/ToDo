
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReduxTodoScreen from '../Container/ReduxTodoScreen'
import ReduxSourceTodoScreen from '../Container/ReduxSourceTodoScreen'
  
const TabNavigator = createBottomTabNavigator({
  Redux: ReduxTodoScreen,
  ReduxSource: ReduxSourceTodoScreen,
});
  
export default createAppContainer(TabNavigator);
  