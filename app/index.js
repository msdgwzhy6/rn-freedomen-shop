import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation' 

import GouWuChe from './main/GouWuChe'
import ShanChen from './main/ShanChen'
import SheQu from './main/SheQu'
import ShouYe from './main/ShouYe'
import WoDe from './main/WoDe'
import Bar from './Bar'
import Login from './main/Login'

const TabNav = createBottomTabNavigator({
    shouye: {
        screen: ShouYe, 
    },
    shanchen: {
        screen: ShanChen 
    } ,
    shequ: {
        screen: SheQu 
    },
    gouwuche: {
        screen: GouWuChe 
    },
    wode: {
        screen: WoDe
    }
},{
    swipeEnabled: true,
    animationEnabled: true, 
    tabBarComponent: Bar,
    tabBarOptions: {
        activeTintColor: '#57a6ef',
        inactiveTintColor: '#cacaca',
        
        showLabel: true,
        pressOpacity: .8,
        showIcon: true, 
        labelStyle: {
              fontSize: 12, 
        }, 
        style: {
            height: 52, 
            backgroundColor: '#fff', 
            borderTopWidth: 0.4, 
            borderTopColor: '#ddd',
            justifyContent: 'center'
        },
    },

    allowFontScaling: true, 
    lazy: true,
    pressOpacity: 0.6, 
})

const App = createStackNavigator({
    main: {
        screen: TabNav,
        navigationOptions: {   
            header: null 
        } 
    },
    login: Login
},{
    initialRouteName: 'main',
    // headerMode: 'float', 
    navigationOptions: { 
        headerTintColor: 'white',
        headerStyle: { 
            height: 56,
            backgroundColor: '#57a6ef'
        },
        headerTitleStyle: {
            color: 'white',
            fontSize: 18
        }
    }
})

export default App