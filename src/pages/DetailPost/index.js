import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap, Post } from '../../components'

const DetailPost = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Post
                name="Alvina Vania"
                title="Lorem Ipsum"
                body="Lorem Ipsum"
                onPressProfile={() => {
                    navigation.navigate('UserProfile');
                }}
            />
            <Gap height={10} />
            <Text style={styles.comment}>Comment</Text>
            <Gap height={10} />
            <Post
                name="Alvina Vania"
                body="Lorem Ipsum"
                onPressProfile={() => {
                    navigation.navigate('UserProfile');
                }} />
        </View>
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
