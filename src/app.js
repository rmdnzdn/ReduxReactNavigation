import React, { Component } from 'react';
import { 
    View, 
    Text,
    ScrollView
 } from 'react-native';

 import SideMenu from 'react-native-side-menu';

import List from './components/List';
import Slider from './components/Slider';
import Header from './components/Header';
import Menu from './components/Menu';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        };
    }

    toggle(){
        this.setState({
            isOpen:!this.state.isOpen
        });       
    }

    updateMenu(isOpen){
        this.setState({isOpen})
    }

  render() {
    return (
      <View style={{flex:1, backgroundColor: 'black'}}>
        <SideMenu
            menu={<Menu/>}
            isOpen={this.state.isOpen}
            onChange={(isOpen)=>this.updateMenu(isOpen)}
        >
            <Header 
                navigation={this.props.navigation}
                toggle={this.toggle.bind(this)}/>
            <ScrollView style={{flex:1}}>
                <View>
                    <Slider/>
                    <List navigation={this.props.navigation}/>
                </View>
            </ScrollView>
        </SideMenu>
      </View>
    );
  }
}

export default App;
