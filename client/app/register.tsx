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
      {/* Logo Placeholder */}
      <View style={styles.logoPlaceholder}>
        <Text style={styles.logoText}>Logo</Text>
      </View>

      {/* Title */}
      <Text style={styles.title}>Enter your number here</Text>

      {/* Phone Input */}
      <View style={styles.phoneInputContainer}>
        <View style={styles.countryCode}>
          <Text style={styles.countryText}>🇮🇪 +353</Text>
        </View>
        <TextInput
          style={styles.phoneInput}
          placeholder="0858446755"
          keyboardType="phone-pad"
        />
      </View>

      {/* Create Account Button */}
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>Create account</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      {/* OAuth Buttons */}
      <TouchableOpacity style={styles.oauthButton}>
        <Text style={styles.oauthText}>Log in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.oauthButton}>
        <Text style={styles.oauthText}>Log in with Facebook</Text>
      </TouchableOpacity>

      {/* Footer */}
      <Text style={styles.footerText}>
        Terms & Conditions apply. Lorem ipsum etc etc etc. Copyright Rooslove Ltd.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 12,
    color: '#555',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
  },
  countryCode: {
    backgroundColor: '#F0F0F0',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: 'center',
  },
  countryText: {
    fontSize: 16,
  },
  phoneInput: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  createButton: {
    backgroundColor: '#C73A53',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 14,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    fontSize: 14,
    color: '#999',
    marginBottom: 10,
  },
  oauthButton: {
    backgroundColor: '#E6E6E6',
    width: '100%',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  oauthText: {
    fontSize: 14,
    fontWeight: '500',
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
})
