/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image, Text, View, Button, Pressable} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
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
import FenetreGestionCompte from './views/FenetreGestionCompte';
import FenetreMentionsLegales from './views/FenetreMentionsLegales';
import MenuTuiles from './views/MenuTuiles'
import { stylesCommuns } from './utils/stylesCommuns';
import FenetreSandwiches from './views/FenetreSandwiches';
import ValidationCommande from './views/ValidationCommande';

const Drawer = createDrawerNavigator();

function DrawerMenu() {
  return (
      <Drawer.Navigator initialRouteName="Gérer compte" defaultStatus="open" screenOptions={{headerShown: false, drawerActiveTintColor: "#18503E",
      drawerInactiveTintColor: "#18503E",}}>
        <Drawer.Screen name="Gérer compte" component={FenetreGestionCompte} />
        <Drawer.Screen name="Mentions légales" component={FenetreMentionsLegales} />
        <Drawer.Screen name="Se déconnecter" component={ChoixAuthentification} />
      </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabNav= () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({color, size }) => {
        let iconName: string='';

        if (route.name === 'Accueil') {
          iconName = 'home'
        } else if (route.name === 'Historique') {
          iconName = 'history';
        } else if (route.name==='Paiement') {
          iconName = 'credit-card'
        } else if (route.name==='Autres') {
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
      <Tab.Screen name="Autres" component={DrawerMenu} />
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
                style={{ width: 370, height: 50 }}
                source={require('./assets/images/Logo-2.png')}
                resizeMode='contain'
                />
            </>
            ),
            headerBackVisible: false
          }}
        />
        
        <Stack.Screen
          name="MenuTuiles"
          component={MenuTuiles}
          options={{
            headerTitle: () => (
            <>
              <Image
                style={{ width: 370, height: 50 }}
                source={require('./assets/images/Logo-2.png')}
                resizeMode='contain'
                />
            </>
            ),
            headerBackVisible: false,
            headerLeft: ()=> <FontAwesome name='home' size={25} color='#18503E'/>
          }}
        />
      <Stack.Screen
          name="FenetreSandwiches"
          component={FenetreSandwiches}
          options={{
            headerTitle: () => (
            <>
              <Image
                style={{ width: 370, height: 50 }}
                source={require('./assets/images/Logo-2.png')}
                resizeMode='contain'
                />
            </>
            ),
            headerBackVisible: false,
            headerLeft: ()=> <FontAwesome name='home' size={25} color='#18503E'/>
          }}
        />
        
      <Stack.Screen
          name="ValidationCommande"
          component={ValidationCommande}
          options={{
            headerTitle: () => (
            <>
              <Image
                style={{ width: 370, height: 50 }}
                source={require('./assets/images/Logo-2.png')}
                resizeMode='contain'
                />
            </>
            ),
            headerBackVisible: false,
            headerLeft: ()=> <FontAwesome name='home' size={25} color='#18503E'/>
          }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
