import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      {/* Bentuk Segitiga */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 70,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "orange",
          marginBottom: 20,
        }}
      />

      {/* Bentuk Pil (Oval) dengan NIM */}
      <View
        style={{
          width: 160,
          height: 50,
          backgroundColor: "purple",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          105841105922
        </Text>
      </View>

      {/* Bentuk Persegi Panjang dengan Nama */}
      <View
        style={{
          width: 200,
          height: 60,
          backgroundColor: "teal",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          ZELVIA
        </Text>
      </View>
    </View>
  );
}