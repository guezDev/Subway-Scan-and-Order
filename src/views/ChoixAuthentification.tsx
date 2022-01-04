import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Pressable, Linking} from 'react-native';
import {stylesCommuns} from "../utils/stylesCommuns"
import {Naviguer} from '../types/Naviguer'

class ChoixAuthentification extends Component<Naviguer> {

	render() {
		return (
			<View style={stylesCommuns.containerPF}>
      			<Image style={stylesCommuns.logo1} source={require('../assets/images/Logo-1.png')} />
				<Pressable style={[stylesCommuns.bouton, styles.bt]} onPress={()=> this.props.navigation.navigate('FenetreConnexion')}><Text style={stylesCommuns.texte}>Se connecter</Text></Pressable>
				<Pressable style={[stylesCommuns.bouton, styles.bt]} onPress={()=> this.props.navigation.navigate('FenetreInscription')}><Text style={stylesCommuns.texte}>Créer compte</Text></Pressable>
				<Text style={[stylesCommuns.lien, styles.lienMentions]} onPress={() => Linking.openURL('http://google.com')}>Mentions légales</Text>
    		</View>
		);
	}
};

const styles= StyleSheet.create({
	lienMentions: {
		marginTop: 50
	},
	bt: {
		marginTop: 20
	}
})

export default ChoixAuthentification;
