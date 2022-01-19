import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { Gap, Post } from '../../components'
import { getCommentByPostId } from '../../redux/action/comment';

const DetailPost = ({ navigation, route }) => {
    const { item, user } = route.params;
    const { comment } = useSelector(state => state.commentReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommentByPostId(item.id));
    }, [])
    return (
        <ScrollView>
            <View style={styles.page}>
                <Post
                    name={user.name}
                    title={item.title}
                    body={item.body}
                    onPressProfile={() => {
                        navigation.navigate('UserProfile', { user });
                    }}
                />
                <Gap height={10} />
                <Text style={styles.comment}>Comment</Text>
                <Gap height={10} />
                {
                    comment.map(itemComment => {
                        return (
                            <View key={itemComment.id}>
                                <Post
                                    comment
                                    name={itemComment.name}
                                    body={itemComment.body}
                                />
                                <Gap height={20} />

                            </View>
                        )
                    })
                }

            </View>
        </ScrollView>
    )
}

export default DetailPost

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#EFF0F6',
        flex: 1
    },
    comment: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: 'black',
        marginHorizontal: 20
    }
})
