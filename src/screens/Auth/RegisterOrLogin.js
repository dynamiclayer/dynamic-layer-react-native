import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors, paddings, textStyles } from '../../style';
import CustomButton from '../../components/common/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import ImagePrev from '../../../assets/image';

export default function RegisterOrLogin({ navigation }) {

  return (
    <SafeAreaView style={styles.container} >
      <ImagePrev style={styles.image} />

      <View style={styles.frameParent}>
        <View style={styles.headlineParent}>
          <Text style={styles.headline}>Headline</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
          </Text>
        </View>

        <View style={styles.buttonParent}>
          <CustomButton
            text="Sign up"
            type="secondary"
            size={4}
            onPress={() => navigation.navigate('Register')}
            containerStyle={{ marginBottom: paddings.p_16 }}
          />
          <CustomButton
            text="I have an account"
            type="tertiary"
            size={4}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    aspectRatio: 375 / 375,
  },
  frameParent: {
    flex: 1,
    paddingVertical: paddings.p_16,
    alignItems: 'center',
    justifyContent: 'flex-end', // Sorgt dafür, dass Inhalte gleichmäßig verteilt werden
    marginTop: paddings.p_24, // Abstand zwischen Bild und restlichem Inhalt
  },
  headlineParent: {
    alignItems: 'center',
    paddingHorizontal: paddings.p_32,
    marginBottom: paddings.p_32,  // Abstand zwischen Text und Buttons
  },
  headline: {
    ...textStyles.text_2xl_semibold,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#757575',
    marginTop: 8,
    textAlign: 'center',
  },
  buttonParent: {
    width: '100%',
    paddingHorizontal: paddings.p_16,
  },
});
