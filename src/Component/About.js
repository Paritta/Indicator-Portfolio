import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default class About extends Component {
 
  render() {
    return (
      <ContainerView>
        <CounterText>
            개발자: 임성훈<br/>
        </CounterText>
      </ContainerView>
    );
  }
}

const ContainerView = styled.View`
    align-items: center;
    justify-content: center;
`;

const CounterText = styled.Text`
`
