import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedByUsersComponent } from './added-by-users.component';

describe('AddedByUsersComponent', () => {
  let component: AddedByUsersComponent;
  let fixture: ComponentFixture<AddedByUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedByUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedByUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
