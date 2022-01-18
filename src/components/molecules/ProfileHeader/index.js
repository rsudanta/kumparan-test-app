import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap } from '../..'
import { IcAddress, IcCompany } from '../../../assets'

const ProfileHeader = ({ name, email, address, company }) => {
    return (
        <View style={styles.component}>
            <View style={styles.container}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
                <Gap height={14} />
                <View style={styles.labelContainer}>
                    <IcAddress />
                    <Text style={styles.label}>{address}</Text>
                </View>
                <Gap height={8} />
                <View style={styles.labelContainer}>
                    <IcCompany />
                    <Text style={styles.label}>{company}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileHeader

const styles = StyleSheet.create({
    component: {
        backgroundColor: 'white',
    },
    container: {
        marginHorizontal: 20,
        marginVertical: 15
    },
    name: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: 'black',
    },
    email: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        color: 'black',
    },
    labelContainer: {
        flexDirection: 'row',
    },
    label: {
        fontFamily: 'Poppins-Light',
        fontSize: 13,
        color: 'black',
        marginLeft: 8

    }

})
