import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ImageBackground,
        TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import ProfileIcon from '../assets/icons/profile.svg';
import ExploreButton from '../assets/icons/explorebutton.svg';
import SongWidget from '../assets/images/songwidget.svg';
import UserIcon from '../assets/icons/current.svg';

import BgImage from '../assets/images/bg.jpg';
import SongImg from '../assets/images/song.png';

// SplashScreen.preventAutoHideAsync();

export default function HomeScreen({navigation}){

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
                
        <View style={styles.root}>
            <ImageBackground source={BgImage} style={styles.container}>
                {/* Header */}
                <View style={styles.headerWrapper}>
                    {/* Profile Button */}
                    <SafeAreaView style={styles.profileIcon}>
                        <ProfileIcon/>
                        {/* <Image source={ProfileIcon}/> */}
                    </SafeAreaView>
                    {/* Explore Button */}
                    <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
                        <ExploreButton style={styles.exploreButton}/>
                        {/* <Image source={ExploreButton} style={styles.exploreButton}/> */}
                    </TouchableOpacity> 
                </View>

                {/* User Icon */}
                <UserIcon style={styles.userIcon}/>
                {/* <Image source={UserIcon}/> */}

                {/* Footer */}
                <View style={styles.footerWrapper}>
                    <Image source={SongImg} style={styles.footerImage}/>
                    <View style={styles.footerTextWrapper}>
                        <Text style={styles.footerDetailText}>YOU ARE CURRENTLY PLAYING</Text>
                        <Text style={styles.footerText}>Remain</Text>
                        <Text style={styles.footerText}>Christian Kuria</Text>
                    </View>
                </View>

            </ImageBackground>
        </View>
        
    )
}

const styles = StyleSheet.create({
    root: {flex: 1},
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    profileIcon: {
        width: 60,
        height: 60,
        paddingHorizontal: 20,
    },
    exploreButton: {
        width: 112,
        height: 118,
    },
    songWidget: {
        width: 369,
        height: 106,
        alignSelf: 'center',
    },
    userIcon: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    footerWrapper: {
        backgroundColor: 'rgba(255,255,255,1)',
        flexDirection: 'row',
        width: 350,
        height: 120,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        // alignItems: 'center',
        marginBottom: 40,
        borderRadius: 20,
    },
    footerImage: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginLeft: 15
    },
    footerTextWrapper: {
        fontFamily: 'BR-Medium',
        justifyContent: 'space-evenly',
        marginVertical: 30,
        marginLeft: 20,
    },
    footerText: {
        fontFamily: 'BR-Medium',
        fontSize: 20,
    },
    footerDetailText: {
        fontFamily: 'BR-Medium',
        color: '#D562FF',
        fontSize: 10,
    }
    
});