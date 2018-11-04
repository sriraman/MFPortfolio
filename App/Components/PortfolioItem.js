import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button, TextInput } from 'react-native'
import styles from './Styles/AddOrderModalStyles'
import Modal from 'react-native-modalbox';
import _ from 'lodash'

export default class PortfolioItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  static propTypes = {
    orders: PropTypes.array
  }

  render () {
    return <View>
      <Text style={styles.title} >{this.props.orders[0].schemeName} </Text>
      <Text style={styles.subTitle} > Quanity: {_.sumBy(this.props.orders, 'quantity')} </Text>
      <Text style={styles.subTitle} > Total Amount: Rs.{_.sumBy(this.props.orders, 'amount')} </Text>
    </View>
  }
}
