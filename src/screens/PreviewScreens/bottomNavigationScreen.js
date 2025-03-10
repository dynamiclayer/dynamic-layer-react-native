import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors, paddings, rounded, textStyles } from '../../style';
import CustomIcon from '../../../assets/icons/svg_js/customIcon';
import { ScrollView } from 'react-native-gesture-handler';
import CustomBottomNavigation from '../../components/navigation/CustomBottomNavigation';
import HomeScreen from '../Main/HomeScreen';
import ProfileScreen from '../Main/TemplatesScreen';
import TemplatesIcon from '../../../assets/icons/Navigation/templateIcon';

const BottomNavigationScreen = () => {

    const Tab = ({ badge, focused, icon: IconComponent, notifications }) => {
        return (
            <View style={styles.tabContainer}>
                <IconComponent isHighlighted={focused} fill={focused ? colors.black : colors.grey500} />
                {badge === "md" && notifications > 0 && (
                    <View style={styles.notificationBadgeMD}>
                        <Text style={styles.notificationText}>{notifications}</Text>
                    </View>
                )}

                {badge === "sm" && notifications > 0 && (
                    <View style={styles.notificationBadgeSM} />
                )}

                <Text
                    style={[
                        textStyles.text_xs_bold,
                        {
                            paddingTop: paddings.p_8,
                            color: focused ? colors.black : colors.grey500,
                        },
                    ]}
                >
                    Label
                </Text>
            </View>
        )
    }

    const TabPreview = () => {
        const screens = [
            {
                name: 'Label',
                component: HomeScreen,
                icon: TemplatesIcon,
                notifications: 0,
            },
            {
                name: 'Label1',
                component: ProfileScreen,
                icon: TemplatesIcon,
                notifications: 0,
            },
            {
                name: 'Label2',
                component: ProfileScreen,
                icon: TemplatesIcon,
                notifications: 0,
            },
        ];

        return (
            <CustomBottomNavigation
                badge={"md"}
                screens={screens}
                functional={false}
            />
        );
    }

    return (
        <ScrollView style={styles.container}>
            {/* TYPE */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Type</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={styles.buttonRow}>
                <Tab badge={"none"} focused={true} icon={CustomIcon} />
                <Tab badge={"sm"} focused={true} icon={CustomIcon} notifications={3} />
                <Tab badge={"md"} focused={true} icon={CustomIcon} notifications={5} />
            </View>

            {/* TYPE UNFOCUSED */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Type</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={styles.buttonRow}>
                <Tab badge={"none"} focused={false} icon={CustomIcon} />
                <Tab badge={"sm"} focused={false} icon={CustomIcon} notifications={3} />
                <Tab badge={"md"} focused={false} icon={CustomIcon} notifications={5} />
            </View>

            {/* TYPE MIXED */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Type</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={styles.buttonRow}>
                <TabPreview />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: paddings.p_16,
        paddingVertical: paddings.p_32,
        backgroundColor: colors.white
    },
    buttonRow: {
        flexDirection: 'row',
        gap: paddings.p_16,
        paddingBottom: paddings.p_32
    },
    buttonWrapper: {
        width: 140,
    },
    tabContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,

    },
    notificationBadgeMD: {
        position: 'absolute',
        top: -4,
        right: 7,
        borderRadius: rounded.rounded_full,
        backgroundColor: colors.red500,
        justifyContent: 'center',
        paddingHorizontal: paddings.p_8,
        paddingsVertical: paddings.p_0,
        alignItems: 'center',
    },
    notificationBadgeSM: {
        position: 'absolute',
        top: -1,
        right: 23,
        borderRadius: rounded.rounded_full,
        backgroundColor: colors.red500,
        justifyContent: 'center',
        alignItems: 'center',
        height: 8,
        width: 8,
    },
    notificationText: {
        ...textStyles.text_xs_semibold,
        color: colors.white,
        textAlign: 'center',
    },
});

export default BottomNavigationScreen;