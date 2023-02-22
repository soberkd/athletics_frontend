import React, { useState, useEffect, } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { Notifications } from 'react-native-notifications';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { useNavigation } from '@react-navigation/native';

const NotificationScreen = () => {

  const sampleNotifications = [
    {
      identifier: '1',
      title: 'New connection',
      body: 'You can now directly contact Hire a Mzungu coz you have connected. You can now directly DM Hire a Mzungu',
    },
    {
      identifier: '2',
      title: 'Subscription',
      body: 'You are now subscribed to Quaterly subscription. ',
    },
    {
      identifier: '3',
      title: 'Usain Bolt',
      body: 'Loving what you are doing, keep pushing',
    },
  ];

  Notifications.registerRemoteNotifications();


  const [notification, setNotification] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const tabs = ['Notification', 'Direct Message'];

  const navigation = useNavigation();


  const handleIndexChange = (index) => {
    setSelectedIndex(index);

    // Navigate to a different screen based on the selected tab
    if (index === 0) {
      // setSelectedIndex(0);
        navigation.navigate('Notification');
      } else if (index === 1) {
        // setSelectedIndex(1);
      navigation.navigate('Direct Message');
  }};

  const handleNotification = (notification) => {
    setNotification(notification);
  };

  Notifications.events().registerNotificationReceivedForeground((notification) => handleNotification(notification));
  Notifications.events().registerNotificationOpened((notification) => handleNotification(notification));

  useEffect(() => {
    setNotifications(
      sampleNotifications.map((notification) => ({
        identifier: notification.identifier,
        getTitle: () => notification.title,
        getBody: () => notification.body,
      }))
    );
  }, []);
  return (
    <ScrollView style={{ flex: 1, padding: 5 }}>

<SegmentedControlTab
        values={tabs}
        selectedIndex={selectedIndex}
        onTabPress={handleIndexChange}
        tabStyle={styles.tab}
        activeTabStyle={styles.activeTab}
        tabTextStyle={styles.tabText}
        activeTabTextStyle={styles.activeTabText}
      />

<Text style={styles.selectedTabText}>
        Selected Tab: {tabs[selectedIndex]}
      </Text>

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {notification ? (
        <Text style={{ fontSize: 20, marginBottom: 20,  }}>
          Notification received: {notification.getTitle()}
        </Text>
      ) : (
        <Text style={{ fontSize: 20, marginBottom: 20, color: 'grey' }}>No new notification</Text>
      )}
      <Button
        title="Trigger notification"
        onPress={() =>
          Notifications.postLocalNotification({
            body: 'This is your first Bongasport Notification. Thanks for being part of the journey',
            title: 'Bongasport',
          })
        }
      />

      {notifications.map((notification) => (
        <View key={notification.identifier} style={{ marginTop: 30, padding: 5, borderRadius: 10, backgroundColor: '#ddd', width: '100%' }}>
          <Text style={{ fontSize: 20, color: 'black' }}>{notification.getTitle()}</Text>
          <Text style={{ fontSize: 16, color: 'grey' }}>{notification.getBody()}</Text>
        </View>
      ))}
    </View>
     </ScrollView>
  )
}
export default NotificationScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tab: {
    backgroundColor: '#F5F5F5',
    borderColor: 'gray',
    borderWidth: 1,
  },
  activeTab: {
    backgroundColor: 'white',
  },
  tabText: {
    color: 'gray',
  },
  activeTabText: {
    color: 'black',
  },
  selectedTabText: {
    marginTop: 20,
    fontSize: 18,
  },
});
