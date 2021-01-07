import Page from './Page';

class HomePage extends Page {

    get image() { return $('~home-image') }
    get nameField() { return $('~home-name-field') }
    get submitButton() { return this.getSelector(androidSelector='~home-submit-button-text', iosSelector='~home-submit-button')}

    inputName(name) {
        this.nameField.setValue(name);
        driver.hideKeyboard();
        this.submitButton.click();
    }

}
export default new HomePage();