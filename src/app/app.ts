import { Component, inject, OnInit, signal } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterOutlet } from '@angular/router';
import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { Header } from "./shared/components/header/header";
import { Footer } from "./shared/components/footer/footer";
import { LandingPage } from "./features/landing/landing-page/landing-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('omni365-showcase');

  private readonly faIconLibrary = inject(FaIconLibrary);


  ngOnInit(): void {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
