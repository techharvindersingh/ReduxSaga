/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import * as types from './store/types';
// import {getAllUserAction} from './store/actions/action';

const App = ({getAllUserAction, id, name, email}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 22}}>Id :- {id} </Text>
            <Text style={{fontSize: 22}}>Name :- {name} </Text>
            <Text style={{fontSize: 22}}>Email :- {email}</Text>
          </View>
          <TouchableOpacity
            style={styles.Container}
            onPress={() => getAllUserAction()}>
            <Text style={{fontSize: 20, alignSelf: 'center'}}>
              Fetch the data
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    borderRadius: 22,
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
});

const mapStateToProps = (state, props) => {
  const {id, name, email} = state.user;
  return {id, name, email};
};

const mapDispatchToProps = dispatch => ({
  getAllUserAction: () => {
    dispatch({
      type: types.GET_USERS_REQUEST,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
