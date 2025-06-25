import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: "#007AFF",
      }}
    >
      {/* 🔥 Hide drawer item and header for splash screen */}
      <Drawer.Screen
        name="index"
        options={{
          drawerItemStyle: { display: "none" },
          headerShown: false, // ✅ hide header on splash
        }}
      />

      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Home",
          title: "Aarya Neuro Care",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="doctors"
        options={{
          drawerLabel: "Our Doctors",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="specialties"
        options={{
          drawerLabel: "Specialties",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="medkit" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
