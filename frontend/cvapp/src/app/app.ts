import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loadings } from "../ui/loadings/loadings";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loadings],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cvapp');
}
