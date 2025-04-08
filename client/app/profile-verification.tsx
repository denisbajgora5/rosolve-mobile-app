import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Image,
  Alert,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { router } from 'expo-router'

export default function ProfileVerification(): JSX.Element {
  const userFullName = 'Jane Doe'

  // Track uploaded files
  const [passportImage, setPassportImage] = useState<string | null>(null)
  const [idCardImage, setIdCardImage] = useState<string | null>(null)

  const handleDocumentUpload = async (type: 'passport' | 'id') => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    if (status !== 'granted') {
      alert('Camera permission is required to verify your identity.')
      return
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    })

    if (!result.canceled && result.assets?.length > 0) {
      const imageUri = result.assets[0].uri
      if (type === 'passport') {
        setPassportImage(imageUri)
        Alert.alert('Success', 'Passport uploaded successfully ✅')
      } else {
        setIdCardImage(imageUri)
        Alert.alert('Success', 'ID card uploaded successfully ✅')
      }
    }
  }

  const handleVerify = () => {
    if (passportImage || idCardImage) {
      Alert.alert('Verification Complete', 'Thank you for verifying your identity!')
      // router.push('/next-step') // TODO: move forward in flow
    } else {
      Alert.alert('Incomplete', 'Please upload either a passport or ID card to continue.')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nice to meet you, <Text style={styles.bold}>{userFullName}</Text>! We’re almost done with setting up.
      </Text>

      <Text style={styles.subHeading}>Account Verification*</Text>

      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => handleDocumentUpload('passport')}
      >
        <Text style={styles.verifyText}>
          {passportImage ? 'Passport uploaded ✔️' : 'Verify with passport'}
        </Text>
        <Image
          source={require('../assets/images/camera.png')}
          style={styles.cameraIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.verifyButton}
        onPress={() => handleDocumentUpload('id')}
      >
        <Text style={styles.verifyText}>
          {idCardImage ? 'ID card uploaded ✔️' : 'Verify with ID card'}
        </Text>
        <Image
          source={require('../assets/images/camera.png')}
          style={styles.cameraIcon}
        />
      </TouchableOpacity>

      {/* Submit Verification */}
      <TouchableOpacity style={styles.submitButton} onPress={handleVerify}>
        <Text style={styles.submitText}>Continue</Text>
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
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 14,
    marginBottom: 18,
  },
  verifyText: {
    fontSize: 16,
    fontWeight: '500',
  },
  cameraIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  submitButton: {
    backgroundColor: '#9E2A45',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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
    marginTop: 'auto',
    marginBottom: 24,
    alignSelf: 'center',
    width: '90%',
  },
})
