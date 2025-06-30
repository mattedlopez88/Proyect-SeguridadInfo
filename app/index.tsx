import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Slider from '@react-native-community/slider';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet } from 'react-native';

const ageRanges = [
  '0-17',
  '18-38',
  '38-60+',
];

export default function AgeSelectionScreen() {
  const [index, setIndex] = useState(2);
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Selecciona tu rango de edad</ThemedText>
      <ThemedText style={styles.ageLabel}>{ageRanges[index]}</ThemedText>
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={0}
        maximumValue={ageRanges.length - 1}
        step={1}
        value={index}
        onValueChange={setIndex}
        minimumTrackTintColor="#222222"
        maximumTrackTintColor="#007AFF"
        thumbTintColor="#222222"
      />
      <ThemedText style={styles.info}>Desliza para elegir tu grupo de edad</ThemedText>
      <Button
        title="Continuar"
        onPress={() => router.replace('/(tabs)')}
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
