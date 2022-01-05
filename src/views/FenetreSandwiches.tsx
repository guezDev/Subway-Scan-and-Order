import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {stylesCommuns} from "../utils/stylesCommuns";
import {Naviguer} from '../types/Naviguer'
import QRcodeIcon from 'react-native-vector-icons/MaterialIcons'

class FenetreSandwiches extends Component<Naviguer> {

	render() {
		return (
			<View style={styles.container}>
				<View style={[styles.carte]}>
					<Text style={styles.texte}>Nos sandwiches</Text>
					<Image
						style={{ width: 290, height: 50 }}
						source={require('../assets/images/Logo-1.png')}
						resizeMode='contain'
					/>
					<View style={styles.bas}>
						<View>
							<View style={styles.infos}>
								<Text>15 cm</Text>
								<Text>5,90 €</Text>
							</View>
							<View style={styles.infos}>
								<Text>30 cm</Text>
								<Text>7,85 €</Text>
							</View>
						</View>
						<View>
						<Pressable style={[styles.bt, styles.gauche]} onPress={()=> this.props.navigation.navigate('FenetreConnexion')}><Text style={stylesCommuns.bouton}>Ajouter</Text></Pressable>
						</View>
					</View>
				</View>
			</View>
		);
	}
};		

const styles=StyleSheet.create({
	texte: {
		color: '#18503E',
		fontWeight: 'bold',
		textAlign: 'center',
	},

	carte: {
		borderColor: '#18503E',
		borderWidth:2
	},

	bas: {
		flexDirection: 'row'
	},

	basGauche: {
		flexDirection: 'row'
	},

	infos: {
		flexDirection: 'row'
	},

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

	

	icon: {
		marginBottom: 30
	}

	
})

export default FenetreSandwiches;
