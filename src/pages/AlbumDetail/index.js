import React from 'react';
import {
    Image,
    StyleSheet, TouchableOpacity
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { useSelector } from 'react-redux';

const AlbumDetail = ({ navigation }) => {
    const { photo } = useSelector(state => state.photoReducer);

    const findPhoto = item => {
        var result = photo.find(({ id }) => id == item);
        return result
    };

    return (
        <FlatGrid
            itemDimension={100}
            data={photo}
            style={styles.page}
            spacing={10}
            renderItem={({ item }) => (
                <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.navigate('PhotoDetail', { photo: findPhoto(item.id) }) }}>
                    <Image style={styles.thumbnail} source={{ uri: item.thumbnailUrl }}></Image>
                </TouchableOpacity >
            )
            }
        />
    )
}

export default AlbumDetail

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#EFF0F6',
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 15
    },

    thumbnail: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 100,
    },
})
