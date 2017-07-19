import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default class Indicator extends Component {
 
  render() {
    return (
      <ContainerView>
        <CounterText>Indicator</CounterText>
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
    width: 280;
    height: 280;
    border: 5px solid white; 
    border-radius: 140;
    align-items: center;
    justify-content: center;
    margin-bottom:10;
`;

const CounterText = styled.Text`
`
