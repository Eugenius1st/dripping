import { Link, Stack } from 'expo-router';

import { TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Text, View } from '@/components/Themed';
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useState } from 'react';

// images

const screenWidth = Dimensions.get('window').width;
export default function Arrangement() {
    const navigation = useNavigation();
    const yellowTeam = [
        { name: '박정효', posX: 185, posY: 20 },
        { name: '이기혁', posX: 110, posY: 50 },
        { name: '강투지', posX: 260, posY: 50 },

        { name: '윤석영', posX: 60, posY: 80 },
        { name: '항문기', posX: 300, posY: 80 },

        { name: '김이석', posX: 120, posY: 110 },
        { name: '김강국', posX: 240, posY: 110 },

        { name: '양민혁', posX: 60, posY: 150 },
        { name: '유민수', posX: 300, posY: 150 },
        { name: '이상헌', posX: 120, posY: 190 },
        { name: '헨리', posX: 250, posY: 190 },
    ];

    const blueTeam = [
        { name: '유강현', posX: 185, posY: 290 },
        { name: '정치인', posX: 60, posY: 320 },
        { name: '김현욱', posX: 300, posY: 320 },

        { name: '강현묵', posX: 185, posY: 350 },

        { name: '김찬규', posX: 120, posY: 390 },
        { name: '김동현', posX: 240, posY: 390 },

        { name: '박민규', posX: 50, posY: 420 },
        { name: '윤종규', posX: 320, posY: 420 },

        { name: '이상헌', posX: 120, posY: 450 },
        { name: '헨리', posX: 250, posY: 450 },

        { name: '김준홍', posX: 185, posY: 480 },
    ];
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
            <ScrollView>
                <View
                    style={[
                        {
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 550,
                            marginTop: 10,
                            position: 'relative',
                        },
                    ]}
                >
                    <Image
                        style={[
                            {
                                resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                borderRadius: 30,
                                flexShrink: 1,
                                width: '92%',
                            },
                        ]}
                        source={require('@/assets/images/formation/stadium.png')} // 이미지 경로
                    />
                    {yellowTeam.map((el, idx) => (
                        <View
                            style={[{ position: 'absolute', left: el.posX, top: el.posY, alignItems: 'center' }]}
                            key={idx}
                        >
                            <Text style={styles.nameTextStyle}>{el.name}</Text>
                            <View
                                style={[
                                    {
                                        backgroundColor: '#F6A400',
                                        ...styles.dotStyle,
                                    },
                                ]}
                            ></View>
                        </View>
                    ))}
                    {blueTeam.map((el, idx) => (
                        <View
                            style={[{ position: 'absolute', left: el.posX, top: el.posY, alignItems: 'center' }]}
                            key={idx}
                        >
                            <View
                                style={[
                                    {
                                        backgroundColor: '#13225D',
                                        ...styles.dotStyle,
                                    },
                                ]}
                            ></View>
                            <Text style={styles.nameTextStyle}>{el.name}</Text>
                        </View>
                    ))}
                </View>

                {/* 대기명단 */}
                <View style={[{ flex: 1 }]}>
                    <View
                        style={[
                            {
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: 90,
                                paddingHorizontal: 40,
                            },
                        ]}
                    >
                        <Image
                            style={[
                                {
                                    resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                    borderRadius: 20,
                                    width: 40,
                                },
                            ]}
                            source={require('@/assets/images/home/gimcheon_fc.png')} // 이미지 경로
                        />
                        <Text style={[{ color: '#ffffff', fontWeight: 'bold', fontSize: 20 }]}>대기명단</Text>
                        <Image
                            style={[
                                {
                                    resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
                                    borderRadius: 20,
                                    width: 40,
                                },
                            ]}
                            source={require('@/assets/images/home/gangwon_fc.png')} // 이미지 경로
                        />
                    </View>

                    <View style={[{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }]}>
                        <View>
                            <Text style={styles.namedStyle}>No.39 원기종</Text>
                            <Text style={styles.namedStyle}>No.50 김승섭</Text>
                            <Text style={styles.namedStyle}>No.54 이승원</Text>
                            <Text style={styles.namedStyle}>No.38 김강산</Text>
                            <Text style={styles.namedStyle}>No.45 유선</Text>
                        </View>
                        <View>
                            <Text style={styles.namedStyle}>No.19 김경민</Text>
                            <Text style={styles.namedStyle}>No.26 박강배</Text>
                            <Text style={styles.namedStyle}>No.14 김대우</Text>
                            <Text style={styles.namedStyle}>No.32 박상현</Text>
                            <Text style={styles.namedStyle}>No.97 이유현</Text>
                        </View>
                    </View>
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
    namedStyle: {
        color: '#ffffff',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    nameTextStyle: {
        color: '#ffffff',
        backgroundColor: '#00000090',
        padding: 5,
    },
    dotStyle: {
        borderRadius: 100,
        width: 20,
        height: 20,
        marginVertical: 5,
    },
});
