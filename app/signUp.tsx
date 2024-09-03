import { Link, Stack } from 'expo-router';

import { TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather, MaterialIcons, Entypo } from '@expo/vector-icons';

import { Text, View } from '@/components/Themed';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function SignUp() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons
                        name="arrow-back"
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
                <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
                    <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>Sign Up</Text>
                </View>
                <View>
                    <Entypo
                        name="dots-three-vertical"
                        size={20}
                        color="white"
                    />
                </View>
            </View>
            <Stack.Screen
                // options={{ title: 'Oops!' }}
                options={{ headerShown: false }} // 헤더를 숨기기 위해 headerShown을 false로 설정
            />
            <View style={[{ marginHorizontal: 'auto', width: '90%' }]}>
                <View style={[{ marginVertical: 30 }]}>
                    <Text style={[{ fontSize: 24, fontWeight: 'bold', color: '#286BF1' }]}>Sign Up</Text>
                </View>
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Full Name"
                    placeholderTextColor="#ccc"
                />
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Email"
                    placeholderTextColor="#ccc"
                />
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Password"
                    placeholderTextColor="#ccc"
                />
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Confirm Password"
                    placeholderTextColor="#ccc"
                />
            </View>
            <View style={[{ marginVertical: 70 }]}>
                <Text style={[{ textAlign: 'center', color: '#286BF1' }]}>By Creating an accound you agree to our</Text>
                <Text style={[{ textAlign: 'center', color: '#286BF1' }]}>Terms of Service and Privacy Policy</Text>
            </View>
            <Link
                href={'/home'}
                style={[{ marginHorizontal: 'auto' }]}
            >
                <View style={[{ backgroundColor: '#286BF1', width: 360, borderRadius: 10 }]}>
                    <Text style={[{ color: '#ffffff', textAlign: 'center', padding: 15 }]}>CONTINUE</Text>
                </View>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 50, // 상태바 아래로 약간 여백을 추가
        backgroundColor: '#1A1C20',
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#1A1C20',
    },
    backButton: {
        marginRight: 10,
    },

    searchContainer: {
        flexDirection: 'column',
        borderRadius: 10,
        width: '97%', // 부모 컨테이너의 너비에 맞게 설정
        position: 'relative',
    },
    searchIcon: {
        position: 'absolute',
        left: 10, // 아이콘을 왼쪽에 배치
        zIndex: 10,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },

    searchRecord: {
        marginHorizontal: 16,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: '#286BF1',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#232630',
    },
    searchRecordEl: {
        paddingVertical: 14,
        color: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#ffffff',
    },
    input: {
        height: 52,
        marginBottom: 16,
        width: '100%',
        borderColor: '#286BF1',
        borderWidth: 1,
        borderRadius: 10,
        color: '#fff',
        backgroundColor: '#232630',
        paddingLeft: 16,
    },
});
