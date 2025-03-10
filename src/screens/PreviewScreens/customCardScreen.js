import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { colors, paddings, textStyles } from '../../style';
import CustomCard from '../../components/common/CustomCard';
import PlaceholderIcon from '../../../assets/icons/svg_js/placeholderIcon';

const CustomCardScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* SIZE SECTION */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Size</Text>
            <Text
                style={{
                    ...textStyles.text_sm_regular,
                    color: colors.grey500,
                    paddingBottom: paddings.p_32,
                }}
            >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={styles.sectionContainer}>

                <View style={styles.rowContainer}>
                    <CustomCard
                        icon={<PlaceholderIcon fill={colors.black} />}
                        title={"Title"}
                        description={"Description"}
                        size={"md"}
                    />
                    <CustomCard
                        icon={<PlaceholderIcon fill={colors.black} />}
                        title={"Title"}
                        description={"Description"}
                        size={"lg"}
                    />
                </View>
            </View>

            {/* STATE SECTION */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>State</Text>
            <Text
                style={{
                    ...textStyles.text_sm_regular,
                    color: colors.grey500,
                    paddingBottom: paddings.p_32,
                }}
            >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
            </Text>
            <View style={styles.sectionContainer}>
                <View style={styles.rowContainer}>
                        <CustomCard
                            icon={<PlaceholderIcon fill={colors.black} />}
                            title={"Title"}
                            description={"Description"}
                            size={"lg"}
                            state={"active"}
                        />
                        <CustomCard
                            icon={<PlaceholderIcon fill={colors.black} />}
                            title={"Title"}
                            description={"Description"}
                            size={"lg"}
                            state={"default"}
                        />
                        <CustomCard
                            icon={<PlaceholderIcon />}
                            title={"Title"}
                            description={"Description"}
                            size={"lg"}
                            state={"disabled"}
                        />
                </View>
            </View>

            {/* DESCRIPTION TOGGLE SECTION */}
            <Text style={{ ...textStyles.text_lg_semibold, paddingBottom: paddings.p_8 }}>Description Toggle</Text>
            <Text
                style={{
                    ...textStyles.text_sm_regular,
                    color: colors.grey500,
                    paddingBottom: paddings.p_32,
                }}
            >
                You can edit the description with a true or false parameter (disable or enable the description).
            </Text>
            <View style={styles.sectionContainer}>
                <View style={styles.rowContainer}>
                    <CustomCard
                        icon={<PlaceholderIcon fill={colors.black} />}
                        title="Title"
                        description="Description"
                        size="lg"
                        state="active"
                    />
                    <CustomCard
                        icon={<PlaceholderIcon fill={colors.black} />}
                        title="Title"
                        size="lg"
                        state="active"
                    />
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
    sectionContainer: {
        marginBottom: paddings.p_32,
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Ermöglicht Zeilenumbruch, falls Karten nicht in eine Zeile passen
        gap: paddings.p_16,
    },
    itemContainer: {
        marginRight: paddings.p_16,
    },
});

export default CustomCardScreen;
