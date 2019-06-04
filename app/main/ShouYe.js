
import React, {Component} from 'react';
import Freedomen from 'react-native-freedomen'
import {View, Dimensions,ScrollView} from 'react-native'
import data from '../global/data.js'
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            main: {}
        }
    } 
    componentDidMount() { 
        let main = data.fetch('ShouYe') 
        main.time = 1000
        this.setState({main: main})

        var timer = setInterval(() => {
            let main = this.state.main
            main.time --
            if (main.time > 0) 
                this.setState({
                    main: main
                })
            else clearInterval(timer)
        }, 1000)
    }
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
                <Freedomen.Region 
                    style={{height: 56}}
                    columns={[
                        [
                            {type: 'button-image', value: require('../assets/homescan.png'), style: {width: 28, height: 28}},
                            {type: 'button-text', value: '點擊搜索', style: {backgroundColor: 'white', height: 30, width: Dimensions.get('screen').width - 106, align: 'center', marginLR: 10, borderRadius: 15, color: '#ccc'}},
                            {type: 'button-image', value: require('../assets/message.png'), style: {width: 28, height: 28, resizeMode: 'stretch'}},
                            {type: 'br', style: {flexDirection: 'row', backgroundColor: '#57a6ef', height: 56, paddingLR: 15, alignItems: 'center'}}
                        ]
                    ]} 
                />
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <Freedomen.Region 
                        data={this.state.main}
                        event={params => {
                            alert(JSON.stringify(params))
                        }}
                        columns={[
                            {type: 'image', prop: 'swiper', value: require('../assets/tp.png'), style: {width: '100', height: 160}},
                            {type: 'view-x', prop: 'kinds', style: {justifyContent: 'space-between', backgroundColor: 'white'}, columns: [
                                {type: 'image', prop: 'kindIcon', value: require('../assets/t1.png'), style: {width: 38, height: 38}},
                                {type: 'text', prop: 'kindName', value: '分類一', style: {color: '#232323'}},
                                {type: 'click', style: {flex: 1, align: 'center', padding: 15}}
                            ]},[
                                {type: 'image',value: require('../assets/rm.png'), style: {width: 48, height: 48, resizeMode: 'stretch'}},
                                [
                                    {type: 'text', value: '今日熱門', style: {fontSize: 16, color: '#222', marginBottom: 5}},
                                    {type: 'text', value: '借錢寶寶又升級啦'},
                                    {type: 'br', style: {flex: 1, paddingLeft: 10}}
                                ],
                                {type: 'image', value: require('../assets/right.png'), style: {width: 28, height: 28}},
                                {type: 'click', style: {alignItems: 'center', padding: 10, flexDirection: 'row', backgroundColor: 'white', marginTop: 1}}
                            ],[
                                [
                                    {type: 'text', value: '限時秒殺', style: {fontSize: 18, color: '#222', padding: 10}},
                                    {type: 'image', value: require('../assets/xiaozhon.png'), style: {width: 16, height: 16}},
                                    {type: 'text', prop: 'time', filter: value => `倒計時：${value}`, style: {color: 'black'}},
                                    {type: 'br', style: {flexDirection: 'row', alignItems: 'center'}}
                                ],
                                {type: 'view-x', prop: 'xsms', style: {justifyContent: 'space-between', padding: 5}, columns: [
                                    {type: 'image', prop: 'product', style: {width: 68, height: 98}},
                                    {type: 'text', prop: 'productName', value: '好吃的', style: {color: '#333'}},
                                    {type: 'click', style: {align: 'center', flex: 1}}
                                ]},
                                {type: 'br', style: {backgroundColor: 'white', marginTop: 1}}
                            ],[
                                {type: 'text', value: '今日精選', style: {fontSize: 18, color: '#222', padding: 10}},
                                {type: 'view-x', prop: 'jrjx', value: [{},{},{},{}], style: {justifyContent: 'space-between', padding: 5}, columns: [
                                    {type: 'image', prop: 'product', style: {width: 68, height: 98}},
                                    {type: 'text', prop: 'productName', value: '好吃的', style: {color: '#333'}},
                                    {type: 'click', style: {align: 'center', flex: 1}}
                                ]},
                                {type: 'br', style: {backgroundColor: 'white', marginTop: 10}}
                            ],[
                                {type: 'text', value: '走心推薦', style: {fontSize: 18, color: '#222', padding: 10}},
                                {type: 'scroll-x', prop: 'zxtj', value: [{}, {},{}],style: {backgroundColor: '#fdfdfd', height: 140}, columns: [
                                    {type: 'image', prop: 'product', style: {width: 68, height: 98}},
                                    {type: 'text', prop: 'productName', value: '好吃的', style: {color: '#333'}},
                                    {type: 'click', style: {align: 'center', flex: 1, margin: 5}}
                                ]},
                                {type: 'br', style: {backgroundColor: 'white', marginTop: 1}} 
                            ],[
                                [
                                    {type: 'text', value: 'TOP頭條',style: {fontSize: 18, color: '#222', paddingRight: 10}},
                                    {type: 'image', value: require('../assets/hot.png'), style: {width: 16, height: 16, resizeMode: 'stretch'}},
                                    {type: 'text', style: {flex: 1}},
                                    {type: 'button-text', prop: 'more', value: '更多'},
                                    {type: 'image', value: require('../assets/right.png'), style: {width: 14, height: 14, resizeMode: 'stretch'}},
                                    {type: 'br', style: {flexDirection: 'row', alignItems: 'center', paddingBottom: 10}}
                                ],
                                {type: 'text', value: '今天又有人做出了實際的行動',style: {fontSize: 16, color: '#333'}},
                                [
                                    {type: 'text', value: "講真的不是所有的牛奶都叫特侖蘇,講真的不是所有的牛奶都叫特侖蘇,講真的不是所有的牛奶都叫特侖蘇", style: {flex: 1, lineHeight: 20}},
                                    {type: 'image', value: require('../assets/tp.png'), style: {width: 88, height: 68, resizeMode: 'stretch'}},
                                    {type: 'br', style: {flexDirection: 'row'}}
                                ],
                                {type: 'br', style: {backgroundColor: 'white', marginTop: 1, padding: 10}}
                            ],
                            {type: 'text', value:'----留個底綫，日後好相見-----', style: {paddingTB: 10, alignItems: 'center'}}
                        ]}
                    />
                </ScrollView>
            </View>
        );
    }
}
 