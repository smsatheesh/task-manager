import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserVersionComponent } from './browser-version-component';

describe('BrowserVersionComponent', () => {
  let component: BrowserVersionComponent;
  let fixture: ComponentFixture<BrowserVersionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowserVersionComponent]
    });
    fixture = TestBed.createComponent(BrowserVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
