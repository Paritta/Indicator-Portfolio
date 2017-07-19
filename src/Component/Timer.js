import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements'
import Indicator from './Indicator'

export default class Timer extends Component {
 
    constructor( props ) {
        super( props );

        this.state = {
            timer: null,
            counter: '00',
            miliseconds: '00',
            startDisabled: true,
            stopDisabled: false,
        }

        this.onButtonStart = this.onButtonStart.bind(this);
        this.onButtonStop = this.onButtonStop.bind(this);
        this.onButtonClear = this.onButtonClear.bind(this);
        this.start = this.start.bind(this);
    }
      componentDidMount() {
        this.start();  
      }
      
      componentWillMount() {
        clearInterval(this.state.timer);
      }

      start() {
        var self = this;
        let timer = setInterval(()=> {
          var num = (Number(this.state.miliseconds) + 1).toString(),
              count = this.state.counter;

          if( Number(this.state.miliseconds) == 59 ) {
              count = (Number(this.state.counter) + 1).toString();
              num = '00';
          }
          
          self.setState({
              counter: count.length == 1 ? '0'+count : count,
              miliseconds: num.length == 1 ? '0'+num : num
          });
        }, 1000);
        this.setState({timer});
      }

      onButtonStart() {
          this.start();
          this.setState({startDisabled: true, stopDisabled: false});
      }

      onButtonStop() {
          clearInterval(this.state.timer);
          this.setState({startDisabled: false, stopDisabled: true});
      }

      onButtonClear() {
          this.setState({
            timer: null,
            counter: '00',
            miliseconds: '00'
          });
      }
      
  render() {
    return (
      <ContainerView>
        <Indicator/>
        <CounterText>{this.state.counter} : {this.state.miliseconds}</CounterText>
            <Button
            disabled={this.state.startDisabled}
            onPress={this.onButtonStart}
            title="Start"
            buttonStyle={styles.someButtonStyle}
            icon={{name: 'grain'}}
            />
            <Button
            disabled={this.state.stopDisabled}
            onPress={this.onButtonStop}
            title="Stop"
            buttonStyle={styles.someButtonStyle}
            icon={{name: 'grain'}}
            />
            <Button
            disabled={this.state.startDisabled}
            onPress={this.onButtonClear}
            title="Clear"
            buttonStyle={styles.someButtonStyle}
            icon={{name: 'grain'}}
            />
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
`;

const CounterText = styled.Text`
    color: white;
    font-size: 30;
    text-align: center;
    height: 60;
    margin: 10px;
`

var styles = StyleSheet.create({
  someButtonStyle: {
    padding: 20,
    height:20,
    width: 350,
    backgroundColor: 'mediumspringgreen',
    marginTop:5
  },
});