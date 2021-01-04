import HomePage from '../page-objects/HomePage';
import HelloPage from '../page-objects/HelloPage';
import AlertPage from '../page-objects/AlertPage';

var expect = require('chai').expect;
const TIMEOUT = 11000;

describe('Sample App Test', () => {

  beforeEach(() => {
    browser.reset();
    HomePage.image.waitForDisplayed(TIMEOUT);
  });

  it('Sanity Test', async => {
    HomePage.inputName('sandeep qaops');
    HelloPage.image.waitForDisplayed(TIMEOUT);
    HelloPage.greeting.isDisplayed();
    HelloPage.name.isDisplayed();
    const name = HelloPage.name.getText();
    expect(name).to.equal('Sandeep Qaops');
    HelloPage.backButton.click();
  });

  it('Blank Name', async => {
    HomePage.inputName('');
    AlertPage.title.waitForDisplayed(TIMEOUT);
    const message = AlertPage.message.getText();
    expect(message).to.equal('Name Cannot be Blank');
    AlertPage.okButton.click();
  });

  it('Max Limit Name', async => {
    HomePage.inputName('abcdefghijklmnopqrstuvwxyz 0123456789 abc');
    AlertPage.title.waitForDisplayed(TIMEOUT);
    const message = AlertPage.message.getText();
    expect(message).to.equal('Maximum length of this variable is 40');
    AlertPage.okButton.click();
  });

  afterEach(() => {
    HomePage.image.waitForDisplayed(11000);
  });

});