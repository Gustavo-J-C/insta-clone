import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback as TWF,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

export default function AddComment(props) {
    const [comment, setComment] = useState("")
    const [editMode, setEditmode] = useState(false)

    const handleEvent = () => {
        Alert.alert('Adicionado', comment)
    }
    let commentArea = ''
    if (editMode) {
        commentArea = (
            <View style={[StyleSheet.container, {display: 'flex', flexDirection: 'row'}]}>
                <TWF onPress={() => setEditmode(false)}>
                    <Icon style={styles.icon} name='times' size={25} color='#555'/>
                </TWF>
                <TextInput style={styles.input}
                    placeholder='Digite o comentario'
                    autoFocus={true}
                    value={comment}
                    onChangeText={e => setComment(e)}
                    onSubmitEditing={handleEvent}/>
            </View>
        )
    } else {
        commentArea = (
            <TWF onPress={() => setEditmode(true)}>
                <View style={styles.container}>
                    <Icon style={styles.icon}name='comment-o' size={25} color='#555'/>
                    <Text style={styles.caption}>Adicione um comentario...</Text>
                </View>
            </TWF>
        )
    }
    return (
        <View>
            {commentArea}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    icon: {
        marginLeft: 12
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#ccc'
    },
    input: {
        width: '90%',
        marginLeft: 12
    }
})