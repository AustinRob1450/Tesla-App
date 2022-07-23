import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ImageBackgroundBase } from 'react-native';
import CarItem from './components/Caritem/index';
import styles from './components/Caritem/styles';
import StyledButton from './components/Styled Button';


export default function App() {
  
  return (
    <View style={styles.container}>

      <CarItem/>

      <StyledButton/>

      <StatusBar style="auto"/>
    </View>
  );
};
