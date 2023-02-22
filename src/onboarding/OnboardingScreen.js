import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation =useNavigation();

  const onboardingData = [
    {
      title: "Welcome to the app",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: require("../images/kipchoge.jpeg"),
    },
    {
      title: "Explore the features",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: require("../images/bolt.jpeg"),
    },
    {
      title: "Get started",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: require("../images/omanyala.jpeg"),
    },
  ];

  const handleNext = () => {
    if (currentIndex === onboardingData.length - 1) {
      // Navigate to the next screen or do whatever you want
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    // Navigate to the next screen or do whatever you want
  };

  const { title, description, image } = onboardingData[currentIndex];

  return (
    <View style={styles.container}>
      <View style={styles.onboardingContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress ={ () => navigation.navigate('login')}
      >
        <Text>Get started with Athletics</Text>
      </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e90ff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  onboardingContent: {
    alignItems: "center",
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: 'black'
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 20,
    color: 'black'
  },
  image: {
    width: 400,
    height: 500,
    marginTop: 50,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  skipText: {
    fontWeight: 'bold',
    color: 'black'

  },
  nextText: {
    fontWeight: 'bold',
    color: 'black'

  },
})
