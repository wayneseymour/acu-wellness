import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactComponent} from './contact.component';
import {FeesComponent} from "../fees/fees.component";

describe('ContactComponent', () => {
    let component: ContactComponent;
    let fixture: ComponentFixture<ContactComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ContactComponent,
                FeesComponent,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
