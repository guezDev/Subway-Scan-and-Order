/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image, Text, View, Button} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import ChoixAuthentification from './views/ChoixAuthentification';
import FenetreConnexion from './views/FenetreConnexion';
import FenetreInscription from './views/FenetreInscription';
import FenetreAccueil from './views/FenetreAccueil';
import FenetreHistorique from './views/FenetreHistorique';
import FenetrePaiement from './views/FenetrePaiement';
import FenetreAutres from './views/FenetreAutres';

import {Naviguer} from './types/Naviguer'
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }: Naviguer) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }:Naviguer) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function DrawerMenu() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications hr" component={NotificationsScreen} />
      </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabNav= () => {
  return (
    <Tab.Navigator screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({color, size }) => {
        let iconName: string='';

        if (route.name === 'Accueil') {
          iconName = 'home'
        } else if (route.name === 'Historique') {
          iconName = 'history';
        } else if (route.name==='Paiement') {
          iconName = 'credit-card'
        } else if (route.name==='Autres') {
          navigation.dispatch(DrawerActions.openDrawer());
          return <Entypo name='dots-three-horizontal' size={size} color={color} />
        }

        return <FontAwesome name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#18503E',
      tabBarInactiveTintColor: 'gray',
      headerShown: false,
      tabBarItemStyle: {marginBottom: 3}
    })}>
      <Tab.Screen name="Accueil" component={FenetreAccueil} />
      <Tab.Screen name="Historique" component={FenetreHistorique} />
      <Tab.Screen name="Paiement" component={FenetrePaiement} />
      <Tab.Screen name="Autres" component={DrawerMenu}/>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ChoixAuthentification"
          component={ChoixAuthentification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FenetreConnexion"
          component={FenetreConnexion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FenetreInscription"
          component={FenetreInscription}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FenetreAccueil"
          component={TabNav}
          options={{
            headerTitle: () => (
            <>
              <Image
                style={{ width: 290, height: 50 }}
                source={require('./assets/images/Logo-2.png')}
                resizeMode='contain'
                />
              <Text style={{
                backgroundColor: '#18503E', 
                color: '#fff', 
                textAlign: 'center' , 
                width: 45,
                }}>15:00</Text>
            </>
            ),
            headerBackVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
