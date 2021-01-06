exports.config = {
    maxInstances: 1,
    browserName: '',
    acceptInsecureCerts: false,
    browserName: '',
    appiumVersion: '1.15.0',
    platformName: 'Android',
    platformVersion: '{EMULATOR-PLATFORM-VERSION}',
    deviceName: '{EMULATOR-NAME}',
    app: './android/app/build/outputs/apk/debug/app-debug.apk',
    automationName: 'UiAutomator2',
};