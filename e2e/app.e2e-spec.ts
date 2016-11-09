import { FirebasengPage } from './app.po';

describe('firebaseng App', function() {
  let page: FirebasengPage;

  beforeEach(() => {
    page = new FirebasengPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
