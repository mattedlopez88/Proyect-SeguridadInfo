// Age selection screen. Lets the user pick their exact age with a slider, then shows a questionnaire based on the selected age group.
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet } from 'react-native';

// Define the age groups and their ranges
const ageGroups = [
  { label: 'children', min: 0, max: 17 },
  { label: 'teen', min: 18, max: 37 },
  { label: 'adult', min: 38, max: 120 },
];

export default function AgeSelectionScreen() {
  // User selects their exact age
  const [age, setAge] = useState(18);
  const router = useRouter();

  // Find the group for the selected age
  const selectedGroup = ageGroups.find(g => age >= g.min && age <= g.max) || ageGroups[0];

  function handleContinue() {
    router.replace({ pathname: '/(tabs)', params: { ageGroup: selectedGroup.label, age } });
  }

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Selecciona tu edad</ThemedText>
      <ThemedText style={styles.ageLabel}>{age} años</ThemedText>
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={age}
        onValueChange={setAge}
        minimumTrackTintColor="#222222"
        maximumTrackTintColor="#007AFF"
        thumbTintColor="#222222"
      />
      <ThemedText style={styles.info}>Desliza para elegir tu edad exacta</ThemedText>
      <ThemedText style={styles.info}>Grupo: {selectedGroup.label}</ThemedText>
      <Button
        title="Continuar"
        onPress={handleContinue}
        color="#22272d"
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  ageLabel: {
    fontSize: 32,
    marginVertical: 24,
    fontWeight: 'bold',
  },
  info: {
    marginTop: 24,
    fontSize: 16,
    color: '#666',
  },
});
