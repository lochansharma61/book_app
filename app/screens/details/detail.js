import React, { Component } from 'react'
import { View, Text, FlatList, Image, SafeAreaView } from 'react-native'
import Headers from '../../components/header/index'
import Styles from './styles'
import Colors from '../../themes/colors';
import Images from '../../themes/images';


export default class Detail extends Component {

  goBack(props){
    console.log('sdfsdfsfsd', props);
    props.navigation.pop();
  }
  
  render() {
    let data = this.props.navigation.state.params.data;
    return (
        <SafeAreaView style={{backgroundColor: Colors.blue, flex: 1}}>
          <View style={Styles.container}>
            <Headers title={'Book Detail'} image={Images.backArrow} func={()=>this.goBack(this.props)}/>
            <Image
              style={Styles.image}
              resizeMode={'contain'}
              source={{uri: data.volumeInfo.imageLinks.thumbnail}}
            />
            <Text style={Styles.title} >{data.volumeInfo.title}</Text>
            <FlatList 
              data={data.volumeInfo.authors}
              horizontal={true}
              renderItem={(item)=>{
                return (
                  <Text style={[Styles.author]}><Text style={[Styles.title, {fontSize: 15, color: Colors.fadeGrey}]}>by</Text> {item.item}</Text>
                )
              }}
            />
          </View>
        </SafeAreaView>
    )
  }
}


