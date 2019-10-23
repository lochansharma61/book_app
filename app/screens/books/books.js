import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import Headers from '../../components/header/index'
import Styles from './styles'
import { connect } from 'react-redux';
import * as actions from './actions'
import Colors from '../../themes/colors';
import metrics from '../../themes/metrics';


class Books extends Component {
  
  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    
    let data = this.props.books
    if(data != null){
      return (
        <SafeAreaView style={{backgroundColor: Colors.blue, flex: 1}}>
          <View style={Styles.container}>
          <Headers title={'Books'}/>
          <FlatList 
            style={{ height: metrics.screenHeight * 0.868 }}
            ItemSeparatorComponent={()=>{
              return<View style={{height: 1, width: metrics.screenWidth, backgroundColor: Colors.darkGrey}}/>
            }}
            data={data.items}
            keyExtractor={(item) => item.id}
            renderItem={(item)=>{
              
              return (
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Detail', {data: item.item})}}>
                  <Text style={{padding: 20}}>{item.item.volumeInfo.title}</Text>
                </TouchableOpacity>
              )
            }}
          />
          </View>
        </SafeAreaView>
      )
    }else{
      return(
        <SafeAreaView style={{backgroundColor: Colors.blue, flex: 1}}>
          <View style={Styles.container}>
          <Headers title={'Books'}/>
            <Text>Loading...</Text>
          </View>
        </SafeAreaView>
      )
    }
    
  }
}

const StateToProps = (state) => ({
  books: state.books.books,
})
const DispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => dispatch(actions.fetchBooks())
  }
}
export default connect(StateToProps, DispatchToProps)(Books)