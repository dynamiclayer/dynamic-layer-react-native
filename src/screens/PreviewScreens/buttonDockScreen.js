import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, paddings, textStyles } from '../../style';
import CustomButton from '../../components/common/CustomButton';
import CustomButtonDock from '../../components/common/CustomButtonDock';

const ButtonDockScreen = () => {
    return (
        <View style={styles.screen}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.scrollContent}
            >
                {/* TYPE */}
                <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Count</Text>
                <Text
                    style={{
                        ...textStyles.text_sm_regular,
                        color: colors.grey500,
                        marginBottom: paddings.p_32,
                    }}
                >
                    The count changes dynamically based on the button Count (min 1, max 2)
                </Text>
                <View style={{ height: 89 }}>
                    <CustomButtonDock
                        firstButton={<CustomButton text={"Primary"} type={"primary"} />}
                        style={{paddingBottom: 0}} // No need! Adds custom styling to the ButtonDock. (Just for the preview screen needed)
                    />
                </View>

                <View style={{ marginTop: paddings.p_16, marginBottom: paddings.p_32, height: 161 }}>
                    <CustomButtonDock
                        firstButton={<CustomButton text={"Primary"} type={"primary"} />}
                        secondButton={<CustomButton text={"Secondary"} type={"secondary"} />}
                        style={{paddingBottom: 0}} // No need! Adds custom styling to the ButtonDock. (Just for the preview screen needed)
                    />
                </View>

                {/* TYPE */}
                <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Direction</Text>
                <Text
                    style={{
                        ...textStyles.text_sm_regular,
                        color: colors.grey500,
                        paddingBottom: paddings.p_32,
                    }}
                >
                    You can edit the direction with the direction parameter. (options: horizontal, vertical, (default: vertical))
                </Text>
                <View style={{ height: 89 }}>
                    <CustomButtonDock
                        direction={"horizontal"}
                        firstButton={<CustomButton text={"Primary"} type={"primary"} />}
                        secondButton={<CustomButton text={"Secondary"} type={"secondary"} />}
                        style={{paddingBottom: 0}}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    // contentContainerStyle of the ScrollView – important: extra padding at the bottom edge,
    // so that the scrollable content is not covered by the dock.
    scrollContent: {
        paddingHorizontal: paddings.p_16,
        paddingVertical: paddings.p_32,
        paddingBottom: 89, // Adjust here if necessary, depending on the height of your dock. For horizontal with the default button "89".
    },
    buttonContainer: {
        gap: paddings.p_16,
        paddingBottom: paddings.p_32,
    },
});

export default ButtonDockScreen;
