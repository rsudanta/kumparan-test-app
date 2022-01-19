import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Album, Gap, ProfileHeader } from '../../components'
import { getAlbumByUserId } from '../../redux/action/album'
import { getPhotoByAlbumId } from '../../redux/action/photo'

const UserProfile = ({ navigation, route }) => {
    const { user } = route.params
    const { album } = useSelector(state => state.albumReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAlbumByUserId(user.id));
    }, []);
    return (
        <ScrollView>
            <View style={styles.page}>
                <ProfileHeader
                    name={user.name}
                    email={user.email}
                    address={`${user.address.street}, ${user.address.city}`}
                    company={user.company.name}
                />
                <Gap height={10} />
                <Text style={styles.album}>List Album</Text>
                <Gap height={10} />
                {
                    album.map(albumItem => {
                        return (
                            <Album title={albumItem.title}
                                onPress={() => {
                                    dispatch({ type: 'SET_PHOTO', value: [] });
                                    dispatch(getPhotoByAlbumId(albumItem.id));
                                    navigation.navigate('AlbumDetail')
                                }} />)
                    })
                }
            </View>
        </ScrollView>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#EFF0F6',
        flex: 1,
    },
    album: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: 'black',
        marginHorizontal: 20
    },
})
