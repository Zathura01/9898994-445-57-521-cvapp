import { Component, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class Triggers {

  trigger = signal(0)
  setData = []

  fireTrigger(){
    this.trigger.set(this.trigger()+1)
  }



}
