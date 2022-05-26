import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor() { }

  public static getCurrentDatetime(): string {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().substring(0, 16);
  }

  public static convertDatetimeToText(datetime: string): string {
    return `${datetime.slice(0, 10)} ${datetime.slice(11, 16)}`
  }
}
