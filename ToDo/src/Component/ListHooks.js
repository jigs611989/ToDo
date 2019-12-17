import React, { useState, useCallback, useContext, useRef } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import DialogInput from 'react-native-dialog-input'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItem,
  deleteItem,
  updateItem,
} from '../StateManagment/Redux/actions'
import { Creators } from '../StateManagment/ReduxSauce'
import styles from './Styles/ListStyle'
import { TodoItem } from './TodoItem'
import ThemeContext from '../Contexts/ThemeContext'

function addToDoItem(inputText, useSauce, dispatch) {
  const now = new Date()
  const payload = { id: now.getTime(), text: inputText }
  const normalAddAction = addItem(payload)
  const sauceAddAction = Creators.add(payload)
  useSauce ? dispatch(sauceAddAction) : dispatch(normalAddAction)
}

const ListHooks = props => {
  const { useSauce } = props
  const [isDialogVisible, setDialogVisible] = useState(false)
  const [editToDO, setEditToDO] = useState(null)
  const todos = useSelector(({ reducerNormal, reducerSaurce }) =>
    useSauce ? reducerSaurce : reducerNormal,
  )
  const dispatch = useDispatch()
  const theme = useContext(ThemeContext)
  const addTextRef = useRef(null)

  const updateToDoItem = useCallback(
    todo => {
      setDialogVisible(true)
      setEditToDO(todo)
    },
    [setDialogVisible, setEditToDO],
  )

  const deleteToDoItem = useCallback(
    payload => {
      const normalDeleteAction = deleteItem(payload)
      const sauceDeleteAction = Creators.delete(payload)
      useSauce ? dispatch(sauceDeleteAction) : dispatch(normalDeleteAction)
    },
    [useSauce, dispatch],
  )

  const submitInput = useCallback(
    inputText => {
      if (editToDO) {
        const payload = { ...editToDO, text: inputText }
        const normalUpdateAction = updateItem(payload)
        const sauceUpdateAction = Creators.update(payload)
        useSauce ? dispatch(sauceUpdateAction) : dispatch(normalUpdateAction)
        setDialogVisible(false)
        setEditToDO(null)
      } else {
        addToDoItem(inputText, useSauce, dispatch)
        setDialogVisible(false)
        console.log('addbutton: ', addTextRef.current)
      }
    },
    [dispatch, editToDO, useSauce],
  )

  const closeDialog = useCallback(() => setDialogVisible(false), [
    setDialogVisible,
  ])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={item => `${item.id}`}
        renderItem={item => (
          <TodoItem
            {...item}
            onDelete={deleteToDoItem}
            onUpdateItem={updateToDoItem}
          />
        )}
      />
      <TouchableOpacity
        onPress={() => {
          setDialogVisible(true)
          setEditToDO(null)
        }}
        style={styles.addButtonStyle}>
        <Text
          ref={addTextRef}
          style={{
            backgroundColor: theme.background,
            color: theme.foreground,
          }}>
          Add
        </Text>
      </TouchableOpacity>
      <DialogInput
        isDialogVisible={isDialogVisible}
        title={editToDO ? 'Edit Item' : 'ToDo'}
        message={''}
        hintInput={editToDO ? editToDO.text : 'Add Item'}
        initValueTextInput={editToDO ? editToDO.text : null}
        submitInput={submitInput}
        closeDialog={closeDialog}
      />
    </View>
  )
}

export default ListHooks
