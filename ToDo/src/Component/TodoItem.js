import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './Styles/ListStyle'
import Swipeout from 'react-native-swipeout'

export const TodoItem = ({ item: todo, onDelete, onUpdateItem }) => {
  let swipeBtns = [
    {
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => {
        onDelete(todo)
      },
    },
  ]

  return (
    <Swipeout right={swipeBtns} autoClose="true" backgroundColor="transparent">
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.itemText}
          onPress={() => onUpdateItem(todo)}>
          <Text>
            <Text>{todo.text}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Swipeout>
  )
}
