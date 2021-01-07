import Page from './Page';

class AlertPage  extends Page {

    get title() { return this.getSelector(androidSelector='#alertTitle', iosSelector='//XCUIElementTypeStaticText[@name="Alert"]')}
    get message() { return this.getSelector(androidSelector='#message', iosSelector='//XCUIElementTypeStaticText[@name="Alert"]/following-sibling::XCUIElementTypeStaticText')}
    get okButton() { return this.getSelector(androidSelector='#button1', iosSelector='//XCUIElementTypeButton[@name="OK"]')}
}
export default new AlertPage();