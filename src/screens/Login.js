import { connect } from 'react-redux'
import {login} from '../store/actions/user'
import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

function Login(props) {
    const {navigation} = props
    const [email, setEmail] = useState('')
    const [name, setName] = useState('Temporario')
    const [password, setPassword] = useState('')

    const login = () => {
        props.onLogin({name, email, password})
        navigation.navigate('Profile')
    }

    return (
        <View style={styles.container}>
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
            <TouchableOpacity onPress={login} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.button}>
                <Text style={styles.buttonText}>Criar nova conta</Text>
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

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)