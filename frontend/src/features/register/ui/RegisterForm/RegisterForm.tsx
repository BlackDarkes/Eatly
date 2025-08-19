import { useStore } from "@app/store/store";
import { useState } from "react";
import IconPassword from "../../assets/password.svg?react";

export const RegisterForm = () => {
  const { handleType } = useStore();
  const [typePassword, setTypePassword] = useState("password");

  const goToLogin = () => {
    handleType("login");
  };

  const handlePasswordType = () => {
    setTypePassword((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  return (
    <form method="post">
      <div>
        <input type="text" name="fullname" placeholder="Full Name" />
        <input type="email" name="email" placeholder="Email" />
        <div>
          <input type={typePassword} name="password" placeholder="Password" />
          <button type="button" onClick={() => handlePasswordType()}>
            <IconPassword />
          </button>
        </div>
      </div>
      <div>
        <button type="submit">SIGN UP</button>
        <p>
          Already Have An Account?{" "}
          <button type="button" onClick={() => goToLogin()}>
            Log In
          </button>
        </p>
      </div>
    </form>
  );
};
