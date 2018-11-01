import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import styles from './Styles/MutualFundCardStyles'

export default class MutualFundCard extends Component {

  static propTypes = {
    fund: PropTypes.object
  }

  render () {
    let { fund, view } = this.props
    return <View style={styles.container}>
      <Text style={styles.title} >{fund['Scheme Name']} </Text>
      <View style={styles.extraData}>
        {(view['Scheme Code'] === true) &&
          <Text style={styles.extraDataText}>Scheme Code : {fund['Scheme Code']}</Text>
        }
        {(view['ISIN Growth'] === true) &&
          <Text style={styles.extraDataText}>ISIN Growth : {fund['ISIN Growth']}</Text>
        }
        {(view['ISIN Div Reinvestment'] === true) &&
          <Text style={styles.extraDataText}>ISIN Div Reinvestment : {fund['ISIN Div Reinvestment']}</Text>
        }
        {(view['Net Asset Value'] === true) &&
          <Text style={styles.extraDataText}>Net Asset Value : {fund['Net Asset Value']}</Text>
        }
      </View>
    </View>
  }
}
