import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

export default function Author(props) {

    const {email, name} = props
    return (
        <View style={styles.container}>
            <Gravatar options={{email, secure: true}} 
                style={styles.avatar}/>
            <Text style={styles.nickname}>{name}</Text>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    },
    nickname: {
        color: '#444',
        marginVertical: 10,
        fontSize: 15,
        alignSelf: 'flex-end',
        fontWeight: 'bold' 
    }
})