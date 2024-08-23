import { Link, Stack } from 'expo-router';
import { Octicons } from '@expo/vector-icons';
import { StyleSheet, Platform, Image, ScrollView } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';

export default function TabOneScreen() {
    const [firstHeart, setFirstHeart] = useState(true);
    const [secondHeart, setSecondHeart] = useState(true);
    const [thirdHeart, setThirdHeart] = useState(false);

    return (
        <View style={styles.outside}>
            <ScrollView
                contentContainerStyle={styles.container}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Image
                        style={styles.headerImage}
                        source={require('@/assets/images/logo_horizontal.png')} // 이미지 경로
                    />
                </View>
                <ScrollView
                    // horizontal
                    contentContainerStyle={[
                        {
                            width: '95%',
                            // flexDirection: 'row',
                            // overflow: 'scroll',
                            // gap: 10,
                            flexDirection: 'row',
                            gap: 10,
                        },
                    ]}
                >
                    <View style={styles.adContainer}>
                        <Image
                            style={styles.adImage}
                            source={require('@/assets/images/home/home_ad.png')} // 이미지 경로
                        />
                    </View>
                    <View style={[styles.adContainer]}>
                        <Image
                            style={styles.adImage}
                            source={require('@/assets/images/home/home_ad2.png')} // 이미지 경로
                        />
                    </View>
                    <View style={styles.adContainer}>
                        <Image
                            style={styles.adImage}
                            source={require('@/assets/images/home/home_ad3.png')} // 이미지 경로
                        />
                    </View>
                </ScrollView>

                <View style={styles.subTitleContainer}>
                    <Text style={styles.favoritesTitle}>즐겨 찾는 국내리그</Text>
                    <Text style={styles.decorateTitle}>view all</Text>
                </View>

                <ScrollView
                    // horizontal
                    contentContainerStyle={styles.iconContainer}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.iconImageContainer}>
                        <View
                            style={[
                                {
                                    backgroundColor: '#000000',
                                    padding: 10,
                                    borderRadius: 10,
                                    position: 'relative',
                                },
                            ]}
                        >
                            <Image
                                source={require('@/assets/images/home/jeonbuk_fc.png')}
                                style={styles.iconImage}
                            />
                            <Octicons
                                style={[{ position: 'absolute', right: 4, bottom: 4 }]}
                                name={firstHeart ? 'heart-fill' : 'heart'}
                                size={18}
                                color={'#286BF1'}
                            />
                        </View>
                        <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>전북 현대 모터스</Text>
                    </View>
                    <View style={styles.iconImageContainer}>
                        <View
                            style={[
                                {
                                    backgroundColor: '#000000',
                                    padding: 10,
                                    borderRadius: 10,
                                    position: 'relative',
                                },
                            ]}
                        >
                            <Image
                                source={require('@/assets/images/home/suwon_fc.png')}
                                style={styles.iconImage}
                            />
                            <Octicons
                                style={[{ position: 'absolute', right: 4, bottom: 4 }]}
                                name={secondHeart ? 'heart-fill' : 'heart'}
                                size={18}
                                color={'#286BF1'}
                            />
                        </View>
                        <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>수원 FC</Text>
                    </View>
                    <View style={styles.iconImageContainer}>
                        <View
                            style={[
                                {
                                    backgroundColor: '#000000',
                                    padding: 10,
                                    borderRadius: 10,
                                    position: 'relative',
                                },
                            ]}
                        >
                            <Image
                                source={require('@/assets/images/home/seoul_fc.png')}
                                style={styles.iconImage}
                            />
                            <Octicons
                                style={[{ position: 'absolute', right: 4, bottom: 4 }]}
                                name={thirdHeart ? 'heart-fill' : 'heart'}
                                size={18}
                                color={'#286BF1'}
                            />
                        </View>
                        <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>FC 서울</Text>
                    </View>
                    <View style={styles.iconImageContainer}>
                        <View
                            style={[
                                {
                                    backgroundColor: '#000000',
                                    padding: 10,
                                    borderRadius: 10,
                                    position: 'relative',
                                },
                            ]}
                        >
                            <Image
                                source={require('@/assets/images/home/gimcheon_fc.png')}
                                style={styles.iconImage}
                            />
                            <Octicons
                                style={[{ position: 'absolute', right: 4, bottom: 4 }]}
                                name={firstHeart ? 'heart-fill' : 'heart'}
                                size={18}
                                color={'#286BF1'}
                            />
                        </View>
                        <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>김천</Text>
                    </View>
                    <View style={styles.iconImageContainer}>
                        <View
                            style={[
                                {
                                    backgroundColor: '#000000',
                                    padding: 10,
                                    borderRadius: 10,
                                    position: 'relative',
                                },
                            ]}
                        >
                            <Image
                                source={require('@/assets/images/home/gangwon_fc.png')}
                                style={styles.iconImage}
                            />
                            <Octicons
                                style={[{ position: 'absolute', right: 4, bottom: 4 }]}
                                name={firstHeart ? 'heart-fill' : 'heart'}
                                size={18}
                                color={'#286BF1'}
                            />
                        </View>
                        <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>강원 FC</Text>
                    </View>
                    <View style={styles.iconImageContainer}>
                        <View
                            style={[
                                {
                                    backgroundColor: '#000000',
                                    padding: 10,
                                    borderRadius: 10,
                                    position: 'relative',
                                },
                            ]}
                        >
                            <Image
                                source={require('@/assets/images/home/pohang_fc.png')}
                                style={styles.iconImage}
                            />
                            <Octicons
                                style={[{ position: 'absolute', right: 4, bottom: 4 }]}
                                name={firstHeart ? 'heart-fill' : 'heart'}
                                size={18}
                                color={'#286BF1'}
                            />
                        </View>
                        <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>포항</Text>
                    </View>
                    {/* <View style={styles.iconImageContainer}>
                        <View
                            style={[
                                {
                                    backgroundColor: '#000000',
                                    padding: 10,
                                    borderRadius: 10,
                                },
                            ]}
                        >
                            <Image
                                source={require('@/assets/images/home/seoul_fc.png')}
                                style={styles.iconImage}
                            />
                        </View>
                        <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>전북 현대 모터스</Text>
                    </View> */}
                </ScrollView>
                {/* K 리그 일정 타이틀 */}
                <View style={styles.subTitleContainer}>
                    <Text style={styles.favoritesTitle}>K리그 12 일정 및 결과</Text>
                    <Text style={styles.decorateTitle}>view all</Text>
                </View>
                {/* K 리그 일정 콘텐츠 */}
                <View style={{ width: '100%', display: 'flex', alignItems: 'center', paddingBottom: 30 }}>
                    <View style={styles.schedule}>
                        <View style={styles.scheduleImageContainer}>
                            <Image
                                source={require('@/assets/images/home/gimcheon_fc.png')}
                                // style={[{ width: 50 }]}
                                style={styles.scheduleImage}
                                resizeMode="contain"
                            />
                            <Text style={[{ color: '#ffffff', textAlign: 'center', marginTop: 5, fontWeight: 'bold' }]}>
                                김천
                            </Text>
                        </View>
                        <View style={[{ flexDirection: 'column', alignItems: 'center' }]}>
                            <Text style={[{ color: '#ffffff', fontSize: 12 }]}>2024.08.09</Text>
                            <Text style={[{ color: '#ffffff', textAlign: 'center', paddingTop: 1 }]}>R26</Text>
                            <Text
                                style={[
                                    {
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        paddingTop: 2,
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                    },
                                ]}
                            >
                                19:30
                            </Text>
                            <View
                                style={[
                                    {
                                        backgroundColor: '#286BF1',
                                        marginTop: 4,
                                        width: 50,
                                        paddingHorizontal: 2,
                                        paddingVertical: 2,
                                        borderRadius: 10,
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        { textAlign: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: 12 },
                                    ]}
                                >
                                    경기전
                                </Text>
                            </View>
                        </View>
                        <View style={styles.scheduleImageContainer}>
                            <Image
                                source={require('@/assets/images/home/gangwon_fc.png')}
                                // style={[{ width: 50 }]}
                                style={styles.scheduleImage}
                                resizeMode="contain"
                            />
                            <Text style={[{ color: '#ffffff', textAlign: 'center', marginTop: 5, fontWeight: 'bold' }]}>
                                강원
                            </Text>
                        </View>
                    </View>

                    <View style={styles.schedule}>
                        <View style={styles.scheduleImageContainer}>
                            <Image
                                source={require('@/assets/images/home/jeonbuk_fc2.png')}
                                // style={[{ width: 50 }]}
                                style={styles.scheduleImage}
                                resizeMode="contain"
                            />
                            <Text style={[{ color: '#ffffff', textAlign: 'center', marginTop: 5, fontWeight: 'bold' }]}>
                                전북
                            </Text>
                        </View>
                        <View style={[{ flexDirection: 'column', alignItems: 'center' }]}>
                            <Text style={[{ color: '#ffffff', fontSize: 12 }]}>2024.08.09</Text>
                            <Text style={[{ color: '#ffffff', textAlign: 'center', paddingTop: 1 }]}>R27</Text>
                            <Text
                                style={[
                                    {
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        paddingTop: 2,
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                    },
                                ]}
                            >
                                19:00
                            </Text>
                            <View
                                style={[
                                    {
                                        backgroundColor: '#286BF1',
                                        marginTop: 4,
                                        width: 50,
                                        paddingHorizontal: 1,
                                        paddingVertical: 2,
                                        borderRadius: 10,
                                    },
                                ]}
                            >
                                <Text
                                    style={[
                                        { textAlign: 'center', color: '#ffffff', fontWeight: 'bold', fontSize: 12 },
                                    ]}
                                >
                                    경기전
                                </Text>
                            </View>
                        </View>
                        <View style={styles.scheduleImageContainer}>
                            <Image
                                source={require('@/assets/images/home/pohang_fc.png')}
                                // style={[{ width: 50 }]}
                                style={styles.scheduleImage}
                                resizeMode="contain"
                            />
                            <Text style={[{ color: '#ffffff', textAlign: 'center', marginTop: 5, fontWeight: 'bold' }]}>
                                포항
                            </Text>
                        </View>
                    </View>
                </View>
                {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    outside: {
        flex: 1,
        backgroundColor: '#1A1C20', // 전체 화면 배경색 설정
    },
    container: {
        // flex: 1,
        paddingTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A1C20',
        // height: '100%',
    },
    header: {
        position: 'absolute', // 헤더를 절대 위치로 설정
        top: 0, // 상단에 고정
        marginTop: 28,
        backgroundColor: '#1A1C20', // 배경색을 검정으로 설정
        borderBottomWidth: 0, // 하단 테두리 제거
        elevation: 0, // 안드로이드에서의 그림자 제거
        shadowOpacity: 0, // iOS에서의 그림자 제거
        height: 60, // 헤더의 높이
        justifyContent: 'center', // 가운데 정렬
        alignItems: 'center', // 가운데 정렬
    },
    headerImage: {
        height: 20,
    },
    adContainer: {
        width: '100%', // 이미지가 부모 뷰의 전체 너비를 차지하도록 설정
        height: 250, // 이미지가 부모 뷰의 전체 높이를 차지하도록 설정
        marginTop: 75,
        overflow: 'hidden', // 이미지가 부모 뷰를 넘어가지 않도록 설정
    },
    adImage: {
        // resizeMode: 'cover', // 이미지가 부모 뷰를 덮도록 설정
        transform: [{ translateY: 0 }], // 이게 아니라 콘텐츠 위치는 가만히 있지만, 그 안의 사진이 잘린 부분이 살짝 내려왔으면 좋겠다고
        borderRadius: 20,
        width: '100%',
        height: '100%', // 원하는 높이로 설정 (비율에 맞게 조정)
    },
    subTitleContainer: {
        flexDirection: 'row', // 가로 방향으로 아이템 배치
        justifyContent: 'space-between', // 아이템 사이에 여백을 균등하게 분배하여 양쪽 끝에 배치
        alignItems: 'center',
        width: '100%',
        paddingVertical: 25,
    },
    favoritesTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    iconContainer: {
        // margin: 10, // 각 아이템 사이에 여백 추가
        width: '100%',
        // flexDirection: 'row',
        // overflow: 'scroll',
        // gap: 10,
        flexDirection: 'row',
        gap: 10,
    },
    iconImageContainer: {
        backgroundColor: '#3B415A',
        width: '30%',
        height: 140,
        borderRadius: 15,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    iconImage: {
        width: 75, // 이미지 너비
        height: 75, // 이미지 높이
        resizeMode: 'contain', // 이미지를 컨테이너에 맞게 조정
    },
    decorateTitle: {
        color: '#286BF1',
        fontSize: 16,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    schedule: {
        width: '100%',
        borderRadius: 15,
        paddingHorizontal: 50,
        paddingVertical: 7,
        marginBottom: 10,
        backgroundColor: '#3A415A',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    scheduleImageContainer: {
        width: 60,
        // resizeMsode: 'cover', // 이미지가 부모 뷰를 덮도록 설정
    },
    scheduleImage: {
        width: '100%',
        height: 80,
    },
});
