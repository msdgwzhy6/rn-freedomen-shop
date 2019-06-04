import React, {PureComponent} from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Text,
    Image,
    DeviceEventEmitter,
    Animated,
} from 'react-native';
import Freedomen from 'react-native-freedomen'

const tabItems = [
    {
        title: '首頁',
        activeIcon: require('./assets/home.png'),
        inactiveIcon: require('./assets/unhome.png')
    },
    {
        title: '商城',
        activeIcon: require('./assets/mart.png'),
        inactiveIcon: require('./assets/unmart.png')
    }, 
    {
        title: '社区',
        activeIcon: require('./assets/shequ.png'),
        inactiveIcon: require('./assets/shequ.png')
    },
    {
        title: '購物車',
        activeIcon: require('./assets/gouwuche.png'),
        inactiveIcon: require('./assets/gouwuchea.png')
    },
    {
        title: '我的',
        activeIcon: require('./assets/mine.png'),
        inactiveIcon: require('./assets/unmine.png')
    }
]


export default class TabBar extends PureComponent {
    constructor(props) {
        super(props) 
    }
   
    render() {
        
        const {
            navigation, 
        } = this.props;
        
        const {
            routes
        } = navigation.state; 

        let jumpToIndex = (index) => {  
            console.info(routes[index])
            navigation.navigate(routes[index].routeName)
        }

        return (   
                <View style={[styles.container]}>
                    {
                        routes && routes.map((route, index) => {
                            const focused = index === navigation.state.index;
                            return (
                                <TabBarItem
                                    key={index}
                                    route={route}
                                    index={index}
                                    focused={focused}
                                    jumpToIndex={jumpToIndex}
                                />
                            );
                        })
                    } 
                </View> 
        );
    }
};

class TabBarItem extends PureComponent{

    constructor(props) {
        super(props)
        this.scaleValue = new Animated.Value(0)
    }

    render() { 
        let { index, focused, jumpToIndex} = this.props; 
        
        let item = tabItems[index];
        let image = focused ? item.activeIcon : item.inactiveIcon;
        let color = focused ? '#57a6ef' : '#979797';  
        let iconWidth =  index == 2 ? 48 : 22
        
        return (
            <TouchableWithoutFeedback onPress={() => jumpToIndex(index)}>
                <View style={styles.iconView}> 
                {
                    index == 3 
                        ? <Freedomen.Region 
                        columns={[
                            {type: 'image', prop: 'image', style: {height: 22, width: 22, resizeMode: 'stretch'}},
                            {type: 'text', prop: 'count', load: (value) => value > 0, style: {marginLeft: -5, marginTop: -8, color: 'white', backgroundColor: 'red', width: 17, height: 17, borderRadius: 16, align: 'center'}},
                            {type: 'br', style: {flexDirection: "row"}}
                        ]}
                        data={{'image': image}}
                        redux={'bar_gouwuche'}
                    /> 
                        : <Image source={image} style={{
                            width: iconWidth,
                            height: iconWidth,
                            resizeMode: 'stretch',  
                        }}/> 
                }
                {
                    index == 2 ? null : <Text style={{color: color}}>{item.title}</Text>
                }
                </View>
            </TouchableWithoutFeedback>
        )
    }
  
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 52,
        backgroundColor: '#fff',
    },
    iconView: {
        alignItems: 'center',
    },
    iconText: {
        fontSize: 12,
        marginTop: 5, 
    }
});
