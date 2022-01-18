import React, { useState } from 'react'
import {
    Image,
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity
} from 'react-native'
import { Dummy, IcClose } from '../../assets'
import { FlatGrid } from 'react-native-super-grid';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';




const AlbumDetail = () => {
    const [modal, setModal] = useState(null);
    const [items, setItems] = useState([
        {
            "albumId": 1,
            "id": 1,
            "title": "accusamus beatae ad facilis cum similique qui sunt",
            "url": "https://via.placeholder.com/600/92c952",
            "thumbnailUrl": "https://via.placeholder.com/150/92c952"
        },
        {
            "albumId": 1,
            "id": 2,
            "title": "reprehenderit est deserunt velit ipsam",
            "url": "https://via.placeholder.com/600/771796",
            "thumbnailUrl": "https://via.placeholder.com/150/771796"
        },
        {
            "albumId": 1,
            "id": 3,
            "title": "officia porro iure quia iusto qui ipsa ut modi",
            "url": "https://via.placeholder.com/600/24f355",
            "thumbnailUrl": "https://via.placeholder.com/150/24f355"
        },
        {
            "albumId": 1,
            "id": 4,
            "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
            "url": "https://via.placeholder.com/600/d32776",
            "thumbnailUrl": "https://via.placeholder.com/150/d32776"
        },
        {
            "albumId": 1,
            "id": 5,
            "title": "natus nisi omnis corporis facere molestiae rerum in",
            "url": "https://via.placeholder.com/600/f66b97",
            "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
        },
    ]);

    return (
        <>
            <FlatGrid
                itemDimension={100}
                data={items}
                style={styles.page}
                spacing={10}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setModal(true)}>
                        <Image style={styles.thumbnail} source={{ uri: item.thumbnailUrl }}></Image>
                    </TouchableOpacity >
                )}
            />
            <Modal visible={modal !== null} animationType="slide">

                <ReactNativeZoomableView
                    maxZoom={1.5}
                    minZoom={1}
                    zoomStep={0.5}
                    initialZoom={1}
                    captureEvent={true}>
                    <Image
                        resizeMode="contain"
                        style={styles.image}
                        source={{
                            uri: `https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80`
                        }}
                    />
                </ReactNativeZoomableView>
                <View style={styles.closeIcon}>
                    <TouchableOpacity onPress={() => setModal(null)}>
                        <IcClose />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Title</Text>
                </View>
            </Modal>
        </>
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
    container: {
        flexDirection: 'row'
    },
    thumbnail: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 100,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    titleContainer: {
        backgroundColor: ' rgba(255, 255, 255, 0.5)',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: 'black',
        marginHorizontal: 20,
        marginVertical: 10,
        textAlign: 'center',
    },
    closeIcon: {
        position: 'absolute',
        right: 5,
        marginHorizontal: 10,
        marginVertical: 15
    },
})
