import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import { router } from 'expo-router'

export default function UserSelectionPage() {
  const [fetchedValue, setFetchedValue] = useState<string | null>(null)

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const response = await fetch('http://172.20.10.2:5001/api/value')
        const data = await response.json()
        setFetchedValue(data.value)
      } catch (error) {
        setFetchedValue("Express Server Status: FAILURE!!")
        console.error('Error fetching data:', error)
      }
    }

    fetchValue()
  }, [])

  return (
    <View style={styles.container}>
      {/* Logo Placeholder */}
      <View style={styles.topSection}>
        <View style={styles.logoPlaceholder}>
          <Text style={styles.logoText}>Logo</Text>
        </View>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>Create your account now!</Text>

        <TouchableOpacity
          style={styles.selectionButton}
          onPress={() => router.push('/passenger-side/register')}
        >
          <Text style={styles.buttonText}>
            I'm a <Text style={styles.bold}>Passenger</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.selectionButton}
          onPress={() => router.push('./diver-side/driver-registration')}
        >
          <Text style={styles.buttonText}>
            I'm a <Text style={styles.bold}>Driver</Text>
          </Text>
        </TouchableOpacity>


        <Text style={styles.linkText}>
          need an account for both?{' '}
          <Text style={styles.clickable}>click here</Text>
        </Text>

        <View style={styles.divider} />

        {/* Display fetched value from backend */}
        {fetchedValue && (
          <Text style={styles.fetchedText}>{fetchedValue}</Text>
        )}

        <Text style={styles.footer}>
          Terms & Conditions apply. Lorem ipsum etc etc etc. Copyright Rooslove Ltd.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  topSection: {
    backgroundColor: '#9E2A45',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 12,
    color: '#555',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  selectionButton: {
    width: '100%',
    backgroundColor: '#E6E6E6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
  },
  linkText: {
    fontSize: 13,
    color: '#444',
    marginTop: 12,
  },
  clickable: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    width: '80%',
    backgroundColor: '#CCC',
    marginVertical: 20,
  },
  fetchedText: {
    fontSize: 14,
    color: '#9E2A45',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
  },
})
