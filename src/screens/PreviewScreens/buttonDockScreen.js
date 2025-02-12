import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors, paddings, textStyles } from '../../style';
import CustomButton from '../../components/common/CustomButton';
import CustomIcon from '../../../assets/icons/svg_js/customIcon';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButtonIcon from '../../components/common/CustomButtonIcon';
import CustomButtonDock from '../../components/common/CustomButtonDock';

const ButtonDockScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* TYPE */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Type</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={styles.buttonContainer}>
                    <CustomButtonDock 
                        firstButton={<CustomButton text="Primary" type="primary" />}
                    />
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

export default ButtonDockScreen