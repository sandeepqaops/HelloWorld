import Page from './Page';

class HomePage extends Page {

    get image() { return $('~home-image') }
    get nameField() { return $('~home-name-field') }
    get submitButton() {
        const selectorType = driver.isAndroid ? 'android' : 'ios'
        const selector = driver.isAndroid ? `${selectorType}=description("home-submit-button-text")` : `-${selectorType} predicate string:name == "home-submit-button"`
        return $(`${selector}`)
    }

    inputName(name) {
        this.nameField.setValue(name);
        driver.hideKeyboard();
        this.submitButton.click();
    }

}
export default new HomePage();