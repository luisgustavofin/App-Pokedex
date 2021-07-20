import React, { useCallback, useRef } from 'react';
import { View, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { getWidth } from '../others';
import { Styles, Colors, getColorFromType } from '../styles';

const screenWidth = getWidth();

const Navbar = ({
  tabs,
  primaryColor
}) => {
  const indicatorX = new Animated.Value(0);
  const scrollRef = useRef();

  const moveIndicator = (to) => {
    Animated.timing(indicatorX, {
      toValue: to,
      duration: 0,
      useNativeDriver: false
    }).start();
  };

  const handleMenuPress = useCallback((menuIndex) => {
    scrollRef.current?.scrollTo({ x: screenWidth * menuIndex });
  }, [screenWidth]);

  return (
    <View style={Styles.navContainer}>
      <View style={Styles.navMenu}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            style={Styles.navMenuButtom}
            key={index}
            onPress={() => handleMenuPress(index)}
          >
            <Animated.Text
              style={{
                color: indicatorX.interpolate({
                  inputRange: [
                    (index - 1) * screenWidth / tabs.length,
                    index * screenWidth / tabs.length,
                    (index + 1) * screenWidth / tabs.length
                  ],
                  outputRange: [Colors.grayB8B8, Colors.black000, Colors.grayB8B8],
                  extrapolate: 'clamp'
                })
              }}
            >
              {tab.name}
            </Animated.Text>
          </TouchableOpacity>
        ))}
      </View>
      <Animated.View style={[Styles.navIndicator, {
        width: screenWidth / tabs.length,
        backgroundColor: getColorFromType(primaryColor),
        transform: [{
          translateX: indicatorX
        }, {
          scaleX: 0.7
        }]
      }]}

      />
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        decelerationRate={0.5}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={e => {
          const { contentOffset } = e.nativeEvent;
          moveIndicator(contentOffset.x / tabs.length);
        }}
      >
        {tabs.map((tab, index) => (
          <ScrollView key={index}>
            <View style={Styles.navContent}>
              {tab.component}
            </View>
          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
};

export { Navbar };
