import { SafeAreaView, View } from 'react-native';
import Header from './src/components/Header';
import Post from './src/components/Post';

export default function App() {

    const comments =[{
    nickname: 'Joana Elena Silva',
    comment: 'Excelente Foto'
    },{
        nickname: 'Rafael Alberto',
        comment: 'Muito ruim faço melhor'
    }]
    return (
        <SafeAreaView>
            <View>
                <Header />
                <Post image={require('./assets/imgs/fence.jpg')} comments={comments}/>
            </View>
        </SafeAreaView>
    );
}
