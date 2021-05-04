import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {logOutBtn} from '../../actions/auth';

const LogOut = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutBtn());
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleLogOut}>
      <Text>Log Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: '75%',
  },
});

export default LogOut;
