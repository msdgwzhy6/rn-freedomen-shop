
import React, {Component} from 'react';
import {View} from 'react-native';
import Freedomen from 'react-native-freedomen'

export default class App extends Component {
    static navigationOptions = {  
        title: '登录'
    }; 
  constructor(props) {
      super(props)
      this.state = {}
  }
  render() {
    return (
        <Freedomen.Region 
            style={{flex: 1, backgroundColor: 'white', padding: 10}}
            data={this.state.data}
            event={params => {
                if('login' == params.prop) { 
                    Freedomen.redux({user: params.row})
                    this.props.navigation.goBack()
                }
            }}
            columns={[
                [
                    {type: 'image', value: require('../assets/logo.png'), style: {width: 220, height: 80, resizeMode: 'stretch'}},
                    {type: 'text', value: 'SHOP DEMO', style: {fontSize: 22, color: 'black'}},
                    {type: 'br', style: {alignItems: 'center', marginBottom: 60}}
                ], [
                    {type: 'image', value:  require('../assets/username.png'), style: {height: 22, width: 22} },
                    {type: 'input', prop: 'userName', placeholder: '请输入用户名'},
                    {type: 'br', style: {flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#ccc', alignItems: 'center'}}
                ], [
                    {type: 'image', value:  require('../assets/password.png'), style: {height: 22, width: 22} },
                    {type: 'input-password', prop: 'userPassword', placeholder: '请输入密碼'},
                    {type: 'br', style: {flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#ccc', alignItems: 'center',marginTB: 20}}
                ],
                {type: 'button-primary', value:'登录', prop:'login', disabled: (value, data) => (!data.userName || !data.userPassword), style: {marginTop: 10}}
            ]}
        /> 
    );
  }
}
 