
export class User {
  firstName: string;
  middleName: string;
  lastName: string;
  eMail: string;
  password: string;

  constructor(firstName: string, middleName: string, lastName: string, email: string, password: string) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.eMail = email;
    this.password = password;
  }
}
