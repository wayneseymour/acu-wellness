import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TitleComponent} from './title.component';

describe('TitleComponent', () => {
    let component: TitleComponent;
    let fixture: ComponentFixture<TitleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TitleComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TitleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it(`should have the title`, async(() => {
        const fixture = TestBed.createComponent(TitleComponent);
        const app = fixture.debugElement.componentInstance;
        expect([...app.title[0], ' ', ...app.title[1]])
            .toEqual('Acupuncture and Functional Medicine of Orlando and Winter Park');
    }));

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(TitleComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent)
            .toContain('Acupuncture');
    }));
});
