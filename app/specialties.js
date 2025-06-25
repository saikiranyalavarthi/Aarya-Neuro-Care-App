import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Enable animation on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const specialties = {
  Neurosurgery: [
    "Brain Tumor Surgery",
    "Spine Surgery",
    "Trauma and Emergency Neurosurgery",
    "Stroke and Aneurysm Surgery",
    "Advanced Epilepsy Surgery",
    "Hydrocephalus and CSF Disorders",
    "Advanced Pediatric Neurosurgery",
    "Peripheral Nerve Surgery",
    "Functional Neurosurgery",
    "Minimally Invasive and Endoscopic Neurosurgery",
  ],
  Neurology: [
    "Stroke Care (Paralysis)",
    "Headache and Migraine",
    "Epilepsy",
    "Vertigo",
    "Multiple Sclerosis",
    "Parkinsonism Disease",
  ],
};

export default function SpecialtiesScreen() {
  const [expanded, setExpanded] = useState({});

  const toggleSection = (section) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Our Specialties</Text>

      {Object.entries(specialties).map(([section, items]) => (
        <View key={section} style={styles.card}>
          <Pressable
            style={styles.cardHeader}
            onPress={() => toggleSection(section)}
          >
            <Text style={styles.sectionTitle}>{section}</Text>
            <Ionicons
              name={expanded[section] ? "chevron-up" : "chevron-down"}
              size={22}
              color="white"
            />
          </Pressable>

          {expanded[section] && (
            <View style={styles.cardContent}>
              {items.map((item, index) => (
                <Pressable
                  key={index}
                  style={({ pressed }) => [
                    styles.itemButton,
                    pressed && styles.itemButtonPressed,
                  ]}
                >
                  <Text style={styles.itemText}>{item}</Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef7ff",
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#004080",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
  },
  cardHeader: {
    backgroundColor: "#0077cc",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  cardContent: {
    backgroundColor: "#f0f8ff",
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 6,
  },
  itemButton: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#cce6ff",
    elevation: 1,
  },
  itemButtonPressed: {
    backgroundColor: "#e0f0ff",
  },
  itemText: {
    color: "#003366",
    fontSize: 15,
    fontWeight: "500",
  },
});
