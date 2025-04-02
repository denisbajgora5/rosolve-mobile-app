import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { router } from 'expo-router'

export default function RegisterPage() {
  return (
    <View style={styles.container}>
      <View style={styles.menuIcon}>
        <View style={styles.line} />
        <View style={styles.line} />
        <View style={styles.line} />
      </View>

      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>app logo</Text>
      </View>

      <View style={styles.phoneInputContainer}>
        <View style={styles.countryCode}>
          <Text style={styles.countryText}>🇮🇪 +353</Text>
        </View>
        <TextInput
          style={styles.phoneInput}
          placeholder="1111111"
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.buttonText}>continue</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity style={styles.oauthButton}>
        <Text style={styles.buttonText}>continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.oauthButton}>
        <Text style={styles.buttonText}>continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.oauthButton}>
        <Text style={styles.buttonText}>continue with email</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.push('./select-role')}>
          <Text style={styles.footerText}>register here</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>find my account</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  menuIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  line: {
    width: 24,
    height: 2,
    backgroundColor: '#8B1C3D',
    marginVertical: 2,
  },
  logoContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logoText: {
    fontSize: 12,
    color: '#555',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  countryCode: {
    backgroundColor: '#E0E0E0',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    justifyContent: 'center',
  },
  countryText: {
    fontSize: 14,
  },
  phoneInput: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
  },
  continueButton: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 12,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#999',
    marginVertical: 10,
  },
  oauthButton: {
    backgroundColor: '#D3D3D3',
    paddingVertical: 12,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    marginTop: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
})
