export interface User {
  email: string;
  photo: string;
}

export interface UserChange {
  password1: string;
  password2: string;
  token: string;
}

export interface UserEmail {
  email: string;
}

export interface UserLogin {
  email: string;
  password: string;
  remember: boolean;
}

export interface UserSignin {
  name: string;
  email: string;
  birthday: Date;
  password: string;
}

export interface UserToken {
  token: string;
}
