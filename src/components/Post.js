import React from "react"
import { Dimensions, Image, StyleSheet, View } from "react-native"
import { connect } from "react-redux"
import AddComment from "./AddComment"
import Author from "./Author"
import Coments from "./Coments"

function Post(props) {
    const {image, comments, email, nickname} = props
    const addComment = props.name ? <AddComment postId={props.id} /> : null
    return(
        <View style={styles.container}>
            <Image source={typeof(image) === "number"? image : {uri: image}} style={styles.image}/>
            <Author email={email} name={nickname}/>
            <Coments comments={comments} />
            {addComment}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'contain'
    }
})

const mapStateToProps = ({user}) => {
    return {
        name: user.name
    }
}

export default connect(mapStateToProps)(Post)