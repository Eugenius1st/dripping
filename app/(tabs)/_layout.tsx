import React from 'react';
import { FontAwesome, AntDesign, SimpleLineIcons, Octicons, Feather } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
    return (
        <FontAwesome
            size={28}
            style={{ marginBottom: -3 }}
            {...props}
        />
    );
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#2e78b7',
                // headerShown: useClientOnlyValue(false, true),
                tabBarStyle: {
                    backgroundColor: '#1A1C20', // 원하는 배경 색상으로 설정
                    borderTopWidth: 0, // 탭 바의 상단 테두리 제거
                },
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => (
                        <SimpleLineIcons
                            name="home"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color }) => (
                        <Feather
                            name="search"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="formation"
                options={{
                    title: 'Formation',
                    tabBarIcon: ({ color }) => (
                        <Octicons
                            name="checklist"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="mypage"
                options={{
                    title: 'Mypage',
                    tabBarIcon: ({ color }) => (
                        <SimpleLineIcons
                            name="user"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    title: 'More',
                    tabBarIcon: ({ color }) => (
                        <Octicons
                            name="three-bars"
                            size={24}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
