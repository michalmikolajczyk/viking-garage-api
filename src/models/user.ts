export interface UserInfo {
// required info
  firstname: string;
  lastname: string;
  birthday: string;
  email: string;

// optional info
  phone?: string;
  emergency?: string;
  city?: string;
  country?: string;
  brief?: string;

// profile picture
  photo?: string;
}
