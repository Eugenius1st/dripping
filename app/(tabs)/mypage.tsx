import { Link, Stack } from 'expo-router';
import { TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons, Octicons, Entypo, Feather, FontAwesome6, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function Dashboard() {
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
                    <Text style={[{ color: '#ffffff', fontWeight: 'bold' }]}>My page</Text>
                </View>
                <View>
                    <Entypo
                        name="dots-three-vertical"
                        size={24}
                        color="white"
                    />
                </View>
            </View>

            <View
                style={[
                    {
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                        marginTop: 20,
                        marginHorizontal: 10,
                    },
                ]}
            >
                <View style={[{ width: 90, height: 90, margin: 10 }]}>
                    <Image
                        style={[{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100 }]}
                        source={require('@/assets/images/mypage/profile.jpg')} // 이미지 경로
                    />
                    <View
                        style={[
                            {
                                backgroundColor: '#2F354E',
                                width: 28,
                                height: 28,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 100,
                                position: 'absolute',
                                right: 0,
                                bottom: 2,
                                paddingLeft: 4,
                            },
                        ]}
                    >
                        <Octicons
                            name="pencil"
                            size={18}
                            color="white"
                        />
                    </View>
                </View>
                <View style={[{ marginLeft: 10 }]}>
                    <Text style={[{ color: '#ffffff', fontSize: 22, fontWeight: 'bold', marginBottom: 2 }]}>
                        갤로핑 님
                    </Text>
                    <Text style={styles.myTabText}>@galloping1234</Text>
                </View>
            </View>

            <View
                style={[
                    {
                        marginVertical: 30,
                        backgroundColor: '#2F354E',
                        borderRadius: 20,
                        padding: 24,
                    },
                ]}
            >
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View style={styles.myTabBox}>
                        <Octicons
                            name="checklist"
                            size={28}
                            color="#A1A2AC"
                        />
                        <Text
                            style={[
                                {
                                    marginTop: 10,

                                    ...styles.myTabText,
                                },
                            ]}
                        >
                            Dashboard
                        </Text>
                    </View>
                    <View style={styles.myTabBox}>
                        <Octicons
                            name="heart"
                            size={28}
                            color="#A1A2AC"
                        />
                        <Text
                            style={[
                                {
                                    marginTop: 10,

                                    ...styles.myTabText,
                                },
                            ]}
                        >
                            Like
                        </Text>
                    </View>
                    <View style={styles.myTabBox}>
                        <Entypo
                            name="back-in-time"
                            size={28}
                            color="#A1A2AC"
                        />
                        <Text style={styles.myTabText}>Mach</Text>
                        <Text style={styles.myTabText}>History</Text>
                    </View>
                </View>
                <View style={[{ marginTop: 20 }]}>
                    <View style={styles.myTabListBox}>
                        <View
                            style={[
                                {
                                    backgroundColor: '#A0A3AD',
                                    marginRight: 20,
                                    width: 36,
                                    height: 36,
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}
                        >
                            <Feather
                                name="edit"
                                size={24}
                                color="#2F354E"
                            />
                        </View>
                        <Text style={styles.myTabListText}>Edit Profile</Text>
                    </View>
                    <View style={styles.myTabListBox}>
                        <View
                            style={[
                                {
                                    backgroundColor: '#A0A3AD',
                                    marginRight: 20,
                                    width: 36,
                                    height: 36,
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}
                        >
                            <FontAwesome6
                                name="bell"
                                size={24}
                                color="#2F354E"
                            />
                        </View>
                        <Text style={styles.myTabListText}>Notification Setting</Text>
                    </View>
                    <View style={styles.myTabListBox}>
                        <View
                            style={[
                                {
                                    backgroundColor: '#A0A3AD',
                                    marginRight: 20,
                                    width: 36,
                                    height: 36,
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}
                        >
                            <MaterialCommunityIcons
                                name="message-question-outline"
                                size={24}
                                color="#2F354E"
                            />
                        </View>
                        <Text style={styles.myTabListText}>FAQ's</Text>
                    </View>
                    <View style={styles.myTabListBox}>
                        <View
                            style={[
                                {
                                    backgroundColor: '#A0A3AD',
                                    marginRight: 20,
                                    width: 36,
                                    height: 36,
                                    borderRadius: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}
                        >
                            <Octicons
                                name="question"
                                size={24}
                                color="#2F354E"
                            />
                        </View>
                        <Text style={styles.myTabListText}>Terms & Condition</Text>
                    </View>
                </View>
            </View>
            <Link
                href="/home"
                style={[
                    {
                        marginHorizontal: 'auto',
                        marginTop: 10,
                    },
                ]}
            >
                <TouchableOpacity
                    style={[
                        {
                            borderWidth: 1,
                            borderColor: '#286BF1',
                            borderRadius: 10,
                            width: 200,
                            height: 45,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#232630',
                            flexDirection: 'row',
                        },
                    ]}
                >
                    <Entypo
                        name="log-out"
                        size={18}
                        color="#286BF1"
                    />
                    <Text style={[{ color: '#286BF1', fontWeight: 'bold', marginLeft: 10 }]}>Logout</Text>
                </TouchableOpacity>
            </Link>
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
    myTabBox: {
        backgroundColor: '#21243A',
        borderRadius: 15,
        width: 110,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    myTabText: {
        color: '#ffffff',
        fontSize: 14,
    },
    myTabListBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 22,
    },
    myTabListText: {
        color: '#ffffff',
        fontSize: 18,
    },
});
