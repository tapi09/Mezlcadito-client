import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivePlayersListComponent } from './active-players-list.component';

describe('ActivePlayersListComponent', () => {
  let component: ActivePlayersListComponent;
  let fixture: ComponentFixture<ActivePlayersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivePlayersListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivePlayersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
