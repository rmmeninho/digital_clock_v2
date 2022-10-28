import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelojV2Component } from './reloj-v2.component';

describe('RelojV2Component', () => {
  let component: RelojV2Component;
  let fixture: ComponentFixture<RelojV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelojV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelojV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
