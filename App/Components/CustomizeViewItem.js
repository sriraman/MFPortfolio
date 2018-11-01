import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/CustomizeViewItemStyles'
import { Colors } from '../Themes/'

export default class CustomizeViewItem extends Component {

  static propTypes = {
    fund: PropTypes.object
  }

  constructor (props) {
    super(props)
    this._onPress = this._onPress.bind(this)
  }

  _onPress () {
    this.props.onToggle(this.props.title, !this.props.value)
  }

  render () {
    let { title, value } = this.props
    return <TouchableOpacity style={[styles.container, { backgroundColor: (value) ? Colors.facebook : Colors.white }]} onPress={this._onPress}>
      <Text style={[styles.title, { color: (value) ? Colors.snow : Colors.black }]} >{title} </Text>
    </TouchableOpacity>
  }
}
