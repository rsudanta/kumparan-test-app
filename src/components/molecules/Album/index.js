import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcNext } from '../../../assets'

const Album = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={styles.albumContainer}>
                <Text style={styles.albumContent}>{title}</Text>
                <IcNext />
            </View>
            <View style={styles.line} />
        </TouchableOpacity>
    )
}

export default Album

const styles = StyleSheet.create({
    albumContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center'
    },
    albumContent: {
        fontFamily: 'Poppins-Reguler',
        fontSize: 14,
        color: 'black',
        flex: 1
    },
    line: {
        borderWidth: 1,
        borderColor: '#EFF0F6'
    }
})
