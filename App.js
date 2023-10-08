import React from "react";
import { Select, Box, CheckIcon, Center, Text, NativeBaseProvider } from "native-base";
import { StyleSheet, View, Button, TextInput  } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
const { useState } = React;

import { Ionicons } from '@expo/vector-icons';



import {Alert} from 'react-native';



const Tab = createBottomTabNavigator();

function LuxScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.textcenter}>LUX+</Text>
      <EV />
    </View>
  );
}

function SettingsScreen () {
const Table = () => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.text}>Sunlight </Text>
        <Text style={styles.number}>120 000 - 50 000</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Sunny day with light clouds</Text>
        <Text style={styles.number}>70 000 - 50 000</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Rain </Text>
        <Text style={styles.number}>2 000 - 1 000</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Cloudy sky in summer </Text>
        <Text style={styles.number}>20 000 - 5 000</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Daylight in the shade </Text>
        <Text style={styles.number}>7 000 -5 000</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Midday </Text>
        <Text style={styles.number}>4 000 - 2 000</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Cloudy sky in winter</Text>
        <Text style={styles.number}>2 000 - 1 000</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Overcast day</Text>
        <Text style={styles.number}>5 000 - 1 500</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Early morning </Text>
        <Text style={styles.number}>500</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Sunset/sunrise</Text>
        <Text style={styles.number}>400</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Storm clouds </Text>
        <Text style={styles.number}>200</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Very dark day</Text>
        <Text style={styles.number}>100</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Cloudy sunrise or sunset</Text>
        <Text style={styles.number}>40</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Twilight </Text>
        <Text style={styles.number}>10-5</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>White night</Text>
        <Text style={styles.number}>5</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Deep twilight </Text>
        <Text style={styles.number}>1-5</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Full moon </Text>
        <Text style={styles.number}>0,5</Text>
      </View>
    </View>
  );
};

  return (
    <Table />
  );
};


function HomeScreen({ navigation }) {
  const ButtonGroup = () => {
    return (
        <View style={styles.buttonGroup}>
          <View style={styles.row}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('OtherPage')}
            >
              <Text style={styles.buttonText}>HMI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Tungsten</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>LED</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Other</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    buttonGroup: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      margin: 15,
      padding: 15,
      width: 140,
      borderRadius: 20,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      aspectRatio: 1, // добавляем свойство aspectRatio
    },
    buttonText: {
      color: '#fff',
      fontSize: 22,
    },
  });
  

    return (
      <NativeBaseProvider>
        <Center flex={1} px="3">
            <ButtonGroup />
        </Center>
      </NativeBaseProvider>
    );

};




function OtherPage(){

  return (
    <View>
      <Text> fruengier</Text> 

    </View>
  );
}










const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'cal') {
              iconName = focused ? 'ios-calculator' : 'calculator-outline';
            } else if (route.name === 'info') {
              iconName = focused ? 'ios-information-circle' : 'information-circle-outline';
            } else if (route.name === 'LUX+') {
              iconName = focused ? 'ios-list' : 'list-outline';
            } else if (route.name === 'OtherPage') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ffb300',
          inactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'black' },
        }}
      >
        <Tab.Screen name="cal" component={HomeScreen} />
        <Tab.Screen name="LUX+" component={LuxScreen} />
        <Tab.Screen name="info" component={SettingsScreen} />
        <Tab.Screen name="OtherPage" component={OtherPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};




const EV = () => {
  const [shutter, setShutter] = React.useState("");
  const [aperture, setAperture] = React.useState("");
  const [iso, setIso] = React.useState("");
  const [nd, setNd] = React.useState("");
  const ev = - (Number(shutter) + Number(aperture) + Number(nd) - Number(iso));
  let lux;

  switch (ev) {
    case 0:
      lux = 2;
      break;
    case -1:
      lux = 4;
      break;
    case -2:
      lux = 9;
      break;
    case -3:
      lux = 19;
      break;
    case -4:
      lux = 37;
      break;
    case -5:
      lux = 75;
      break;
    case -6:
      lux = 150;
      break;
    case -7:
      lux = 300;
      break;
    case -8:
      lux = 600;
      break;
    case -9:
      lux = 1200;
      break;
    case -10:
      lux = 2400;
      break;
    case -11:
      lux = 4800;
      break;
    case -12:
      lux = 9600;
      break;
    case -13:
      lux = 19200;
      break;
    case -14:
      lux = 38400;
      break;
    case -15:
      lux = 76800;
      break;
    case -16:
      lux = 153600;
      break;
    case -17:
      lux = 307200;
      break;
    case -18:
      lux = 614400;
      break;
    default:
      break;
  }

  return (

    <View style={styles.hellotext}>
      <Box maxW="300">
        <Select selectedValue={shutter} minWidth="200" accessibilityLabel="Choose shutter" placeholder="Choose shutter" placeholderTextColor="amber.400" _selectedItem={{
        bg: "amber.400",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setShutter(itemValue)} color="amber.400">
          <Select.Item label="1" value="0" />
          <Select.Item label="1/2" value="1" />
          <Select.Item label="1/4" value="2" />
          <Select.Item label="1/8" value="3" />
          <Select.Item label="1/15" value="4" />
          <Select.Item label="1/30" value="5" />
          <Select.Item label="1/60" value="6" />
          <Select.Item label="1/125" value="7" />
          <Select.Item label="1/250" value="8" />
          <Select.Item label="1/500" value="9" />
          <Select.Item label="1/1000" value="10" />
        </Select>
      </Box>

      <Box maxW="300">
        <Select selectedValue={aperture} minWidth="200" accessibilityLabel="Choose aperture" placeholder="Choose aperture" placeholderTextColor="amber.400" _selectedItem={{
        bg: "amber.400",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setAperture(itemValue)} color="amber.400">
          <Select.Item label="1" value="0" />
          <Select.Item label="1.4" value="1" />
          <Select.Item label="2" value="2" />
          <Select.Item label="2.8" value="3" />
          <Select.Item label="4" value="4" />
          <Select.Item label="5.6" value="5" />
          <Select.Item label="8" value="6" />
          <Select.Item label="11" value="7" />
          <Select.Item label="16" value="8" />
          <Select.Item label="22" value="9" />
        </Select>
      </Box>

      <Box maxW="300">
        <Select selectedValue={iso} minWidth="200" accessibilityLabel="Choose ISO" placeholder="Choose ISO" placeholderTextColor="amber.400" _selectedItem={{
        bg: "amber.400",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setIso(itemValue)} color="amber.400">
          <Select.Item label="100" value="0" />
          <Select.Item label="200" value="1" />
          <Select.Item label="400" value="2" />
          <Select.Item label="800" value="3" />
          <Select.Item label="1600" value="4" />
          <Select.Item label="3200" value="5" />
          <Select.Item label="6400" value="6" />
          <Select.Item label="12800" value="7" />
        </Select>
      </Box>

      <Box maxW="300">
        <Select selectedValue={nd} minWidth="200" accessibilityLabel="Choose ND" placeholder="Choose ND" placeholderTextColor="amber.400" _selectedItem={{
        bg: "amber.400",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setNd(itemValue)} color="amber.400">
          <Select.Item label="Non-ND" value="0" />
          <Select.Item label="0.3" value="1" />
          <Select.Item label="0.6" value="2" />
          <Select.Item label="0.9" value="3" />
          <Select.Item label="1.2" value="4" />
          <Select.Item label="1.5" value="5" />
          <Select.Item label="1.8" value="6" />
          <Select.Item label="2.1" value="7" />
        </Select>
      </Box>



      

      <Text style={styles.result}>EV: {ev} steps</Text>
      <Text style={styles.result}>LUX: {lux}</Text>



      </View>

  );
};



  export default () => {
      return (
        
        <NativeBaseProvider>
            <App />
        </NativeBaseProvider>
        
      );
  };
  
  const styles = StyleSheet.create({
    container:{
      flex: 1, 
      backgroundColor:'#151719',
    }, 
    textcenter:{
      fontWeight: 'bold',
      paddingVertical: 100,
      color:"#ffb300",
      fontSize: 42,
      textAlign: 'center',
    },
    hellotext:{
      alignItems: 'flex-end',
      justifyContent:'flex-end',
      fontWeight: 'bold',
    },
    inscription:{



      color:"#ffffff",
    },
    result:{
      flexDirection: 'column',
      color:"#ffb300",
    },
    table: {
      flex: 1,
      padding: 10,
      backgroundColor: '#151719',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    text: {
      flex: 1,
      color: '#ffffff',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    number: {
      color: '#ffb300',
      textAlign: 'right',
      fontWeight: 'bold',
    },
  });
    


