import { Link, Stack } from 'expo-router';
import { TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons, Feather, MaterialIcons, Entypo } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import { Text, View } from '@/components/Themed';
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useState } from 'react';

// images

const screenWidth = Dimensions.get('window').width;
export default function Formation() {
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

            <View style={[{ marginTop: 16, flex: 1 }]}>
                <View style={[{ flex: 1, gap: 24, marginHorizontal: 10 }]}>
                    {/* 포메이션 배치 */}
                    <View style={styles.formationContainer}>
                        <View style={styles.titleContainer}>
                            <Text
                                style={[
                                    {
                                        color: '#ffffff',
                                        alignItems: 'center',
                                        fontWeight: 'bold',
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        fontSize: 16,
                                    },
                                ]}
                            >
                                포메이션 배치
                            </Text>
                            <Link href={'/arrangement'}>
                                <MaterialIcons
                                    name="arrow-forward-ios"
                                    size={20}
                                    color="#286BF1"
                                />
                            </Link>
                        </View>
                        <View style={styles.nameListContainer}>
                            <Link href={'/arrangement'}>
                                <View style={styles.iconContainer}>
                                    <View style={[{ width: 35, height: 55 }]}>
                                        <Image
                                            style={[{ width: '100%', height: '100%', resizeMode: 'contain' }]}
                                            source={require('@/assets/images/formation/personal.png')} // 이미지 경로
                                        />
                                    </View>
                                    <Text
                                        style={[{ color: '#ffffff', fontSize: 12, fontWeight: 'bold', marginTop: 5 }]}
                                    >
                                        개인
                                    </Text>
                                </View>
                            </Link>
                            <Link href={'/arrangement'}>
                                <View style={styles.iconContainer}>
                                    <View style={[{ width: 50, height: 55 }]}>
                                        <Image
                                            style={[{ width: '100%', height: '100%', resizeMode: 'contain' }]}
                                            source={require('@/assets/images/formation/team.png')} // 이미지 경로
                                        />
                                    </View>
                                    <Text
                                        style={[{ color: '#ffffff', fontSize: 12, fontWeight: 'bold', marginTop: 5 }]}
                                    >
                                        단체
                                    </Text>
                                </View>
                            </Link>
                            <Link href={'/arrangement'}>
                                <View style={styles.iconContainer}>
                                    <View style={[{ width: 50, height: 55 }]}>
                                        <Image
                                            style={[{ width: '100%', height: '100%', resizeMode: 'contain' }]}
                                            source={require('@/assets/images/formation/potential.png')} // 이미지 경로
                                        />
                                    </View>
                                    <Text
                                        style={[{ color: '#ffffff', fontSize: 12, fontWeight: 'bold', marginTop: 5 }]}
                                    >
                                        전력
                                    </Text>
                                </View>
                            </Link>
                        </View>
                    </View>

                    {/* 매치요청 */}
                    <View style={styles.formationContainer}>
                        <View style={styles.titleContainer}>
                            <Text
                                style={[
                                    {
                                        color: '#ffffff',
                                        alignItems: 'center',
                                        fontWeight: 'bold',
                                        paddingHorizontal: 10,
                                        paddingVertical: 10,
                                        fontSize: 16,
                                    },
                                ]}
                            >
                                매치요청
                            </Text>
                            <Link href={'/matchRequest'}>
                                <MaterialIcons
                                    name="arrow-forward-ios"
                                    size={20}
                                    color="#286BF1"
                                />
                            </Link>
                        </View>
                        <View style={styles.nameListContainer}>
                            <Link href={'/matchRequest'}>
                                <View style={styles.iconContainer}>
                                    <View style={[{ width: 60, height: 60 }]}>
                                        <Image
                                            style={[{ width: '100%', height: '100%', resizeMode: 'contain' }]}
                                            source={require('@/assets/images/formation/best_fc.png')} // 이미지 경로
                                        />
                                    </View>
                                    <View
                                        style={[
                                            {
                                                backgroundColor: '#286BF1',
                                                paddingHorizontal: 10,
                                                paddingVertical: 4,
                                                marginTop: 7,
                                                borderRadius: 10,
                                            },
                                        ]}
                                    >
                                        <Text style={[{ color: '#ffffff', fontSize: 10, fontWeight: 'bold' }]}>
                                            Match
                                        </Text>
                                    </View>
                                </View>
                            </Link>
                            <Link href={'/matchRequest'}>
                                <View style={styles.iconContainer}>
                                    <View style={[{ width: 60, height: 60 }]}>
                                        <Image
                                            style={[{ width: '100%', height: '100%', resizeMode: 'contain' }]}
                                            source={require('@/assets/images/formation/JLFC_fc.png')} // 이미지 경로
                                        />
                                    </View>
                                    <View
                                        style={[
                                            {
                                                backgroundColor: '#286BF1',
                                                paddingHorizontal: 10,
                                                paddingVertical: 4,
                                                marginTop: 7,
                                                borderRadius: 10,
                                            },
                                        ]}
                                    >
                                        <Text style={[{ color: '#ffffff', fontSize: 10, fontWeight: 'bold' }]}>
                                            Match
                                        </Text>
                                    </View>
                                </View>
                            </Link>
                            <Link href={'/matchRequest'}>
                                <View style={styles.iconContainer}>
                                    <View style={[{ width: 60, height: 60 }]}>
                                        <Image
                                            style={[{ width: '100%', height: '100%', resizeMode: 'contain' }]}
                                            source={require('@/assets/images/formation/BS_fc.png')} // 이미지 경로
                                        />
                                    </View>
                                    <View
                                        style={[
                                            {
                                                backgroundColor: '#286BF1',
                                                paddingHorizontal: 10,
                                                paddingVertical: 4,
                                                marginTop: 7,
                                                borderRadius: 10,
                                            },
                                        ]}
                                    >
                                        <Text style={[{ color: '#ffffff', fontSize: 10, fontWeight: 'bold' }]}>
                                            Match
                                        </Text>
                                    </View>
                                </View>
                            </Link>
                        </View>
                    </View>
                    {/* 메치된 경기 영상(유료) */}
                    <View
                        style={[
                            {
                                backgroundColor: '#3B415A',
                                paddingLeft: 10,
                                paddingVertical: 10,
                                borderRadius: 10,
                            },
                        ]}
                    >
                        <View style={[{ marginRight: 5, ...styles.titleContainer }]}>
                            <Text
                                style={[
                                    {
                                        color: '#ffffff',
                                        alignItems: 'center',
                                        fontWeight: 'bold',
                                        paddingHorizontal: 10,
                                        paddingVertical: 5,
                                        fontSize: 16,
                                    },
                                ]}
                            >
                                매치된 경기 영상(유료)
                            </Text>
                            <Link href={'/matchVideo'}>
                                <MaterialIcons
                                    name="arrow-forward-ios"
                                    size={20}
                                    color="#286BF1"
                                />
                            </Link>
                        </View>
                        <ScrollView
                            horizontal={true}
                            contentContainerStyle={styles.videoListContainer}
                        >
                            <View style={[{ width: 260, height: 150, borderRadius: 10, position: 'relative' }]}>
                                <Image
                                    style={[{ width: '100%', height: '100%', borderRadius: 10 }]}
                                    source={require('@/assets/images/formation/matchVideo1.png')} // 이미지 경로
                                />
                                <View
                                    style={[
                                        {
                                            backgroundColor: '#00000090',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: 260,
                                            height: 150,
                                            borderRadius: 10,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        },
                                    ]}
                                >
                                    <Feather
                                        name="lock"
                                        size={28}
                                        color="white"
                                    />
                                </View>
                            </View>
                            <View
                                style={[
                                    { width: 260, height: 150, borderRadius: 10, marginLeft: 20, position: 'relative' },
                                ]}
                            >
                                <Image
                                    style={[{ width: '100%', height: '100%', borderRadius: 10 }]}
                                    source={require('@/assets/images/formation/matchVideo1.png')} // 이미지 경로
                                />
                                <View
                                    style={[
                                        {
                                            backgroundColor: '#00000090',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: 260,
                                            height: 150,
                                            borderRadius: 10,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        },
                                    ]}
                                >
                                    <Feather
                                        name="lock"
                                        size={28}
                                        color="white"
                                    />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 60, // 상태바 아래로 약간 여백을 추가
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

    formationContainer: {
        backgroundColor: '#3B415A',
        padding: 10,
        borderRadius: 10,
    },

    titleContainer: {
        paddingHorizontal: 5,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameListContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        height: 120,
        paddingHorizontal: 10,
        marginTop: 6,
        justifyContent: 'space-between',
    },

    imageContainerText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 4,
    },
    iconContainer: {
        backgroundColor: '#0F1019',
        width: 110,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    matchIconContainer: {
        backgroundColor: '#1A1C20',
        width: 60,
        height: 80,
    },
    videoFormationContainer: {
        backgroundColor: '#3B415A',
        paddingLeft: 10,
        borderRadius: 10,
    },
    videoListContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        height: 165,
        marginTop: 10,
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
});
