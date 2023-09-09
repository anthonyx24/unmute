import React from 'react';
import UserCard from '../components/userCard';

import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import RadarIcon from '../assets/icons/radar.svg';
import CloseIcon from '../assets/icons/close.svg';

export default function ExploreScreen({navigation}){
    
    /* Loading in custom fonts */
    const [fontsLoaded, fontError] = useFonts({
        'BR-Medium': require('../assets/fonts/BRMedium.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded || fontError) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container}>
            <LinearGradient colors={['#D562FF', '#FFC7FF']} style={styles.background} start={[1, 1]} end={[0, 0]}>
                <SafeAreaView>
                    <ScrollView>
                        
                        {/* Header */}
                        <View style={styles.headerWrapper}>
                            <Text style={styles.headerText} alignSelf={'flex-start'}>explore</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                <CloseIcon width={25} height={25}/>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.searchBar}>
                            <TextInput placeholder={'ENTER SONG, USER, ARTIST, ETC'} style={styles.searchInput}/>
                        </View>

                        {/* Body */}
                        <RadarIcon marginTop={40} alignSelf={'center'}/>
                        <Text style={styles.contentText}>TAP TO SEE WHAT USERS{"\n"}NEARBY ARE LISTENING TO</Text>
                        
                        {/* List of nearby users */}
                        <View style={styles.usersWrapper}>
                            <Text style={styles.usersText}>users nearby</Text>
                            <ScrollView marginTop={3}>
                                <UserCard />
                                <UserCard />
                                <UserCard />
                                <UserCard />
                                <UserCard />
                            </ScrollView>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        // backgroundColor: '#D562FF'
    },
    background: {
        flex: 1,
        flexDirection: 'row'
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginHorizontal: 30,
        width: 330,
    },
    headerText: {
        fontFamily: 'BR-Medium',
        fontSize: 40,
        color: 'white'
    },
    searchBar: {
        backgroundColor: 'white',
        height: 35,
        width: 330,
        borderRadius: 10,
        marginTop: 7,
        marginHorizontal: 30,
        justifyContent: 'center'
    },
    searchInput: {
        marginHorizontal: 10,
        fontFamily: 'BR-Medium',
        fontSize: 14
    },
    contentText: {
        marginVertical: 20,
        alignSelf: 'center',
        fontFamily: 'BR-Medium',
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    },
    usersWrapper: {
        backgroundColor: '#68D0E4',
        width: 330,
        height: 300,
        alignSelf: 'center',
        borderRadius: 20
    },
    usersText: {
        fontFamily: 'BR-Medium',
        fontSize: 22,
        color: 'white',
        marginLeft: 15,
        marginTop: 7
    }
    
})