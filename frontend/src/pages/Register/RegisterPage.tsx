import { AuthForms } from "@widgets/authForms";
import { Header } from "@widgets/header";

export const RegisterPage = () => {
  return (
    <>
      <Header page="register" />
      <AuthForms />
    </>
  );
}