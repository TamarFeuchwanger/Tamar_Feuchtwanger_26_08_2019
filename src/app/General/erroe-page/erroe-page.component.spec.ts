import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroePageComponent } from './erroe-page.component';

describe('ErroePageComponent', () => {
  let component: ErroePageComponent;
  let fixture: ComponentFixture<ErroePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErroePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
