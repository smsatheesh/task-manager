import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniAppsComponent } from './mini-apps.component';

describe('MiniAppsComponent', () => {
    let component: MiniAppsComponent;
    let fixture: ComponentFixture<MiniAppsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
        declarations: [MiniAppsComponent]
        });
        fixture = TestBed.createComponent(MiniAppsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
