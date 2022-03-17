import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexturizadoComponent } from './texturizado.component';

describe('TexturizadoComponent', () => {
  let component: TexturizadoComponent;
  let fixture: ComponentFixture<TexturizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexturizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexturizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
