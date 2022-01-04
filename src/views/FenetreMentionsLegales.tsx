import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {stylesCommuns} from "../utils/stylesCommuns";
import {Naviguer} from '../types/Naviguer'

class FenetreMentionsLegales extends Component<Naviguer> {

	render() {
		return (
			<View style={stylesCommuns.containerPF}>
				<Text>Mentions légales</Text>
			</View>
		);
	}
};		

const styles=StyleSheet.create({	
})

export default FenetreMentionsLegales;
