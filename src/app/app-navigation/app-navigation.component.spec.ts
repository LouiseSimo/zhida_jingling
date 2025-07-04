import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavigationComponent } from './app-navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppNavigationComponent', () => {
  let component: AppNavigationComponent;
  let fixture: ComponentFixture<AppNavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppNavigationComponent],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
