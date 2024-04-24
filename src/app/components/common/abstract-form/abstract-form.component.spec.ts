import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractFormComponent } from './abstract-form.component';

describe('AbstractFormComponent', () => {
    let component: AbstractFormComponent;
    let fixture: ComponentFixture<AbstractFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
        declarations: [AbstractFormComponent]
        });
        fixture = TestBed.createComponent(AbstractFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
