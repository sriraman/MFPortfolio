import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button, TextInput } from 'react-native'
import styles from './Styles/AddOrderModalStyles'
import Modal from 'react-native-modalbox';

export default class MutualFundCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quantity: ''
    }
  }

  static propTypes = {
    fund: PropTypes.object,
    onAddMF: PropTypes.func
  }

  render () {
    return <Modal isOpen={this.props.isOpen} onClosed={() => this.props.onClosed()} style={[styles.modal, { height: 250 }]} position={"center"}>
      <Text style={styles.title} >{this.props.fund.schemeName} </Text>
      <Text style={styles.subTitle} >Scheme Code: {this.props.fund.schemeCode} </Text>
      <Text style={styles.currentNAV}>Current NAV: {this.props.fund.NAV} </Text>
      <TextInput style={styles.quantity} keyboardType='number-pad' placeholder="Quantity" onChangeText={(text) => this.setState({ quantity: text })}></TextInput>
      <Button title="Submit" onPress={() => this.props.onAddOrder(this.state.quantity)}/>
    </Modal>
  }
}
