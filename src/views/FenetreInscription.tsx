import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Pressable, Linking} from 'react-native';
import {stylesCommuns} from "../utils/stylesCommuns";
import {Naviguer} from '../types/Naviguer'

class FenetreInscription extends Component<Naviguer> {
	render() {
		return (
			<ScrollView style={styles.scrollviewPF}>
				<View style={stylesCommuns.containerPF}>
					<Image style={stylesCommuns.logo1} source={require('../assets/images/Logo-1.png')} />
					<View>
						<Text style={stylesCommuns.labelForm}>Nom</Text>
						<TextInput style={stylesCommuns.inputForm} placeholder='Entrez votre nom'/>

						<Text style={[stylesCommuns.labelForm, styles.labelMdp]}>Prénom</Text>
						<TextInput style={stylesCommuns.inputForm} placeholder='Entrez votre prénom'/>

						<Text style={[stylesCommuns.labelForm, styles.labelMdp]}>Créer mot de passe</Text>
						<TextInput style={stylesCommuns.inputForm} placeholder='Entrez un mot de passe'/>

						<Text style={[stylesCommuns.labelForm, styles.labelMdp]}>Confirmer mot de passe</Text>
						<TextInput style={stylesCommuns.inputForm} placeholder='Entrez à nouveau le mot de passe'/>
					</View>

					<Pressable style={[stylesCommuns.bouton, styles.bt]} onPress={()=> this.props.navigation.navigate('FenetreAccueil')}><Text style={stylesCommuns.texte}>Créer compte</Text></Pressable>
					<Text style={[stylesCommuns.lien, styles.hyperliens]} onPress={() => this.props.navigation.navigate('FenetreConnexion')}>Vous avez déjà un compte ?</Text>
					<Text style={[stylesCommuns.lien, styles.lienMentions]} onPress={() => Linking.openURL('http://google.com')}>Mentions légales</Text>
					
				</View>
			</ScrollView>
		);
	}
};		

const styles=StyleSheet.create({
	scrollviewPF: {
		backgroundColor: 'white',
		paddingTop: 35,
	},

	labelMdp: {
		marginTop: 15
	},
	hyperliens: {
		marginTop: 10
	},
	lienMentions: {
		marginTop: 30
	},
	bt: {
		marginTop: 30
	},
	
})

export default FenetreInscription;
