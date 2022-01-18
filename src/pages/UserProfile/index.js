import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Album, Gap, ProfileHeader } from '../../components'

const UserProfile = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <ProfileHeader name="Vania" email="hehe@maa.cas" address="Jl. Xixixi" company="Office" />
            <Gap height={10} />
            <Text style={styles.album}>List Album</Text>
            <Gap height={10} />
            <Album title="Lorem Ipsum Hehe"
                onPress={() => {
                    navigation.navigate('AlbumDetail')
                }} />
            <Album title="Lorem Ipsum Hehe" />
            <Album title="Lorem Ipsum Hehe" />
        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#EFF0F6',
        flex: 1
    },
    album: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: 'black',
        marginHorizontal: 20
    },
})
