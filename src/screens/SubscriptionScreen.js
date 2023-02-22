import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, SafeAreaView} from 'react-native'
import React,  { useState } from 'react'
import Swiper from 'react-native-swiper'
  

export default function SubscriptionScreen() {
  
  const data = [
    {
      id: 1,
      title: 'Monthly',
      description: '',
      image: 'https://via.placeholder.com/350x150',
      price: 'Ksh 1000',
    },
    {
      id: 2,
      title: 'Quaterly',
      description: '',
      image: 'https://via.placeholder.com/350x150',
      price: 'Ksh 2500',
    },
    {
      id: 3,
      title: 'Yearly',
      description: '',
      image: 'https://via.placeholder.com/350x150',
      price: 'Ksh 9000',
    },
  ];
  
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState('Feature 1');
  const [selectedPayment, setSelectedPayment] = useState('Paypal');
  const [selectedPackage, setSelectedPackage] = useState(1);

  const handleLeftSwipe = () => {
    if (selectedPackage === 1) {
      setSelectedPackage(3);
    } else {
      setSelectedPackage(selectedPackage - 1);
    }
  };

  const handleRightSwipe = () => {
    if (selectedPackage === 3) {
      setSelectedPackage(1);
    } else {
      setSelectedPackage(selectedPackage + 1);
    }
  };

  const handleSubscribe = () => {
    setIsSubscribed(false);
  };


  return (
    <SafeAreaView style={styles.container}>
      {/* {isSubscribed ? (
        <View style={styles.subscribedContainer}>
          <Text style={styles.subscribedText}>You are subscribed!</Text>
          <Text style={styles.featureText}>
            You have access to {selectedFeature}
          </Text>
        </View>
      ) : (
        <View style={styles.subscribeContainer}>*/}
          {/* <Text style={styles.premiumText}>
            PREMIUM
          </Text>  */}
          {/* <Text style={styles.subscribeText}>
            Subscribe to access premium features
          </Text> */}
    <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Monthly</Text>
          <Text style={styles.textdet}>Get Premium features for one month</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Quaterly</Text>
          <Text style={styles.textdet}>Get Premium features for three month.</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Yearly</Text>
          <Text style={styles.textdet}>Get Premium features for a year.</Text>
        </View>
      </Swiper>
      {/* <TouchableOpacity
            style={styles.subscribeButton}
            onPress={handleSubscribe}
          >
            <Text style={styles.subscribeButtonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      )} */}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      subscribeContainer: {
        alignItems: 'center',
      },
      premiumText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'gold',
        padding: 10,
      },
      subscribedText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
      },
      subscribeText: {
        fontSize: 16,
        marginBottom: 10,
        color: 'black',
      },
      subscribeButton: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
      },
      subscribeButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      slideContainer: {
        // width: 350,
        height: 500,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
        backgroundColor: '#ddd',
      },
      image: {
        // width: 300,
        // height: 100,
        marginBottom: 10,
      },
      title: {
        fontSize: 24,
        marginBottom: 50,
        fontWeight: 'bold',
      },
      price: {
        fontSize: 18,
        marginTop: 50,
        fontWeight: 'bold',
      },
      description: {
        fontSize: 14,
      },


      //slider
      wrapper:{
        // height: 500,
      },
      slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      },
      textdet: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
      }
})