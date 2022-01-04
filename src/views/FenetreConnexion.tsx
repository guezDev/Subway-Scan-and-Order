import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Pressable, Linking} from 'react-native';
import {stylesCommuns} from "../utils/stylesCommuns";
import {Naviguer} from '../types/Naviguer'

class FenetreConnexion extends Component<Naviguer> {
	render() {
		return (
			<ScrollView style={styles.scrollviewPF}>
				<View style={stylesCommuns.containerPF}>
					<Image style={stylesCommuns.logo1} source={require('../assets/images/Logo-1.png')} />
					<View>
						<Text style={stylesCommuns.labelForm}>Email</Text>
						<TextInput style={stylesCommuns.inputForm} placeholder='Entrez votre adresse email'/>
						<Text style={[stylesCommuns.labelForm, styles.labelMdp]}>Mot de Passe</Text>
						<TextInput style={stylesCommuns.inputForm} secureTextEntry={true} placeholder='Entrez votre mot de passe'/>
					</View>

					<Pressable style={[stylesCommuns.bouton, styles.bt]} onPress={()=> this.props.navigation.navigate('FenetreAccueil')}><Text style={stylesCommuns.texte}>Se connecter</Text></Pressable>
					<Text style={[stylesCommuns.lien, styles.hyperliens]} onPress={() => Linking.openURL('http://google.com')}>Mot de passe oublié ?</Text>
					<Text style={[stylesCommuns.lien, styles.hyperliens]} onPress={() => this.props.navigation.navigate('FenetreInscription')}>Vous n'avez pas de compte ?</Text>
					<Text style={[stylesCommuns.lien, styles.lienMentions]} onPress={() => Linking.openURL('http://google.com')}>Mentions légales</Text>
					
				</View>
			</ScrollView>
		);
	}
};		

const styles=StyleSheet.create({
	scrollviewPF: {
		backgroundColor: 'white',
		paddingTop: 80,
	},

	labelMdp: {
		marginTop: 15
	},
	hyperliens: {
		marginTop: 10
	},
	lienMentions: {
		marginTop: 50
	},
	bt: {
		marginTop: 30
	},
	
})

export default FenetreConnexion;
