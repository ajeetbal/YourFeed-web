import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotemachineComponent } from './quotemachine.component';

describe('QuotemachineComponent', () => {
  let component: QuotemachineComponent;
  let fixture: ComponentFixture<QuotemachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotemachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotemachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
