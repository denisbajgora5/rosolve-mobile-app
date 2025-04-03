import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { router } from 'expo-router'

export default function ProfileNameScreen() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleContinue = () => {
    // You can add validation or send data later
    router.push('/next-step') // placeholder for next screen
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Thank you for signing up!{'\n'}
        <Text style={styles.bold}>Please tell us your name to continue.</Text>
      </Text>

      <Text style={styles.label}>Your first name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Jane"
        value={firstName}
        onChangeText={setFirstName}
      />

      <Text style={styles.label}>Your last name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Doe"
        value={lastName}
        onChangeText={setLastName}
      />

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        All data collected is stored privately and only used to protect the safety of you and others. © Team Rosolve.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
  bold: {
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#E6E6E6',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  continueButton: {
    marginTop: 28,
    backgroundColor: '#C73A53',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  continueText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  footer: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
    marginTop: 40,
  },
})
