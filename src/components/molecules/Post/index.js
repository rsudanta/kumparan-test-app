import React from 'react'
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { Gap } from '../..'
import { IcUser } from '../../../assets'

const Post = ({ name, company, body, title, numOfLineBody, onPressProfile }) => {
    return (
        <View style={styles.component}>
            <View style={styles.container}>
                {onPressProfile ?
                    <TouchableOpacity activeOpacity={0.7} onPress={onPressProfile}>
                        <View style={styles.profileContainer}>
                            <IcUser />
                            <Text numberOfLines={1} style={styles.name}>{name}</Text>
                        </View>
                    </TouchableOpacity> :
                    <View style={styles.profileContainer}>
                        <IcUser />
                        <Text numberOfLines={1} style={styles.name}>{name}</Text>
                        <View style={styles.dot} />
                        <Text numberOfLines={1} style={styles.company}>{company}</Text>
                    </View>}
                <Gap height={10} />
                <View>
                    {title ?
                        <View>
                            <Text style={styles.title}>{title}</Text>
                            <Gap height={4} />
                        </View> : <></>}
                    <Text numberOfLines={numOfLineBody} style={styles.body}>{body}</Text>
                </View>
            </View>
        </View>

    )
}

export default Post

const styles = StyleSheet.create({
    component: {
        backgroundColor: 'white',
    },
    container: {
        marginHorizontal: 20,
        marginVertical: 15
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        color: '#417CBF',
        marginLeft: 8
    },
    dot: {
        height: 4,
        width: 4,
        borderRadius: 4,
        backgroundColor: '#C4C4C4',
        marginHorizontal: 8
    },
    company: {
        fontFamily: 'Poppins-Light',
        fontSize: 13,
        color: 'black'
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        color: 'black'
    },
    body: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        color: 'black'
    }
})
