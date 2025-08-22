import { AuthForms } from "@widgets/authForms";
import { Header } from "@widgets/header";

export const LoginPage = () => {
  return (
    <>
      <Header page="login" />
      <AuthForms />
    </>
  );
}