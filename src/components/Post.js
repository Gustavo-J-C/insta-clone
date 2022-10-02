import React from "react"
import { Dimensions, Image, StyleSheet, View } from "react-native"
import Author from "./Author"
import Coments from "./Coments"

export default function Post(props) {
    const {image, comments} = props
    return(
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <Author email='fulano@gmail.com' name='manoel de lá'/>
            <Coments comments={comments} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'contain'
    }
})