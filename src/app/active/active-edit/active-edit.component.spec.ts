import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEditComponent } from './active-edit.component';

describe('ActiveEditComponent', () => {
  let component: ActiveEditComponent;
  let fixture: ComponentFixture<ActiveEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
