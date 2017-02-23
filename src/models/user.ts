export interface User {
    id: number;
    email: string;
    createdAt: Date;
}

export interface UserLogin {
  email: string
  password: string
  remember: boolean
}

export interface Message {
  err: boolean
  msg?: string
}

export interface UserSignin {
  name: string
  email: string
  birthday: Date
  password1: string
  password2: string
}

export interface UserCreateRequest {
    email: string;
}

export interface UserUpdateRequest {
    createdAt?: Date;
    email: string;
}
