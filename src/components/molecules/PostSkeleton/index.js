import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const PostSkeleton = () => {
    return (
        <SkeletonPlaceholder>
            <View style={styles.container}>
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <View style={styles.name} />
                        <View style={styles.company} />
                    </View>
                </View>
                <View style={{ marginTop: 14 }} />
                <View style={styles.content} />
                <View style={styles.content} />
                <View style={{ marginTop: 8 }} />
                <View style={styles.content} />
                <View style={styles.content} />
            </View>
        </SkeletonPlaceholder>
    );
};

export default PostSkeleton;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginHorizontal: 20,
    },
    name: { width: 120, height: 14, borderRadius: 4 },
    company: { width: 120, height: 14, borderRadius: 4, marginLeft: 12 },
    content: { width: '100%', height: 15, borderRadius: 4, marginTop: 8 },
});
