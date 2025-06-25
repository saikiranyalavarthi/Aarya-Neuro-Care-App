import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import {
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";

export default function HomeScreen() {
  const services = [
    {
      icon: <FontAwesome5 name="brain" size={24} color="#007AFF" />,
      title: "Brain Stroke",
      desc: "Advanced Brain Stroke and Paralysis Care at Aarya Neuro Care.",
    },
    {
      icon: <MaterialIcons name="headset" size={24} color="#007AFF" />,
      title: "Head Ache",
      desc: "Expert Headache Diagnosis and Treatment at Aarya Neuro Care.",
    },
    {
      icon: <Ionicons name="flash" size={24} color="#007AFF" />,
      title: "Epilepsy",
      desc: "Advanced Epilepsy Treatment, Guided by Dr. Sai Kiran.",
    },
    {
      icon: <FontAwesome5 name="virus" size={24} color="#007AFF" />,
      title: "Multi Sclerosis",
      desc: "Advanced MS Diagnosis and Treatment by Aarya Team.",
    },
    {
      icon: <MaterialIcons name="local-hospital" size={24} color="#007AFF" />,
      title: "Urgent Care",
      desc: "Immediate Neuro Help with Aarya’s Urgent Care Services.",
    },
    {
      icon: <FontAwesome5 name="walking" size={24} color="#007AFF" />,
      title: "Parkinsonism",
      desc: "Personalized Parkinsonism Treatment by Dr. Sai Kiran.",
    },
    {
      icon: <MaterialIcons name="medical-services" size={24} color="#007AFF" />,
      title: "Consultation",
      desc: "Accurate Neuro Surgical Evaluation and Planning.",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Welcome to</Text>
      <Text style={styles.subheading}>Aarya Neuro Care</Text>

      <Text style={styles.tagline}>
        Complete Care for Every Neurological Need.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL("tel:8639994290")}
      >
        <Text style={styles.buttonText}>Book An Appointment</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.title}>Meet the Doctor</Text>
        <Text style={styles.text}>
          Meet Dr. Sai Kiran for Specialized Neurological Care
        </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Our Doctor's Profile &gt;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Our Location</Text>
        <Text style={styles.text}>
          SUNRISE HOSPITAL, 2/785, BESIDES, Maria Puram, Nagarajupeta, Kadapa,
          Andhra Pradesh 516001
        </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Directions and Parking &gt;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Why Choose Aarya Neuro Clinic?</Text>
        <Text>✅ Full Range Neuro Services</Text>
        <Text>🤝 Personalized Patient Care</Text>
        <Text>🏥 Facilities & Equipment</Text>
        <Text>⏱️ Accurate Diagnosis</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Our Services</Text>
        {services.map((item, index) => (
          <View key={index} style={styles.service}>
            {item.icon}
            <View style={styles.serviceText}>
              <Text style={styles.serviceTitle}>{item.title}</Text>
              <Text>{item.desc}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Thrombolysis</Text>
        <Text style={styles.text}>
          Advanced Emergency Treatment for Ischemic Stroke. Involves the use of
          clot-dissolving medications (tPA) to restore blood flow within 4.5
          hours of stroke onset.
        </Text>
        <Text style={styles.text}>
          Benefits include improved survival, reduced disability, and better
          recovery. Aarya Neuro Care provides 24/7 stroke response with trained
          specialists.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>What Our Patients Say</Text>
        <Text style={styles.testimonial}>
          “After my stroke, Aarya Neuro Care helped me walk again. Their
          rehabilitation is life-changing.” — Siva
        </Text>
        <Text style={styles.testimonial}>
          “Dr. Sai Kiran’s care gave me a new life. I’m truly grateful for his
          expert treatment and support.” — Arjun
        </Text>
        <Text style={styles.testimonial}>
          “From consultation to recovery, the team was outstanding. Truly the
          best neuro clinic I’ve visited.” — Priya M.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL("tel:8639994290")}
      >
        <Text style={styles.buttonText}>Request an Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f7fbff" },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#007AFF",
    textAlign: "center",
  },
  subheading: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  logo: { width: 120, height: 120, alignSelf: "center", marginVertical: 16 },
  tagline: {
    fontSize: 16,
    textAlign: "center",
    color: "#555",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: { color: "#fff", fontSize: 16 },
  section: { marginVertical: 20 },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#003366",
  },
  text: { fontSize: 16, lineHeight: 24, color: "#444" },
  link: { color: "#007AFF", marginTop: 5, fontSize: 15 },
  service: { flexDirection: "row", alignItems: "flex-start", marginBottom: 15 },
  serviceText: { marginLeft: 10, flex: 1 },
  serviceTitle: { fontWeight: "bold", fontSize: 16, color: "#003366" },
  testimonial: { fontStyle: "italic", marginVertical: 8, color: "#333" },
});
