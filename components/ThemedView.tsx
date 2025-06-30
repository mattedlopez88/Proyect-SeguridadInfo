import { useThemeColor } from '@/hooks/useThemeColor';
import { View, type ViewProps } from 'react-native';


export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  // const backgroundColor = useThemeColor(
  //   { light: lightColor ?? '#007AFF', dark: darkColor ?? '#000000' },
  //   'background'
  // );


  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
