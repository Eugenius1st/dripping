import { TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Text, View } from '@/components/Themed';
import { BarChart, LineChart, PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useState } from 'react';

const screenWidth = Dimensions.get('window').width;
export default function Dashboard() {
    const navigation = useNavigation();
    const [day, setDay] = useState('목');
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

    const pieData = [
        {
            name: 'dribble',
            score: 70,
            color: '#286BF1',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'empty',
            score: 30,
            color: '#C3D7FB',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
    ];

    const pieData2 = [
        {
            name: 'shooting',
            score: 55,
            color: '#286BF1',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'empty',
            score: 45,
            color: '#C3D7FB',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
    ];

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
            <View
                style={[
                    {
                        flexDirection: 'row',
                        paddingTop: 10,
                        paddingBottom: 15,
                        paddingHorizontal: 40,
                        justifyContent: 'space-between',
                    },
                ]}
            >
                <TouchableOpacity onPress={() => setDay('월')}>
                    <View
                        style={[
                            {
                                backgroundColor: day === '월' ? '#ffffff' : '#2F354E10',
                                borderRadius: 100,
                                width: 22,
                                height: 22,
                                justifyContent: 'center',
                                alignContent: 'center',
                                marginBottom: 5,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                {
                                    color: '#286BF1',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                },
                            ]}
                        >
                            월
                        </Text>
                    </View>
                    <Text style={[{ color: '#ffffff', fontSize: 14, textAlign: 'center' }]}>10</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDay('화')}>
                    <View
                        style={[
                            {
                                backgroundColor: day === '화' ? '#ffffff' : '#2F354E10',
                                borderRadius: 100,
                                width: 22,
                                height: 22,
                                justifyContent: 'center',
                                alignContent: 'center',
                                marginBottom: 5,
                            },
                        ]}
                    >
                        <Text style={[{ textAlign: 'center', color: '#286BF1', fontWeight: 'bold' }]}>화</Text>
                    </View>
                    <Text style={[{ textAlign: 'center', color: '#ffffff', fontSize: 14 }]}>11</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDay('수')}>
                    <View
                        style={[
                            {
                                backgroundColor: day === '수' ? '#ffffff' : '#2F354E10',
                                borderRadius: 100,
                                width: 22,
                                height: 22,
                                justifyContent: 'center',
                                alignContent: 'center',
                                marginBottom: 5,
                            },
                        ]}
                    >
                        <Text style={[{ textAlign: 'center', color: '#286BF1', fontWeight: 'bold' }]}>수</Text>
                    </View>
                    <Text style={[{ textAlign: 'center', color: '#ffffff', fontSize: 14 }]}>12</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDay('목')}>
                    <View
                        style={[
                            {
                                backgroundColor: day === '목' ? '#ffffff' : '#2F354E10',
                                borderRadius: 100,
                                width: 22,
                                height: 22,
                                justifyContent: 'center',
                                alignContent: 'center',
                                marginBottom: 5,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                {
                                    textAlign: 'center',
                                    color: '#286BF1',
                                    fontWeight: 'bold',
                                },
                            ]}
                        >
                            목
                        </Text>
                    </View>
                    <Text style={[{ textAlign: 'center', color: '#ffffff', fontSize: 14 }]}>13</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDay('금')}>
                    <View
                        style={[
                            {
                                backgroundColor: day === '금' ? '#ffffff' : '#2F354E10',
                                borderRadius: 100,
                                width: 22,
                                height: 22,
                                justifyContent: 'center',
                                alignContent: 'center',
                                marginBottom: 5,
                            },
                        ]}
                    >
                        <Text style={[{ textAlign: 'center', color: '#286BF1', fontWeight: 'bold' }]}>금</Text>
                    </View>
                    <Text style={[{ textAlign: 'center', color: '#ffffff', fontSize: 14 }]}>14</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDay('토')}>
                    <View
                        style={[
                            {
                                backgroundColor: day === '토' ? '#ffffff' : '#2F354E10',
                                borderRadius: 100,
                                width: 22,
                                height: 22,
                                justifyContent: 'center',
                                alignContent: 'center',
                                marginBottom: 5,
                            },
                        ]}
                    >
                        <Text style={[{ textAlign: 'center', color: '#286BF1', fontWeight: 'bold' }]}>토</Text>
                    </View>
                    <Text style={[{ textAlign: 'center', color: '#ffffff', fontSize: 14 }]}>15</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDay('일')}>
                    <View
                        style={[
                            {
                                backgroundColor: day === '일' ? '#ffffff' : '#2F354E10',
                                borderRadius: 100,
                                width: 22,
                                height: 22,
                                justifyContent: 'center',
                                alignContent: 'center',
                                marginBottom: 5,
                            },
                        ]}
                    >
                        <Text style={[{ textAlign: 'center', color: '#286BF1', fontWeight: 'bold' }]}>일</Text>
                    </View>
                    <Text style={[{ textAlign: 'center', color: '#ffffff', fontSize: 14 }]}>16</Text>
                </TouchableOpacity>
            </View>
            {/* 차트 */}

            <ScrollView style={styles.chartContainer}>
                <View style={styles.chartRecordSetting}>
                    <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>[팔 높이] 기록</Text>
                    <Ionicons
                        name="settings-sharp"
                        size={22}
                        color="#286BF1"
                    />
                </View>

                <View style={[{ alignItems: 'center', marginLeft: 15 }]}>
                    <LineChart
                        data={lineData}
                        width={screenWidth + 30}
                        height={200}
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
                            propsForBackgroundLines: {
                                strokeDasharray: '', // 그리드 라인을 없앰
                                stroke: 'transparent', // 그리드 라인의 색상을 투명하게 설정
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
                {/* 6월 성장 그래프 */}
                <View style={styles.chartRecordSetting}>
                    <View>
                        <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>6월 성장 그래프</Text>
                        <View style={[{ flexDirection: 'row', marginTop: 5 }]}>
                            <Text style={[{ color: '#ffffff', fontSize: 12 }]}>지난달 대비</Text>
                            <Text style={[{ color: '#358F1F', fontSize: 12 }]}>+6% 성장</Text>
                        </View>
                    </View>
                    <Ionicons
                        name="settings-sharp"
                        size={22}
                        color="#286BF1"
                    />
                </View>
                <View style={[{ alignItems: 'flex-start', marginLeft: -15 }]}>
                    <BarChart
                        data={barData}
                        width={screenWidth - 20}
                        height={200}
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

                {/* 렝킹 */}
                <View style={styles.chartRankingContainer}>
                    <View style={[{ position: 'relative' }]}>
                        <PieChart
                            data={pieData}
                            width={60}
                            height={60}
                            chartConfig={{
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            }}
                            accessor="score"
                            backgroundColor="transparent"
                            paddingLeft="15"
                            // absolute // This shows percentage values in the chart
                            hasLegend={false} // 범례 숨기기
                        />
                        <View
                            style={[
                                {
                                    width: 34,
                                    height: 34,
                                    borderRadius: 100,
                                    backgroundColor: '#2F354E',
                                    position: 'absolute',
                                    left: 13,
                                    top: 13,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                },
                            ]}
                        >
                            <Text style={[{ fontSize: 12, color: '#ffffff', textAlign: 'center' }]}>70점</Text>
                        </View>
                    </View>
                    <View>
                        <View style={[{ flexDirection: 'row', alignItems: 'flex-end' }]}>
                            <Text style={[{ color: '#ffffff', fontSize: 12, paddingBottom: 4, paddingRight: 2 }]}>
                                상위
                            </Text>
                            <Text style={[{ color: '#286BF1', fontSize: 22, fontWeight: 'bold' }]}>3등</Text>
                        </View>

                        <Text style={[{ color: '#ffffff', marginTop: 2, fontSize: 12 }]}>드리블 훈련</Text>
                    </View>
                    <View style={[{ position: 'relative' }]}>
                        <PieChart
                            data={pieData2}
                            width={60}
                            height={60}
                            chartConfig={{
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            }}
                            accessor="score"
                            backgroundColor="transparent"
                            paddingLeft="15"
                            // absolute // This shows percentage values in the chart
                            hasLegend={false} // 범례 숨기기
                        />
                        <View
                            style={[
                                {
                                    width: 34,
                                    height: 34,
                                    borderRadius: 100,
                                    backgroundColor: '#2F354E',
                                    position: 'absolute',
                                    left: 13,
                                    top: 13,
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                },
                            ]}
                        >
                            <Text style={[{ fontSize: 12, color: '#ffffff', textAlign: 'center' }]}>55점</Text>
                        </View>
                    </View>
                    <View>
                        <View style={[{ flexDirection: 'row', alignItems: 'flex-end' }]}>
                            <Text style={[{ color: '#ffffff', fontSize: 12, paddingBottom: 4, paddingRight: 2 }]}>
                                상위
                            </Text>
                            <Text style={[{ color: '#286BF1', fontSize: 22, fontWeight: 'bold' }]}>4등</Text>
                        </View>

                        <Text style={[{ color: '#ffffff', marginTop: 2, fontSize: 12 }]}>슈팅 훈련</Text>
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
        paddingVertical: 15,
        backgroundColor: '#2F354E',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    chartRecordSetting: {
        backgroundColor: '#232630',
        color: '#ffffff',
        borderWidth: 1,
        borderColor: '#494A5B',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },

    chartRankingContainer: {
        flexDirection: 'row',
        color: '#ffffff',
        marginHorizontal: 35,
        marginTop: 5,
        justifyContent: 'space-between',
    },
});
