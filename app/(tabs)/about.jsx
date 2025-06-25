import React from "react";
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const services = [
  {
    title: "Brain Stroke",
    description:
      "Advanced Brain Stroke and Paralysis Care at Aarya Neuro Care.",
    icon: "brain",
  },
  {
    title: "Head Ache",
    description: "Expert Headache Diagnosis and Treatment at Aarya Neuro Care",
    icon: "head-alert-outline",
  },
  {
    title: "Epilepsy",
    description: "Advanced Epilepsy Treatment, Guided by Dr. Sai Kiran",
    icon: "flash",
  },
  {
    title: "Multi Sclerosis",
    description: "Advanced MS Diagnosis and Treatment by Aarya Team",
    icon: "pulse",
  },
  {
    title: "Urgent Care",
    description: "Immediate Neuro Help with Aarya’s Urgent Care Services",
    icon: "hospital-box",
  },
  {
    title: "Parkinsonism",
    description: "Personalized Parkinsonism Treatment by Dr. Sai Kiran",
    icon: "walk",
  },
  {
    title: "Consultation",
    description: "Accurate Neuro Surgical Evaluation and Planning.",
    icon: "stethoscope",
  },
  {
    title: "Multibedded",
    description: "Comfortable In-Patient Neuro Care – 20+ Beds",
    icon: "bed",
  },
];

export default function AboutUsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Welcome To Aarya Neuro Clinic</Text>
      <Text style={styles.subtext}>
        Our neuro patients are our priority, we offer quality medical services
        with a team of specialists.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Expert Neurosurgical Care</Text>
        <Text style={styles.sectionText}>
          At Aarya Neuro Clinic, we are committed to delivering expert,
          compassionate care for patients with neurosurgical conditions.
        </Text>
        <Text style={styles.sectionText}>
          Led by Dr. Sai Kiran, a trusted and experienced neurosurgeon, our
          clinic provides comprehensive evaluation, diagnosis, and treatment for
          a wide range of disorders affecting the brain, spine, and nervous
          system.
        </Text>
      </View>

      <Text style={styles.servicesTitle}>Our Services</Text>

      <View style={styles.grid}>
        {services.map((service, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => [
              styles.card,
              pressed && { backgroundColor: "#e6f2ff" },
            ]}
          >
            <MaterialCommunityIcons
              name={service.icon}
              size={32}
              color="#0077cc"
              style={styles.icon}
            />
            <Text style={styles.cardTitle}>{service.title}</Text>
            <Text style={styles.cardText}>{service.description}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f0f8ff",
    flex: 1,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#004080",
    textAlign: "center",
    marginBottom: 10,
  },
  subtext: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 20,
  },
  section: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0077cc",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 15,
    color: "#444",
    marginBottom: 6,
  },
  servicesTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#003366",
    marginBottom: 12,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#ffffff",
    width: "48%",
    marginBottom: 14,
    borderRadius: 10,
    padding: 12,
    elevation: 3,
  },
  icon: {
    alignSelf: "center",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#003366",
    textAlign: "center",
  },
  cardText: {
    fontSize: 13,
    color: "#555",
    marginTop: 4,
    textAlign: "center",
  },
});
