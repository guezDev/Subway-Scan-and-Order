import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {stylesCommuns} from "../utils/stylesCommuns";
import {Naviguer} from '../types/Naviguer'
import QRcodeIcon from 'react-native-vector-icons/MaterialIcons'
import FenetreSandwiches from './FenetreSandwiches';

class MenuTuiles extends Component<Naviguer> {

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.four}>
				<Pressable style={[styles.bt, styles.gauche]} onPress={()=> this.props.navigation.navigate('FenetreSandwiches')}><Text style={styles.texte}>Nos sandwiches</Text></Pressable>
				<Pressable style={[styles.bt, styles.droite]} onPress={()=> this.props.navigation.navigate('FenetreConnexion')}><Text style={styles.texte}>Nos salades</Text></Pressable>
				</View>
				<View style={styles.four}>
					<Pressable style={[styles.bt, styles.gauche]} onPress={()=> this.props.navigation.navigate('FenetreConnexion')}><Text style={styles.texte}>Nos boissons</Text></Pressable>
					<Pressable style={[styles.bt, styles.droite]} onPress={()=> this.props.navigation.navigate('FenetreConnexion')}><Text style={styles.texte}>Nos desserts</Text></Pressable>
				</View>
				<Pressable style={[styles.last]} onPress={()=> this.props.navigation.navigate('FenetreConnexion')}><Text style={styles.texte}>Soyez le chef en composant votre menu de A à Z</Text></Pressable>
			</View>
		);
	}
};		

const styles=StyleSheet.create({
	container: {
		flex:1,
		margin:0,
		padding:0,
		alignItems: 'center'
	},
	four: {
		flex:1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center',
		margin:0,
		padding:0
		
	},
	last: {
		flex:1,
		width: 396,
		backgroundColor:'#18503E',
		margin:8,
		justifyContent: 'center'
	},

	gauche: {
		marginLeft: 8,
		marginTop:8,
		marginRight:4
	},
	droite: {
		marginLeft: 4,
		marginTop:8,
		marginRight:8
	},

	bt: {
		backgroundColor:'#18503E',
		width:195,
		justifyContent: 'center'
	},

	texte: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},

	icon: {
		marginBottom: 30
	}

	
})

export default MenuTuiles;
