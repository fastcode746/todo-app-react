import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const EditProfile = () => {
  const [email, setEmail] = useState("yanchui@gmail.com");
  const [password, setPassword] = useState("ovfTbyVvcd");

  const handleChangePicture = () => {
    // Function to handle picture change logic
    alert("Change Picture Clicked!");
  };

  const handleUpdate = () => {
    // Function to handle update profile logic
    alert("Update Profile Clicked!");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.profileImage}
        />
        <TouchableOpacity onPress={handleChangePicture}>
          <Text style={styles.changePictureText}>Change Picture</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput value={email} onChangeText={setEmail} style={styles.input} />
        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  profileContainer: {
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  changePictureText: {
    color: "#788eec",
    fontWeight: "bold",
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: "600",
    marginTop: 15,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  updateButton: {
    backgroundColor: "#788eec",
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  updateButtonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default EditProfile;
