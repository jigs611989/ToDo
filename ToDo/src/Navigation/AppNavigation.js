
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import ReduxTodoScreen from '../Container/ReduxTodoScreen'
import ReduxSauceTodoScreen from '../Container/ReduxSauceTodoScreen'
  
const TabNavigator = createBottomTabNavigator({
  Redux: ReduxTodoScreen,
  ReduxSauce: ReduxSauceTodoScreen,
});
  
export default createAppContainer(TabNavigator);
  