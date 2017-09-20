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

export interface UserSignup {
  consent: boolean;
  email: string;
  password: string;
}

export interface UserToken {
  token: string;
}
