import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIservices {
  private message = signal<string>('');  // initially empty
  private flag = signal<boolean>(false); // false means no popup
  private template = signal<boolean>(false);

  setUI(msg: string, flg: boolean, temp: boolean) {
    this.message.set(msg)
    this.flag.set(flg)
    this.template.set(temp)

  }

  getUI() {
    return {
      message: this.message,
      flag: this.flag,
      template: this.template
    };
  }
}
