import { MyAngularCliSeedPage } from './app.po';

describe('my-angular-cli-seed App', () => {
  let page: MyAngularCliSeedPage;

  beforeEach(() => {
    page = new MyAngularCliSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
