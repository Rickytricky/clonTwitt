import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilnComponent } from './perfiln.component';

describe('PerfilnComponent', () => {
  let component: PerfilnComponent;
  let fixture: ComponentFixture<PerfilnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
