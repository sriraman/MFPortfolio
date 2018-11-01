import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#ddd',
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },
  title: {
    fontSize: 17
  },
  extraData: {
    marginTop: 5
  },
  extraDataText: {
    color: '#aaa',
    marginVertical: 2
  }
})
