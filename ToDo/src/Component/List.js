import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { addItem, updateItem, deleteItem } from '../Redux/actions'
import styles from './Styles/ListStyle'

const TodoItem = ({ item: todo, index, onDelete }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity style={styles.itemText}>
          <Text>
            <Text>{`${index + 1}. `}</Text>
            <Text>{todo.text}</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(todo)}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
};

class List extends Component {

    addItem = () => {
        const now = new Date()  
        this.props.addItem({id: now.getTime(), text: 'hello'})
    }

    deleteItem = (item) => {
        console.log('to del: ', item)
        this.props.deleteItem(item)
    }

    render() {
        const {todos} = this.props
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={todos}
                    keyExtractor={item => `${item.id}`}
                    renderItem={item => <TodoItem {...item} onDelete={this.deleteItem}/>}
                />
                <TouchableOpacity onPress={this.addItem}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    todos: state
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (payload) => dispatch(addItem(payload)),
    deleteItem: (payload) => dispatch(deleteItem(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
