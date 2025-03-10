import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { colors, paddings, textStyles } from '../../style';
import CustomInputField from '../../components/common/CustomInputField';
import PlusIcon from '../../../assets/icons/svg_js/plusIcon';
import { ScrollView } from 'react-native-gesture-handler';

const InputFieldScreen = () => {
    const [inputValue, setInputValue] = useState('Input Title');

    return (
        <ScrollView style={styles.container}>
            <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>Type</Text>
            <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={[styles.inputContainer, styles.paddingBottom32]}>
                <CustomInputField
                    size={"lg"}
                    placeholder={"Input Field"}
                    type={"default"}
                    state={"default"}
                />
                <CustomInputField
                    size={"lg"}
                    placeholder={"Input Field"}
                    type={"success"}
                    state={"default"}
                />
                <CustomInputField
                    size={"lg"}
                    placeholder={"Input Field"}
                    type={"default"}
                    state={"disabled"}
                />
                <CustomInputField
                    size={"lg"}
                    placeholder={"Input Field"}
                    type={"error"}
                    state={"default"}
                    error={"Description"}
                />
            </View>
            <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>Size</Text>
            <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={[styles.inputContainer, styles.paddingBottom32]}>
                <CustomInputField size={"lg"} placeholder={"Input Field"} />
                <CustomInputField size={"md"} placeholder={"Input Field"} />
                <CustomInputField size={"sm"} placeholder={"Input Field"} />
            </View>
            <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>Icons</Text>
            <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={[styles.inputContainer, styles.paddingBottom32]}>
                <CustomInputField size={"lg"} placeholder={"Input Field"} iconRight={<PlusIcon />} />
                <CustomInputField size={"lg"} placeholder={"Input Field"} iconLeft={<PlusIcon />} />
            </View>
            <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>States</Text>
            <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={[styles.inputContainer, styles.marginBottom32]}>
                <CustomInputField size={"lg"} placeholder={"Input Field"} />
                <CustomInputField size={"lg"} placeholder={"Input Field"} value={inputValue} onChange={(value) => setInputValue(value)}/>
                <CustomInputField size={"lg"} placeholder={"Input Field"} value={inputValue} onChange={(value) => setInputValue(value)} isHighlighted={true} />
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
    inputContainer: {
        gap: paddings.p_16,
    },
    marginBottom32: {
        marginBottom: paddings.p_32,
    },
});

export default InputFieldScreen;