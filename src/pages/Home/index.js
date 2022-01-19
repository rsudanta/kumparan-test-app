import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Gap, HomeHeader, Post } from '../../components'
import { getPostData, getUserData } from '../../redux/action';

const Home = ({ navigation }) => {
    const { post } = useSelector(state => state.postReducer);
    const { user } = useSelector(state => state.userReducer);

    const dispatch = useDispatch();

    const findUser = item => {
        var result = user.find(({ id }) => id == item);
        return result
    };

    useEffect(() => {
        dispatch(getUserData());
        dispatch(getPostData());
    }, [])
    return (
        <ScrollView>
            <View style={styles.page}>
                <HomeHeader />
                <Gap height={20} />
                {post.length === 0 ? (<Text>Hehe</Text>) :
                    post.map(item => {
                        return (
                            <View key={item.id}>
                                <TouchableOpacity activeOpacity={0.7} onPress={() => {
                                    dispatch({ type: 'SET_COMMENT', value: [] });
                                    dispatch({ type: 'SET_ALBUM', value: [] });
                                    navigation.navigate('DetailPost', { item, user: findUser(item.userId) });
                                }}>
                                    <Post
                                        numOfLineBody={2}
                                        name={findUser(item.userId).name}
                                        company={findUser(item.userId).company.name}
                                        title={item.title}
                                        body={item.body}
                                    />
                                </TouchableOpacity>
                                <Gap height={20} />
                            </ View>
                        )
                    })}
            </View >
        </ScrollView >
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#EFF0F6',
        flex: 1
    },
})
