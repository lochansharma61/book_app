import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Styles from './styles'



export default class Header extends Component {

  

  render() {
    return (

      <View style={[Styles.container, this.props.color]}>
         <TouchableOpacity activeOpacity={0.5} onPress={this.props.func}>
        <Image style={Styles.logoIcon} resizeMode={'contain'} source={this.props.image}></Image>
        </TouchableOpacity>
        <Text style={Styles.title}>{this.props.title}</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <ImageBackground style={[Styles.frameIcon, this.props.style]} resizeMode={'contain'} source={this.props.backImage}>
            <Text style={Styles.frameText}>{this.props.frameText}</Text>
          </ImageBackground>
        </TouchableOpacity>

      </View>

    )
  }
}