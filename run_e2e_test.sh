#!/bin/bash
print_usage(){
    echo "Usage: ./run_e2e_test.sh <PLATFORM> <TAG>"
    echo "<PLATFORM> mandatory: value in [Android|iOS]"
    echo "<TAG> optional: Supported values are [Sanity|Error]"
    exit 1
}
if [[ $# == 0 ]]
then
    print_usage
fi
PLATFORM=$1
PLATFORM=$(echo "$PLATFORM" | tr '[:upper:]' '[:lower:]')
if [[ $PLATFORM != "android"  &&  $PLATFORM != "ios" ]]
then
    print_usage
fi
echo "Running $PLATFORM E2E Tests"
if [[ $PLATFORM == "android" ]]
then
    DEVICE_ID=`adb devices | grep -v "List"  | awk '{print $1}'`
    echo "Device Name Identified: $DEVICE_ID"
    sed -i -e "s/{EMULATOR-NAME}/$DEVICE_ID/g" appium.android.conf.js
    ANDROID_VERSION=`adb shell getprop ro.build.version.release`
    echo "Device Version Identified: $ANDROID_VERSION"
    sed -i -e "s/{EMULATOR-PLATFORM-VERSION}/$ANDROID_VERSION/g" appium.android.conf.js
    cp appium.android.conf.js appium.device.conf.js
else
    cp appium.ios.conf.js appium.device.conf.js
fi
TAG=$2
if [[ -z $TAG ]]
then
    echo "Running All Tests"
    npx wdio ./wdio.conf.js
else
    echo "Running $TAG Tests"
    npx wdio ./wdio.conf.js --mochaOpts.grep "$TAG"    
fi
exit 0



