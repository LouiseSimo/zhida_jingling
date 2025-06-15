import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from './material/material.modules';
import { AppHeader } from "./app-header /app-header";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    AppNavigationComponent,
    MatIconModule,
    MaterialModule, AppHeader],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ZHIDA_JINDLING';
}
