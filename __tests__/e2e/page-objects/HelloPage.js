import Page from './Page';

class HelloPage  extends Page {

    get image() { return $('~hello-image') }
    get greeting() { return $('~hello-greeting') }
    get name() { return $('~hello-name') }
    get backButton() { return this.getSelector(androidSelector='~hello-back-button-text', iosSelector='~hello-back-button')}

}
export default new HelloPage();