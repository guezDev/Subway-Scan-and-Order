import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {stylesCommuns} from "../utils/stylesCommuns";
import {Naviguer} from '../types/Naviguer'
import QRcodeIcon from 'react-native-vector-icons/MaterialIcons'

class FenetreAccueil extends Component<Naviguer> {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.txt}>Bienvenue dans notre restaurant !{"\n"}
				Pour consulter et commander nos produits, veuillez scanner un QR code.
				</Text>
				<QRcodeIcon name='qr-code-scanner' size={200} style={styles.icon}/>
				<Pressable style={[stylesCommuns.bouton]} onPress={()=> this.props.navigation.navigate('FenetreConnexion')}><Text style={stylesCommuns.texte}>Scanner QR Code</Text></Pressable>
			</View>
		);
	}
};		

const styles=StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'center',
		margin: 50
	},

	txt: {
		color: 'black',
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 30
	},

	icon: {
		marginBottom: 30
	}

	
})

export default FenetreAccueil;
