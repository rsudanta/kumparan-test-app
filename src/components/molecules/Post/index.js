import React from 'react'
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { Gap } from '../..'
import { IcUser, IcUserDisable } from '../../../assets'

const Post = ({ name, company, body, title, numOfLineBody, onPressProfile, comment }) => {
    return (
        <View style={styles.component}>
            <View style={styles.container}>
                {onPressProfile ?
                    <TouchableOpacity activeOpacity={0.7} onPress={onPressProfile}>
                        <View style={styles.profileContainer}>
                            <IcUser />
                            <Text numberOfLines={1} style={styles.name('#417CBF')}>{name}</Text>
                        </View>
                    </TouchableOpacity> :
                    <View style={styles.profileContainer}>
                        {comment ? (
                            <>
                                <IcUserDisable />
                                <Text numberOfLines={1} style={styles.name('#8F8F8F')}>{name}</Text>
                            </>
                        )
                            : (
                                <>
                                    <IcUser />
                                    <Text numberOfLines={1} style={styles.name('#417CBF')}>{name}</Text>
                                </>
                            )

                        }

                        {company &&
                            <>
                                <View style={styles.dot} />
                                <Text numberOfLines={1} style={styles.company}>{company}</Text>
                            </>
                        }
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
    name: color => ({
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        color: color,
        marginLeft: 8,

    }),
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
