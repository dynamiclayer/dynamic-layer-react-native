import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors, paddings, textStyles } from '../../style';
import CustomButton from '../../components/common/CustomButton';
import CustomIcon from '../../../assets/icons/svg_js/customIcon';
import { ScrollView } from 'react-native-gesture-handler';

const ButtonScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* TYPE */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Type</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                    <View style={styles.buttonWrapper}>
                        <CustomButton
                            text={"Primary"}
                            type={"primary"}
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <CustomButton
                            text={"Secondary"}
                            type={"secondary"}
                        />
                    </View>
                </View>
                <View style={styles.buttonRow}>
                    <View style={styles.buttonWrapper}>
                        <CustomButton
                            text={"Tertiary"}
                            type={"tertiary"}
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <CustomButton
                            text={"Ghost"}
                            type={"ghost"}
                        />
                    </View>
                </View>
            </View>

            {/* SIZE */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Size</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                    <View style={{ width: 110 }}>
                        <CustomButton
                            text={"Primary"}
                            type={"primary"}
                            size={"lg"}
                        />
                    </View>
                    <View style={{ width: 94 }}>
                        <CustomButton
                            text={"Primary"}
                            type={"primary"}
                            size={"md"}
                        />
                    </View>
                    <View style={{ width: 94 }}>
                        <CustomButton
                            text={"Primary"}
                            type={"primary"}
                            size={"sm"}
                        />
                    </View>
                </View>
                <View style={styles.buttonRow}>
                    <View style={{ width: 94 }}>
                        <CustomButton
                            text={"Primary"}
                            type={"primary"}
                            size={"xs"}
                        />
                    </View>
                </View>
            </View>

            {/* State */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>State</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                    <View style={styles.buttonWrapper}>
                        <CustomButton
                            text={"Primary"}
                            type={"primary"}
                        />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <CustomButton
                            text={"Primary"}
                            type={"primary"}
                            state={"disabled"}
                        />
                    </View>
                </View>
                <View style={styles.buttonRow}>
                    <View style={styles.buttonWrapper}>
                        <CustomButton
                            text={"Primary"}
                            type={"primary"}
                            state={"loading"}
                        />
                    </View>
                </View>
            </View>

            {/* ICON */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Icon</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.buttonContainer, { marginBottom: paddings.p_32 }]}>
                <View style={styles.buttonRow}>
                    <CustomButton
                        text={"IconLeft"}
                        type={"primary"}
                        scaling={"full"}
                        iconLeft={<CustomIcon fill={colors.white} />}
                    />
                    <CustomButton
                        text={"iconRight"}
                        type={"primary"}
                        scaling={"full"}
                        iconRight={<CustomIcon fill={colors.white} />}
                    />
                </View>
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
    buttonContainer: {
        gap: paddings.p_16,
        paddingBottom: paddings.p_32,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: paddings.p_16,
    },
    buttonWrapper: {
        width: 140,
    },
});

export default ButtonScreen