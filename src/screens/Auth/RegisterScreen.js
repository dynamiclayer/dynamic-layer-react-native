import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, Platform } from 'react-native';
import AuthContext from '../../AuthContext';
import CustomInput from '../../components/inputs/CustomInput';
import { colors, paddings, textStyles } from '../../style';
import CustomButton from '../../components/common/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RegisterScreen({ navigation }) {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [emailSuccess, setEmailSuccess] = useState(false); // Neu hinzugefügt
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
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
        return re.test(email.toLowerCase());
    };
    
    const validateInput = (field) => {
        let valid = true;

        if (field === 'password') {
            if (password.length < 6) {
                setPasswordError('Password must be at least 6 characters long');
                valid = false;
            } else {
                setPasswordError('');
            }
        }

        if (field === 'email') {
            if (!validateEmail(email)) {
                setEmailError('Please enter a valid email address');
                setEmailSuccess(false);  // Falls ungültig
                valid = false;
            } else {
                setEmailError('');
                setEmailSuccess(true);   // Falls gültig
            }
        }

        if (field === 'firstName') {
            if (firstName.trim() === '') {
                setFirstNameError('First name is required');
                valid = false;
            } else {
                setFirstNameError('');
            }
        }

        if (field === 'lastName') {
            if (lastName.trim() === '') {
                setLastNameError('Last name is required');
                valid = false;
            } else {
                setLastNameError('');
            }
        }

        return valid;
    };

    useEffect(() => {
        const allFieldsValid = !emailError && !passwordError && !firstNameError && !lastNameError && emailSuccess;
        setIsValid(allFieldsValid);
    }, [emailError, passwordError, firstNameError, lastNameError, emailSuccess]);

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
                            containerStyle={{ marginBottom: paddings.p_16 }}
                            size={3}
                            placeholder={"First name"}
                            onChangeText={setFirstName}
                            onEndEditing={() => validateInput('firstName')}
                            error={firstNameError}
                            success={!!firstName && !firstNameError}
                        />
                        <CustomInput
                            containerStyle={{ marginBottom: paddings.p_16 }}
                            size={3}
                            placeholder={"Last name"}
                            onChangeText={setLastName}
                            onEndEditing={() => validateInput('lastName')}
                            error={lastNameError}
                            success={lastName !== '' && !lastNameError}
                        />
                        <CustomInput
                            containerStyle={{ marginBottom: paddings.p_16 }}
                            size={3}
                            placeholder={"Email"}
                            onChangeText={setEmail}
                            onEndEditing={() => validateInput('email')}
                            inputMode="email"
                            error={emailError}
                            success={!emailError && emailSuccess}  // Erfolgszustand anzeigen
                        />
                        <CustomInput
                            containerStyle={{ marginBottom: paddings.p_16 }}
                            placeholder={"Password"}
                            onChangeText={setPassword}
                            onEndEditing={() => validateInput('password')}
                            error={passwordError}
                            inputMode="password"
                            secureTextEntry
                        />
                    </View>
                </KeyboardAvoidingView>

                    <SafeAreaView style={styles.bottomButton}>
                        <CustomButton 
                            text='Create account'
                            type='secondary'
                            size={4}
                            loading={loading}
                            disabled={isValid}
                            onPress={() => navigation.navigate('Onboarding')}
                        />
                    </SafeAreaView>
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
        width: "100%",
        paddingHorizontal: paddings.p_16,
        paddingVertical: paddings.p_32,
        flex: 1
    },
    bottomButton: {
        padding: paddings.p_16,
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: colors.white,
    },
});
