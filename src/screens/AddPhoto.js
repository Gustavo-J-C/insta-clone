import React, { useState, useRef } from 'react'
import { Camera, CameraType, takePictureAsync } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { connect } from 'react-redux';
import { addPost} from '../store/actions/posts'
import { Alert, Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function AddPhoto(props) {
    const [type, setType] = useState(CameraType.back);
    const [onCamera, setOnCamera] = useState(false)
    const {navigation} = props
    const [comment, setComment] = useState('')
    const [image, setImage  ] = useState(null)

    const noUser = "Você não está logado"

    const ref = useRef(null)

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        if (!props.name) {
            Alert.alert('Falha', noUser)
        } else {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                quality: 1,
            });
        
            if (!result.cancelled) {
                setImage(result.uri);
            }
        }
    };
    
    const pickCamera = async () => {
        if (!props.name ) {
            Alert.alert('Falha', noUser)
        } else {
            const {granted} =  await Camera.requestCameraPermissionsAsync()
            if (granted) {
                // let result = await ImagePicker.launchCameraAsync({
                //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
                //     allowsEditing: true
                // })
                setOnCamera(true)
                // if(!result.cancelled){
                //     setImage(result.uri)
                //     console.log(result);
                // }
            }else{
                Alert.alert("you need to give up permission to work")
            }
        }
    }

    const takePhoto = async () => {
        const options = { quality: 1, base64: true, fixOrientation: true, 
            exif: true};
        const photo = await ref.current.takePictureAsync()
        setImage(photo.uri)
    }

    const save = async () => {
        if (!props.name) {
            Alert.alert('Falha', noUser)   
        } else {
            props.onAddPost({
                id: Math.random(),
                nickname: props.name,
                email: props.email,
                image: image,
                comments: [{
                    nickname: props.nickname,
                    comment: comment
                }]
            })

            setImage(null)
            setComment('')
            navigation.navigate('Feed')
        }
    }

    return(
        <ScrollView>
            {onCamera && <Modal style={styles.container}
                animationType='slide'
                transparent={false}
                visible={true}>
                    <View>
                        <Camera
                        ref={ref}
                        quality={1}
                        ratio='16:9'
                        style={{height: '95%', width: '100%'}}
                        type={type}>
                            <View style={{backgroundColor: 'transparent', flexDirection: 'row', height: '100%', width: '100%'}}>                                
                                <TouchableOpacity 
                                style={{position: 'absolute', bottom:20, left: 20}}
                                onPress={() => setOnCamera(false)}>
                                    <Text style={{color: 'white'}}>close</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={{position: 'absolute', bottom:20, left: '90%'}}
                                onPress={() => setType(type == CameraType.back ? 
                                    CameraType.front : CameraType.back
                                    )}>
                                    <Text style={{color: 'white'}}>Flip</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                style={{position: 'absolute', bottom:20, left: '47%'}}
                                onPress={takePhoto}>
                                    <Text style={{color: 'white'}}>take</Text>
                                </TouchableOpacity>
                            </View>
                        </Camera>
                    </View>
                </Modal>}
            <View style={styles.container}>
                <Text style={styles.title}>Compartilhe sua imagem</Text>
                <View style={styles.imageContainer}>
                    <Image source={{uri: image}} style={styles.image}/>
                </View>
                <TextInput 
                    editable={props.name != null}
                    placeholder='Algum comentario?'
                    style={styles.input}
                    onChangeText={com => setComment(com)}/>
                <View style={styles.choicesContainer}>
                    <Text style={styles.butttonsTitle}>Escolha uma foto</Text>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button} onPress={pickImage}>
                            <Text style={styles.butttonText}>Arquivos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={pickCamera}>
                            <Text style={styles.butttonText}>Foto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={save} style={styles.button}>
                            <Text style={styles.butttonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
    },
    butttonsTitle: {
        textAlign: 'center',
        fontSize: 17,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width * 3/4,
        backgroundColor: '#EEE',
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'center',
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4',
        borderRadius : 5,
    },
    butttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FFF'
    },
    choicesContainer:{
        flexDirection: 'column',
        alignContent: 'center',
        width: '90%',
        marginTop: 30,
        padding: 5,
        
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        padding: 10,
    },
    input: {
        marginTop: 20,
        width: '90%',
    }
})

const mapStateToProps = ({user}) => {
    return {
        email: user.email,
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)