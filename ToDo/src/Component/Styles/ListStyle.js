import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    margin: 10,
    flex: 1,
  },
  item: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
  },
  itemText: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  addButtonStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#00CCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default styles
