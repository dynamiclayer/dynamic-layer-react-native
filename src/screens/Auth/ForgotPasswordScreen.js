import { View, Text, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, paddings, textStyles } from '../../style'
import CustomInput from '../../components/inputs/CustomInput'
import CustomButton from '../../components/common/CustomButton'

const ForgotPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setIsValid(confirmValidInputs());
    }, [email]);

    const confirmValidInputs = () => {
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            valid = false;
        } else {
            setEmailError('');
        }

        return valid;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <CustomInput
                    containerStyle={{ marginBottom: paddings.p_16 }}
                    size={3}
                    placeholder={"Email"}
                    onChangeText={setEmail}
                    inputMode="email"
                    error={emailError}
                    success={!emailError && email !== ""}
                />

                <Text style={{ ...textStyles.text_sm_regular, color: colors.grey500, marginBottom: paddings.p_16 }}>Enter the email address you used to register with Dynamiclayer. You will receive an email to set a new password.</Text>

                <CustomButton
                    text='Define new password'
                    type='secondary'
                    size={4}
                    loading={loading}
                    disabled={!isValid}
                    onPress={() => navigation.navigate('ForgotPassword')}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: paddings.p_16,
        paddingVertical: paddings.p_32,
    },
})

export default ForgotPasswordScreen
