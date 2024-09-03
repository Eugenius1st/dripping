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
export default function MatchVideo() {
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
                    <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>My Video</Text>
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
                <View style={[{ gap: 24, marginHorizontal: 10 }]}>
                    {/* 메치된 경기 영상(유료) */}
                    <View
                        style={[
                            {
                                // backgroundColor: '#3B415A',
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

                            <Text style={[{ color: '#286BF1' }]}>view all</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            contentContainerStyle={styles.videoListContainer}
                        >
                            <View style={[{ width: 320, height: 180, borderRadius: 10, position: 'relative' }]}>
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
                                            width: 320,
                                            height: 180,
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
                                    { width: 320, height: 180, borderRadius: 10, marginLeft: 20, position: 'relative' },
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
                                            width: 320,
                                            height: 180,
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

                <View style={[{ gap: 24, marginHorizontal: 10 }]}>
                    {/* 메치된 경기 영상(유료) */}
                    <View
                        style={[
                            {
                                // backgroundColor: '#3B415A',
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
                                맞춤 추천 기술 영상
                            </Text>

                            <Text style={[{ color: '#286BF1' }]}>view all</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            contentContainerStyle={styles.videoRecommandListContainer}
                        >
                            <View style={[{ width: 100, height: 150, marginRight: 10 }]}>
                                <Image
                                    style={[{ width: '100%', height: '100%', borderRadius: 10 }]}
                                    source={require('@/assets/images/matchVideo/techVideo3.png')} // 이미지 경로
                                    resizeMode="cover" // 이미지의 가운데를 맞추기 위해 cover 사용
                                />
                            </View>
                            <View style={[{ width: 100, height: 150, marginRight: 10 }]}>
                                <Image
                                    style={[{ width: '100%', height: '100%', borderRadius: 10 }]}
                                    source={require('@/assets/images/matchVideo/techVideo1.jpeg')} // 이미지 경로
                                    resizeMode="cover" // 이미지의 가운데를 맞추기 위해 cover 사용
                                />
                            </View>
                            <View style={[{ width: 100, height: 150, marginRight: 10 }]}>
                                <Image
                                    style={[{ width: '100%', height: '100%', borderRadius: 10 }]}
                                    source={require('@/assets/images/matchVideo/techVideo2.png')} // 이미지 경로
                                    resizeMode="cover" // 이미지의 가운데를 맞추기 위해 cover 사용
                                />
                            </View>
                            <View style={[{ width: 100, height: 150, marginRight: 10 }]}>
                                <Image
                                    style={[{ width: '100%', height: '100%', borderRadius: 10 }]}
                                    source={require('@/assets/images/matchVideo/techVideo4.jpeg')} // 이미지 경로
                                    resizeMode="cover" // 이미지의 가운데를 맞추기 위해 cover 사용
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>

                <View style={[{ flex: 1, gap: 24, marginHorizontal: 10 }]}>
                    {/* 메치된 경기 영상(유료) */}
                    <View
                        style={[
                            {
                                // backgroundColor: '#3B415A',
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
                                맞춤 추천 훈련 영상
                            </Text>

                            <Text style={[{ color: '#286BF1' }]}>view all</Text>
                        </View>
                        <ScrollView
                            horizontal={true}
                            contentContainerStyle={styles.videoListContainer}
                        >
                            <View style={[{ width: 300, height: 180, borderRadius: 10, position: 'relative' }]}>
                                <Image
                                    style={[{ width: '100%', height: '100%', borderRadius: 10 }]}
                                    source={require('@/assets/images/matchVideo/algorithmVideo.png')} // 이미지 경로
                                />
                            </View>
                            <View
                                style={[
                                    { width: 300, height: 180, borderRadius: 10, marginLeft: 20, position: 'relative' },
                                ]}
                            >
                                <Image
                                    style={[{ width: '100%', height: '100%', borderRadius: 10 }]}
                                    source={require('@/assets/images/matchVideo/algorithmVideo2.png')} // 이미지 경로
                                />
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

    titleContainer: {
        paddingHorizontal: 5,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    imageContainerText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 4,
    },

    videoFormationContainer: {
        // backgroundColor: '#3B415A',
        paddingLeft: 10,
        borderRadius: 10,
    },
    videoListContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        // height: 165,
        marginTop: 10,
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    videoRecommandListContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        height: 150,
        marginTop: 10,
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
});
