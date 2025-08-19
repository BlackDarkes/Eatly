import { useStore } from "@app/store/store";
import { useState, type ChangeEvent, type FormEvent } from "react";
import IconPassword from "../../assets/password.svg?react";
import { useLogin } from "@features/login/api/useLogin";
import type { ILogin } from "@shared/types";
export const LoginForm = () => {
  const { handleType } = useStore();
  const [typePassword, setTypePassword] = useState("password");
  const [user, setUser] = useState<ILogin>({
    email: "",
    password: "",
  })
  const { mutate, data } = useLogin();

  const goToRegister = () => {
    handleType("register");
  }

  const handlePasswordType = () => {
    setTypePassword((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const setValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!user.email || !user.password) {
      return alert("Введите данные!");
    }

    mutate(user)
  }

  if (data) {
    alert(data.message);
    console.log(data.token)
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div>
        <input type="email" name="email" value={user.email} onChange={setValue} placeholder="Email" />
        <div>
          <input type={typePassword} name="password" value={user.password} onChange={setValue} placeholder="Password" />
          <button type="button" onClick={() => handlePasswordType()}>
            <IconPassword />
          </button>
        </div>
      </div>
      <div>
        <button type="submit">Sign in</button>
        <p>Create A New Account? <button type="button" onClick={() => goToRegister()}>Sign Up</button></p>
      </div>
    </form>
  );
}