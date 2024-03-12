// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  sportTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sportIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 16,
  },
  datePickerContainer: {
    marginBottom: 20,
  },
  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  sportTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  sportIcon: {
    alignItems: 'center',
    marginHorizontal: 10, 
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  dateContainer: {
    marginBottom: 20,
  },
  workoutItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  
  workoutText: {
    fontSize: 16,
    marginBottom: 5,
  },
  
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-start', 
  },
  deleteButtonText: {
    color: 'white', 
    fontWeight: 'bold',
  },

  selectedColor: '#007bff', 
  defaultColor: '#000',
});
