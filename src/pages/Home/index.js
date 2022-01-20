import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Gap, HomeHeader, Post, PostSkeleton } from '../../components'
import { getPostData, getUserData, setLoading } from '../../redux/action';

const Home = ({ navigation }) => {
    const { post } = useSelector(state => state.postReducer);
    const { user } = useSelector(state => state.userReducer);
    const { isLoading } = useSelector(state => state.globalReducer);

    const dispatch = useDispatch();

    const findUser = item => {
        var result = user.find(({ id }) => id == item);
        return result
    };

    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(getUserData());
        dispatch(getPostData());
    }, [])
    return (
        <ScrollView>
            <View style={styles.page}>
                <HomeHeader />
                <Gap height={20} />
                {isLoading || user.length === 0 ? (
                    <>
                        <PostSkeleton />
                        <Gap height={20} />
                        <PostSkeleton />
                        <Gap height={20} />
                        <PostSkeleton />
                        <Gap height={20} />
                        <PostSkeleton />
                    </>) :
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
