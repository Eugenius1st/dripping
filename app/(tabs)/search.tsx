import { TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';

import { Text, View } from '@/components/Themed';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Search() {
    const navigation = useNavigation();
    const [isShowResult, setIsShowResult] = useState(false);
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
                <View style={styles.searchContainer}>
                    <Octicons
                        name="search"
                        size={20}
                        color={'#286BF1'}
                        style={styles.searchIcon}
                        onPress={() => setIsShowResult(!isShowResult)}
                    />
                    <TextInput
                        style={styles.input}
                        autoFocus={false}
                        placeholder="검색어를 입력하세요"
                        placeholderTextColor="#ccc"
                    />
                </View>
            </View>

            <View style={styles.searchRecord}>
                <View style={[[{ borderBottomWidth: 0.5, borderColor: '#ffffff' }]]}>
                    <Text style={styles.searchRecordEl}>드리블</Text>
                </View>

                <View style={[[{ borderBottomWidth: 0.5, borderColor: '#ffffff' }]]}>
                    <Text style={styles.searchRecordEl}>드리블 훈련</Text>
                </View>
                <View style={[[{ borderBottomWidth: 0.5, borderColor: '#ffffff' }]]}>
                    <Text style={styles.searchRecordEl}>8자 드리블</Text>
                </View>
                <View>
                    <Text style={styles.searchRecordEl}>드리블 돌파</Text>
                </View>
            </View>

            {isShowResult && (
                <View style={styles.searchRecord}>
                    <View style={[[{ borderBottomWidth: 0.5, borderColor: '#ffffff' }]]}>
                        <Text style={styles.searchRecordEl}>볼터치 훈련</Text>
                    </View>

                    <View style={[[{ borderBottomWidth: 0.5, borderColor: '#ffffff' }]]}>
                        <Text style={styles.searchRecordEl}>슈팅 훈련</Text>
                    </View>
                    <View style={[[{ borderBottomWidth: 0.5, borderColor: '#ffffff' }]]}>
                        <Text style={styles.searchRecordEl}>상황 인식</Text>
                    </View>
                    <View>
                        <Text style={styles.searchRecordEl}>골결정력</Text>
                    </View>
                </View>
            )}
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
        justifyContent: 'flex-start',
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
