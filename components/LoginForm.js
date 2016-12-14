import React, { PropTypes } from 'react';
import { View, Text, TextInput,
         TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Components } from 'exponent';
import Colors from '../constants/Colors';
import { authActions } from '../state/actions';
import { COLOR } from 'react-native-material-ui';

const LoginForm = ({loginGoogle}) => (
  <Components.LinearGradient
    colors={[COLOR.blueGrey400, COLOR.blueGrey700]}
    style={styles.container}
  >
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        Keep
      </Text>
    </View>

    <View style={styles.mainButtonsContainer}>
      <TouchableOpacity onPress={loginGoogle}>
        <View
          style={styles.mainButton}
        >
          <Text style={styles.mainButtonText}>
            Log In with Google
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </Components.LinearGradient>
);

LoginForm.propTypes = {
  loginGoogle: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },

  titleContainer: {
    alignItems: 'center',
    margin: 40
  },

  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 54,
    alignItems: 'center',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 8
  },

  inputsContainer: {
    alignItems: 'center',
    marginTop: 20
  },

  textInput: {
    backgroundColor: Colors.rmotrB300,
    height: 40,
    fontSize: 14,
    borderRadius: 3,
    padding: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20
  },

  mainButtonsContainer: {
    alignItems: 'stretch',
  },

  separatorContainer: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    margin: 5
  },

  separator: {
    color: '#DDD',
    fontSize: 13,
    marginBottom: 5
  },

  mainButton: {
    alignItems: 'center',
    backgroundColor: COLOR.red700,
    height: 40,
    borderRadius: 3,
    padding: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1
  },

  mainButtonText: {
    color: '#FFF',
    fontWeight: '700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 1
  },
});

const loginGoogle = authActions.loginGoogle;

export default connect(
  null,
  { loginGoogle }
)(LoginForm);
