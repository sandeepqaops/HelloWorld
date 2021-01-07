export default class Page {
    constructor() { }

    getSelector(androidSelector, iosSelector) {
        let selector;
        if (driver.isAndroid) {
            selector=`${androidSelector}`;
        } else {
            selector=`${iosSelector}`;
        }
        return $(`${selector}`)
    }
}