const capabilities = {
    maxInstances: 1,
    browserName: '',
    acceptInsecureCerts: false,
    appiumVersion: '1.20.0',
    platformName: 'iOS',
    udid: '{IOS-DEVICE-UDID}',
    platformVersion: '{IOS-DEVICE-PLATFORM-VERSION}',
    deviceName: '{IOS-DEVICE-NAME}',
    app: './os/build/HelloWorld/Build/Products/Debug-iphonesimulator/HelloWorld.app',
    automationName: 'XCUITest',
};
exports.capabilities = capabilities;