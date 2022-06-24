import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterilaIcons from 'react-native-vector-icons/MaterialIcons';
import GamingImg from './assets/images/misc/gaming.svg';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View>
        <Text style={styles.viewText}>App</Text>
      </View>
      <View style={styles.ImageWrapper}>
        <GamingImg width={300} height={300} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Let's Begin</Text>
        <MaterilaIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  viewText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20315f',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#ad40af',
    padding: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 50,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    fontFamily: 'Roboto-BoldItalic',
  },
  ImageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
