
import React, {Component} from 'react';
import Freedomen from 'react-native-freedomen'
import {View, ScrollView, Text} from 'react-native'
import data from '../global/data'
export default class App extends Component {
    
    static navigationOptions = {  
        title: '商城', 
        tabBarIcon: ({tintColor,focused}) => <Image source={focused ? require('../assets/mart.png') : require('../assets/unmart.png')} style={{height: 20, width: 20}}/> 
    }; 
    constructor(props) {
        super(props)
        this.state = {
          list:[], 
        }
    } 
    _loadData() {
      this.setState({
        list: data.fetch('ShanChen')
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
                  [
                    {type: 'image', value: require('../assets/search.png'), style: {width: 18, height: 18, resizeMode: 'stretch'}},
                    {type: 'text', value: '搜索商品', style: {marginLeft: 4, color: '#ccc'}},
                    {type: 'click', style: {width: '96', height: 30, borderRadius: 15, backgroundColor: 'white', flexDirection: 'row', align: 'center'}}
                  ],
                  {type: 'br', style: {backgroundColor: '#57a6ef', height: 56, align: 'center'}}
                ]} 
            />
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 65}}> 
                </View>
                <View style={{flex: 1}}>
                  <Freedomen.FreshList 
                    event={params => {
                        if (['$page', '$fresh'].includes(params.prop))
                            this._loadData()
                    }}
                    style={{justifyContent: 'space-between'}}
                    columns={[
                      {type: 'image', prop: 'product', value: require('../assets/t1.png'), style: {height: 180, width: 128, resizeMode: 'stretch'}},
                      {type: 'text', prop: 'price', style: {fontSize: 14, color: 'red'}, filter: value => `￥${value}`},
                      {type: 'text', prop: 'productName', style: {fontSize: 16, color: '#222'}},
                      {type: 'click', prop: 'click', opacity: 1, style: {width: '42', backgroundColor: 'white', margin: 2, align: 'center', borderRadius: 8, padding: 8}}
                    ]}
                    data={this.state.list}
                  />
                </View>
            </View>
          </View>
        );
    }
}
 