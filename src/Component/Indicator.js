import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default class Indicator extends Component {
 
  render() {
    return (
      <ContainerView>
        <CounterText>{Number(this.props.Indicator * 0.012).toFixed(2)}</CounterText>
        <Text style = {{color: 'white'}}>(단위: g)</Text>
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
    width: 240;
    height: 240;
    border: 8px solid white; 
    border-radius: 120;
    align-items: center;
    justify-content: center;
    margin-bottom:10;
`;

const CounterText = styled.Text`
    color: white;
    font-size: 35;
`
