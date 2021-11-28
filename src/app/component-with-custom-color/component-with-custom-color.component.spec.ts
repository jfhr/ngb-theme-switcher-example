import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithCustomColorComponent } from './component-with-custom-color.component';

describe('ComponentWithCustomColorComponent', () => {
  let component: ComponentWithCustomColorComponent;
  let fixture: ComponentFixture<ComponentWithCustomColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentWithCustomColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentWithCustomColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
