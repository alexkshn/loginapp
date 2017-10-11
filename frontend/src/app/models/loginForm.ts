
export class loginForm {
  grant_type: string;
  client_id: string;
  client_secret: string;
  redirect_uri: string;
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.grant_type = 'password';
    this.client_id = 'foo';
    this.client_secret = 'foosecret';
    this.redirect_uri = '/secured';
    this.username = username;
    this.password = password;
  }
}

