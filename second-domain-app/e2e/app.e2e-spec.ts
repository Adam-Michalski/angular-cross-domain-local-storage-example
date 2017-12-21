import { SecondDomainAppPage } from './app.po';

describe('second-domain-app App', () => {
  let page: SecondDomainAppPage;

  beforeEach(() => {
    page = new SecondDomainAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
