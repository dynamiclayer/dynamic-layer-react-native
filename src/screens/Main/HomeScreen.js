import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, paddings, textStyles } from '../../style';
import ComponentCard from '../../components/common/ComponentCard';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Home</Text>
        </View>
        <View style={styles.cardsContainer}>
          {/* Button */}
          <ComponentCard
            status={"Complete"}
            title={"Button"}
            description={"Component"}
            screenName={"ButtonScreen"}
          />

          {/* Button Icon */}
          <ComponentCard
            status={"Complete"}
            title={"Button Icon"}
            description={"Component"}
            screenName={"ButtonIconScreen"}
          />

          {/* Button Dock */}
          <ComponentCard
            status={"Fehlt"}
            title={"Button Dock"}
            description={"Component"}
            screenName={"ButtonScreen"}
          />

          {/* Notification Badge */}
          <ComponentCard
            status={"Complete"}
            title={"Notification badge"}
            description={"Component"}
            screenName={"NotificationBadgeScreen"}
          />

          {/* Bottom Navigation */}
          <ComponentCard
            status={"Complete"}
            title={"Bottom Navigation"}
            description={"Component"}
            screenName={"BottomNavigationScreen"}
          />

          {/* Card */}
          <ComponentCard
            status={"Fehlt"}
            title={"Card"}
            description={"Component"}
            screenName={"BottomNavigationScreen"}
          />

          {/* Input Field */}
          <ComponentCard
            status={"Complete"}
            title={"Input Field"}
            description={"Component"}
            screenName={"InputFieldScreen"}
          />

          {/* Top Navigation */}
          <ComponentCard
            status={"Complete"}
            title={"Top Navigation"}
            description={"Component"}
            screenName={"TopNavigationScreen"}
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
    width: '100%',
    justifyContent: "space-between",
  },
});
