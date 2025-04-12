import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function SelectRolePage() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>app logo</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>I&apos;m a passenger</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>I&apos;m a driver</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginTextBox}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>

      <View style={styles.features}>
        <Text style={styles.featureText}>Safe & Secure</Text>
        <Text style={styles.featureText}>Real-time Tracking</Text>
        <Text style={styles.featureText}>Easy Payments</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    padding: 20,
    paddingTop: 80,
  },
  logoContainer: { alignItems: 'center', marginBottom: 40 },
  logoText: { color: '#fff', fontSize: 16 },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 30,
  },
  button: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { fontSize: 14 },
  loginTextBox: { alignItems: 'center', marginBottom: 40 },
  loginText: { color: '#fff', fontSize: 14 },
  features: { alignItems: 'flex-start', gap: 10 },
  featureText: { color: '#ccc', fontSize: 13 },
})
