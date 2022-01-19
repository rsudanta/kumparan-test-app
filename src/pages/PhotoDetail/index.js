import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ReactNativeZoomableView } from '@dudigital/react-native-zoomable-view/dist';
import { IcClose } from '../../assets';

const PhotoDetail = ({ navigation, route }) => {
    const { photo } = route.params;
    return (
        <>
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
                        uri: photo.url
                    }}
                />
            </ReactNativeZoomableView>
            <View style={styles.closeIcon}>
                <TouchableOpacity onPress={() => { navigation.goBack(); }}>
                    <IcClose />
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{photo.title}</Text>
            </View>
        </>
    );
};

export default PhotoDetail;

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
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
});
