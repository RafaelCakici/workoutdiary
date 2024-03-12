import React, { useContext } from 'react';
import { View, Text, Switch } from 'react-native';
import { WorkoutContext } from './workoutcontext';
import { styles } from './styles';

const Settings = () => {
  const { unitSystem, toggleUnitSystem } = useContext(WorkoutContext);
  return (
    <View style={styles.container}>
      <Text>Use Metric System</Text>
      <Switch
        onValueChange={toggleUnitSystem}
        value={unitSystem === 'metric'}
      />
    </View>
  );
};

export default Settings;
