import { StyleSheet, Text, View, FlatList  } from 'react-native'
import React from 'react'

export default function Events() {
  const events = [
    {
      id: '1',
      title: 'Boston Marathon',
      date: 'April 19, 2022',
      description: 'The Boston Marathon is an annual marathon hosted in Boston, Massachusetts, one of the six World Marathon Majors.',
    },
    {
      id: '2',
      title: 'New York City Marathon',
      date: 'November 7, 2022',
      description: 'The New York City Marathon is an annual marathon that courses through the five boroughs of New York City.',
    },
    {
      id: '3',
      title: 'London Marathon',
      date: 'April 17, 2022',
      description: 'The London Marathon is an annual marathon event held in London, United Kingdom, one of the six World Marathon Majors.',
    },
    {
      id: '4',
      title: 'Berlin Marathon',
      date: 'September 25, 2022',
      description: 'The Berlin Marathon is an annual marathon event held in Berlin, Germany, one of the six World Marathon Majors.',
    },
    {
      id: '5',
      title: 'Chicago Marathon',
      date: 'October 9, 2022',
      description: 'The Chicago Marathon is an annual marathon event hosted in Chicago, Illinois, one of the six World Marathon Majors.',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <View style={styles.eventContainer}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventDate}>{item.date}</Text>
            <Text style={styles.eventDescription}>{item.description}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventContainer: {
    backgroundColor: '##000000',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  eventDate: {
    fontSize: 16,
    color: 'grey',
    marginVertical: 10,
  },
  eventDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: 'grey',
  },
})