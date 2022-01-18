import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Album = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={styles.albumContainer}>
                <Text style={styles.albumContent}>{title}</Text>
                <View style={styles.line} />
            </View>
        </TouchableOpacity>
    )
}

export default Album

const styles = StyleSheet.create({
    albumContainer: {
        backgroundColor: 'white',
    },
    albumContent: {
        marginHorizontal: 20,
        marginVertical: 15,
    },
    line: {
        borderWidth: 1,
        borderColor: '#EFF0F6'
    }
})
