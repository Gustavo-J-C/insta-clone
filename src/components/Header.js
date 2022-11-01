import React from 'react'
import { connect } from 'react-redux';
import {Gravatar} from 'react-native-gravatar';
import { Dimensions, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import icon from '../../assets/imgs/icon.png'

function Header(props) {

    const {name} = props || 'Anonymous'
    const gravatar = props.email ?
        <Gravatar options={{email: props.email, secure:true}}/>
        : null
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.rowConteiner}>
                    <Image source={icon} style={styles.image}/>
                    <Text style={styles.title}>If Fotos</Text>
                </View>
                <View style={styles.userContainer}>
                    <Text style={styles.user}>{name}</Text>
                    {gravatar}
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === "ios" ? 20 : 0,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        alignItems: 'flex-start',
        borderColor: "#BBB",
        width: Dimensions.get('window').width
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
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        fontSize: 10,
        paddingRight: 15,
        color: '#888'
    }
})

const mapStateToProps = ({user}) => {
    return{
        email: user.email,
        name: user.name
    }
}

export default connect(mapStateToProps)(Header)