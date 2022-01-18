import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Gap, HomeHeader, Post } from '../../components'

const Home = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <HomeHeader />
            <Gap height={20} />
            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                navigation.navigate('DetailPost');
            }}>
                <Post
                    numOfLineBody={2}
                    name="Vania"
                    company="XIxi"
                    title="Lorem Ipsum"
                    body="Lorem Ipsum"
                />
            </TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#EFF0F6',
        flex: 1
    },
})
