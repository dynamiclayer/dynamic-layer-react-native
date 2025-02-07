import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import CustomChip from '../common/CustomChip';
import CustomButton from '../common/CustomButton';
import { colors, paddings } from '../../style';
import PointIcon from '../../../assets/icons/svg_js/pointIcon';
import { SafeAreaView } from 'react-native-safe-area-context';

const StepIndicator = ({ steps, currentStep }) => (
  <View style={styles.iconContainer}>
    {steps.map((_, index) => (
      <PointIcon key={index} opacity={index === currentStep ? 1 : 0.4} />
    ))}
  </View>
);

const InterestPicker = ({ steps, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selections, setSelections] = useState([]);

  const { title, subtitle, options, minSelection } = steps[currentStep];

  useEffect(() => {
    setSelectedInterests([]);
  }, [currentStep]);

  const handleToggleInterest = (interest, isActive) => {
    let newSelection;
    if (isActive) {
      newSelection = [...selectedInterests, interest];
    } else {
      newSelection = selectedInterests.filter((item) => item !== interest);
    }
    setSelectedInterests(newSelection);
  };

  const handleNextStep = () => {
    const updatedSelections = [
      ...selections,
      { step: currentStep + 1, interests: selectedInterests },
    ];
    setSelections(updatedSelections);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(updatedSelections);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <CustomChip
              key={index}
              content={option}
              size={3}
              onToggle={handleToggleInterest}
              disabled={false}
              active={selectedInterests.includes(option)}
            />
          ))}
        </View>
      </View>
      <SafeAreaView style={styles.buttonContainer}>
        <StepIndicator steps={steps} currentStep={currentStep} />
        <CustomButton
          text={`Continue ${selectedInterests.length}/${minSelection}`}
          type="secondary"
          size={4}
          disabled={selectedInterests.length < minSelection}
          onPress={handleNextStep}
          containerStyle={{ marginTop: paddings.p_16 }}
        />
      </SafeAreaView>
    </View>
  );
};

InterestPicker.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      minSelection: PropTypes.number.isRequired,
    })
  ).isRequired,
  onComplete: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    paddingVertical: paddings.p_32,
    paddingHorizontal: paddings.p_16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  buttonContainer: {
    paddingVertical: paddings.p_16,
    paddingHorizontal: paddings.p_16,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
});

export default InterestPicker;
