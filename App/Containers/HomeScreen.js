import React, { Component } from 'react'
import { ScrollView, Text, Image, View, SafeAreaView, FlatList, Button } from 'react-native'
import { Images } from '../Themes'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { connect } from 'react-redux'
import MutualFundCard from '../Components/MutualFundCard'
import MutualFundsActions from '../Redux/MutualFundsRedux'
import CustomizeViewItem from '../Components/CustomizeViewItem'
import AddOrderModal from '../Components/AddOrderModal'
import Modal from 'react-native-modalbox';

// Styles
import styles from './Styles/LaunchScreenStyles'

class HomeScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      viewCustomizeModal: false,
      viewAddOrderModal: false,
      modalText: {
        schemeCode: 0,
        schemeName: '',
        NAV: 0
      }
    }
    this.renderHeader = this.renderHeader.bind(this)
    this._onViewToggle = this._onViewToggle.bind(this)
    this._onAddMF = this._onAddMF.bind(this)
    this._onAddOrder = this._onAddOrder.bind(this)
  }

  _keyExtractor (item, index) {
    if (item["Scheme Code"]) {
      return item["Scheme Code"].toString()
    } else {
      return index
    }
  }

  _openCustomizeModal () {
    this.setState({
      viewCustomizeModal: true
    })
  }

  renderHeader () {
    return <Button title="Customize View" onPress={() => this._openCustomizeModal()}/>
  }

  _onViewToggle (key, value) {
    this.props.customizeView(key, value)
  }

  _onAddMF (fund) {

    this.setState({
      viewAddOrderModal: true,
      modalText: {
        schemeName: fund["Scheme Name"],
        schemeCode: fund["Scheme Code"],
        NAV: fund["Net Asset Value"]
      }
    })
  }

  _onAddOrder (quantity) {
    let order = this.state.modalText
    order['quantity'] = parseInt(quantity)
    this.props.addOrder(order)
    this.setState({
      viewAddOrderModal: false
    })
  }

  render () {
    console.log(this.props)
    let {
      list,
      view
    } = this.props.mutualFunds
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollableTabView>
          <View tabLabel="Mutual Funds">
            <FlatList
              data={list}
              keyExtractor={this._keyExtractor}
              renderItem={({item}) => <MutualFundCard fund={item} view={view} onAddMF={this._onAddMF}/>}
              removeClippedSubviews={false}
              ListHeaderComponent={this.renderHeader}
              extraData={view}
            />
          </View>
          <View tabLabel="Portfolio">
            
          </View>
        </ScrollableTabView>
        <Modal isOpen={this.state.viewCustomizeModal} onClosed={() => this.setState({viewCustomizeModal: false})} style={[styles.modal, { height: 300 }]} position={"bottom"}>
          <CustomizeViewItem title="Scheme Code" value={view["Scheme Code"]} onToggle={this._onViewToggle}/>
          <CustomizeViewItem title="ISIN Growth" value={view["ISIN Growth"]} onToggle={this._onViewToggle}/>
          <CustomizeViewItem title="ISIN Div Reinvestment" value={view["ISIN Div Reinvestment"]} onToggle={this._onViewToggle}/>
          <CustomizeViewItem title="Net Asset Value" value={view["Net Asset Value"]} onToggle={this._onViewToggle}/>
        </Modal>

        <AddOrderModal isOpen={this.state.viewAddOrderModal} onClosed={() => this.setState({viewAddOrderModal: false})} fund={this.state.modalText} onAddOrder={this._onAddOrder}/>

      </SafeAreaView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mutualFunds: state.mutualFunds
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    customizeView: (key, value) => dispatch(MutualFundsActions.customizeView(key, value)),
    addOrder: (order) => dispatch(MutualFundsActions.addOrder(order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
