import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class About extends Component {
 
  constructor(props) {
     super(props);
     this.state = {
     activeTab: 0       
     };
  }

  render({ children } = this.props) {
    return (
        <View style={ styles.container }>
            <View style={ styles.tabsContainer }>
                {children.map(({ props: { title } }, index) =>
                    <TouchableOpacity
                        style={[
                            styles.tabContainer,
                            index === this.state.activeTab ? styles.tabContainerActive : []
                        ]}
                        onPress = {() => this.setState({ activeTab: index }) }
                        key = { index }
                    >
                        <Text style={ styles.tabText }> {title} </Text>

                    </TouchableOpacity>
                )}
            </View>
            <View style={ styles.contentContainer }>
                {children[this.state.activeTab]}
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  // Component container
  container: {
    flex: 1,                            // Take up all available space
  },
  // Tabs row container
  tabsContainer: {
    flexDirection: 'row',               // Arrange tabs in a row
    paddingTop: 5,                     // Top padding
  },
  // Individual tab container
  tabContainer: {
    flex: 1,                            // Take up equal amount of space for each tab
    paddingVertical: 15,                // Vertical padding
    borderBottomWidth: 3,               // Add thick border at the bottom
    borderBottomColor: 'transparent',   // Transparent border for inactive tabs
  },
  // Active tab container
  tabContainerActive: {
    borderBottomColor: '#FFFFFF',       // White bottom border for active tabs
  },
  // Tab text
  tabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Content container
  contentContainer: {
    flex: 1                             // Take up all available space
  }
});