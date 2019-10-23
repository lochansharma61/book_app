import { StyleSheet, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
import Colors from '../../themes/colors'

export default StyleSheet.create({

    container: {
        flex: 1, 
        backgroundColor: Colors.warmGrey,
        alignItems: "center"
    },
    image: {
        height: height * 0.27, 
        width: width * 0.4, 
        marginTop: height * 0.05
    },
    title:{
        fontSize: 20,
        padding: height * 0.05,
        textAlign: 'center'
    },
    author:{
        padding: 10,
        fontSize: 18,
        textAlign: 'center'
    }
})