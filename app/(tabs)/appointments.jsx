import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  Switch,
  StyleSheet,
  Linking,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Appointments() {
  const [insurance, setInsurance] = useState("");
  const [reason, setReason] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [sex, setSex] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const resetForm = () => {
    setInsurance("");
    setReason("");
    setType("");
    setDate(new Date());
    setTime("");
    setFirstName("");
    setLastName("");
    setDob("");
    setSex("");
    setEmail("");
    setMessage("");
    setAcceptTerms(false);
  };

  const showConfirmation = () => {
    if (Platform.OS === "android") {
      ToastAndroid.show(
        "Appointment request sent on WhatsApp!",
        ToastAndroid.SHORT
      );
    } else {
      Alert.alert("Success", "Appointment request sent on WhatsApp!");
    }
  };

  const handleWhatsAppBooking = () => {
    if (
      !firstName ||
      !lastName ||
      !dob ||
      !sex ||
      !email ||
      !reason ||
      !type ||
      !date ||
      !time ||
      !acceptTerms
    ) {
      Alert.alert(
        "Missing Fields",
        "Please fill in all required fields and accept terms."
      );
      return;
    }

    const whatsappMessage = `Appointment Request:
Name: ${firstName} ${lastName}
DOB: ${dob}
Sex: ${sex}
Insurance: ${insurance}
Reason: ${reason}
Type: ${type}
Date: ${date.toDateString()}
Time: ${time}
Email: ${email}
Message: ${message}`;

    Linking.openURL(
      `https://wa.me/919390627367?text=${encodeURIComponent(whatsappMessage)}`
    )
      .then(() => {
        showConfirmation();
        resetForm();
      })
      .catch(() => {
        Alert.alert("Error", "Failed to open WhatsApp. Please try again.");
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingBottom: 120 }}
        >
          <Text style={styles.heading}>Book Appointment</Text>

          <Text style={styles.label}>What's your insurance plan?</Text>
          <View style={styles.picker}>
            <Picker selectedValue={insurance} onValueChange={setInsurance}>
              <Picker.Item label="Please select" value="" />
              <Picker.Item label="I'm paying for myself" value="self" />
              <Picker.Item
                label="I'll choose my insurance later"
                value="later"
              />
              <Picker.Item label="Aetna" value="aetna" />
              <Picker.Item label="BCBS" value="bcbs" />
              <Picker.Item label="Cigna" value="cigna" />
              <Picker.Item label="EmblemHealth (GHI)" value="ghi" />
              <Picker.Item label="EmblemHealth (HIP)" value="hip" />
              <Picker.Item label="UnitedHealthcare" value="uhc" />
              <Picker.Item label="UnitedHealthcare Oxford" value="uhco" />
            </Picker>
          </View>

          <Text style={styles.label}>What's the reason for your visit?</Text>
          <View style={styles.picker}>
            <Picker selectedValue={reason} onValueChange={setReason}>
              <Picker.Item label="Please select" value="" />
              <Picker.Item label="Neurology" value="neurology" />
              <Picker.Item label="Neurosurgery" value="neurosurgery" />
              <Picker.Item label="Orthopedics" value="ortho" />
              <Picker.Item label="General surgery" value="gs" />
              <Picker.Item label="Facial surgeon" value="facial" />
              <Picker.Item label="Plastic Surgery" value="plastic" />
              <Picker.Item label="Allergic Cough" value="allergy" />
              <Picker.Item label="Pediatric Checkup" value="pediatric" />
              <Picker.Item label="Asthma" value="asthma" />
              <Picker.Item label="Blood Work" value="blood" />
              <Picker.Item label="Fever" value="fever" />
              <Picker.Item label="Cholesterol" value="cholesterol" />
              <Picker.Item label="Diabetes" value="diabetes" />
              <Picker.Item label="Urine Infection" value="urine" />
            </Picker>
          </View>

          <Text style={styles.label}>Choose the type of appointment</Text>
          <View style={styles.picker}>
            <Picker selectedValue={type} onValueChange={setType}>
              <Picker.Item label="Please select" value="" />
              <Picker.Item label="In-Person" value="in-person" />
              <Picker.Item label="Video Visit" value="video" />
            </Picker>
          </View>

          <Text style={styles.label}>Select Date</Text>
          <Button
            title={date.toDateString()}
            onPress={() => setShowDatePicker(true)}
          />
          {showDatePicker && (
            <DateTimePicker
              mode="date"
              value={date}
              onChange={(event, selected) => {
                setShowDatePicker(false);
                if (selected) setDate(selected);
              }}
            />
          )}

          <Text style={styles.label}>Select Time</Text>
          <TextInput
            style={styles.inputBox}
            value={time}
            onChangeText={setTime}
            placeholder="Enter time (e.g., 4:30 PM)"
          />

          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.inputBox}
            value={firstName}
            onChangeText={setFirstName}
          />

          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.inputBox}
            value={lastName}
            onChangeText={setLastName}
          />

          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            style={styles.inputBox}
            value={dob}
            onChangeText={setDob}
            placeholder="DD/MM/YYYY"
          />

          <Text style={styles.label}>Sex Assigned at Birth</Text>
          <View style={styles.picker}>
            <Picker selectedValue={sex} onValueChange={setSex}>
              <Picker.Item label="Please select" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
          </View>

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.inputBox, { height: 100 }]}
            value={message}
            onChangeText={setMessage}
            multiline
          />

          <View style={styles.switchContainer}>
            <Switch value={acceptTerms} onValueChange={setAcceptTerms} />
            <Text style={{ marginLeft: 8 }}>I accept the Terms of Service</Text>
          </View>

          <View style={{ marginTop: 10, marginBottom: 30 }}>
            <Button
              title="Book on WhatsApp"
              onPress={handleWhatsAppBooking}
              disabled={!acceptTerms}
              color="#27ae60"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#F2F2F7",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#2C3E50",
  },
  label: {
    marginTop: 16,
    marginBottom: 6,
    fontWeight: "600",
    fontSize: 16,
    color: "#34495E",
  },
  picker: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    paddingHorizontal: 8,
    marginBottom: 12,
  },
  inputBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    borderColor: "#D1D1D6",
    borderWidth: 1,
    fontSize: 15,
    elevation: 1,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
});
