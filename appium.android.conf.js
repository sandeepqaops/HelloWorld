const capabilities = {
    maxInstances: 1,
    browserName: '',
    acceptInsecureCerts: false,
    appiumVersion: '1.20.0',
    platformName: 'Android',
    platformVersion: '10',
    deviceName: 'emulator-5554',
    app: './android/app/build/outputs/apk/debug/app-debug.apk',
    automationName: 'UiAutomator2',
    uiautomator2ServerLaunchTimeout: 300000,
    uiautomator2ServerInstallTimeout: 300000,
    uiautomator2ServerReadTimeout: 300000,
    androidInstallTimeout: 300000,
};
exports.capabilities = capabilities;