import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesEditComponent } from './samples-edit.component';

describe('SamplesEditComponent', () => {
  let component: SamplesEditComponent;
  let fixture: ComponentFixture<SamplesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
