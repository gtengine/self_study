import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
// project directory에서 이미지를 가져올 때.
// import logo from "./assets/logo.png";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  };
  return (
    // 아래 `styles`에 정의한 각 element에 대한 style을 object 형태로 가져와서 사용한다.
    <View style={styles.container}>
      {/* <Image source={logo} style={{ width: 305, height: 159 }} /> */}
      {/* 웹 페이지에서 이미지를 가져올 때. */}
      <Image
        source={{ uri: "https://i.imgur.com/TkIrScD.png" }}
        style={styles.logo}
      />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button
        below!
      </Text>
      {/* 터치형 버튼 */}
      <TouchableOpacity
        onPress={openImagePickerAsync}
        style={{ backgroundColor: "blue" }}
      >
        <Text style={{ fontSize: 20, color: "#fff" }}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // element에 적용할 스타일 정의.
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
