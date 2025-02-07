import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform } from 'react-native';
import AuthContext from '../../AuthContext';
import CustomInput from '../../components/inputs/CustomInput';
import { colors, paddings, textStyles } from '../../style';
import CustomButton from '../../components/common/CustomButton';
import AppleIcon from '../../../assets/icons/Apps/appleIcon';
import GoogleIcon from '../../../assets/icons/Apps/googleIcon';
import OrIcon from '../../../assets/orIcon';

export default function RegisterScreen({ navigation }) {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 5000));
        login({ firstName });
        setLoading(false);
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const confirmValidInputs = () => {
        let valid = true;

        if (password.length < 0) {
            setPasswordError('Enter password');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            valid = false;
        } else {
            setEmailError('');
        }

        return valid;
    };

    useEffect(() => {
        setIsValid(confirmValidInputs());
    }, [email, password]);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => setKeyboardVisible(true)
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => setKeyboardVisible(false)
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.content}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 20}
                >
                    <View style={styles.inputFieldParent}>
                        <CustomInput
                            size={3}
                            placeholder={"Email"}
                            onChangeText={setEmail}
                            inputMode="email"
                            error={emailError}
                            success={!emailError}
                        />

                        <CustomInput
                            placeholder={"Password"}
                            onChangeText={setPassword}
                            error={passwordError}
                            inputMode="password"
                            secureTextEntry
                        />

                        <CustomButton
                            text='Login'
                            type='secondary'
                            size={4}
                            loading={loading}
                            disabled={!isValid}
                            onPress={handleLogin}
                            scaling='full'
                        />
                        <CustomButton
                            text='Forgot password?'
                            type='ghost'
                            size={4}
                            loading={loading}
                            onPress={() => navigation.navigate('ForgotPassword')}
                            scaling='full'
                        />

                        {/* "------OR------" Einfügen */}
                        <OrIcon style={styles.or} />

                        <CustomButton
                            text='Continue with Apple'
                            type='tertiary'
                            leftIcon={<AppleIcon />}
                            size={4}
                            loading={loading}
                            onPress={() => navigation.navigate('AgreeTerms')}
                            containerStyle={styles.marginBottom16}
                        /> 

                        <CustomButton
                            text='Continue with Google'
                            type='tertiary'
                            leftIcon={<GoogleIcon />}
                            size={4}
                            loading={loading}
                            onPress={handleLogin}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
    },
    content: {
        flex: 1,
    },
    inputFieldParent: {
        paddingHorizontal: paddings.p_16,
        paddingVertical: paddings.p_32,
        gap: paddings.p_16,
    },
    bottomButton: {
        padding: paddings.p_16,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: colors.white,
    },
    or: {
        alignSelf: 'center',
    },
    marginBottom16: {
        marginBottom: paddings.p_16,
    }
});
