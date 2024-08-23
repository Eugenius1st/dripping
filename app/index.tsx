import { Link, Stack } from 'expo-router';
import { StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text, View } from '@/components/Themed';
// import loginBg from "@/assets/images/login.png"
export default function APP() {
    const navigation = useNavigation();
    return (
        <>
            <Stack.Screen
                // options={{ title: 'Oops!' }}
                options={{ headerShown: false }} // 헤더를 숨기기 위해 headerShown을 false로 설정
            />
            <ImageBackground
                source={require('@/assets/images/login.jpg')} // 배경 이미지 경로
                style={styles.background}
                resizeMode="cover" // 이미지 크기 조정 방식
            >
                <View style={styles.backgroudBlack}></View>

                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.iconContainer}>
                            <Image
                                source={require('@/assets/images/logo_white.png')}
                                style={styles.icon}
                            />
                        </View>

                        {/* <Link
                    href="/home"
                    // style={styles.link}
                ></Link> */}
                        <View style={styles.buttonContainer}>
                            <Link href="/home">
                                <View
                                    style={[
                                        styles.button,
                                        {
                                            backgroundColor: '#243760', // 버튼 배경 색상
                                            borderRadius: 10,
                                        },
                                    ]}
                                >
                                    <Text style={[styles.buttonText, { color: '#286BF1' }]}>Sign Up</Text>
                                </View>
                            </Link>
                            <Link href="/home">
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
                            </Link>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, // 전체 화면을 채우도록 설정
        justifyContent: 'center', // 세로 중앙 정렬
        alignItems: 'center', // 가로 중앙 정렬
        position: 'relative',
    },
    backgroudBlack: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#00000080',
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end', // 컨텐츠를 하단에 배치
        alignItems: 'center', // 가로 중앙 정렬
    },
    content: {
        width: '100%', // 가로 전체 너비
        paddingHorizontal: 20, // 좌우 여백
        paddingBottom: 50, // 하단 여백

        // 추가 스타일
    },
    iconContainer: {
        marginBottom: 80, // 하단 여백
        // 추가 스타일
        // width: '100%',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 150, // 이미지 너비
        height: 150, // 이미지 높이
    },
    text: {
        color: '#000', // 텍스트 색상을 하얀색으로 설정
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 'auto', // 버튼을 하단으로 위치시킴
        marginBottom: 110, // 하단 여백
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
