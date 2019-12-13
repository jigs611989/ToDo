import React, { Component } from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux'
import {
  addItem,
  updateItem,
  deleteItem,
} from '../StateManagment/Redux/actions'
import { Creators } from '../StateManagment/ReduxSauce'
import styles from './Styles/ListStyle'
import DialogInput from 'react-native-dialog-input'
import { TodoItem } from './TodoItem'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDialogVisible: false,
      editToDO: null,
    }
  }

  addItem = inputText => {
    const now = new Date()
    this.props.addItem({ id: now.getTime(), text: inputText })
  }

  updateItem = todo => {
    this.setState({
      isDialogVisible: true,
      editToDO: todo,
    })
  }

  deleteItem = item => {
    this.props.deleteItem(item)
  }

  render() {
    const { todos } = this.props
    const { isDialogVisible, editToDO } = this.state

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={todos}
          keyExtractor={item => `${item.id}`}
          renderItem={item => (
            <TodoItem
              {...item}
              onDelete={this.deleteItem}
              onUpdateItem={this.updateItem}
            />
          )}
        />
        <TouchableOpacity
          onPress={() =>
            this.setState({ isDialogVisible: true, editToDO: null })
          }
          style={styles.addButtonStyle}>
          <Text>Add</Text>
        </TouchableOpacity>
        <DialogInput
          isDialogVisible={isDialogVisible}
          title={editToDO ? 'Edit Item' : 'ToDo'}
          message={''}
          hintInput={editToDO ? editToDO.text : 'Add Item'}
          initValueTextInput={editToDO ? editToDO.text : null}
          submitInput={inputText => {
            if (editToDO) {
              this.props.updateItem({ ...editToDO, text: inputText })
              this.setState({ isDialogVisible: false, editToDO: null })
            } else {
              this.addItem(inputText)
              this.setState({ isDialogVisible: false })
            }
          }}
          closeDialog={() => this.setState({ isDialogVisible: false })}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ reducerNormal, reducerSaurce }, ownProps) => ({
  todos: ownProps.useSauce ? reducerSaurce : reducerNormal,
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addItem: payload =>
      ownProps.useSauce
        ? dispatch(Creators.add(payload))
        : dispatch(addItem(payload)),
    deleteItem: payload =>
      ownProps.useSauce
        ? dispatch(Creators.delete(payload))
        : dispatch(deleteItem(payload)),
    updateItem: payload =>
      ownProps.useSauce
        ? dispatch(Creators.update(payload))
        : dispatch(updateItem(payload)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
