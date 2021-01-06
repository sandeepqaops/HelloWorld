exports.config = {
    maxInstances: 1,
    browserName: '',
    acceptInsecureCerts: false,
    browserName: '',
    appiumVersion: '1.20.0',
    platformName: 'iOS',
    udid: '{IOS_DEVICE_UDID}',
    platformVersion: '{IOS_DEVICE_PLATFORM_VERSION}',
    deviceName: '{IOS_DEVICE_NAME}',
    app: './os/build/HelloWorld/Build/Products/Debug-iphonesimulator/HelloWorld.app',
    automationName: 'XCUITest',
};