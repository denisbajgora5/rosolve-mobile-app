import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native'
import { router } from 'expo-router'

export default function DriverProfileDetails(): JSX.Element {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [carReg, setCarReg] = useState('')
  const [driverLicence, setDriverLicence] = useState('')
  const [taxiLicence, setTaxiLicence] = useState('')

  const handleContinue = () => {
    if (!firstName || !lastName || !carReg || !driverLicence || !taxiLicence) {
      alert('Please fill in all fields.')
      return
    }

    alert('Driver profile submitted!')
    // router.push('/next-step')
  }

  return (
    <View style={styles.container}>
      {/* Logo Placeholder */}
      <View style={styles.logoPlaceholder}>
        <Text style={styles.logoText}>Logo</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          First Name <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />

        <Text style={styles.label}>
          Last Name <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />

        <Text style={styles.label}>
          Car Registration <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          value={carReg}
          onChangeText={setCarReg}
        />

        <Text style={styles.label}>
          Drivers Licence <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          value={driverLicence}
          onChangeText={setDriverLicence}
        />

        <Text style={styles.label}>
          Taxi Licence <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          value={taxiLicence}
          onChangeText={setTaxiLicence}
        />
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue ➔</Text>
      </TouchableOpacity>
    </View>
  )
}

type Style = {
  [key: string]: ViewStyle | TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  logoText: {
    fontSize: 12,
    color: '#555',
  },
  inputGroup: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
  },
  required: {
    color: 'red',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#E6E6E6',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 18,
  },
  continueButton: {
    backgroundColor: '#9E2A45',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 32,
    marginTop: 30,
  },
  continueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
