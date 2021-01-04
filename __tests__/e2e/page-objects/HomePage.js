import Page from './Page';

class HomePage  extends Page {

    get image() { return $('~home-image') }
    get nameField() { return $('~home-name-field') }
    get submitButton() {
        const selectorType = driver.isAndroid ? 'android' : 'ios'
        const selector = driver.isAndroid ? 'description("home-submit-button-text")' : '~home-submit-button'
        return $(`${selectorType}=${selector}`)
    }

    inputName(name){
        this.nameField.setValue(name);
        driver.hideKeyboard();
        this.submitButton.click();
    }

}
export default new HomePage();