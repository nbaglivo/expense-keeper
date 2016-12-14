import React from 'react';
import { StackNavigation, TabNavigation, TabNavigationItem } from '@exponent/ex-navigation';
import { Foundation, FontAwesome } from '@exponent/vector-icons';
import Colors from '../constants/Colors';
import Router from '../navigation/Router';

class RootNavigation extends React.Component {
  renderFoundationIcon(name, isSelected) {
    return (
      <Foundation
        name={name}
        size={28}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }

  renderFontAwesomeIcon(name, isSelected) {
    return (
      <FontAwesome
        name={name}
        size={26}
        color={isSelected ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }

  render() {
    return (
      <TabNavigation
        id="tab-navigation"
        navigatorUID="tab-navigation"
        tabBarColor={Colors.rmotrB}
        tabBarHeight={42}
        initialTab="main"
      >
        <TabNavigationItem
          id="main"
          renderIcon={isSelected => this.renderFoundationIcon('home', isSelected)}
        >
          <StackNavigation initialRoute={Router.getRoute('main')} />
        </TabNavigationItem>
      </TabNavigation>
    );
  }
}

export default RootNavigation;
