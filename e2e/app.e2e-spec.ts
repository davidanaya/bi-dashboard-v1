import { ExecutiveDashboardPage } from './app.po';

describe('home page', () => {
  let page: ExecutiveDashboardPage;

  beforeEach(() => {
    page = new ExecutiveDashboardPage();
  });

  it(`should display title 'Home Page'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Home Page');
  });
});
