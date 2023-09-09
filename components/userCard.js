import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { getUsers } from '../api'
// import user from '../../unmute-sanity/schemas/user';

import ProfileIcon from '../assets/icons/person1.svg'

export default function UserCard(){
    // const [activeUser, setActiveUser] = useState(null);
    // let [users, setUsers] = useState([]);

    // useEffect(()=>{
    //     getUsers().then(data=>{
    //         setUsers(data);
    //         // console.log('data: ', data[0].name)
    //     })
    // },[])

    return (
        // <View>
        //     {
        //         users.map(user=>{
        //             let isActive = user._id==activeUser;
        //             return (
        //                 <View key={user.__id}>
        //                     <Text>{user.name}</Text>
        //                 </View>
        //             )
        //         })
        //     }
        // </View>   
        <View style={styles.container}>
            <ProfileIcon style={styles.profileIcon}/>
            <View style={styles.textWrapper}>
                <Text style={styles.userText}>USER.NAME</Text>
                <Text style={styles.userText}>0.1 mi</Text>
            </View>
        </View>   
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        width: 300,
        height: 75,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        borderRadius: 10,
        marginVertical: 5
    },
    textWrapper: {
        fontFamily: 'BR-Medium',
        justifyContent: 'space-evenly',
        marginVertical: 30,
        marginLeft: 10,
        justifyContent: 'center'
    },
    profileIcon: {
        alignSelf: 'center',
        marginLeft: 10
    },
    userText: {
        fontSize: 12,
        // alignSelf: 'center',
        textAlign: 'left',
    },
})