export interface ISignInForm {
  onSubmit: (username: string, password: string) => void;
  forgotPassButton: () => void;
}