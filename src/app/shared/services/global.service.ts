import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  readonly isDarkThemeEnable: WritableSignal<boolean> = signal(false);

  constructor() {
    this.setDarkThemeInitialState();
   }

  setDarkThemeInitialState(){
    if (
      localStorage['theme'] === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.toogleDarkTheme();
    }
  }

  toogleDarkTheme(){
    this.isDarkThemeEnable.update(state=>!state);
    if(this.isDarkThemeEnable()){
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme","dark");
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.removeItem("theme");
    }
  }
}
