import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Nome' style={styles.input}
                autoFocus={true}
                value={name}
                onChangeText={e => setName(e)}/>
            <TextInput 
                placeholder='Email' style={styles.input}
                autoFocus={true} keyboardType="email-address"
                value={email}
                onChangeText={e => setEmail(e)}/>
            <TextInput 
                placeholder='Senha' style={styles.input}
                secureTextEntry={true}
                autoFocus={true} value={password}
                onChangeText={e => setPassword(e)}/>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    }
})