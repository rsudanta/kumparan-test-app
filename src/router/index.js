import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AlbumDetail, DetailPost, Home, PhotoDetail, UserProfile } from '../pages';


const Stack = createNativeStackNavigator();
const MainApp = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="DetailPost" component={DetailPost} options={{
                title: null,
                headerStyle: {
                    backgroundColor: '#F2F2F2',
                },
            }}>
            </Stack.Screen>
            <Stack.Screen name="UserProfile" component={UserProfile} options={{
                title: null,
                headerStyle: {
                    backgroundColor: '#F2F2F2',
                },
            }}>
            </Stack.Screen>
            <Stack.Screen name="AlbumDetail" component={AlbumDetail} options={{
                title: null,
                headerStyle: {
                    backgroundColor: '#F2F2F2',
                },
            }}>
            </Stack.Screen>
            <Stack.Screen name="PhotoDetail" component={PhotoDetail} options={{
                headerShown: false
            }}>
            </Stack.Screen>
        </Stack.Navigator >
    )
}

export default MainApp
