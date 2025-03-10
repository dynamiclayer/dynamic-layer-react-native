import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors, paddings, textStyles } from '../../style';
import { ScrollView } from 'react-native-gesture-handler';
import CustomBadgeNotification from '../../components/common/CustomBadgeNotification';

const NotificationBadgeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>Notification badge</Text>
            <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={styles.row}>
                <View style={styles.autoWidth}>
                    <CustomBadgeNotification size={"md"} notifications={5} positioning={false} position={"relative"}/> 
                </View>
                <View style={styles.smallBadge}>
                    <CustomBadgeNotification size={"sm"} notifications={3} position={"relative"}/>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: paddings.p_16,
        paddingVertical: paddings.p_32,
        backgroundColor: colors.white,
    },
    paddingBottom8: {
        paddingBottom: paddings.p_8,
    },
    paddingBottom32: {
        paddingBottom: paddings.p_32,
    },
    greyText: {
        color: colors.grey500,
    },
    row: {
        flexDirection: 'row',
    },
    autoWidth: {
        width: "auto",
    },
    smallBadge: {
        width: 24,
        height: 8,
    },
});

export default NotificationBadgeScreen;
