import { Component, signal } from '@angular/core';
import { WeatherComp } from "./weather-comp/weather-comp";

@Component({
  selector: 'app-root',
  imports: [WeatherComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Weather-Appl');
}
