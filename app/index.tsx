import { useFonts } from "expo-font";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";

const mahasiswaData = [
  {
    nama: "Alya Anandha",
    nim: "105841105422",
    style: { fontFamily: "Barlow_ExtraBold", fontSize: 24 }
  },
  {
    nama: "M.Fikri Haikal Ayatullah",
    nim: "105841105522",
    style: { fontFamily: "FiraSans-BlackItalic", fontSize: 24 }
  },
  {
    nama: "Muh.Dirham Rahim",
    nim: "105841105622",
    style: { fontFamily: "LibertinusMono-Regular", fontSize: 24 }
  },
  {
    nama: "Zaskya Aulia Ashar",
    nim: "105841105722",
    style: { fontFamily: "PTSans-Italic", fontSize: 24 }
  },
  {
    nama: "Muh.Ilham Akbar",
    nim: "105841105822",
    style: { fontFamily: "SpecialGothicExpandedOne-Regular", fontSize: 24 }
  },
  {
    nama: "ANDI DIFHTA RAMEYZA KAILAh",
    nim: "105841106022",
    style: { fontFamily: "IntelOneMono-VariableFont_wght", fontSize: 24 }
  },
  {
    nama: "Arsifah ainun aulia",
    nim: "105841106122",
    style: { fontFamily: "Oswald-VariableFont_wght", fontSize: 24 }
  },
  {
    nama: "Tegar Surya Prayoga",
    nim: "105841106222",
    style: { fontFamily: "RobotoCondensed-VariableFont_wght", fontSize: 24 }
  },
  {
    nama: "ANDI ANGKE RIONA MEGAWAN",
    nim: "105841106322",
    style: { fontFamily: "RobotoMono-Italic-VariableFont_wght", fontSize: 24 }
  },
  {
    nama: "A. FACHRI",
    nim: "105841106522",
    style: { fontFamily: "RobotoFlex-VariableFont", fontSize: 24 }
  }
];

export default function Index() {
  const [fontsLoaded] = useFonts({
    "Barlow_ExtraBold": require("../assets/fonts/Barlow-ExtraBold.ttf"),
    "FiraSans-BlackItalic": require("../assets/fonts/FiraSans-BlackItalic.ttf"),
    "LibertinusMono-Regular": require("../assets/fonts/LibertinusMono-Regular.ttf"),
    "PTSans-Italic": require("../assets/fonts/PTSans-Italic.ttf"),
    "SpecialGothicExpandedOne-Regular": require("../assets/fonts/SpecialGothicExpandedOne-Regular.ttf"),

    "IntelOneMono-VariableFont_wght": require("../assets/fonts/IntelOneMono-VariableFont_wght.ttf"),
    "Oswald-VariableFont_wght": require("../assets/fonts/Oswald-VariableFont_wght.ttf"),
    "RobotoCondensed-VariableFont_wght": require("../assets/fonts/RobotoCondensed-VariableFont_wght.ttf"),
    "RobotoMono-Italic-VariableFont_wght": require("../assets/fonts/RobotoMono-Italic-VariableFont_wght.ttf"),
    "RobotoFlex-VariableFont": require("../assets/fonts/RobotoFlex-VariableFont.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  const ascendingData = [...mahasiswaData]
    .sort((a, b) => a.nama.localeCompare(b.nama))
    .slice(0, 5);

  const descendingData = [...mahasiswaData]
    .sort((a, b) => b.nim.localeCompare(a.nim))
    .slice(0, 5);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>5 Nama Pertama (Ascending A-Z)</Text>
      {ascendingData.map((item, index) => (
        <View key={index}>
          <Text style={[styles.baseText, item.style]}>
            {`${item.nama}\n${item.nim}`}
          </Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>5 Nama Terakhir (Descending NIM)</Text>
      {descendingData.map((item, index) => (
        <View key={index + 100}>
          <Text style={[styles.baseText, item.style]}>
            {`${item.nim}\n${item.nama}`}
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
    marginVertical: 6
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12
  }
});
