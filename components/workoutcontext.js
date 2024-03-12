import React, { createContext, useState } from 'react';

export const WorkoutContext = createContext();

export const WorkoutProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [unitSystem, setUnitSystem] = useState('metric');

  const addWorkout = (workout) => {
    const workoutWithId = { ...workout, id: Date.now() }; 
    setWorkouts([...workouts, workoutWithId]);
  };
  

  const toggleUnitSystem = () => { // Function to toggle between metric and imperial
    setUnitSystem(current => current === 'metric' ? 'imperial' : 'metric');
  };

  const deleteWorkout = (workoutId) => {
    setWorkouts(currentWorkouts => currentWorkouts.filter(workout => workout.id !== workoutId));
  };

  return (
    <WorkoutContext.Provider value={{ workouts, addWorkout, unitSystem, toggleUnitSystem, deleteWorkout }}>
      {children}
    </WorkoutContext.Provider>
  );
};
