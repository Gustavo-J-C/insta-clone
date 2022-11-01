import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Post from '../components/Post';

function Feed(props) {
    return(
        <View style={styles.container}>
            <Header />
            <FlatList data={props.posts}
                keyExtractor={item => `${item.id}`}
                renderItem={({item}) => <Post key={item.id} {...item}/> }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
}) 

const mapStateToProps = ({posts}) => {
    return {
        posts: posts.posts
    }
}
export default connect(mapStateToProps)(Feed)