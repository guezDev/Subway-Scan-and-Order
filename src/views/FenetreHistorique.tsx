import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {stylesCommuns} from "../utils/stylesCommuns";
import {Naviguer} from '../types/Naviguer'


class FenetreHistorique extends Component<Naviguer> {

	render() {
		return (
			<View style={stylesCommuns.containerPF}>
				<Text>Historique</Text>
			</View>
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

export default FenetreHistorique;
