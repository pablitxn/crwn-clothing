export interface LoginFormProps {
  onSubmit: (account: AccountTypes) => void;
  error: boolean;
  isLoading: boolean;
}
export interface AccountTypes {
  email: string;
  password: string;
}