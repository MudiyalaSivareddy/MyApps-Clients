import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetilizerPageComponent } from './fetilizer-page.component';

describe('FetilizerPageComponent', () => {
  let component: FetilizerPageComponent;
  let fixture: ComponentFixture<FetilizerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetilizerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetilizerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
