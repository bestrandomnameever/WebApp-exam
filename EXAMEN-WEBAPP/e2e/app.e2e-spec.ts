import { EXAMENWEBAPPPage } from './app.po';

describe('examen-webapp App', () => {
  let page: EXAMENWEBAPPPage;

  beforeEach(() => {
    page = new EXAMENWEBAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
