// Pantalla principal (home). Permite iniciar el cuestionario y muestra el puntaje más reciente como gráfico de pastel si existe.

import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';

import PieChart from '@/components/PieChart';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const score = params.score ? Number(params.score) : null;

  return (
    <ThemedView style={{ flex: 1, padding: 16}}>
      <SafeAreaView style={{ flex: 1}}>
        <ThemedView style={{marginVertical:26}}>
          <ThemedText type="title">Cuanto conces de Seguridad Informatica?</ThemedText>
        </ThemedView>
        
        <ThemedText type="defaultSemiBold">Hemos preparado un pequeño cuestionario diseñado especialmente para ti, según tu edad. Cada grupo recibe preguntas distintas, con información importante que puede ayudarte a cuidar de ti y de los demás.</ThemedText>
        
        {score !== null && (
          <ThemedView style={{ marginVertical: 16, alignItems: 'center' }}>
            <ThemedText type="subtitle">¡Tu puntaje del último cuestionario!</ThemedText>
            <PieChart
              percentage={score / 30} // Cambia 30 por la cantidad total de preguntas si es variable
              size={100}
              strokeWidth={16}
              color="#4caf50"
              bgColor="#e0e0e033"
            />
            <ThemedText style={{ fontSize: 22, marginTop: 4 }}>{score} / 30</ThemedText>
          </ThemedView>
        )}
        <Pressable
        style={styles.cuestionario}
        onPress={() => router.push('/quiz')}>
          <ThemedText type="subtitle">Comenzar</ThemedText>
        </Pressable>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  cuestionario: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f038',
  }
});
