import { FirstDomainAppPage } from './app.po';

describe('first-domain-app App', () => {
  let page: FirstDomainAppPage;

  beforeEach(() => {
    page = new FirstDomainAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
