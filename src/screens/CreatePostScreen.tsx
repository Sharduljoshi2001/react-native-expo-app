import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { createPost } from "../services/api";

export default function CreatePostScreen() {
  const router = useRouter();

  //form state (controlled components)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    console.log("Submit button clicked!"); //for debugging

    //Validation Logic
    if (!title.trim() || !body.trim()) {
      if (Platform.OS === "web") {
        window.alert("Please fill in all fields");
      } else {
        Alert.alert("Error", "Please fill in all fields");
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await createPost({
        title,
        body,
        userId: 1,
      });

      if (result) {
        // Success Logic
        if (Platform.OS === "web") {
          // Web Success Alert
          const confirm = window.confirm(
            `Success! Post Created! ID: ${result.id}`,
          );
          if (confirm || true) {
            setTitle("");
            setBody("");
            router.back();
          }
        } else {
          // Mobile Success Alert
          Alert.alert("Success", `Post Created! ID: ${result.id}`, [
            {
              text: "OK",
              onPress: () => {
                setTitle("");
                setBody("");
                router.back();
              },
            },
          ]);
        }
      }
    } catch (error) {
      console.error("API Error:", error);
      if (Platform.OS === "web") {
        window.alert("Something went wrong. Please try again.");
      } else {
        Alert.alert("Error", "Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.header}>Create New Post</Text>

      {/* title input */}
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter post title"
        value={title}
        onChangeText={setTitle}
      />

      {/* body input */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="What's on your mind?"
        value={body}
        onChangeText={setBody}
        multiline
        numberOfLines={4}
      />

      {/* submit btn */}
      <TouchableOpacity
        style={[styles.button, isSubmitting && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Publish Post</Text>
        )}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "600",
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: "#a0c4ff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
