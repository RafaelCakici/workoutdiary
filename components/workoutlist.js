import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRunning, faSwimmer, faBiking } from '@fortawesome/free-solid-svg-icons';
import { WorkoutContext } from './workoutcontext';
import { TouchableOpacity } from 'react-native'; 
import { styles } from './styles';

const WorkoutList = () => {
  const { workouts, unitSystem, deleteWorkout } = useContext(WorkoutContext);

  const convertDistance = (distance) => {
    return unitSystem === 'metric' ? `${distance} km` : `${(distance * 0.621371).toFixed(2)} miles`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const sortedWorkouts = workouts.sort((a, b) => new Date(b.date) - new Date(a.date));
  

  const getIcon = (sport) => {
    switch(sport) {
      case 'running':
        return faRunning;
      case 'swimming':
        return faSwimmer;
      case 'bicycling':
        return faBiking;
      default:
        return faRunning;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedWorkouts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.workoutItem}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesomeIcon icon={getIcon(item.sport)} size={20} />
              <Text style={{ marginLeft: 10 }}>{`${item.sport.charAt(0).toUpperCase() + item.sport.slice(1)}`}</Text>
            </View>
            <Text>{`Distance: ${convertDistance(item.distance)}`}</Text>
            <Text>{`Duration: ${item.duration} min`}</Text>
            <Text>{`Date: ${formatDate(item.date)}`}</Text>
            <TouchableOpacity onPress={() => deleteWorkout(item.id)} style={styles.deleteButton}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default WorkoutList;
