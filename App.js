import React from "react";
import { Select, CheckIcon, Text, NativeBaseProvider } from "native-base";
import { StyleSheet, View, TextInput  } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
const { useState } = React;

import { Ionicons } from '@expo/vector-icons';
import {Alert} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={({ route }) => ({
      headerShown: false, // Добавьте эту опцию для каждого экрана, чтобы убрать шапку
    })}
    >
    <Stack.Screen name="cal" component={HomeScreen} />
          <Stack.Screen name="LUX+" component={LuxScreen} />
          <Stack.Screen name="info" component={SettingsScreen} />
          <Stack.Screen name="HMI" component={HMI} />
          <Stack.Screen name="LED" component={LED} />
    </Stack.Navigator>
  );
};

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
      <Text style={styles.textcenter}>LUX+</Text>
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
          <Text style={styles.textcenter}>LUX+</Text>
          <View style={styles.row}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('HMI')}
            >
              <Text style={styles.buttonText}>HMI</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Tungsten</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('LED')}
              >
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
      backgroundColor: 'black',
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
      borderWidth: 3,
      borderColor: '#696969',
    },
    buttonText: {
      color: '#fff',
      fontSize: 22,
    },
    textcenter:{
      fontWeight: 'bold',
      paddingVertical: 50,
      color:"#ffb300",
      fontSize: 42,
      textAlign: 'center',
    },
  });
  

    return (
      <NativeBaseProvider>
            <ButtonGroup />
      </NativeBaseProvider>
    );

};





function HMI() {
  // Создаем состояния для хранения выбранного имени, значения и расстояния
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [distance, setDistance] = useState('');
  const [lux, setLux] = useState('');

  // Создаем объект с данными для листбоксов в зависимости от имени
  const data = {
    'ARRI HMI 2500Вт': [
      { label: 'Flood 53,5°', value: 110000 },
      { label: 'Middle 30,1°', value: 240000 },
      { label: 'Spot 7,9°', value: 1100000 },
    ],
    'ARRI HMI D5 575 Вт': [
      { label: 'Flood 56,0°', value: 24000 },
      { label: 'Middle 30,0°', value: 57000 },
      { label: 'Spot 6,0°', value: 260000 },
    ],
    'ARRI HMI 4000 Вт': [
      { label: 'Flood 55,3°', value: 200000 },
      { label: 'Middle 29,9°', value: 400000 },
      { label: 'Spot 7,7°', value: 680000 },
    ],
    'ARRI HMI D12 1200 Вт': [
      { label: 'Flood 50,0°', value: 60000 },
      { label: 'Middle 30,0', value: 125000 },
      { label: 'Spot 7,5°', value: 540000 },
    ],
    'ARRI M8 800 Вт': [
      { label: 'Flood 60,0°', value: 37000 },
      { label: 'Middle 40,0°', value: 69000 },
      { label: 'Spot 15,0°', value: 340000 },
    ],
    'ARRI M18 1200 Вт': [
      { label: 'Flood 62,0°', value: 54000 },
      { label: 'Middle 38,2°', value: 140000 },
      { label: 'Spot 15,0°', value: 612000 },
    ],
    'ARRI M18 1800 Вт': [
      { label: 'Flood 63,0°', value: 78000 },
      { label: 'Middle 39,0°', value: 200000 },
      { label: 'Spot 16,0°', value: 880000 },
    ],
  };

  // Создаем функцию для расчета lux и расстояния
  const calculate = () => {
    // Проверяем, что все поля заполнены
    if (name && value && (distance || lux)) {
      // Если расстояние задано, рассчитываем lux
      if (distance && lux === '') {
        // Преобразуем расстояние в число
        const distanceNumber = Number(distance);
        // Проверяем, что расстояние положительное
        if (distanceNumber > 0) {
          // Рассчитываем lux
          const luxValue = value / (distanceNumber * distanceNumber);
          // Сохраняем результат в состоянии
          setLux(luxValue.toFixed(0));
        } else {
          // Выводим сообщение об ошибке
          Alert.alert('Расстояние должно быть больше нуля');
        }
      }
      // Если lux задано, рассчитываем расстояние
      if (lux && distance === '') {
        // Преобразуем lux в число
        const luxNumber = Number(lux);
        // Проверяем, что lux положительное
        if (luxNumber > 0) {
          // Рассчитываем расстояние
          const distanceValue = Math.sqrt(value / luxNumber);
          // Сохраняем результат в состоянии
          setDistance(distanceValue.toFixed(2));
        } else {
          // Выводим сообщение об ошибке
          Alert.alert('Lux должно быть больше нуля');
        }
      }
    } else {
      // Выводим сообщение об ошибке
      Alert.alert('Пожалуйста, заполните все поля');
    }
  };

  // Возвращаем JSX-разметку приложения
  return (
    <View style={styles.container}>
      <Text style={styles.textcenter}>LUX+</Text>
      <Text style={styles.textlist}>Name:</Text>
      <Select
        selectedValue={name}
        onValueChange={(itemValue) => setName(itemValue)}
        style={styles.picker}
      >
        <Select.Item label="Select..." value="" />
        <Select.Item label="ARRI HMI 2500Вт" value="ARRI HMI 2500Вт" />
        <Select.Item label="ARRI HMI D5 575 Вт" value="ARRI HMI D5 575 Вт" />
        <Select.Item label="ARRI HMI 4000 Вт" value="ARRI HMI 4000 Вт" />
        <Select.Item label="ARRI HMI D12 1200 Вт" value="ARRI HMI D12 1200 Вт" />
        <Select.Item label="ARRI M8 800 Вт" value="ARRI M8 800 Вт" />
        <Select.Item label="ARRI M18 1200 Вт" value="ARRI M18 1200 Вт" />
        <Select.Item label="ARRI M18 1800 Вт" value="ARRI M18 1800 Вт" />
      </Select>
      <Text style={styles.textlist}>Angle:</Text>
      <Select
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
        style={styles.picker}
      >
        <Select.Item label="Select..." value="" />
        {name &&
          data[name].map((item) => (
            <Select.Item
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
      </Select>
      <Text style={styles.textlist}>Distanse:</Text>
      <TextInput
        style={styles.input}
        value={distance}
        onChangeText={(text) => setDistance(text)}
        keyboardType="numeric"
      />
      <Text style={styles.textlist}>Lux:</Text>
      <TextInput
        style={styles.input}
        value={lux}
        onChangeText={(text) => setLux(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.buttonCal} onPress={calculate}>
        <Text style={styles.buttonTextCal}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}


function LED() {
  // Создаем состояния для хранения выбранного имени, значения, расстояния и lux
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [distance, setDistance] = useState('');
  const [lux, setLux] = useState('');

  // Создаем объект с данными для листбоксов в зависимости от имени
  const data = {
    'Aputure LS60x': [
      { label: 'Flood 45°', value: 4464 },
      { label: 'Spot 15°', value: 25110 },
    ],
    'Aputure 300x': [
      { label: 'Bare Bulb', value: 5100 },
      { label: 'Hyper Reflector', value: 16200 },
    ],
    'Aputure 1200d': [
      { label: 'Bare Bulb', value: 6380 },
      { label: 'Hyper Reflector', value: 22400 },
      { label: 'F10 Fresnel (Flood)', value: 14470 },
      { label: 'F10 Spot (Flood)', value: 32410 },
    ],
    'Astera Titan': [
      { label: 'Bare Bulb', value: 785 },
    ],
  };

  // Создаем функцию для расчета lux и расстояния
  const calculate = () => {
    // Проверяем, что все поля заполнены
    if (name && value && (distance || lux)) {
      // Если расстояние задано, рассчитываем lux
      if (distance && lux === '') {
        // Преобразуем расстояние в число
        const distanceNumber = Number(distance);
        // Проверяем, что расстояние положительное
        if (distanceNumber > 0) {
          // Рассчитываем lux
          const luxValue = value / (distanceNumber * distanceNumber);
          // Сохраняем результат в состоянии
          setLux(luxValue.toFixed(0));
        } else {
          // Выводим сообщение об ошибке
          Alert.alert('Расстояние должно быть больше нуля');
        }
      }
      // Если lux задано, рассчитываем расстояние
      if (lux && distance === '') {
        // Преобразуем lux в число
        const luxNumber = Number(lux);
        // Проверяем, что lux положительное
        if (luxNumber > 0) {
          // Рассчитываем расстояние
          const distanceValue = Math.sqrt(value / luxNumber);
          // Сохраняем результат в состоянии
          setDistance(distanceValue.toFixed(2));
        } else {
          // Выводим сообщение об ошибке
          Alert.alert('Lux должно быть больше нуля');
        }
      }
    } else {
      // Выводим сообщение об ошибке
      Alert.alert('Пожалуйста, заполните все поля');
    }
  };

  // Возвращаем JSX-разметку приложения
  return (
    <View style={styles.container}>
      <Text style={styles.textcenter}>LUX+</Text>
      <Text style={styles.textlist}>Name:</Text>
      <Select
        selectedValue={name}
        onValueChange={(itemValue) => setName(itemValue)}
        style={styles.picker}
      >
        <Select.Item label="Select..." value="" />
        <Select.Item label="Aputure LS60x" value="Aputure LS60x" />
        <Select.Item label="Aputure 300x" value="Aputure 300x" />
        <Select.Item label="Aputure 1200d" value="Aputure 1200d" />
        <Select.Item label="Astera Titan" value="Astera Titan" />
      </Select>
      <Text style={styles.textlist}>Angle:</Text>
      <Select
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
        style={styles.picker}
      >
        <Select.Item label="Select..." value="" />
        {name &&
          data[name].map((item) => (
            <Select.Item
              key={item.label}
              label={item.label}
              value={item.value}
            />
          ))}
      </Select>
      <Text style={styles.textlist}>Distanse:</Text>
      <TextInput
        style={styles.input}
        value={distance}
        onChangeText={(text) => setDistance(text)}
        keyboardType="numeric"
      />
      <Text style={styles.textlist}>Lux:</Text>
      <TextInput
        style={styles.input}
        value={lux}
        onChangeText={(text) => setLux(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.buttonCal} onPress={calculate}>
        <Text style={styles.buttonTextCal}>Calculate</Text>
      </TouchableOpacity>
    </View>
  );
}




const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: 'black', height: 70},
          tabBarActiveTintColor: '#ffb300',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'cal') {
              iconName = focused ? 'ios-calculator' : 'calculator-outline';
            } else if (route.name === 'info') {
              iconName = focused ? 'ios-information-circle' : 'information-circle-outline';
            } else if (route.name === 'LUX+') {
              iconName = focused ? 'ios-list' : 'list-outline';
            }

            return <Ionicons name={iconName} size={size + 15} color={color} />;
          },
          tabBarLabel: () => null, // Добавьте эту опцию, чтобы убрать подписи
        })}
      >
        <Tab.Screen name="cal" component={StackNavigator} />
        <Tab.Screen name="LUX+" component={LuxScreen} />
        <Tab.Screen name="info" component={SettingsScreen} />
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

    <View style={styles.container}>
      <View style={styles.rowElements}>
        <View style={styles.column}>
        <Text style={[styles.label, { marginRight: 90 }]}>Shutter</Text>
          <Select
            selectedValue={shutter}
            minWidth="200"
            accessibilityLabel="Choose shutter"
            placeholderTextColor="amber.400"
            _selectedItem={{
              bg: "amber.400",
              endIcon: <CheckIcon size="5" />
            }}
            mt={1}
            onValueChange={itemValue => setShutter(itemValue)}
            color="amber.400"
          >
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
        </View>

        <View style={styles.column}>
          <Text style={[styles.label, { marginRight: 78 }]}>Aperture</Text>
          <Select
            selectedValue={aperture}
            minWidth="200"
            accessibilityLabel="Choose aperture"
            placeholderTextColor="amber.400"
            _selectedItem={{
              bg: "amber.400",
              endIcon: <CheckIcon size="5" />
            }}
            mt={1}
            onValueChange={itemValue => setAperture(itemValue)}
            color="amber.400"
          >
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
        </View>


        <View style={styles.column}>
          <Text style={[styles.label, { marginRight: 122 }]}>ISO</Text>
          <Select
            selectedValue={iso}
            minWidth="200"
            accessibilityLabel="Choose ISO"
            placeholderTextColor="amber.400"
            _selectedItem={{
              bg: "amber.400",
              endIcon: <CheckIcon size="5" />
            }}
            mt={1}
            onValueChange={itemValue => setIso(itemValue)}
            color="amber.400"
          >
            <Select.Item label="100" value="0" />
            <Select.Item label="200" value="1" />
            <Select.Item label="400" value="2" />
            <Select.Item label="800" value="3" />
            <Select.Item label="1600" value="4" />
            <Select.Item label="3200" value="5" />
            <Select.Item label="6400" value="6" />
            <Select.Item label="12800" value="7" />
          </Select>
        </View>



        <View style={styles.column}>
          <Text style={[styles.label, { marginRight: 127 }]}>ND</Text>
          <Select
            selectedValue={nd}
            minWidth="200"
            accessibilityLabel="Choose ND"
            placeholderTextColor="amber.400"
            _selectedItem={{
              bg: "amber.400",
              endIcon: <CheckIcon size="5" />
            }}
            mt={1}
            onValueChange={itemValue => setNd(itemValue)}
            color="amber.400"
          >
          <Select.Item label="Non-ND" value="0" />
            <Select.Item label="0.3" value="1" />
            <Select.Item label="0.6" value="2" />
            <Select.Item label="0.9" value="3" />
            <Select.Item label="1.2" value="4" />
            <Select.Item label="1.5" value="5" />
            <Select.Item label="1.8" value="6" />
            <Select.Item label="2.1" value="7" />
          </Select>
        </View>
      </View>

      <Text style={styles.result}>EV</Text>
      <Text style={styles.value}>{ev} steps</Text>
      <Text style={styles.result}>LUX</Text>
      <Text style={styles.value}>{lux}</Text>
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
    container: {
      flex: 1,
      backgroundColor: 'black',
      padding: 10,
      paddingTop: 60,
    },
    containerTop: {
      paddingTop: 60,
    },
    textlist: {
      marginVertical: 10,
      color: 'white',
    },
    picker: {
      color: 'white',
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      borderRadius: 5,
      color: 'white',
    },

    rowElements: {
      marginBottom: 20,
    },

    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 5,
    },
    column: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 0,
      color: 'white',
    },
    label: {
      textAlign: 'left',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 5,
      marginLeft: 20,
      fontSize: 20,
    },
    result: {
      marginLeft: 20,
      fontWeight: 'bold',
      textAlign: 'left',
      color: 'white',
      fontSize: 20,
    },
    value: {
      fontWeight: 'bold',
      textAlign: 'right',
      marginRight: 50,
      color:"#ffb300",
      fontSize: 20,
    },
    textcenter:{
      fontWeight: 'bold',
      paddingVertical: 100,
      color:"#ffb300",
      fontSize: 42,
      textAlign: 'center',
    },
    table: {
      flex: 1,
      padding: 10,
      backgroundColor: 'black',
      paddingTop: 60,
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
    buttonCal: {
      width: 180,
      height: 40,
      backgroundColor: '#ffb300',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      alignSelf: 'center',
      margin: 15,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#696969',
      marginTop: 30,
    },
    buttonTextCal: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
    


