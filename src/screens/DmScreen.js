import React, { useState, useEffect, } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { Notifications } from 'react-native-notifications';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { useNavigation } from '@react-navigation/native';
const DmScreen = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const tabs = ['Notification', 'Direct Message'];

    const navigation = useNavigation();
  
  
    const handleIndexChange = (index) => {
      setSelectedIndex(index);
  
      // Navigate to a different screen based on the selected tab
      if (index === 0) {
        setSelectedIndex(0);
        navigation.navigate('Notification');
      } else if (index === 1) {
        navigation.navigate('Direct Message');
    }};
  
  return (
    <ScrollView>
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
    </ScrollView>
  )
}

export default DmScreen

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
})