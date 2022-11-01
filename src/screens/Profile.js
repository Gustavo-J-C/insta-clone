import { useNavigation } from '@react-navigation/native'
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

function Profile(props) {

    const navigation = useNavigation();
    const logout = () => {
        props.onLogout()
        navigation.navigate('Auth')
    }

    const options = {
        email: props.email,
        secure: true,
    }
    return (
        <View style={styles.container}>
            <Gravatar options={options} style={styles.avatar} />
            <Text style={styles.nickname}>{props.name}</Text>
            <Text style={styles.email}>{props.email}</Text>
            <TouchableOpacity onPress={logout} style={styles.button}>
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize:30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 25
    },
    button: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
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
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)