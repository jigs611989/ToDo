import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    margin: 10,
    flex: 1,
  },
  item: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  itemText: {
    flexGrow: 1,
  },
  deleteButton: {
    height: 40,
    width: 40,
  },
});

export default styles;
