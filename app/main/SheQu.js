
import React, {Component} from 'react';
import Freedomen from 'react-native-freedomen'
import {Text, View, Image} from 'react-native'
import data from '../global/data'
export default class App extends Component {
    
    static navigationOptions = {  
        title: '社區', 
        tabBarIcon: ({tintColor,focused}) => <Image source={focused ? require('../assets/shequ.png') : require('../assets/shequ.png')} style={{height: 20, width: 20}}/> 
    }; 
    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }
    } 
    _loadData() {
        this.setState({
            list: data.fetch('SheQu')
        })
    }
    componentDidMount() {  
        this._loadData()
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
            <Freedomen.Region 
                style={{height: 56}}
                columns={[ 
                    {type: 'text', value: '廣場', style: {fontSize: 22, color: 'white', flex: 1}}, 
                    {type:　'br', style: {flexDirection: 'row', height: 56, backgroundColor: '#57a6ef', alignItems: 'center', paddingLR: 24}}
                ]} 
            />
            <Freedomen.FreshList  
                data={this.state.list}
                event={params => {
                    if (['$page', '$fresh'].includes(params.prop))
                        this._loadData()
                }}
                columns={[
                    [
                        {type: 'image', prop: 'header', value: require('../assets/unmine.png'), style: {width: 44, height: 44, borderRadius: 44}},
                        [
                            {type: 'text', prop: 'name', value: '小心心', style: {color: '#222'}},
                            {type: 'text', prop: 'date', value: new Date(), filter: 'yyyy-MM-dd'},
                            {type: 'br', style: {marginLeft: 5}}
                        ],
                        {type: 'br', style: {flexDirection: 'row', paddingTB: 5, alignItems: 'center'}}
                    ],
                    {type: 'text', prop: 'message', value: '今天的新球是好的', style: {color: '#333', padding: 5}},
                    {type: 'images', prop: 'images', value: [require('../assets/t4.png'),require('../assets/t4.png'),require('../assets/t4.png')], style: {width: 110, height: 160, margin: 2}},
                    {type: 'br', style: {backgroundColor: 'white', borderRadius: 5, padding: 10, borderRadius: 5, marginTop: 1}}
                ]}
            />
            <Freedomen.Region 
                style={{
                    position: 'absolute',
                    bottom: 42,
                    right: 18
                }}
                columns={[
                    {type: 'button-image', value: require('../assets/shequ.png'), style: {width: 56, height: 56}}
                ]}
            />
            </View>
        );
    }
}
 