import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Coments(props) {
    const {comments} = props
    let view = null
    if(comments){
        view = comments.map((item, index) => {
            return(
                <View style={styles.commentContainer} key={index}>
                    <Text style={styles.nickname}>{item.nickname}</Text>
                    <Text style={styles.comment}>{item.comment}</Text>
                </View>
            )
        })
    }
    
    return (
    <View style={styles.container}>
      {view} 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    commentContainer: {
        flexDirection: 'row'
    },
    nickname: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        color: '#555'
    }
})