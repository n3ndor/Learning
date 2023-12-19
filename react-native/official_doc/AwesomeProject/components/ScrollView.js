/* 
/Handling Overflowing Content: 
It helps manage content that exceeds the screen's available space.

/Scrollability: Enables users to scroll vertically to see all content, 
even when it doesn't fit within the screen's visible area.

/Better User Experience: Provides a better user experience 
by making all content accessible through scrolling.

/Content Organization: Useful for organizing and presenting long lists of content, 
such as articles, lists, or forms, that wouldn't fit within a single screen.

/Paging: Use pagingEnabled to enable swipe-based navigation between views in a ScrollView.

/Zooming (iOS): Configure maximumZoomScale and minimumZoomScale to allow users 
to zoom in and out of content using pinch gestures in a ScrollView (iOS only).

/Limitations: ScrollViews are suitable for a small number of items of limited size. 
All items are rendered, even if not visible. For long lists, use FlatList for better performance.


*/



import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};

const Scroll = () => (

  // As default we have Vertical, but we can change to be horizontal like this:
  //<ScrollView horizontal>
  <ScrollView>
    <Text style={{fontSize: 96}}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 80}}>React Native</Text>
  </ScrollView>
);

export default Scroll;