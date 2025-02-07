import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CustomIcon from '../../../assets/icons/svg_js/customIcon'
import { colors, paddings, textStyles } from '../../style'
import CustomButton from '../../components/common/CustomButton'

const AgreeTermsScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <ScrollView contentContainerStyle={{ paddingTop: paddings.p_32, paddingBottom: paddings.p_16, paddingHorizontal: paddings.p_16 }}>
                <CustomIcon fill={colors.black} height={48} width={48} />

                <View style={{ paddingVertical: paddings.p_32 }}>
                    <Text style={[textStyles.text_sm_semibold, { marginBottom: paddings.p_16 }]}>Our community commitment</Text>
                    <Text style={[textStyles.text_2xl_semibold, { marginBottom: paddings.p_16 }]}>appsystem is a community where anyone can belong</Text>
                    <Text style={textStyles.text_base_regular}>
                    To ensure this, we’re asking you to commit to the following:
                        {'\n\n'}
                        I agree to treat everyone in the appsystem community - regardless of their race, religion, national origin, ethnicity, skin color, disability, sex, gender identity, sexual orientation or age - with respect, and without judgment or bias.
                    </Text>
                </View>

                <CustomButton
                    text='Agree and continue'
                    containerStyle={{ marginBottom: paddings.p_16 }}
                />
                <CustomButton
                    text='Decline'
                    type='tertiary'
                />
            </ScrollView>
        </View>
    )
}

export default AgreeTermsScreen
