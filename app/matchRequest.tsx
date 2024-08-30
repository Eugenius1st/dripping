import { Link, Stack } from 'expo-router';
import { TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons, Octicons, MaterialIcons, Entypo } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { Text, View } from '@/components/Themed';
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useState } from 'react';

// images

const screenWidth = Dimensions.get('window').width;
export default function MatchRequest() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Stack.Screen
                // options={{ title: 'Oops!' }}
                options={{ headerShown: false }} // 헤더를 숨기기 위해 headerShown을 false로 설정
            />
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
                    <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>Match reqeust</Text>
                </View>
                <View>
                    <Entypo
                        name="dots-three-vertical"
                        size={20}
                        color="white"
                    />
                </View>
            </View>

            <View style={styles.searchContainer}>
                <Octicons
                    name="search"
                    size={20}
                    color={'#A1A2AC'}
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.input}
                    autoFocus={false}
                    placeholder="Search Match List"
                    placeholderTextColor="#A1A2AC"
                />
            </View>

            <ScrollView>
                {/* 대기명단 */}
                <View style={[{ flex: 1, gap: 14, marginHorizontal: 10 }]}>
                    <View style={styles.nameListContainer}>
                        <View>
                            <View style={styles.imageContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/best_fc.png')} // 이미지 경로
                                />
                            </View>
                            <Text style={styles.imageContainerText}>BEST FC</Text>
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/win.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                95%
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Winning
                            </Text>
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/match.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                35
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Matches
                            </Text>
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/rank.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                1
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Rank
                            </Text>
                        </View>
                        <View
                            style={[
                                {
                                    backgroundColor: '#1A1C20',
                                    width: 60,
                                    height: 80,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}
                        >
                            <View style={styles.matchIconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/ball.png')} // 이미지 경로
                                />
                            </View>

                            <View
                                style={[
                                    {
                                        backgroundColor: '#286BF1',
                                        paddingHorizontal: 4,
                                        paddingVertical: 2,
                                        marginTop: 7,
                                        borderRadius: 10,
                                    },
                                ]}
                            >
                                <Text style={[{ color: '#ffffff', fontSize: 10, fontWeight: 'bold' }]}>Match</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.nameListContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={[
                                    {
                                        resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                        width: '100%',
                                        height: '100%',
                                    },
                                ]}
                                source={require('@/assets/images/formation/JLFC_fc.png')} // 이미지 경로
                            />
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/win.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                95%
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Winning
                            </Text>
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/match.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                35
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Matches
                            </Text>
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/rank.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                1
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Rank
                            </Text>
                        </View>
                        <View
                            style={[
                                {
                                    backgroundColor: '#1A1C20',
                                    width: 60,
                                    height: 80,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}
                        >
                            <View style={styles.matchIconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/ball.png')} // 이미지 경로
                                />
                            </View>

                            <View
                                style={[
                                    {
                                        backgroundColor: '#286BF1',
                                        paddingHorizontal: 4,
                                        paddingVertical: 2,
                                        marginTop: 7,
                                        borderRadius: 10,
                                    },
                                ]}
                            >
                                <Text style={[{ color: '#ffffff', fontSize: 10, fontWeight: 'bold' }]}>Match</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.nameListContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={[
                                    {
                                        resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                        width: '100%',
                                        height: '100%',
                                    },
                                ]}
                                source={require('@/assets/images/formation/BS_fc.png')} // 이미지 경로
                            />
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/win.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                95%
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Winning
                            </Text>
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/match.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                35
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Matches
                            </Text>
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/rank.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                1
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Rank
                            </Text>
                        </View>
                        <View
                            style={[
                                {
                                    backgroundColor: '#1A1C20',
                                    width: 60,
                                    height: 80,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}
                        >
                            <View style={styles.matchIconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/ball.png')} // 이미지 경로
                                />
                            </View>

                            <View
                                style={[
                                    {
                                        backgroundColor: '#286BF1',
                                        paddingHorizontal: 4,
                                        paddingVertical: 2,
                                        marginTop: 7,
                                        borderRadius: 10,
                                    },
                                ]}
                            >
                                <Text style={[{ color: '#ffffff', fontSize: 10, fontWeight: 'bold' }]}>Match</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.nameListContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={[
                                    {
                                        resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                        width: '100%',
                                        height: '100%',
                                    },
                                ]}
                                source={require('@/assets/images/formation/king_fc.png')} // 이미지 경로
                            />
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/win.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                95%
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Winning
                            </Text>
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/match.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                35
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Matches
                            </Text>
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/rank.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                1
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Rank
                            </Text>
                        </View>
                        <View
                            style={[
                                {
                                    backgroundColor: '#1A1C20',
                                    width: 60,
                                    height: 80,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}
                        >
                            <View style={styles.matchIconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/ball.png')} // 이미지 경로
                                />
                            </View>

                            <View
                                style={[
                                    {
                                        backgroundColor: '#286BF1',
                                        paddingHorizontal: 4,
                                        paddingVertical: 2,
                                        marginTop: 7,
                                        borderRadius: 10,
                                    },
                                ]}
                            >
                                <Text style={[{ color: '#ffffff', fontSize: 10, fontWeight: 'bold' }]}>Match</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.nameListContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={[
                                    {
                                        resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                        width: '100%',
                                        height: '100%',
                                    },
                                ]}
                                source={require('@/assets/images/formation/SJ_fc.png')} // 이미지 경로
                            />
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/win.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                95%
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Winning
                            </Text>
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/match.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                35
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Matches
                            </Text>
                        </View>
                        <View>
                            <View style={styles.iconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/rank.png')} // 이미지 경로
                                />
                            </View>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 12,
                                        color: '#F7D422',
                                        marginTop: 4,
                                    },
                                ]}
                            >
                                1
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                        fontSize: 10,
                                        color: '#ffffff',
                                    },
                                ]}
                            >
                                Rank
                            </Text>
                        </View>
                        <View
                            style={[
                                {
                                    backgroundColor: '#1A1C20',
                                    width: 60,
                                    height: 80,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}
                        >
                            <View style={styles.matchIconContainer}>
                                <Image
                                    style={[
                                        {
                                            resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                            width: '100%',
                                            height: '100%',
                                        },
                                    ]}
                                    source={require('@/assets/images/formation/ball.png')} // 이미지 경로
                                />
                            </View>

                            <View
                                style={[
                                    {
                                        backgroundColor: '#286BF1',
                                        paddingHorizontal: 4,
                                        paddingVertical: 2,
                                        marginTop: 7,
                                        borderRadius: 10,
                                    },
                                ]}
                            >
                                <Text style={[{ color: '#ffffff', fontSize: 10, fontWeight: 'bold' }]}>Match</Text>
                            </View>
                        </View>
                    </View>
                    {/* <Link href="/arrangement">
                        <View
                            style={[
                                styles.button,
                                {
                                    backgroundColor: '#286BF1', // 버튼 배경 색상
                                    borderRadius: 10,
                                },
                            ]}
                        >
                            <Text style={[styles.buttonText, { color: '#243760' }]}>Login</Text>
                        </View>
                    </Link> */}
                </View>
            </ScrollView>
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
        marginHorizontal: 'auto',
        width: '95%', // 부모 컨테이너의 너비에 맞게 설정
        height: 40,
        position: 'relative',
        marginVertical: 20,
    },
    searchIcon: {
        position: 'absolute',
        left: 10, // 아이콘을 왼쪽에 배치
        zIndex: 10,
    },
    input: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 20,
        color: '#fff',
        backgroundColor: '#3B415A',
        paddingLeft: 40,
    },

    nameListContainer: {
        flexDirection: 'row',
        backgroundColor: '#3B415A',
        borderRadius: 10,
        height: 110,
        // alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    imageContainer: {
        width: 70,
        height: 70,
    },
    imageContainerText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 4,
    },
    iconContainer: {
        backgroundColor: '#A1A2AC',
        width: 50,
        height: 50,
        borderRadius: 100,
        padding: 12,
    },
    matchIconContainer: {
        width: 35,
        height: 35,
    },
    button: {
        paddingHorizontal: 45, // 버튼 안쪽 여백
        paddingVertical: 15,
        borderWidth: 1, // 테두리 두께
        borderColor: '#286BF1', // 테두리 색상
        borderStyle: 'solid', // 테두리 스타일
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});
