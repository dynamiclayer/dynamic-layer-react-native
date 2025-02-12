import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { colors, paddings, textStyles } from '../../style';
import CustomInput from '../../components/common/CustomInput';
import PlusIcon from '../../../assets/icons/svg_js/plusIcon';
import { ScrollView } from 'react-native-gesture-handler';

const InputFieldScreen = () => {
    const [inputValue, setInputValue] = useState('Input Field');

    return (
        <ScrollView style={styles.container}>
            <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>Type</Text>
            <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={[styles.inputContainer, styles.paddingBottom32]}>
                <CustomInput size={3} placeholder={"Input Field"} />
                <CustomInput
                    size={3}
                    placeholder={"Input Field"}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                    isHighlighted={true}
                />
                <CustomInput
                    size={3}
                    placeholder={"Input Field"}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />
            </View>
            <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>Size</Text>
            <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={[styles.inputContainer, styles.paddingBottom32]}>
                <CustomInput size={3} placeholder={"Input Field"} />
                <CustomInput size={2} placeholder={"Input Field"} />
                <CustomInput size={1} placeholder={"Input Field"} />
            </View>
            <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>Icons</Text>
            <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={[styles.inputContainer, styles.paddingBottom32]}>
                <CustomInput size={3} placeholder={"Input Field"} rightIcon={<PlusIcon />} />
                <CustomInput size={3} placeholder={"Input Field"} leftIcon={<PlusIcon />} />
            </View>
            <Text style={[textStyles.text_lg_semibold, styles.paddingBottom8]}>States</Text>
            <Text style={[textStyles.text_sm_regular, styles.greyText, styles.paddingBottom32]}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={[styles.inputContainer, styles.marginBottom32]}>
                <CustomInput size={3} placeholder={"Input Field"} />
                <CustomInput size={3} placeholder={"Input Field"} success={true} />
                <CustomInput size={3} placeholder={"Input Field"} disabled={true} />
                <CustomInput size={3} placeholder={"Input Field"} error={"Description"} />
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