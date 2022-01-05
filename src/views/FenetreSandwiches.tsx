import React, {Component} from 'react';
import {View, Text,Modal, Alert, StyleSheet, Image, Pressable} from 'react-native';
import {RadioButton} from 'react-native-paper'
import {stylesCommuns} from "../utils/stylesCommuns";
import {Naviguer} from '../types/Naviguer'
import QRcodeIcon from 'react-native-vector-icons/MaterialIcons'

class FenetreSandwiches extends Component<Naviguer> {
	state = {
		modalVisible: false
	  };
	  [checked, setChecked] = React.useState('first');
	
	  setModalVisible = (visible: boolean) => {
		this.setState({ modalVisible: visible });
	  }
	
	render() {
		const { modalVisible } = this.state;
		return (
			
			<View style={styles.container}>

				<View style={[styles.centeredView, {display: this.state.modalVisible ? 'flex': 'none'}]}>
					<Modal
						animationType="slide"
						transparent={true}
						visible={modalVisible}
						onRequestClose={() => {
						Alert.alert("Modal has been closed.");
						this.setModalVisible(!modalVisible);
						}}
					>
						<View style={styles.centeredView}>
						<View style={styles.modalView}>
							<Text style={styles.modalText}>Hello World!</Text>
							<View>
								<RadioButton
									value="first"
									status={ checked === 'first' ? 'checked' : 'unchecked' }
									onPress={() => setChecked('first')}
								/>
								<RadioButton
									value="second"
									status={ checked === 'second' ? 'checked' : 'unchecked' }
									onPress={() => setChecked('second')}
								/>
							</View>
							<Pressable
							style={[styles.button, styles.buttonClose, {backgroundColor:'#18503E'}]}
							onPress={() => this.setModalVisible(!modalVisible)}
							>
							<Text style={styles.textStyle}>Ajouter</Text>
							</Pressable>
						</View>
						</View>
					</Modal>
					
				</View>




				<View style={[styles.carte, {position: 'relative', right: this.state.modalVisible ? 16:0}]}>
					<Text style={styles.nom}>American steakhouse</Text>
					<Image
						style={styles.img}
						source={require('../assets/images/american-steakhouse.jpg')}
						resizeMode='contain'
					/>
					<View style={styles.bas}>
						<View>
							<View style={styles.infos}>
								<Text style={styles.chif}>15 cm</Text>
								<Text style={styles.chif}>5,90 €</Text>
							</View>
							<View style={styles.infos}>
								<Text style={styles.chif}>30 cm</Text>
								<Text style={styles.chif}>7,85 €</Text>
							</View>
						</View>
						<View>
							<Pressable style={[stylesCommuns.bouton, styles.bt]} onPress={()=> this.setModalVisible(true)}><Text style={stylesCommuns.texte}>Ajouter</Text></Pressable>
						</View>
					</View>
				</View>

				<View style={[styles.carte,{position: 'relative', right: this.state.modalVisible ? 5.5:0}]}>
					<Text style={styles.nom}>Veggie Delite</Text>
					<Image
						style={styles.img}
						source={require('../assets/images/veggie-delite.jpg')}
						resizeMode='contain'
					/>
					<View style={styles.bas}>
						<View>
							<View style={styles.infos}>
								<Text style={styles.chif}>15 cm</Text>
								<Text style={styles.chif}>5,60 €</Text>
							</View>
							<View style={styles.infos}>
								<Text style={styles.chif}>30 cm</Text>
								<Text style={styles.chif}>6,75 €</Text>
							</View>
						</View>
						<View>
							<Pressable style={[stylesCommuns.bouton, styles.bt]} onPress={()=> this.props.navigation.navigate('FenetreConnexion')}><Text style={stylesCommuns.texte}>Ajouter</Text></Pressable>
						</View>
					</View>
				</View>

				<View style={[styles.carte]}>
					<Text style={styles.nom}>Italien BMT Melt</Text>
					<Image
						style={styles.img}
						source={require('../assets/images/italien-bmt-melt.jpg')}
						resizeMode='contain'
					/>
					<View style={styles.bas}>
						<View>
							<View style={styles.infos}>
								<Text style={styles.chif}>15 cm</Text>
								<Text style={styles.chif}>5,95 €</Text>
							</View>
							<View style={styles.infos}>
								<Text style={styles.chif}>30 cm</Text>
								<Text style={styles.chif}>8,85 €</Text>
							</View>
						</View>
						<View>
							<Pressable style={[stylesCommuns.bouton, styles.bt]} onPress={()=> this.props.navigation.navigate('FenetreConnexion')}><Text style={stylesCommuns.texte}>Ajouter</Text></Pressable>
						</View>
					</View>
				</View>

				<View style={[styles.carte]}>
					<Text style={styles.nom}>Thon</Text>
					<Image
						style={styles.img}
						source={require('../assets/images/thon.jpg')}
						resizeMode='contain'
					/>
					<View style={styles.bas}>
						<View>
							<View style={styles.infos}>
								<Text style={styles.chif}>15 cm</Text>
								<Text style={styles.chif}>5,90 €</Text>
							</View>
							<View style={styles.infos}>
								<Text style={styles.chif}>30 cm</Text>
								<Text style={styles.chif}>7,95 €</Text>
							</View>
						</View>
						<View>
							<Pressable style={[stylesCommuns.bouton, styles.bt]} onPress={()=> this.props.navigation.navigate('FenetreConnexion')}><Text style={stylesCommuns.texte}>Ajouter</Text></Pressable>
						</View>
					</View>
				</View>

				<View style={[styles.carte]}>
					<Text style={styles.nom}>Poulet</Text>
					<Image
						style={styles.img}
						source={require('../assets/images/poulet.jpg')}
						resizeMode='contain'
					/>
					<View style={styles.bas}>
						<View>
							<View style={styles.infos}>
								<Text style={styles.chif}>15 cm</Text>
								<Text style={styles.chif}>5,90 €</Text>
							</View>
							<View style={styles.infos}>
								<Text style={styles.chif}>30 cm</Text>
								<Text style={styles.chif}>7,90 €</Text>
							</View>
						</View>
						<View>
							<Pressable style={[stylesCommuns.bouton, styles.bt]} onPress={()=> this.props.navigation.navigate('FenetreConnexion')}><Text style={stylesCommuns.texte}>Ajouter</Text></Pressable>
						</View>
					</View>
				</View>

				<View style={[styles.carte]}>
					<Text style={styles.nom}>Galette de Légumes Végan</Text>
					<Image
						style={styles.img}
						source={require('../assets/images/galette-de-legumes-vegan.jpg')}
						resizeMode='contain'
					/>
					<View style={styles.bas}>
						<View>
							<View style={styles.infos}>
								<Text style={styles.chif}>15 cm</Text>
								<Text style={styles.chif}>5,30 €</Text>
							</View>
							<View style={styles.infos}>
								<Text style={styles.chif}>30 cm</Text>
								<Text style={styles.chif}>6,50 €</Text>
							</View>
						</View>
						<View>
							<Pressable style={[stylesCommuns.bouton, styles.bt]} onPress={()=> this.props.navigation.navigate('FenetreConnexion')}><Text style={stylesCommuns.texte}>Ajouter</Text></Pressable>
						</View>
					</View>
				</View>
			</View>
		);
	}
};		

const styles=StyleSheet.create({
	nom: {
		color: '#18503E',
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 8,
	},

	carte: {
		borderColor: '#18503E',
		borderWidth:2,
		width:195,
		alignItems: 'center',
		justifyContent: 'center',
		padding:8,
		height:190,
		marginTop: 8

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

	img: {
		width: 290, 
		height: 50,
		marginBottom:8
	},

	container: {
		flex:1,
		margin:0,
		padding:0,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	bt: {
		height:40,
		width:55
	},
	chif: {
		marginRight:8
	},

	/******************************** */

	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,

	  },
	  modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
		  width: 0,
		  height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	  },
	  button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2
	  },
	  buttonOpen: {
		backgroundColor: "#F194FF",
	  },
	  buttonClose: {
		backgroundColor: "#2196F3",
	  },
	  textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	  },
	  modalText: {
		marginBottom: 15,
		textAlign: "center"
	  }
})

export default FenetreSandwiches;
