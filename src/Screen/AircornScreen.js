import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Actions } from 'react-native-router-flux'
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Timer from '../Component/Timer'

export default class AircornScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Timer' },
      { key: '2', title: 'About' },
    ],
  };

  _handleChangeTab = index => this.setState({ index });
  _renderHeader = props => <TabBar {...props} />;

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <StyledView style={[ styles.page, { backgroundColor: 'deepskyblue' } ]} >
                <Timer value={this.props.value}/>
             </StyledView>
    case '2':
      return <StyledView style={[ styles.page, { backgroundColor: 'deepskyblue' } ]}>
                <AboutTitleText>About</AboutTitleText>
                <StyledAboutView>
                    <AboutText>세탁기 / 1시간 사용시의 CO2 배출량: 14g / 기준 /1초당 0.003</AboutText>
                    <AboutText>에어콘 / 1시간 사용시의 CO2 배출량: 44g / 기준 0.012</AboutText>
                    <AboutText>식기세척기 / 1시간 사용시의 CO2 배출량: 226g / 기준 /1초당 0.073</AboutText>
                    <AboutText>밥솥 / 1시간 사용시의 CO2 배출량: 31g / 기준 /1초당 0.008</AboutText>
                    <AboutText>진공 청소기 / 1시간 사용시의 CO2 배출량: 51g / 기준 /1초당 0.141</AboutText>
                    <AboutText>1초당 Co2 배출량은 소수 넷째 자리에서 내림</AboutText>
                    <AboutText>프라임 경제 ***세계 최초로 가전제품에 Co2 배출량 표시*** 기사 참고</AboutText>
                </StyledAboutView>
             </StyledView>;
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

const StyledAboutView = styled.View`
  flex: 1;
  margin-top: 40;
  padding-left: 20;
  padding-right: 20;
`

const StyledText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: lightpink;
`
const AboutTitleText = styled.Text`
  font-size: 30px;
  margin-top: 15; 
  color: white;
`

const AboutText = styled.Text`
  font-size: 13px;
  text-align: left;
  color: white;
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