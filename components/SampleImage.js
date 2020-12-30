import React, { Component } from 'react'
import { Image } from 'react-native'

const SampleImage = () => (
   <Image
      style={{ flex: 0, height: 150, width: 350}}
      source={require('../resources/react-native.png')}
   />
)
export default SampleImage;