import React, { Component } from 'react';
import { Text, Image, View, ScrollView, Button, TextInput, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import ButtonStyledGreen from '../components/ButtonStyledGreen';
import ButtonStyledRed from '../components/ButtonStyledRed';
import FormRow from '../components/FormRow';
import {connect} from 'react-redux';
import {setFieldPet, savePet} from '../actions';
import { RNCamera } from 'react-native-camera';
// import CameraRollPicker from 'react-native-camera-roll-picker';
// import ImgToBase64 from 'react-native-image-base64';

class CadastroPet extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isCamera: false,
      isCameraRoll: false,
    }
  }


  viewCamera() {
    return (
      <View style={styles.containerImg}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'Nós precisamos de sua permissão para usar a câmera',
            buttonPositive: 'Aceito',
            buttonNegative: 'Cancelar'
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to record audio',
            message: 'Nós precisamos de sua permissão para gravar áudio',
            buttonPositive: 'Aceito',
            buttonNegative: 'Cancelar'
          }}
        />
        <View>
          <TouchableOpacity
          style={styles.capture}
            onPress={this.takePicture.bind(this)}>
            <Text>Tirar foto</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

  takePicture = async() => {
    if(this.camera) {
      const options = {quality: 0.5, base64:true, forceUpOrientation: true, fixOrientation: true };
      const data = await this.camera.takePictureAsync(options);
          

      if(data) {
        this.props.setFieldPet('img', data.base64);

        this.setState({
          isCamera: false,
        })
      }
    }
  }

  viewForm() {
      const {petForm, setFieldPet, savePet, navigation}= this.props;

        return (
          <ScrollView>
            <View style={styles.container}>
              <FormRow style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                  placeholder="Nome do Pet"
                  underlineColorAndroid='transparent'
                  value={petForm.nomePet }
                  onChangeText={valor => setFieldPet('nomePet', valor)}
                />
              </FormRow>

              <FormRow style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                  placeholder="Porte"
                  underlineColorAndroid='transparent'
                  value={petForm.porte }
                  onChangeText={valor => setFieldPet('porte', valor)}
                />
              </FormRow> 
              <FormRow style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                  placeholder="Tutor"
                  underlineColorAndroid='transparent'
                  value={petForm.tutor }
                  onChangeText={valor => setFieldPet('tutor', valor)}
                />
              </FormRow>
              <FormRow style={styles.inputContainer}>
                <TextInput style={styles.inputs}
                  placeholder="Animal"
                  underlineColorAndroid='transparent'
                  value={petForm.especie }
                  onChangeText={valor => setFieldPet('especie', valor)}
                />
              </FormRow>
              <View style={{paddingBottom: 15}}>
                {
                  petForm.img ?
                    <Image
                      source={{ uri: `data:image/jpeg;base64,${petForm.img}` }}
                      style={styles.img}
                    />
                    : null
                }
                <View style={{paddingTop: 5}}>
                <Button
                  title='Capturar imagem'
                  onPress={() => {
                    Alert.alert(
                      'Captura de imagem',
                      'De onde você quer pegar a imagem?',
                      [
                        {
                          text: 'Camera',
                          onPress: () => {
                            this.setState({
                              isCamera: true,
                            })
                          }
                        },
                        {
                          text: 'Galeria',
                          onPress: () => {
                            // this.setState({
                            //   isCameraRoll: true,
                            // })
                          }
                        }
                      ]
                    )
                  }} />
              </View>
              </View>
            <TouchableOpacity onPress={() => {
                savePet(petForm)
                  .then( () =>{
                    navigation.goBack();
                  })
                  }} >
                <ButtonStyledGreen label={'SALVAR'} />
              </TouchableOpacity>
              
            </View>
          </ScrollView>
        ); 
      }
      render() {

      // if(this.state.isCameraRoll) {
      //   return(this.viewGallery())
      // }

      if(this.state.isCamera) {
        return(this.viewCamera())
      }

      return (this.viewForm())
    }
  }


const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: '#009688',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderBottomWidth: 1,
    flexGrow: 1,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {

    height: 45,
    paddingLeft: 10,
    borderBottomColor: '#FFFFFF',
    flexGrow: 1,
    textAlign: "center"
  },
   img: {
    aspectRatio: 1,
    width: '100%'
  },
  container: {
    marginTop:20,
    padding: 5,
    paddingLeft: 15, 
    paddingRight: 15,
    alignItems: "center"
  },
  containerImg: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
})

const mapStateToProps =(state) =>{
  return ({
    petForm: state.petForm
  })
}
const mapDispatchToProps ={
    setFieldPet, 
    savePet
}

export default connect(mapStateToProps, mapDispatchToProps)(CadastroPet);
