import { Text, View, StyleSheet, ScrollView, ToastAndroid, RefreshControl, Platform } from 'react-native';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ListItem, Toolbar, COLOR, Button, ActionButton } from 'react-native-material-ui';
import { expensesActions, authActions } from '../state/actions';

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});

const propTypes = {
  navigator: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

const SignOutButton = connect(
  null,
  { logout: authActions.logout }
)(({logout}) => (
  <Button raised primary text="Sign Out" onPress={logout}/>
));

/*<Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigator.pop()}
                    centerElement={this.props.route.title}
                />*/
import { AsyncStorage, Alert } from 'react-native';

const ExpensesScreen = ({expenses, isFetching, fetch}) => (
    <View style={styles.container}>
        <ScrollView style={styles.container}
          refreshControl={
            <RefreshControl
              title="Loading..."
              titleColor="#999"
              style={{ backgroundColor: 'transparent' }}
              refreshing={isFetching}
              onRefresh={fetch}
            />
          }
        >
          {expenses.map((expense, id) =>
            <ListItem
                divider
                key={id}
                centerElement={{
                    primaryText: <Text>{expense.amount}</Text>,
                    secondaryText: <Text>{expense.tag}</Text>,
                }}
            />
          )}
        </ScrollView>
         <ActionButton icon="done" />
    </View>
);

ExpensesScreen.propTypes = propTypes;

ExpensesScreen.route = {
  navigationBar: {
    visible: true,
    title: 'Expenses',
    renderRight: (route, props) => <SignOutButton />,
    backgroundColor: COLOR.blueGrey700,
    tintColor: '#FFF'
  }
};

const mapStateToProps = state => ({
  expenses: state.expenses.all, isFetching: state.expenses.isFetching
});

export default connect(mapStateToProps, { fetch: expensesActions.fetch })(ExpensesScreen);
