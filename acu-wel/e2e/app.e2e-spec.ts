import {AcuWelPage} from './app.po';

describe('acu-wel App', () => {
    let page: AcuWelPage;

    beforeEach(() => {
        page = new AcuWelPage();
    });

    it('should display title message', () => {
        page.navigateTo();
        const expected = 'Acupuncture and Functional Medicine of Orlando and Winter Park';

        // expect(page.getParagraphText()).toEqual(true);
    });


});
