import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildRelationshipComponent } from './parent-child-relationship.component';

describe('ParentChildRelationshipComponent', () => {
  let component: ParentChildRelationshipComponent;
  let fixture: ComponentFixture<ParentChildRelationshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentChildRelationshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildRelationshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
