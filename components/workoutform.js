import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRunning, faSwimmer, faBiking } from '@fortawesome/free-solid-svg-icons';
import { styles } from './styles';
import { WorkoutContext } from './workoutcontext';

const WorkoutForm = () => {
  const [sport, setSport] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(new Date());
  const [showDateSelector, setShowDateSelector] = useState(false);


  const { addWorkout } = useContext(WorkoutContext);

  const handleAddWorkout = () => {
    const workout = { sport, distance, duration, date: date.toISOString() };
    addWorkout(workout);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.sportTypeContainer}>
        <TouchableOpacity onPress={() => setSport('running')} style={styles.sportIcon}>
          <FontAwesomeIcon icon={faRunning} size={30} color={sport === 'running' ? 'red' : 'black'} />
          <Text>Run</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSport('swimming')} style={styles.sportIcon}>
          <FontAwesomeIcon icon={faSwimmer} size={30} color={sport === 'swimming' ? 'red' : 'black'} />
          <Text>Swim</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSport('bicycling')} style={styles.sportIcon}>
          <FontAwesomeIcon icon={faBiking} size={30} color={sport === 'bicycling' ? 'red' : 'black'} />
          <Text>Bike</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input} onChangeText={setDistance} value={distance} placeholder="Distance (km)" keyboardType="numeric" />
      <TextInput style={styles.input} onChangeText={setDuration} value={duration} placeholder="Duration (min)" keyboardType="numeric" />
      <TouchableOpacity style={styles.dateContainer} onPress={() => setShowDateSelector(true)}>
        <Text>{date.toDateString()}</Text>
      </TouchableOpacity>
      {showDateSelector && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            setShowDateSelector(false);
            setDate(selectedDate || date);
          }}
        />
      )}
      <Button title="Add Workout" onPress={handleAddWorkout} />
    </View>
  );
};

export default WorkoutForm;
