import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors, paddings, textStyles } from '../../style';
import CustomButton from '../../components/common/CustomButton';
import CustomIcon from '../../../assets/icons/svg_js/customIcon';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButtonIcon from '../../components/common/CustomButtonIcon';

const ButtonIconScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* TYPE */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Type</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                    <View style={styles.buttonWrapper}>
                        <CustomButtonIcon
                            icon={<CustomIcon fill={colors.white} />}
                            type={"primary"}
                        />
                        <CustomButtonIcon
                            icon={<CustomIcon fill={colors.white} />}
                            type={"secondary"}

                        />
                        <CustomButtonIcon
                            icon={<CustomIcon fill={colors.black} />}
                            type={"tertiary"}

                        />
                    </View>
                </View>
            </View>

            {/* SIZE */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Size</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonRow}>
                    <View style={styles.buttonWrapper}>
                        <CustomButtonIcon
                            icon={<CustomIcon fill={colors.white} />}
                            type={"primary"}
                            size={"lg"}
                        />
                        <CustomButtonIcon
                            icon={<CustomIcon fill={colors.white} />}
                            type={"primary"}
                            size={"md"}
                        />
                        <CustomButtonIcon
                            icon={<CustomIcon fill={colors.white} />}
                            type={"primary"}
                            size={"sm"}
                        />
                        <CustomButtonIcon
                            icon={<CustomIcon fill={colors.white} />}
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
                <View style={styles.buttonWrapper}>
                    <CustomButtonIcon
                        icon={<CustomIcon fill={colors.white} />}
                        type={"primary"}
                        size={"lg"}
                    />
                    <CustomButtonIcon
                        icon={<CustomIcon fill={colors.grey600} />}
                        type={"primary"}
                        size={"lg"}
                        state={"disabled"}
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
        width: "auto",
        flexDirection: 'row',
        gap: paddings.p_16,
    },
});

export default ButtonIconScreen