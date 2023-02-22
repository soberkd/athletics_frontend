import React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';

const windowWidth = Dimensions.get('window').width;
const data = [
    { date: '2023-02-10', activity: 'Run', altitude: 2400, temperature: 25, BPM: 109, mental_state: 'Ok', distance: 5, duration: 30 },
    { date: '2023-02-10', activity: 'Bike', altitude: 2400, temperature: 25, BPM: 109, mental_state: 'Ok', distance: 10, duration: 45 },
    { date: '2023-02-10', activity: 'Swim', altitude: 2400, temperature: 25, BPM: 109, mental_state: 'Ok', distance: 2, duration: 20 },
    { date: '2023-02-12', activity: 'Strength Training', altitude: 2400, temperature: 25, BPM: 109, mental_state: 'Ok', distance: 0, duration: 60 },
    { date: '2023-02-13', activity: 'Run', altitude: 2400, temperature: 25, BPM: 109, mental_state: 'Ok', distance: 6, duration: 35 },
    { date: '2023-02-09', activity: 'Bike', altitude: 2400, temperature: 25, BPM: 109, mental_state: 'Ok', distance: 12, duration: 50 },
  ];
  
const AthleteJournal = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedData, setSelectedData] = React.useState(null);

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setSelectedData(
      data.filter((entry) => entry.date === day.dateString)
    );
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.activityContainer}>
      <Text style={styles.dateText}>{item.date}</Text>
      <Text style={styles.activityText}>Activity: {item.activity}</Text>
      <Text style={styles.activityText}>Altitude: {item.altitude}</Text>
      <Text style={styles.activityText}>Temp: {item.temperature}°c</Text>
      <Text style={styles.activityText}>{item.BPM}bpm</Text>
      <Text style={styles.activityText}>Mental state:  
      {item.mental_state}</Text>
      {/* <Text style={styles.activityText}>{item.activity}</Text> */}
      <Text style={styles.activityText}>
        {item.distance} kilometers / {item.duration} minutes
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={onDayPress}
        eventDates={data.date}
        markedDates={{ [selectedDate]: { selected: true } }}
      />
      {selectedData && (
        <FlatList
          style={styles.entryContainer}
          data={selectedData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  calendar: {
    width: windowWidth,
    // marginTop: 20,
  },
  entryContainer: {
    marginTop: 20,
  },
  activityContainer: {
    marginTop: 20,
    margin: 5, 
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  dateText: {
    fontSize: 18,
    marginTop: 10,
    color: "#1e90ff"
  },
  activityText: {
    fontSize: 16,
    // marginTop: 10,
    color: "black"
  },
});

export default AthleteJournal;
