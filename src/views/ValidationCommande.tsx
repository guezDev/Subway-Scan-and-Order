import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {stylesCommuns} from "../utils/stylesCommuns";
import {Naviguer} from '../types/Naviguer'
import QRcodeIcon from 'react-native-vector-icons/MaterialIcons'
import MenuTuiles from './MenuTuiles'

class ValidationCommande extends Component<Naviguer> {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.txt}>La commande a été envoyé, voici votre numero client
				</Text>
				<Text style={styles.txt}>A701
				</Text>
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

	
})

export default ValidationCommande;
