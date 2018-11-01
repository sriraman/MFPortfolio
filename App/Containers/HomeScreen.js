import React, { Component } from 'react'
import { ScrollView, Text, Image, View, SafeAreaView, FlatList, Button } from 'react-native'
import { Images } from '../Themes'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { connect } from 'react-redux'
import MutualFundCard from '../Components/MutualFundCard'
import MutualFundsActions from '../Redux/MutualFundsRedux'
import CustomizeViewItem from '../Components/CustomizeViewItem'
import Modal from 'react-native-modalbox';

// Styles
import styles from './Styles/LaunchScreenStyles'

class HomeScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      viewCustomizeModal: false
    }
    this.renderHeader = this.renderHeader.bind(this)
    this._onViewToggle = this._onViewToggle.bind(this)
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
              renderItem={({item}) => <MutualFundCard fund={item} view={view}/>}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
