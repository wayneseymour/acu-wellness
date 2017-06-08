import {AcuWelPage} from './app.po';

describe('acu-wel App', () => {
    let page: AcuWelPage;

    beforeEach(() => {
        page = new AcuWelPage();
    });

    it('should display title message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Acupuncture and Functional Medicine of Orlando and Winter Park');
    });

    it('should display title message', () => {
        page.navigateTo();
        expect(page.getBackgroundInfoText()).toContain(`
            I am a Doctor of Oriental Medicine and a board certified and licensed Acupuncture Physician and functional medicine practitioner
        `);
    });

});
