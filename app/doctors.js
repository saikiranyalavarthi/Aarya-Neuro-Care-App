import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect, useRef } from "react";

export default function Doctors() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  const doctors = [
    ["Dr. Sai Kiran", "DNB Neuro Surgeon"],
    ["Dr. Abhilash Palla", "MS Orthopedics"],
    ["Dr. Venkata Kumar M", "MS General Surgeon"],
    ["Dr. Rajasekhar Reddy", "DM Cardiologist"],
    ["Dr. K Jagadesh", "DM Neurology"],
    ["Dr. Sunil Kumar M", "DM Neurology"],
    ["Dr. Rabbani", "MD General Medicine"],
    ["Dr. Syed Sajid", "MDS Oral & Maxillo"],
    ["Dr. Deepthi Batchu", "MS MCh (Plastic Surgery)"],
  ];

  return (
    <ScrollView style={styles.bg}>
      <Animated.View style={{ opacity: fadeAnim, padding: 20 }}>
        <Text style={styles.heading}> Aarya Neuro Clinic</Text>
        <Text style={styles.paragraph}>
          Our neuro patients are our priority. We offer quality medical services
          with a team of specialists committed to delivering expert,
          compassionate care.
        </Text>
        <Text style={styles.paragraph}>
          Led by Dr. Sai Kiran, our clinic provides comprehensive evaluation,
          diagnosis, and treatment for a wide range of neurological conditions.
        </Text>

        <Text style={styles.sectionTitle}>Meet Our Team</Text>

        <View style={styles.doctorList}>
          {doctors.map(([name, spec], idx) => (
            <Pressable
              key={idx}
              onPress={() => {}}
              style={({ pressed }) => [
                styles.doctorCard,
                { backgroundColor: pressed ? "#dbeafe" : "#eff6ff" },
              ]}
            >
              <Text style={styles.doctorName}>{name}</Text>
              <Text style={styles.doctorSpec}>{spec}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Our Facilities</Text>
        <Text style={styles.paragraph}>
          We are a private hospital practice delivering excellence in
          personalized, quality-driven care.
        </Text>
        <Text style={styles.paragraph}>
          We specialize in stroke, epilepsy, Parkinsonism, paralysis, headaches,
          and more — focused on individual treatment plans and the latest
          technology.
        </Text>
        <Text style={styles.paragraph}>
          Our facility includes 20+ beds, neuro rehab services, and a surgical
          consultation unit capable of managing complex neuro cases.
        </Text>
        <Text style={[styles.paragraph, { fontWeight: "600" }]}>
          Whether for routine consultation or urgent care, Aarya Neuro Clinic
          stands for precision, trust, and healing.
        </Text>

        <Text style={styles.footerNote}>
          🧠 Your Neuro Health, Our Priority 🏥
        </Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: "#f1f5f9",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 10,
    textAlign: "center",
    color: "#1e3a8a",
  },
  paragraph: {
    fontSize: 16,
    color: "#334155",
    marginBottom: 12,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 24,
    marginBottom: 12,
    color: "#1e3a8a",
    textTransform: "uppercase",
  },
  doctorList: {
    marginBottom: 16,
  },
  doctorCard: {
    padding: 14,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: "#eff6ff",
    borderColor: "#93c5fd",
    borderWidth: 1,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  doctorName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#1e40af",
  },
  doctorSpec: {
    fontSize: 14,
    color: "#475569",
  },
  footerNote: {
    fontSize: 18,
    textAlign: "center",
    color: "#16a34a",
    marginTop: 30,
    fontWeight: "bold",
  },
});
