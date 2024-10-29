import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModclienteComponent } from './modcliente.component';

describe('ModclienteComponent', () => {
  let component: ModclienteComponent;
  let fixture: ComponentFixture<ModclienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModclienteComponent]
    });
    fixture = TestBed.createComponent(ModclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
