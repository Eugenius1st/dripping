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
                    <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>Formation</Text>
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

            <View style={styles.header}>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.input}
                        autoFocus={false}
                        placeholder="검색어를 입력하세요"
                        placeholderTextColor="#ccc"
                    />
                </View>
            </View>
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
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        // paddingHorizontal: 10,
        width: '90%', // 부모 컨테이너의 너비에 맞게 설정
        height: 40,
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
        flex: 1,
        height: 50,
        borderColor: '#286BF1',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        color: '#fff',
        backgroundColor: '#232630',
        paddingLeft: 30,
    },
});
