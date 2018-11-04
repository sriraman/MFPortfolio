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
    fontSize: 18,
    padding: 10,
    textAlign: 'center'
  },
  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#aaa'
  },
  currentNAV: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10
  },
  quantity: {
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#aaa'
  }
})
