import { TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Text, View } from '@/components/Themed';
import { BarChart, LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
export default function Dashboard() {
    const navigation = useNavigation();

    const lineData = {
        labels: ['08/26', '08/27', '08/28', '08/29', '08/30', '08/31'],
        datasets: [
            {
                data: [20, 80, 99, 45, 28, 43],
                color: (opacity = 1) => `#286BF1`,
                strokeWidth: 2, // optional
            },
        ],
    };

    const barData = {
        labels: ['10', '11', '12', '13', '14', '15', '16', '17', '18'],
        datasets: [
            {
                data: [10, 60, 20, 40, 60, 80, 100, 80, 40],
                colors: [
                    (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // 첫 번째 막대의 색상
                    (opacity = 1) => `rgba(0, 255, 0, ${opacity})`, // 두 번째 막대의 색상
                    (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // 세 번째 막대의 색상
                    (opacity = 1) => `rgba(255, 255, 0, ${opacity})`, // 네 번째 막대의 색상
                    (opacity = 1) => `rgba(255, 0, 255, ${opacity})`, // 다섯 번째 막대의 색상
                    (opacity = 1) => `rgba(0, 255, 255, ${opacity})`, // 여섯 번째 막대의 색상
                    (opacity = 1) => `rgba(128, 0, 128, ${opacity})`, // 일곱 번째 막대의 색상
                    (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // 여덟 번째 막대의 색상
                    (opacity = 1) => `rgba(0, 128, 128, ${opacity})`, // 아홉 번째 막대의 색상
                ],
            },
        ],
    };

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
                    <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>06.13(목)</Text>
                    <MaterialIcons
                        name="arrow-drop-down"
                        size={28}
                        color="white"
                    />
                </View>
                <View>
                    <Entypo
                        name="dots-three-vertical"
                        size={20}
                        color="white"
                    />
                </View>
            </View>
            {/* 날짜 선택 */}
            <View></View>
            {/* 차트 */}

            <View style={styles.chartContainer}>
                <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>팔 높이 기록</Text>

                <View style={[{ alignItems: 'center' }]}>
                    <LineChart
                        data={lineData}
                        width={screenWidth}
                        height={220}
                        yAxisLabel="" // 레이블을 빈 문자열로 설정
                        yAxisSuffix="" // 접미사도 빈 문자열로 설정
                        chartConfig={{
                            backgroundColor: '',
                            backgroundGradientFrom: '#2F354E',
                            backgroundGradientTo: '#2F354E',
                            decimalPlaces: 0,

                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                            propsForDots: {
                                r: '6', // 동그라미의 반지름
                                strokeWidth: '2', // 동그라미의 테두리 두께
                                stroke: '#ffffff', // 동그라미의 테두리 색상
                                fill: '#286BF1', // 동그라미의 채우기 색상
                            },
                            fillShadowGradient: '#286BF1', // 채우기 색상 설정
                            fillShadowGradientOpacity: 1, // 채우기 색상의 불투명도 설정
                        }}
                        bezier
                        style={{
                            marginVertical: 16,
                            borderRadius: 16,
                        }}
                    />
                </View>
                <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>6월 성장 그래프</Text>
                <View style={[{ alignItems: 'flex-start' }]}>
                    <BarChart
                        data={barData}
                        width={screenWidth - 20}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#2F354E',
                            backgroundGradientFrom: '#2F354E',
                            backgroundGradientTo: '#2F354E',

                            decimalPlaces: 0,
                            barPercentage: 0.8,
                            fillShadowGradient: '#286BF1', // THIS
                            fillShadowGradientOpacity: 1, // THIS

                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

                            style: {
                                borderRadius: 20,
                            },
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                        yAxisLabel="" // 필수 props
                        yAxisSuffix="" // 필수 props
                        withInnerLines={false} // Removes inner grid lines
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
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

    chartContainer: {
        height: '100%',
        paddingHorizontal: 10,
        paddingVertical: 30,
        backgroundColor: '#2F354E',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
});
