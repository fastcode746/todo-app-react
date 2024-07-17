import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { db } from "../../FirebaseConfig";
import { useNavigation } from "@react-navigation/native";
import { collection } from "firebase/firestore";

const Detail = ({ route }) => {
  const todoRef = collection(db, "todos");
  const { item } = route.params;
  const [textHeading, onChangeHeadingText] = useState(item.heading);
  const [imgUrl, setImgUrl] = useState(item.imageUrl);
  const navigation = useNavigation();

  console.log(imgUrl);
  const updateTodo = () => {
    if (textHeading && textHeading.length > 0) {
      todoRef
        .doc(item.id)
        .update({
          heading: textHeading,
          imageUrl: imgUrl,
        })
        .then(() => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: imgUrl,
          }}
          style={styles.profileImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.textField}
          onChangeText={onChangeHeadingText}
          value={textHeading}
          placeholder="Enter Name"
        />
        <Pressable
          style={styles.buttonUpdate}
          onPress={() => {
            updateTodo();
          }}
        >
          <TouchableOpacity style={styles.updateButton}>
            <Text style={styles.updateButtonText}>Update Details</Text>
          </TouchableOpacity>
        </Pressable>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    justifyContent: "center",
    paddingHorizontal: 15,
    margin: 10
  },
  textField: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 25,
  },
  buttonUpdate: {
    backgroundColor: "#788eec",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  updateButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#ffffff",
  },
  imgContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontWeight: "600",
    marginTop: 15,
  },
  textContainer: {
    flexDirection: "column",
  },
});
