
import React, {Component} from 'react';
import Freedomen from 'react-native-freedomen'
import {Text, Image} from 'react-native'
export default class App extends Component {
    
     
    constructor(props) {
        super(props)
        this.state = {
        }
    } 
    componentDidMount() { 
    }
    render() {
        return (
          <Freedomen.Region 
          style={{flex: 1, backgroundColor: '#f5f5f5'}}
          columns={[
                      [
                          {type: 'text', value: '購物車', style: {fontSize: 22, color: 'white', flex: 1}}, 
                          {type:　'br', style: {flexDirection: 'row', height: 56, backgroundColor: '#57a6ef', alignItems: 'center', paddingLR: 24}}
                      ],
          ]}
        />
        );
    }
}
 