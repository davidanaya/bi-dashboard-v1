import { ExecutiveDashboardPage } from './app.po';

describe('executive dashboard', () => {
  let page: ExecutiveDashboardPage;

  beforeEach(() => {
    page = new ExecutiveDashboardPage();
  });

  it(`should display title 'Executive Dashboard'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Executive Dashboard');
  });
});
