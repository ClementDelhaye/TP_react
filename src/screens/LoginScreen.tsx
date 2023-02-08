import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Routes } from '../navigation/Route';
import { useNavigation } from '@react-navigation/native';

export default function App() {
  const [text, setText] = useState("");
  const navigation = useNavigation<any>();
  
  function navigateToTerms() {
    navigation.navigate(Routes.TERMS_SCREEN);
  }
  function navigateToStarships() {
    navigation.navigate(Routes.STARSHIP_FEED_SCREEN);
  }
  return (
    <View style={styles.container}>
      <View style={styles.fondTitle}>
        <Text style={styles.title}>
          SPACECRAFT
        </Text>
      </View>
      <View style={styles.fondText}>
        <TextInput
          label="Email"
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.input}
          label="Password"
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
        />
        <Button style={styles.bouton} mode="contained" onPress={navigateToStarships}>
          Login
        </Button>
        <TouchableOpacity onPress={navigateToTerms}>
          <Text style={styles.terms}>Read Terms and conditions.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  title: {
    margin: 20,
    marginTop : 75,
    marginBottom : 75,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color : 'white',
  },
  fondTitle: {
    backgroundColor : 'blue',
  },
  fondText: {
    margin : 30,
  },
  input: {
    marginTop : 10,
  },
  bouton: {
    margin : 30,
  },
  terms: {
    color :'grey',
    textAlign: 'center',
    fontSize: 20,
  }
});

