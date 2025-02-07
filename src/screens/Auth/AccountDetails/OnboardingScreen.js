import React, { useContext } from 'react';
import { View, Alert } from 'react-native';
import InterestPicker from '../../../components/inputs/InterestPicker';
import AuthContext from '../../../AuthContext';

const OnboardingScreen = () => {
    const { login } = useContext(AuthContext);

    const steps = [
        {
            title: "How did you find us?",
            subtitle: "This will help us personalize your experience.",
            minSelection: 3, // Minimum 3 selections
            options: ["Figma community", "Google", "Youtube", "TikTok", "Recommendation"]
        },
        {
            title: "Tell us something about your interests",
            subtitle: "This will help us personalize your experience.",
            minSelection: 3, // Minimum 3 selections
            options: ["🍔 Food", "🎬 Movies", "⛰️ Outdoors", "🏝️ Travel", "🏄‍♂️ Surf", "👢 Hiking", "🎾 Tennis", "🎮 Video games", "♟️ Chess"]
        },
    ];

    const handleComplete = (selections) => {
        console.log("All steps completed, data:", selections);
        Alert.alert("Selections completed", JSON.stringify(selections));

        login({ isOnboarded: true });
        // Perform any further actions with the selections
    };

    return (
        <View style={{ flex: 1 }}>
            <InterestPicker
                steps={steps}
                onComplete={handleComplete}
            />
        </View>
    );
};

export default OnboardingScreen;
