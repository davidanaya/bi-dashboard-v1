import { browser, by, element } from 'protractor';

export class BiDashboard {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cp-app h2')).getText();
  }
}
