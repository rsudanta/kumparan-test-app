import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeHeader = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Timeline</Text>
                <Text style={styles.subtitle}>Discover your happiness</Text>
            </View>
        </View>
    );
};

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white',
    },
    title: { fontSize: 22, fontFamily: 'Poppins-Medium', color: 'black' },
    subtitle: { fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3' },
});
