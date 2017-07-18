import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'

export default class AircornScreen extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText
          onPress={() => Actions.home()}
          >
          AircornScreen
          {this.props.text}
        </StyledText>
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  flex: 1;
  background-color: deeppink;
  opacity: 0.6;
  align-items: center;
  justify-content: center;
`

const StyledText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: white;
`