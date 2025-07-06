import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  const router = useRouter();


  return (
    <ThemedView style={{flex:1, padding:16}}>
      <SafeAreaView style={{flex:1}}>
        
        <Pressable
          style={styles.titleContainer}
          onPress={() => router.replace('/_sitemap')}>
            <ThemedText>Elegir edad</ThemedText>
          </Pressable>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
