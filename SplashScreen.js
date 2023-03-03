import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenComponent = () => {
  useEffect(() => {
    // Hide Splash Screen after component loading
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('./SplashScreen.png')}
        style={{ flex: 1, width: null, height: null }}
        resizeMode="cover"
      />
    </View>
  );
};

export default SplashScreenComponent;
