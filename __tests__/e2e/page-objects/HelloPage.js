import Page from './Page';

class HelloPage  extends Page {

    get image() { return $('~hello-image') }
    get greeting() { return $('~hello-greeting') }
    get name() { return $('~hello-name') }
    get backButton() { return $('~hello-back-button') }
    get backButtonText() { return $('~hello-back-button-text') }

}
export default new HelloPage();