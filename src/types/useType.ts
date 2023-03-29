export interface UserProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  username: string;
}

export interface SignUpProps extends UserProps {
  password: string;
  passwordConfirm: string;
}
