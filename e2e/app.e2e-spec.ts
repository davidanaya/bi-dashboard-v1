import { BiDashboard } from './app.po';

describe('home page', () => {
  let page: BiDashboard;

  beforeEach(() => {
    page = new BiDashboard();
  });

  it(`should display title 'BI Dashboard'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('BI Dashboard');
  });
});
