import React from 'react'
import { Image, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import icon from '../../assets/imgs/icon.png'

export default (props) => {

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.rowConteiner}>
                    <Image source={icon} style={styles.image}/>
                    <Text style={styles.title}>If Fotos</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "ios" ? 20 : 0,
        padding: 10,
        bottom: 1,
        borderColor: "#bbb",
    },
    rowConteiner: {
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: "#000",
        // fontFamily: "shelter",
        height: 30,
        fontSize: 28
    }
})