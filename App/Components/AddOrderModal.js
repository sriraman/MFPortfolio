import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Button, TextInput } from 'react-native'
import styles from './Styles/AddOrderModalStyles'
import Modal from 'react-native-modalbox';

export default class MutualFundCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      quantity: '',
      NAV: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      NAV: nextProps.fund.NAV.toString()
    })
  }

  static propTypes = {
    fund: PropTypes.object,
    onAddMF: PropTypes.func
  }

  render () {
    console.log(this.state)
    return <Modal isOpen={this.props.isOpen} onClosed={() => this.props.onClosed()} style={[styles.modal, { height: 320 }]} position={"center"}>
      <Text style={styles.title} >{this.props.fund.schemeName} </Text>
      <Text style={styles.subTitle} >Scheme Code: {this.props.fund.schemeCode} </Text>
      <Text style={[styles.subTitle, {textAlign: 'left', paddingLeft: 20}]}>Quantity </Text>
      <TextInput style={styles.quantity} keyboardType='number-pad' placeholder="Quantity" onChangeText={(text) => this.setState({ quantity: text })}></TextInput>
      <Text style={[styles.subTitle, {textAlign: 'left', paddingLeft: 20}]}>Amount </Text>
      <TextInput style={styles.quantity} keyboardType='number-pad' placeholder="NAV" onChangeText={(text) => this.setState({ NAV: text })} value={this.state.NAV}></TextInput>
      <Button title="Submit" onPress={() => this.props.onAddOrder(this.state.quantity, this.state.NAV)}/>
    </Modal>
  }
}
