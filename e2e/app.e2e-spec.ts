import { OdontoquizAppPage } from './app.po';

describe('odontoquiz-app App', () => {
  let page: OdontoquizAppPage;

  beforeEach(() => {
    page = new OdontoquizAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
