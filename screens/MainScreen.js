import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';
import TextField from 'react-native-md-textinput';
import { COLOR, Button } from 'react-native-material-ui';
import { authActions, expensesActions } from '../state/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE'
  },
  labelContainer: {
    flexDirection: 'row',
    marginVertical: 2,
    flex: 1,
  },
  label: {
    width: 115,
    alignItems: 'flex-end',
    marginRight: 10,
    paddingTop: 2,
  },
  default: {
    height: 26,
    borderWidth: 0.5,
    borderColor: '#0f0f0f',
    flex: 1,
    fontSize: 13,
    padding: 4,
  },
});

const MainScreen = ({publish}) => {
  let amount;
  let tag;
  return (
    <View style={{padding:20}}>
      <TextField onChange={(event) => amount = event.nativeEvent.text} label={'Amount'} keyboardType={'numeric'} highlightColor={'#00BCD4'} />
      <TextField onChange={(event) => tag = event.nativeEvent.text} label={'Tag'} highlightColor={'#00BCD4'} />

      <Button raised primary text="Add" onPress={() => publish({amount, tag})}/>
    </View>
  )
};

MainScreen.route = {
  navigationBar: {
    visible: true,
    title: 'Keep',
    backgroundColor: COLOR.blueGrey700,
    tintColor: '#FFF'
  }
};

export default connect(
  null,
  { publish: expensesActions.publish }
)(MainScreen);
