import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobeComponent } from './adobe.component';

describe('AdobeComponent', () => {
  let component: AdobeComponent;
  let fixture: ComponentFixture<AdobeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdobeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdobeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
