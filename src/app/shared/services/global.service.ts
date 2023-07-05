import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  readonly isDarkThemeEnable: WritableSignal<boolean> = signal(false);

  constructor() {
    this.setDarkThemeInitialState();
  }

  setDarkThemeInitialState() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') return;
    if (
      theme === 'dark' ||
      (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.toogleDarkTheme();
    }
  }

  toogleDarkTheme() {
    this.isDarkThemeEnable.update((state) => !state);
    if (this.isDarkThemeEnable()) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
