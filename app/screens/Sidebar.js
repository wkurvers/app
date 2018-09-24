import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import {
    COLOR,
    ThemeContext,
    getTheme,
    Toolbar,
    Card,
    Button,
    Drawer,
    Avatar,
} from 'react-native-material-ui';

class DrawerContent extends Component {

  navigateToScreen = (route) => () => {
      const navigate = NavigationActions.navigate({
        routeName: route
      });
      this.props.navigation.dispatch(navigate);
    }

  render () {
		const { navigate } = this.props.navigation;
      return (
        <View style={{flex: 1 ,paddingTop: 30, backgroundColor: '#4CAF50'}}>

        <Drawer>
          <Drawer.Header>
              <Drawer.Header.Account
                  avatar={<Avatar text="GR" />}
                  style={{container:{backgroundColor: '#4CAF50'}}}
                  footer={{
                      dense: false,
                      centerElement: {
                          primaryText: 'Gaauwe Rombouts',
                          secondaryText: 'mail@grombouts.nl',
                      },
                  }}
              />
          </Drawer.Header>
          <Drawer.Section
              divider
              items={[
                  { icon: 'bookmark-border', value: 'Feed', active: true },
                  { icon: 'today', value: 'Events', onPress: () => navigate('LoginScreen') },
                  { icon: 'assignment', value: 'Points' },
              ]}
          />
          <Drawer.Section
              title="Personal"
              items={[
                  {
                    icon: 'info',
                    value: 'Info',
                  },
                  {
                    icon: 'power-settings-new',
                    value: 'Settings',
                    onPress: () => this.props.navigation.navigate('Registration'),
                  },
                  {
                    icon: 'assignment',
                    value: 'Stempelkaart',
                    onPress: () => this.props.navigation.navigate('PointCard'),
                  }
              ]}
          />
        </Drawer></View>
      );
    }
}

const styles = StyleSheet.create({

  drawerPadding: {
    paddingTop: 100,
  },

});

export default DrawerContent;
