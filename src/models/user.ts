export interface UserInfo {
// required info
  accountId: number;

// optional info
  firstname?: string;
  lastname?: string;
  birthday?: string;
  email?: string;
  phone?: string;
  emergency?: string;
  city?: string;
  country?: string;
  brief?: string;

// profile picture
  image?: string;
}
