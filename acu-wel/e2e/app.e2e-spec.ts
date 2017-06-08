import { AcuWelPage } from './app.po';

describe('acu-wel App', () => {
  let page: AcuWelPage;

  beforeEach(() => {
    page = new AcuWelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
