import HomePage from '../page-objects/HomePage';
import HelloPage from '../page-objects/HelloPage';
import AlertPage from '../page-objects/AlertPage';

var expect = require('chai').expect;

describe('Sample App Test', () => {

  beforeEach(() => {
    driver.reset();
    HomePage.image.waitForDisplayed();
  });

  it('Sanity', async => {
    if(driver.isAndroid){
      const submitButtonText = HomePage.submitButton.getText();
      expect(submitButtonText).to.equal('SUBMIT');
    }
    HomePage.inputName('sandeep qaops');
    HelloPage.image.waitForDisplayed();
    HelloPage.greeting.isDisplayed();
    HelloPage.name.isDisplayed();
    const name = HelloPage.name.getText();
    expect(name).to.equal('Sandeep Qaops');
    if(driver.isAndroid){
      const backButtonText = HelloPage.backButton.getText();
      expect(backButtonText).to.equal('BACK');
    }
    HelloPage.backButton.click();
  });

  it('Error - Blank Name', async => {
    HomePage.inputName('');
    AlertPage.title.waitForDisplayed();
    const message = AlertPage.message.getText();
    expect(message).to.equal('Name Cannot be Blank');
    AlertPage.okButton.click();
  });

  it('Error - Max Limit Name', async => {
    HomePage.inputName('abcdefghijklmnopqrstuvwxyz 0123456789 abc');
    AlertPage.title.waitForDisplayed();
    const message = AlertPage.message.getText();
    expect(message).to.equal('Maximum length of this variable is 40');
    AlertPage.okButton.click();
  });

  afterEach(() => {
    HomePage.image.waitForDisplayed(11000);
  });

});