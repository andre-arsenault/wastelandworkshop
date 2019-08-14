import { Component } from '@angular/core';
import { Plugins, StatusBarStyle } from '@capacitor/core';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    SplashScreen.hide();
    StatusBar.setStyle({ style: StatusBarStyle.Dark });
    StatusBar.show();
  }
}
