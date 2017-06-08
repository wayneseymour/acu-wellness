import { browser, by, element } from 'protractor';

export class AcuWelPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getBackgroundInfoText() {
      return element(by.css('.background-info')).getText();
  }
}
