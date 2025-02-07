import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { colors, paddings, rounded, shadowStyles, textStyles } from '../../style';
import { useNavigation } from "@react-navigation/native";
const Card = ({ status, title, description, screenName }) => {
    const navigation = useNavigation();
    const getStatusStyles = () => {
        switch (status) {
            case "Complete":
                return styles.complete;
            case "In Progress":
                return styles.inProgress; 
            case "Coming Soon":
                return styles.comingSoon;
            default:
                return styles.defaultStatus;
        }
    };

    const changePage = () => {
        navigation.navigate(screenName);
    }

    return (
        <Pressable style={[styles.card]} onPress={changePage}>
            <View style={[styles.dateBadge, getStatusStyles()]}>
                <Text style={[textStyles.text_xs_semibold, styles.text]}>{status || "Not Started"}</Text>
            </View>
            <View style={styles.wrapper}>
                <Text style={[textStyles.text_sm_semibold, styles.avatar]}>{title}</Text>
                <Text style={[textStyles.text_sm_regular, styles.component]}>{description}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    text: {
        color: colors.white,
        textAlign: "left",
    },
    dateBadge: {
        borderRadius: rounded.rounded_full,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        paddingHorizontal: paddings.p_8,
        paddingVertical: paddings.p_4
    },
    complete: {
        backgroundColor: colors.green500
    },
    inProgress: {
        backgroundColor: colors.yellow500
    },
    comingSoon: {
        backgroundColor: colors.violet500
    },
    defaultStatus: {
        backgroundColor: colors.grey500
    },
    avatar: {
        color: colors.black,
        textAlign: "left"
    },
    component: {
        color: colors.grey500
    },
    wrapper: {
        alignSelf: "stretch"
    },
    card: {
        width: '48%',
        height: 128,
        borderRadius: rounded.rounded_lg,
        backgroundColor: colors.white,
        borderStyle: "solid",
        borderColor: colors.grey200,
        borderWidth: 1,
        padding: paddings.p_16,
        gap: paddings.p_32,
        marginBottom: paddings.p_16,
    }
});

export default Card;
