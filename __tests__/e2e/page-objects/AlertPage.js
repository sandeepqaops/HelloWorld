import Page from './Page';

class AlertPage  extends Page {

    get title() { return $('#alertTitle') }
    get message() { return $('#message') }
    get okButton() { return $('#button1') }

}
export default new AlertPage();