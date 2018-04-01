import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  constructor() { }
  messages: string[] = [];

  addMsg(msg: string){
    this.messages.push(msg)
  }

  clear(){
    this.messages = []
  }

}
