import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutForm from './components/workoutform';
import Settings from './components/settings';
import WorkoutList from './components/workoutlist'; 
import { WorkoutProvider } from './components/workoutcontext';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <WorkoutProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="AddWorkoutTab" component={WorkoutForm} options={{ title: 'Add Workout' }} />
          <Tab.Screen name="WorkoutListTab" component={WorkoutList} options={{ title: 'Past Workouts' }} />
          <Tab.Screen name="SettingsTab" component={Settings} options={{ title: 'Settings' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </WorkoutProvider>
  );
};

export default App;
