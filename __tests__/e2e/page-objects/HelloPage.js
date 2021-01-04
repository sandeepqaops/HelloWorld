import Page from './Page';

class HelloPage  extends Page {

    get image() { return $('~hello-image') }
    get greeting() { return $('~hello-greeting') }
    get name() { return $('~hello-name') }
    get backButton() {
        const selectorType = driver.isAndroid ? 'android' : 'ios'
        const selector = driver.isAndroid ? 'description("hello-back-button-text")' : '~hello-back-button'
        return $(`${selectorType}=${selector}`)
    }

}
export default new HelloPage();