import { browser, by, element } from 'protractor';

export class ExecutiveDashboardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cp-app h3')).getText();
  }
}
