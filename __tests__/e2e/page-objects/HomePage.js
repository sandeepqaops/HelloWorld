import Page from './Page';

class HomePage  extends Page {

    get image() { return $('~home-image') }
    get nameField() { return $('~home-name-field') }
    get submitButton() { return $('~home-submit-button') }
    get submitButtonText() { return $('~home-submit-button-text') }

    inputName(name){
        this.nameField.setValue(name);
        browser.hideKeyboard();
        this.submitButton.click();
    }

}
export default new HomePage();