import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    MatCardModule
  ],
  templateUrl: './app-header.html',
  styleUrl: './app-header.scss'
})

export class AppHeader {
  @Input() isHandset$!: Observable<Boolean>;
  @Input() drawer: MatSidenav | undefined;
}

