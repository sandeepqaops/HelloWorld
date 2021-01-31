const capabilities = {
    maxInstances: 1,
    browserName: '',
    acceptInsecureCerts: false,
    appiumVersion: '1.20.0',
    platformName: 'Android',
    platformVersion: '{EMULATOR-PLATFORM-VERSION}',
    deviceName: '{EMULATOR-NAME}',
    app: './android/app/build/outputs/apk/debug/app-debug.apk',
    automationName: 'UiAutomator2',
    uiautomator2ServerLaunchTimeout: 300000,
    uiautomator2ServerInstallTimeout: 300000,
    uiautomator2ServerReadTimeout: 300000,
};
exports.capabilities = capabilities;