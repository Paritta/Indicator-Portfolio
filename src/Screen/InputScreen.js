import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'

export default class InputScreen extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledFlatList
          data={[
            {key: '세탁기'},
            {key: '에어콘'},
            {key: '식기세척기'},
            {key: '밥솥'},
            {key: '진공청소기'},
          ]}
          renderItem={({item}) => 
            <StyledText
              onPress={()=>Actions.aircornscreen({text: item.key})}>
              {item.key}
            </StyledText>}
          />
        {/* <StyledText
          onPress={() => Actions.homescreen()}
          >
          InputScreen
        </StyledText> */}
      </StyledView>
    );
  }
}

const StyledView = styled.View`
  flex: 1;
  background-color: deepskyblue;
  opacity: 0.6;
`

const StyledText = styled.Text`
  font-size: 20px;
  text-align: left;
  padding: 10px;
  margin-left: 10;
  height: 44;
  color: white;
`

const StyledFlatList = styled.FlatList`
`