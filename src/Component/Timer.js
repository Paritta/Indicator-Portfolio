import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements'

export default class App extends Component {
 
    constructor( props ) {
        super( props );

        this.state = {
            timer: null,
            counter: '00',
            miliseconds: '00',
            startDisabled: true,
            stopDisabled: false,
            text: '1'
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
        //   console.log('Call onButtonStart!!!');
          this.setState({text: 'Call onButtonStart!!!'});
          this.start();
          this.setState({startDisabled: true, stopDisabled: false});
      }

      onButtonStop() {
        //   console.log('Call onButtonStop!!!');
          this.setState({text: 'Call onButtonStop!!!'});
          clearInterval(this.state.timer);
          this.setState({startDisabled: false, stopDisabled: true});
      }

      onButtonClear() {
        //   console.log('Call onButtonClear!!!');
          this.setState({text: 'Call onButtonClear!!!'});
          this.setState({
            timer: null,
            counter: '00',
            miliseconds: '00'
          });
      }
      
  render() {
    return (
      <ContainerView>
        <CounterText>{this.state.text}</CounterText>
        <CounterText>{this.state.counter} : {this.state.miliseconds}</CounterText>
        <ButtonView>
          <Button
            disabled={this.state.startDisabled}
            onPress={this.onButtonStart}
            title="Start"
            color="greenyellow"
            accessibilityLabel="Start"
          />
          <Button
            disabled={this.state.stopDisabled}
            onPress={this.onButtonStop}
            title="Stop"
            color="hotpink"
          />
          <Button
            disabled={this.state.startDisabled}
            onPress={this.onButtonClear}
            title="Clear"
            color="lavender"
          />
        </ButtonView>
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const CounterText = styled.Text`
    font-size: 50;
    text-align: center;
    height: 60;
    margin: 10px;
`