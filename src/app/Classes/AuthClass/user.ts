export class Notification {
    message: string;
    seen: boolean;
    date: Date;
  
    constructor(message: string, seen: boolean, date: Date) {
      this.message = message;
      this.seen = seen;
      this.date = date;
    }
  }

export class User {
  email: string;
  username: string;
  phone_number: string;
  type: string;
  notifications: Notification[];

  constructor(email: string, username: string, phone_number: string, type: string, notifications: Notification[]) {
    this.email = email;
    this.username = username;
    this.phone_number = phone_number;
    this.type = type;
    this.notifications = notifications;
  }
}
