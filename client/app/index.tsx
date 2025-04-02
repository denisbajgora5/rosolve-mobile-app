import { Text, View, StatusBar, SafeAreaView } from "react-native";
import { Stack } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* This hides the default header */}
      <Stack.Screen options={{ headerShown: false }} />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}
