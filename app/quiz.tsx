// Pantalla principal del cuestionario. Permite al usuario responder preguntas de ciberseguridad, muestra barra de progreso y puntaje final.
// Usa estados para manejar la pregunta actual, la opción seleccionada y el puntaje.
// Al finalizar, navega al home mostrando el puntaje.
// Opciones de respuesta se mezclan en cada pregunta.

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
// import { questions } from '@/constants/questions';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';

import { questionsSeniors } from '@/assets/questions/QuestionsAdults';
import { questionsKids } from '@/assets/questions/QuestionsChildren';
import { questionsTeens } from '@/assets/questions/QuestionsTeens';

export default function QuizScreen() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const ageGroup = useLocalSearchParams().ageGroup; // e.g. 'children', 'teen', 'adult'

  // Assign questions array based on ageGroup
  let questions = questionsKids;
  if (ageGroup === 'teen') questions = questionsTeens;
  if (ageGroup === 'adult') questions = questionsSeniors;

  useEffect(() => {
    if (current >= questions.length) {
      // Espera 1 segundo y vuelve a home mostrando el puntaje
      setTimeout(() => {
        router.replace({ pathname: '/(tabs)/explore', params: { score } });
        setCurrent(0);
        setScore(0);
        setSelected(null);
        setShowAnswer(false);
      }, 1200);
    }
  }, [current, score, router]);

  // Evitar error si current >= questions.length
  if (current >= questions.length) {
    return (
      <ThemedView style={styles.container}>
        <ThemedText type="title">¡Cuestionario finalizado!</ThemedText>
        <ThemedText style={{ fontSize: 22, marginVertical: 16 }}>
          Puntaje: {score} / {questions.length}
        </ThemedText>
      </ThemedView>
    );
  }

  const q = questions[current];

  function isCorrect(text: string){
    return text === q.respuestaCorrecta;
  }

  const [shuffledOptions, setShuffledOptions] = useState(() => {
    if (!questions[current]) return [];
    const opts = [...q.respuestasIncorrectas, q.respuestaCorrecta]
      .map((text, i) => ({ text, isCorrect: text === q.respuestaCorrecta, key: i }))
      .sort(() => Math.random() - 0.5);
    return opts;
  });

// const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  function shuffleOptions() {
    if (!questions[current]) return;
    const opciones = [...q.respuestasIncorrectas, q.respuestaCorrecta];
    console.log('opciones antes de mezclar:', opciones);
    opciones.sort(() => Math.random() - 0.5);
    console.log('opciones mezcladas:', opciones);
    // setShuffledOptions(opciones);
  }

  // Actualizar opciones cuando cambia la pregunta
  useEffect(() => {
    if (!questions[current]) return ;
    setSelected(null);
    setShowAnswer(false);
    const opts = [...q.respuestasIncorrectas, q.respuestaCorrecta]
      .map((text, i) => ({ text, isCorrect: text === q.respuestaCorrecta, key: i }))
      .sort(() => Math.random() - 0.5);
    setShuffledOptions(opts);
  }, [current]);


  function handleSelect(idx: number) {
    setSelected(idx);
    setShowAnswer(true);
    if (shuffledOptions[idx].isCorrect) {
        setScore((prev) => prev + 1);
    } else {
        console.log('Respuesta incorrecta:', shuffledOptions[idx].text);
    }
    setTimeout(() => {
        setCurrent((prev) => (prev + 1 < questions.length ? prev + 1 : prev));
      }, 500); // Avanza automáticamente tras 0.5s
    console.log('Score:', score)
  }


  function handleNext() {
    // Solo avanzar si no es la última pregunta
    setCurrent((prev) => (prev + 1));
    // setCurrent((prev) => (prev + 1 < questions.length ? prev + 1 : prev));
    console.log('Avanzando a la siguiente pregunta:', current + 1);
  }

  return (
    <ThemedView style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            { width: `${((current) / questions.length) * 100}%` },
          ]}
        />
      </View>
      <ThemedText style={styles.progressText}>
        {current} / {questions.length}
      </ThemedText>
      <ThemedText>Pregunta {q.id}</ThemedText>
      <ThemedText type="title" style={styles.question}>{q.pregunta}</ThemedText>
      {shuffledOptions.map((opt, idx) => (

        <TouchableOpacity
          key={opt.key}
          style={[
            styles.option,
            selected === idx && (opt.isCorrect ? styles.correct : styles.incorrect),
          ]}
          disabled={showAnswer}
          onPress={() => handleSelect(idx)}
        >
          <ThemedText type="defaultSemiBold">{opt.text}</ThemedText>
        </TouchableOpacity>
      ))}
      {/* <Pressable
      onPress={shuffleOptions}
      style={styles.option}>
        <ThemedText>ver</ThemedText>
      </Pressable> */}
      {/* {current === questions.length && (
        <Pressable
        onPress={() => router.replace({ pathname: '/(tabs)', params: { score } })}>
          <ThemedText>Salir</ThemedText>
        </Pressable>
      )} */}
      {showAnswer && (
        <Pressable
        style={styles.option}
        onPress={() => router.replace({ pathname: '/(tabs)', params: { score } })}>
            <ThemedText
            type="subtitle">
                {current === questions.length - 1 && 'Finalizar'}
            </ThemedText>
        </Pressable>
      )}
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
  question: {
    marginVertical: 24,
    textAlign: 'center',
  },
  option: {
    width: '100%',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f0f0f026',
    alignItems: 'center',
  },
  correct: {
    backgroundColor: '#b6e7a0',
  },
  incorrect: {
    backgroundColor: '#f7b2ad',
  },
  // Agrega estilos para la barra de progreso
  progressBarContainer: {
    width: '100%',
    height: 10,
    backgroundColor: '#e0e0e038',
    borderRadius: 5,
    marginBottom: 12,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#0f151c',
    borderRadius: 5,
  },
  progressText: {
    alignSelf: 'flex-end',
    marginBottom: 8,
    color: '#3b3b3b',
    fontSize: 14,
  },
});
