import { useFonts } from "expo-font";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";

const mahasiswaData = [
  {
    nama: "Alya Anandha",
    nim: "105841105422",
    style: { fontFamily: "Barlow_ExtraBold", fontSize: 26, color: "green",}
  },
  {
    nama: "M.Fikri Haikal Ayatullah",
    nim: "105841105522",
    style: { fontFamily: "FiraSans-BlackItalic", fontSize: 24, color: "green" }
  },
  {
    nama: "Muh.Dirham Rahim",
    nim: "105841105622",
    style: { fontFamily: "IntelOneMono-VariableFont_wght", fontSize: 24, color: "green" }
  },
  {
    nama: "Zaskya Aulia Ashar",
    nim: "105841105722",
    style: { fontFamily: "LibertinusMono-Regular", fontSize: 24 }
  },
  {
    nama: "Muh.Ilham Akbar",
    nim: "105841105822",
    style: { fontFamily: "Oswald-VariableFont_wght", fontSize: 24 }
  },
  {
    nama: "ANDI DIFHTA RAMEYZA KAILAh",
    nim: "105841106022",
    reverse: true,
    style: { fontFamily: "PTSans-Italic", fontSize: 24 }
  },
  {
    nama: "Arsifah ainun aulia",
    nim: "105841106122",
    reverse: true,
    style: { fontFamily: "RobotoCondensed-VariableFont_wght", fontSize: 24, color: "brown"}
  },
  {
    nama: "Tegar Surya Prayoga",
    nim: "105841106222",
    reverse: true,
    style: { fontFamily: "RobotoMono-Italic-VariableFont_wght", fontSize: 24 }
  },
  {
    nama: "ANDI ANGKE RIONA MEGAWAN",
    nim: "105841106322",
    reverse: true,
    style: { fontFamily: "SpaceMono-Regular", fontSize: 24, color: "orange" }
  },
  {
    nama: "A. FACHRI",
    nim: "105841106522",
    reverse: true,
    style: { fontFamily: "SpecialGothicExpandedOne-Regular", fontSize: 24 }
  }
];

export default function Index() {
  const [fontsLoaded] = useFonts({
  "Barlow_ExtraBold": require("../assets/fonts/Barlow-ExtraBold.ttf"),
  "FiraSans-BlackItalic": require("../assets/fonts/FiraSans-BlackItalic.ttf"),
  "IntelOneMono-VariableFont_wght": require("../assets/fonts/IntelOneMono-VariableFont_wght.ttf"),
  "LibertinusMono-Regular": require("../assets/fonts/LibertinusMono-Regular.ttf"),
  "Oswald-VariableFont_wght": require("../assets/fonts/Oswald-VariableFont_wght.ttf"),
  "PTSans-Italic": require("../assets/fonts/PTSans-Italic.ttf"),
  "RobotoCondensed-VariableFont_wght": require("../assets/fonts/RobotoCondensed-VariableFont_wght.ttf"),
  "RobotoMono-Italic-VariableFont_wght": require("../assets/fonts/RobotoMono-Italic-VariableFont_wght.ttf"),
  "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  "SpecialGothicExpandedOne-Regular": require("../assets/fonts/SpecialGothicExpandedOne-Regular.ttf"),
});

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {mahasiswaData.map((item, index) => (
        <View key={index}>
          <Text style={[styles.baseText, item.style]}>
            {item.reverse
              ? `${item.nim}\n${item.nama}`
              : `${item.nama}\n${item.nim}`}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  baseText: {
    marginVertical: 4
  }
});
