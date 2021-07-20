import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMultiselectComponent } from './app-multiselect.component';

describe('AppMultiselectComponent', () => {
  let component: AppMultiselectComponent;
  let fixture: ComponentFixture<AppMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMultiselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
