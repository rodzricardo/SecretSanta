import {AppPage} from './app.po';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display partition label', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('EMPLOYEES');
    });
});
