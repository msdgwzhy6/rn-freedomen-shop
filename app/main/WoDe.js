
import React, {Component} from 'react';
import Freedomen from 'react-native-freedomen'
import {Text, Image} from 'react-native'
const JianTou = require('../assets/right.png')
export default class App extends Component {
    
    static navigationOptions = {  
        title: '我的', 
        tabBarIcon: ({tintColor,focused}) => <Image source={focused ? require('../assets/mine.png') : require('../assets/unmine.png')} style={{height: 20, width: 20}}/> 
    }; 
    constructor(props) {
        super(props)
        this.state = { }
        this.fns = [
            {image: require('../assets/zl.png'), text: '待支付'},
            {image: require('../assets/dfh.png'), text: '代發貨'},
            {image: require('../assets/dfh.png'), text: '待付款'},
            {image: require('../assets/dsh.png'), text: '待收貨'},
            {image: require('../assets/th.png'), text: '退貨'},
        ]
    } 
    componentDidMount() { 
      Freedomen.redux({
        bar_gouwuche: {count: 2},
        
      })
    }
    render() {
        return (
          <Freedomen.Region 
            style={{flex: 1, backgroundColor: '#f5f5f5'}}
            event={params => { 
                if (params.prop == 'exit')
                    this.props.navigation.navigate('login')
            }}
            redux={'user'}
            columns={[
                        [
                            {type: 'text', value: '个人中心', style: {fontSize: 22, color: 'white', flex: 1}}, 
                            {type:　'br', style: {flexDirection: 'row', height: 56, backgroundColor: '#57a6ef', alignItems: 'center', paddingLR: 24}}
                        ],
                        [
                            {type: 'image', prop:'userIconUrl', value: require('../assets/dh.png'), style: {width: 62, height: 62, borderRadius: 62}},
                            [
                                {type: 'text', prop: 'userName', value: 'Hunter.xu', style: {color: '#252525', fontSize: 18}},
                                {type: 'text', prop: 'workName', value: '后来', style: {color: '#787878'}},
                                {type: 'br', style: {marginLeft: 12, flex: 1}}
                            ],
                            // {type: 'image', value: icon, style: {height: 12, width: 8}},
                            {type: 'click', prop: 'ccc', style: {flexDirection: 'row', height: 91, backgroundColor: 'white', alignItems: 'center', paddingLR: 19, paddingTB: 15, backgroundColor: 'white'}}
                        ], {type: 'view-x', value: this.fns, style: {justifyContent: 'space-between', backgroundColor: 'white', height: 68, marginTop: 1}, columns: [
                            {type: 'image', prop: 'image', style: {width: 38, height: 38, resizeMode: 'stretch'}},
                            {type: 'text', prop: 'text', value: '代發貨', style: {color: '#222'}},
                            {type: 'click', style: {flex: 1, align: 'center', padding: 15}}
                        ]}, [
                            {type: 'image', value: require('../assets/tonxunlu.png'), style: {width: 19, height: 19}},
                            {type: 'text', value: '我的收藏', style: {flex: 1, fontSize: 15, color: '#252525', marginLeft: 12}},
                            {type: 'image', value: JianTou, style: {height: 12, width: 8}},
                            {type:　'click', prop: 'tonxunlu', style:　{backgroundColor: 'white', flexDirection: 'row', paddingLR: 19, paddingTB: 14, alignItems: 'center', marginTop: 10, marginBottom: 1}}
                        ], [
                            {type: 'image', value: require('../assets/xuigaimima.png'), style: {width: 19, height: 19}},
                            {type: 'text', value: '密码修改', style: {flex: 1, fontSize: 15, color: '#252525', marginLeft: 12}},
                            {type: 'image', value: JianTou, style: {height: 12, width: 8}},
                            {type:　'click', prop: 'xiugaimima', style:　{backgroundColor: 'white', flexDirection: 'row', paddingLR: 19, paddingTB: 14, alignItems: 'center',marginBottom: 1}}
                        ], [
                            {type: 'image', value: require('../assets/qinchuhuancun.png'), style: {width: 19, height: 19}},
                            {type: 'text', value: '清理缓存', style: {flex: 1, fontSize: 15, color: '#252525', marginLeft: 12}},
                            {type: 'image', value: JianTou, style: {height: 12, width: 8}},
                            {type:　'click', prop: 'clear', style:　{backgroundColor: 'white', flexDirection: 'row', paddingLR: 19, paddingTB: 14, alignItems: 'center', marginBottom: 10}}
                        ], [
                            {type: 'image', value: require('../assets/yijianfankui.png'), style: {width: 19, height: 19}},
                            {type: 'text', value: '意见反馈', style: {flex: 1, fontSize: 15, color: '#252525', marginLeft: 12}},
                            {type: 'image', value: JianTou, style: {height: 12, width: 8}},
                            {type:　'click', prop: 'yijianfankui', style:　{backgroundColor: 'white', flexDirection: 'row', paddingLR: 19, paddingTB: 14, alignItems: 'center', marginBottom: 1}}
                        ], [
                            {type: 'image', value: require('../assets/guanyuwomen.png'), style: {width: 19, height: 19}},
                            {type: 'text', value: '关于我们', style: {flex: 1, fontSize: 15, color: '#252525', marginLeft: 12}},
                            {type: 'image', value: JianTou, style: {height: 12, width: 8}},
                            {type:　'click', prop: 'guanyuwomen', style:　{backgroundColor: 'white', flexDirection: 'row', paddingLR: 19, paddingTB: 14, alignItems: 'center', marginBottom: 1}}
                        ], [
                            {type: 'image', value: require('../assets/fenxianlianjie.png'), style: {width: 19, height: 19}},
                            {type: 'text', value: '分享链接', style: {flex: 1, fontSize: 15, color: '#252525', marginLeft: 12}},
                            {type: 'image', value: JianTou, style: {height: 12, width: 8}},
                            {type:　'click', style:　{backgroundColor: 'white', flexDirection: 'row', paddingLR: 19, paddingTB: 14, alignItems: 'center', marginBottom: 1}}
                        ], [
                            {type: 'image', value: require('../assets/lianxiwomen.png'), style: {width: 19, height: 19}},
                            {type: 'text', value: '联系我们', style: {flex: 1, fontSize: 15, color: '#252525', marginLeft: 12}},
                            {type: 'image', value: JianTou, style: {height: 12, width: 8}},
                            {type:　'click', style:　{backgroundColor: 'white', flexDirection: 'row', paddingLR: 19, paddingTB: 14, alignItems: 'center', marginBottom: 10}}
                        ], 
                        {type: 'button-text', value: '退出登录', prop: 'exit', style: {fontSize: 15, color: 'red', width: '100',backgroundColor: 'white',paddingTB: 14, align: 'center'}}  
                    ]}
          />
        );
    }
}
 