import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Image,
} from 'react-native'
import { router } from 'expo-router'

export default function ProfileVerification(): JSX.Element {
  const userFullName = 'Jane Doe' // Replace with dynamic name if passing from previous screen

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nice to meet you, <Text style={styles.bold}>{userFullName}</Text>! We’re almost done with setting up.
      </Text>

      <Text style={styles.subHeading}>Account Verification*</Text>

      {/* Verification Buttons */}
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyText}>Verify with passport</Text>
        <Image
          source={require('../assets/images/camera.png')}
          style={styles.cameraIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyText}>Verify with ID card</Text>
        <Image
          source={require('../assets/images/camera.png')}
          style={styles.cameraIcon}
        />
      </TouchableOpacity>

      {/* Info Text */}
      <Text style={styles.noteText}>
        *Verification is <Text style={styles.bold}>mandatory</Text> for account creation. If you cannot verify with the above methods please contact us <Text style={styles.link}>here</Text> and we’ll do our best to help.
      </Text>

      {/* Footer */}
      <Text style={styles.footer}>
        All data collected is stored privately and only used to protect the safety of you and others. © Team Rosolve.
      </Text>
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
  },
  title: {
    fontSize: 16,
    marginBottom: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 14,
    marginBottom: 16,
  },
  verifyButton: {
    backgroundColor: '#E6E6E6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,         // ⬆️ more height
    paddingHorizontal: 20,
    borderRadius: 14,
    marginBottom: 18,
  },
  verifyText: {
    fontSize: 16,               // ⬆️ larger text
    fontWeight: '500',
  },
  cameraIcon: {
    width: 28,                  // ⬆️ larger icon
    height: 28,
    resizeMode: 'contain',
  },
  noteText: {
    fontSize: 12,
    color: '#333',
    marginTop: 10,
    marginBottom: 24,
  },
  link: {
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  footer: {
    fontSize: 11,
    color: '#777',
    textAlign: 'center',
    marginTop: 'auto',      // Pushes it to the bottom of the screen
    marginBottom: 24,       // Adds breathing room from bottom
    alignSelf: 'center',    // Horizontally center it
    width: '90%',
  },  
})
