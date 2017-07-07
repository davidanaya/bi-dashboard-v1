import { MyAngularCliSeedPage } from './app.po';

describe('executive dashboard', () => {
  let page: MyAngularCliSeedPage;

  beforeEach(() => {
    page = new MyAngularCliSeedPage();
  });

  it(`should display title 'Executive Dashboard'`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Executive Dashboard');
  });
});
