import React from 'react';
import { useState, useRef } from 'react';
import { router } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Image, SafeAreaView, TextInput} from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Animated, Pressable } from 'react-native';
import { useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';



// Home page screen component
export default function HomePage() {

  // Where to button
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState('');


  //Toggle Menu 
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(-250)).current; // start off-screen
  const toggleMenu = () => {
      setMenuVisible(!menuVisible);
  };
  const openMenu = () => {
    console.log('Opening menu....')
    setMenuVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  
  const closeMenu = () => {
    Animated.timing(slideAnim, {
      toValue: -250,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setMenuVisible(false);
    });
  };
  

  // Searchbar
  const handleSearch = (query: string) => {
    console.log('User searched:', query);
    setSearchActive(false);
    setSearchText('');
  };

  // User greeting
  const [greeting, setGreeting] = useState('');
  const userName = 'Midas'; // Replace with dynamic value later

  // State for tracking user's current location
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);


  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  useEffect(() => {
    let subscriber: Location.LocationSubscription | undefined;
  
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
  
      const loc = await Location.getCurrentPositionAsync({});
      console.log("📍 Current location:", loc.coords);
      setLocation(loc.coords);
    })();
  
    return () => {
      subscriber?.remove();
    };
  }, []);
  
  
  
  // Location options
  const recentPlaces = ['📍 123 Oxford Street', '📍 Home', '📍 Starbucks - Camden'];
  const smartSuggestions = ['🏢 Work', '🏋️ Gym', '🛒 Grocery Store'];

  

  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, position: 'relative' }}>

      {/* Live location-tracking map using Expo Location and react-native-maps */}
      <View style={{ flex: 1, minHeight: 300 }}>
        {location ? (
          <MapView
            style={{ flex:1 }}
            region={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
              }}
            showsUserLocation={true}
            followsUserLocation={true}
          >
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="You are here"
              description="Current location"
            />
          </MapView>
        ) : (
          <View style={styles.placeholder}>
            <Text>Fetching current location...</Text>
          </View>
        )}
      </View>


      {/* Greeting */}
    <View style={styles.greetingContainer}>
      <Text style={styles.greetingText}>
        {greeting}, {userName} <Text style={{ fontSize: 20 }}>👋</Text>
      </Text>
      <Text style={styles.greetingSub}>“Character is power.”🎖️</Text>
    </View>


      {/* Top-left hamburger menu icon */}
      <TouchableOpacity style={styles.menuButton} onPress={openMenu}>
        <FontAwesome5 name="bars" size={20} color="#fff" />
      </TouchableOpacity>


      {/* Blurred overlay for enhanced contrast */}
      <View style={styles.overlay} />

      {/* Centered "Where to?" button */}
      {!searchActive ? (
      <TouchableOpacity style={styles.whereToButton} onPress={() => setSearchActive(true)}>
        <Text style={styles.whereToText}>Where to?</Text>
      </TouchableOpacity>
        ) : (
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search destination..."
          placeholderTextColor="#ccc"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={() => handleSearch(searchText)}
          autoFocus
        />
        <TouchableOpacity onPress={() => {
          setSearchText('');
          setSearchActive(false);
        }}>
          <Ionicons name="close-circle" size={22} color="#fff" style={styles.clearIcon} />
        </TouchableOpacity>
      </View>
    )}

    {/* Suggestions List */}
    {searchActive && (
      <View style={styles.suggestionsContainer}>
        {searchText === '' && (
          <>
            <Text style={styles.suggestionHeading}>Recent</Text>
            {recentPlaces.map((place, index) => (
              <TouchableOpacity key={index} style={styles.suggestionItem}>
                <Text style={styles.suggestionText}>{place}</Text>
              </TouchableOpacity>
            ))}
            <Text style={styles.suggestionHeading}>Suggestions</Text>
            {smartSuggestions.map((place, index) => (
              <TouchableOpacity key={index} style={styles.suggestionItem}>
                <Text style={styles.suggestionText}>{place}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}
      </View>
    )}
      

    {/* Quick Actions */}
    <View style={styles.quickActionsContainer}>
    <TouchableOpacity
      style={styles.quickCard}
        onPress={() => handleSearch('Home')}>
        <Text style={styles.quickEmoji}>🏠</Text>
        <Text style={styles.quickLabel}>Go Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.quickCard}
        onPress={() => handleSearch('Work')}>
        <Text style={styles.quickEmoji}>🏢</Text>
        <Text style={styles.quickLabel}>Go to Work</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.quickCard}
        onPress={() => handleSearch('Schedule')}>
        <Text style={styles.quickEmoji}>📅</Text>
        <Text style={styles.quickLabel}>Schedule</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.quickCard}
        onPress={() => handleSearch('Groceries')}>
        <Text style={styles.quickEmoji}>🛒</Text>
        <Text style={styles.quickLabel}>Groceries</Text>
      </TouchableOpacity>

    </View>



      {/* Bottom navigation bar with icons */}
      <View style={styles.bottomNav}>
      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/homepage')}>
        <Ionicons name="home-outline" size={22} color="white" />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/settings')}>
        <Ionicons name="settings-outline" size={22} color="white" />
        <Text style={styles.navText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => router.push('/profile')}>
        <Ionicons name="person-outline" size={22} color="white" />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>

      </View>
      
      <>
  {/* Menu Backdrop - only visible when menu is open */}
  {menuVisible && <Pressable style={styles.menuBackdrop} onPress={closeMenu} />}

  {/* Always render the menu, slide it in/out */}
  <Animated.View style={[styles.sideMenu, { left: slideAnim }]}>
    <Text style={styles.menuTitle}>Menu</Text>

    <TouchableOpacity onPress={() => {
      closeMenu();
      router.push('../profile');
    }}>
      <Text style={styles.menuItem}>Profile</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => {
      closeMenu();
      router.push('../settings');
    }}>
      <Text style={styles.menuItem}>Settings</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={closeMenu}>
      <Text style={[styles.menuItem, { color: '#ccc' }]}>Close</Text>
    </TouchableOpacity>
  </Animated.View>
</>

    </View>
    </SafeAreaView>
  );
}

// Modern, polished styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.95,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.25)',
  },
  menuButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 60 : 40,
    left: 20,
    backgroundColor: 'rgba(92,26,39,0.85)',
    padding: 14,
    borderRadius: 18,
    zIndex: 99, // ⬅️ Make sure this is above background and overlay
    elevation: 8,
  },
  

  menuBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 999, // less than sideMenu
  },
  
  sideMenu: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#5C1A27',
    paddingTop: 80,
    paddingHorizontal: 20,
    zIndex: 1000, // ⬅️ forces it above the backdrop
    elevation: 100,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  
  
  menuTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  
  menuItem: {
    fontSize: 16,
    color: '#fff',
    paddingVertical: 10,
  },
  
  greetingContainer: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 20 : 10,
    left: 20,
    zIndex: 90,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  greetingSub: {
    fontSize: 14,
    color: '#f0e0e0',
    marginTop: 4,
    fontStyle: 'italic',
  },
  

  whereToButton: {
    position: 'absolute',
    top: '42%',
    alignSelf: 'center',
    backgroundColor: 'rgba(92,26,39,0.92)', // chocolate-burgundy tint
    paddingVertical: 18,
    paddingHorizontal: 55,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },
  whereToText: {
    color: '#fff',
    fontSize: 21,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  searchBarContainer: {
    position: 'absolute',
    top: '42%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(92,26,39,0.9)',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    alignSelf: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    paddingVertical: 2,
  },

  suggestionsContainer: {
    position: 'absolute',
    top: '52%',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.95)',
    width: '80%',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    zIndex: 50,
  },
  quickActionsContainer: {
    position: 'absolute',
    top: '65%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '90%',
    gap: 10,
  },
  quickCard: {
    backgroundColor: 'rgba(92,26,39,0.9)',
    width: '47%',
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  quickEmoji: {
    fontSize: 24,
    marginBottom: 6,
  },
  quickLabel: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  
  suggestionHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  suggestionItem: {
    paddingVertical: 6,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  suggestionText: {
    fontSize: 15,
    color: '#444',
  },
  
  clearIcon: {
    marginLeft: 10,
  },
  
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(92, 26, 39, 0.92)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 6,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

