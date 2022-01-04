import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {stylesCommuns} from "../utils/stylesCommuns";
import {Naviguer} from '../types/Naviguer'

class FenetreGestionCompte extends Component<Naviguer> {

	render() {
		return (
			<View style={stylesCommuns.containerPF}>
				<Text>Gérer compte</Text>
			</View>
		);
	}
};		

const styles=StyleSheet.create({	
})

export default FenetreGestionCompte;
