var expect = require('chai').expect;

describe('Sample App Test', () => {

  beforeEach(() => {
    $("~home-image").waitForDisplayed(11000);
  });

  it('Sanity Test', async => {
      $("~home-name-field").setValue('sandeep qaops');
      $("~home-submit-button").click();
      $("~hello-image").waitForDisplayed(11000);
      $("~hello-greeting").waitForDisplayed(11000);
      $("~hello-name").waitForDisplayed(11000);
      const name = $("~hello-name").getText();
      expect(name).to.equal('Sandeep Qaops');
      $("~hello-back-button").click();
      $("~home-image").waitForDisplayed(11000);
  });

});