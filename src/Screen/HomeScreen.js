import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements'
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledImage
          source={require('../img/KakaoTalk_20160926_021936181.jpg')}
          >
          <StyledText>
            Co2, Timer
          </StyledText>
          <Button
            large
            title='시작하기' 
            icon={{name: 'grain'}}
            buttonStyle={styles.someButtonStyle}
            onPress={() => Actions.inputscreen()}
            />
        </StyledImage>
      </StyledView>
    );
  }
}

const StyledImage = styled.Image`
  flex: 1;
  background-color:transparent;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
`

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const StyledText = styled.Text`
  font-size: 30px;
  text-align: center;
  color: white;
`

var styles = StyleSheet.create({
  someButtonStyle: {
    padding: 20,
    height:20,
    width: 250,
    backgroundColor: 'mediumspringgreen',
    marginTop:80
  },
});