import {  createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Books from './screens/books/books'
import Detail from '../app/screens/details/detail'


const AppNavigator = createStackNavigator({
    Books: {
        screen: Books,
    },
    Detail: {
        screen: Detail,
    },

},
    {
        initialRouteName: 'Books',
        headerMode: 'none'
    });
export default createAppContainer(AppNavigator);
