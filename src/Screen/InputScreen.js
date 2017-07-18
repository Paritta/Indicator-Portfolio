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
            {key: 'Aircorn01'},
            {key: 'Aircorn02'},
            {key: 'Aircorn03'},
            {key: 'Aircorn04'},
            {key: 'Aircorn05'},
            {key: 'Aircorn06'},
            {key: 'Aircorn07'},
          ]}
          renderItem={({item}) => 
            <StyledText
              onPress={()=>Actions.aircornscreen()}>
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
  background-color: white;
  align-items: center;
  justify-content: center;
`

const StyledText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: red;
`

const StyledFlatList = styled.FlatList`
`