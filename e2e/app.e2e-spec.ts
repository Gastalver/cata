import { CataPage } from './app.po';

describe('cata App', function() {
  let page: CataPage;

  beforeEach(() => {
    page = new CataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
