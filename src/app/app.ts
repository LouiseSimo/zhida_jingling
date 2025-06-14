import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { MatIconModule } from '@angular/material/icon';
import { AppDialog } from "./app-dialog/app-dialog";
import { MaterialModule } from './material/material.modules';
import { AppHeader } from "./app-header /app-header";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    AppNavigationComponent,
    MatIconModule, AppDialog,
    MaterialModule, AppHeader],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'ZHIDA_JINDLING';
}
