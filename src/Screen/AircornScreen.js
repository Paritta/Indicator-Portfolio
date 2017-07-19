import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

export default class AircornScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'First' },
      { key: '2', title: 'Second' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <StyledView style={[ styles.page, { backgroundColor: 'white' } ]} >
                <StyledText>This is Timer</StyledText>
              </StyledView>
        ;
    case '2':
      return <View style={[ styles.page, { backgroundColor: '#673ab7' } ]} />;
    default:
      return null;
    }
  };
  render() {
    return (
      <StyledView>
        <TabViewAnimated
          style={styles.container}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderHeader={this._renderHeader}
          onRequestChangeTab={this._handleChangeTab}
        />
      </StyledView>

    );
  }
}

const StyledView = styled.View`
  flex: 1;
`

const StyledText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: black;
`
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});