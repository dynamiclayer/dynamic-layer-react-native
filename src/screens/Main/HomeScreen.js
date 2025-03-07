import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, paddings, textStyles } from '../../style';
import CustomCard from '../../components/common/CustomCard';
import { useNavigation } from '@react-navigation/native';
import CheckCircleIcon from '../../../assets/icons/svg_js/checkCircleIcon';

export default function HomeScreen() {
  const navigation = useNavigation();

  const changePage = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home</Text>
        </View>
        <View style={styles.cardsContainer}>
          {/* Button */}
          <CustomCard
            icon={<CheckCircleIcon />}
            title="Button"
            description="Component"
            size="lg"
            onPress={() => changePage("ButtonScreen")}
          />

          {/* Button Icon */}
          <CustomCard
            icon={<CheckCircleIcon />}
            title="Button Icon"
            description="Component"
            size="lg"
            onPress={() => changePage("ButtonIconScreen")}
          />

          {/* Button Dock */}
          <CustomCard
            icon={<CheckCircleIcon />}
            title="Button Dock"
            description="Component"
            size="lg"
            onPress={() => changePage("CustomButtonDockScreen")}
          />

          {/* Notification Badge */}
          <CustomCard
            icon={<CheckCircleIcon />}
            title="Notification Badge"
            description="Component"
            size="lg"
            onPress={() => changePage("NotificationBadgeScreen")}
          />

          {/* Bottom Navigation */}
          <CustomCard
            icon={<CheckCircleIcon />}
            title="Bottom Navigation"
            description="Component"
            size="lg"
            onPress={() => changePage("BottomNavigationScreen")}
          />

          {/* Card */}
          <CustomCard
            icon={<CheckCircleIcon />}
            title="Card"
            description="Component"
            size="lg"
            onPress={() => changePage("CustomCardScreen")}
          />

          {/* Input Field */}
          <CustomCard
            icon={<CheckCircleIcon />}
            title="Input Field"
            description="Component"
            size="lg"
            onPress={() => changePage("InputFieldScreen")}
          />

          {/* Top Navigation */}
          <CustomCard
            icon={<CheckCircleIcon />}
            title="Top Navigation"
            description="Component"
            size="lg"
            onPress={() => changePage("TopNavigationScreen")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollContainer: {
    paddingHorizontal: paddings.p_16,
    paddingVertical: paddings.p_32,
    alignItems: 'flex-start',
  },
  header: {
    marginBottom: paddings.p_16,
  },
  headerText: {
    ...textStyles.text_4xl_bold,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16
  },
});
