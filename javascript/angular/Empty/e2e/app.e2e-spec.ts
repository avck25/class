import { EmptyPage } from './app.po';

describe('empty App', function() {
  let page: EmptyPage;

  beforeEach(() => {
    page = new EmptyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
