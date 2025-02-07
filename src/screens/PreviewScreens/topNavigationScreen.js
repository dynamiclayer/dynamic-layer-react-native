import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors, paddings, textStyles } from '../../style';
import { ScrollView } from 'react-native-gesture-handler';
import CustomTopNavigation from '../../components/navigation/CustomTopNavigation';
import CamIcon from '../../../assets/icons/svg_js/camIcon';
import BackIcon from '../../../assets/icons/svg_js/backIcon';
import ChatIcon from '../../../assets/icons/svg_js/chatIcon';

const TopNavigationScreen = () => {

    return (
        <ScrollView style={styles.container}>
            {/* TYPE */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Type</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { paddingBottom: paddings.p_32 }]}>
                <CustomTopNavigation
                    type={'default'} // Optional: Definiert den Header-Typ ('default' oder 'large'). Standardwert: 'default'
                    title={"Title"} // Pflichtfeld: Legt den Titel in der Kopfzeile fest
                    leftIcon={<BackIcon />} // Optional: Linkes Icon in der Kopfzeile. Bei type='default' wird standardmäßig BackIcon verwendet
                    rightIcon={<CamIcon />} // Pflichtfeld: Icon für die rechte Schaltfläche
                    leftIconPress={() => console.log('Left Icon Pressed')} // Pflichtfeld: Callback-Funktion für das linke Icon
                    rightIconPress={() => console.log('Right Icon Pressed')} // Pflichtfeld: Callback-Funktion für das rechte Icon
                />

                <CustomTopNavigation
                    type={'large'} // Optional: Definiert den Header-Typ ('default' oder 'large'). Standardwert: 'default'
                    title={"Title"} // Pflichtfeld: Legt den Titel in der Kopfzeile fest
                    leftIcon={<ChatIcon />} // Optional: Linkes Icon in der Kopfzeile. Bei type='default' wird standardmäßig BackIcon verwendet
                    rightIcon={<CamIcon />} // Pflichtfeld: Icon für die rechte Schaltfläche
                    leftIconPress={() => console.log('Left Icon Pressed')} // Pflichtfeld: Callback-Funktion für das linke Icon
                    rightIconPress={() => console.log('Right Icon Pressed')} // Pflichtfeld: Callback-Funktion für das rechte Icon
                />
            </View>

            {/* Icon Left */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>iconLeft</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { paddingBottom: paddings.p_32 }]}>
                <CustomTopNavigation
                    type={'default'} // Optional: Definiert den Header-Typ ('default' oder 'large'). Standardwert: 'default'
                    title={"Title"} // Pflichtfeld: Legt den Titel in der Kopfzeile fest
                    leftIcon={<BackIcon />} // Optional: Linkes Icon in der Kopfzeile. Bei type='default' wird standardmäßig BackIcon verwendet
                    leftIconPress={() => console.log('Left Icon Pressed')} // Pflichtfeld: Callback-Funktion für das linke Icon
                />
            </View>

            {/* Icon Right */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>iconRight</Text>
            <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, paddingBottom: paddings.p_32 }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</Text>
            <View style={[styles.inputContainer, { marginBottom: paddings.p_32 }]}>
                <CustomTopNavigation
                    type={'default'} // Optional: Definiert den Header-Typ ('default' oder 'large'). Standardwert: 'default'
                    title={"Title"} // Pflichtfeld: Legt den Titel in der Kopfzeile fest
                    rightIcon={<CamIcon />} // Pflichtfeld: Icon für die rechte Schaltfläche
                    rightIconPress={() => console.log('Right Icon Pressed')} // Pflichtfeld: Callback-Funktion für das rechte Icon
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