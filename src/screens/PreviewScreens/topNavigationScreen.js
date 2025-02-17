import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors, paddings, textStyles } from '../../style';
import { ScrollView } from 'react-native-gesture-handler';
import CustomTopNavigation from '../../components/navigation/CustomTopNavigation';
import CamIcon from '../../../assets/icons/svg_js/camIcon';
import BackIcon from '../../../assets/icons/svg_js/backIcon';
import ChatIcon from '../../../assets/icons/svg_js/chatIcon';

/**
 * TopNavigationScreen Component
 * 
 * A preview screen that demonstrates different configurations of the CustomTopNavigation component.
 * Shows various examples of navigation headers with different types, icons, and functionalities.
 */
const TopNavigationScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Type Section - Demonstrates different header types */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Type</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { paddingBottom: paddings.p_32 }]}>
                {/* Default Type Navigation Header */}
                <CustomTopNavigation
                    type={'default'} // Optional: Defines the header type ('default' or 'large'). Default value: 'default'
                    title={"Title"} // Required: Sets the title in the header
                    leftIcon={<BackIcon />} // Optional: Left icon in the header. For type='default', BackIcon is used by default
                    rightIcon={<CamIcon />} // Required: Icon for the right button
                    leftIconPress={() => console.log('Left Icon Pressed')} // Required: Callback function for the left icon
                    rightIconPress={() => console.log('Right Icon Pressed')} // Required: Callback function for the right icon
                />

                {/* Large Type Navigation Header */}
                <CustomTopNavigation
                    type={'large'} // Optional: Defines the header type ('default' or 'large'). Default value: 'default'
                    title={"Title"} // Required: Sets the title in the header
                    leftIcon={<ChatIcon />} // Optional: Left icon in the header. For type='default', BackIcon is used by default
                    rightIcon={<CamIcon />} // Required: Icon for the right button
                    leftIconPress={() => console.log('Left Icon Pressed')} // Required: Callback function for the left icon
                    rightIconPress={() => console.log('Right Icon Pressed')} // Required: Callback function for the right icon
                />
            </View>

            {/* Left Icon Section - Shows navigation header with only left icon */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>iconLeft</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { paddingBottom: paddings.p_32 }]}>
                <CustomTopNavigation
                    type={'default'} // Optional: Defines the header type ('default' or 'large'). Default value: 'default'
                    title={"Title"} // Required: Sets the title in the header
                    leftIcon={<BackIcon />} // Optional: Left icon in the header. For type='default', BackIcon is used by default
                    leftIconPress={() => console.log('Left Icon Pressed')} // Required: Callback function for the left icon
                />
            </View>

            {/* Right Icon Section - Shows navigation header with only right icon */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>iconRight</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { marginBottom: paddings.p_32 }]}>
                <CustomTopNavigation
                    type={'default'} // Optional: Defines the header type ('default' or 'large'). Default value: 'default'
                    title={"Title"} // Required: Sets the title in the header
                    rightIcon={<CamIcon />} // Required: Icon for the right button
                    rightIconPress={() => console.log('Right Icon Pressed')} // Required: Callback function for the right icon
                />
            </View>
        </ScrollView>
    )
}

/**
 * Styles for the TopNavigationScreen component
 */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: paddings.p_16,
        paddingVertical: paddings.p_32,
        backgroundColor: colors.white
    },
    inputContainer: {
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
    loadingContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});

export default TopNavigationScreen