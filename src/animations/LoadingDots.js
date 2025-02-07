import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const Dot = ({ delay, color }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.sequence([
      Animated.delay(delay),
      Animated.loop(
        Animated.sequence([
          Animated.timing(translateY, {
            toValue: -10,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ])
      ),
    ]);

    animation.start();

    return () => animation.stop();
  }, [delay, translateY]);

  return (
    <Animated.View
      style={[
        styles.dot,
        { backgroundColor: color || styles.dot.backgroundColor },
        { transform: [{ translateY }] },
      ]}
    />
  );
};

const LoadingDots = ({ color }) => {
  return (
    <View style={styles.container}>
      <Dot delay={0} color={color} />
      <Dot delay={300} color={color} />
      <Dot delay={600} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 5,
    alignSelf: "center",
    top: 5,
  },
});

export default LoadingDots;
