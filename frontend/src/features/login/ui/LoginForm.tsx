import type { ILogin } from "@shared/types";
import { useState } from "react";
import { useLogin } from "@features/login/api/useLogin";
import { Button } from "@shared/ui/Button/Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import IconPassword from "../assets/password.svg?react";
import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const [hide, setHide] = useState<boolean>(false);
  const [typePassword, setTypePassword] = useState("password");
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const { mutate } = useLogin();

  const handlePasswordType = () => {
    setTypePassword((prevType) =>
      prevType === "password" ? "text" : "password"
    );
    setHide(!hide);
  };

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    mutate(data);
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.loginForm}
    >
      <div className={styles.loginFormContainerInput}>
        <input
          type="email"
          className={`${styles.loginFormInput} ${
            watch("email") ? styles.loginFormInputText : ""
          }`}
          placeholder="Email"
          {...register("email", {
            required: "Это обязательное поле!",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Неверный формат почты!",
            },
          })}
        />
        {errors.email && (
          <span className={styles.loginFormError}>
            {errors.email.message as string}
          </span>
        )}
        <div className={styles.loginFormContainerPassword}>
          <input
            type={typePassword}
            className={`${styles.loginFormInput} ${
              styles.loginFormInputPassword
            } ${watch("password") ? styles.loginFormInputText : ""}`}
            placeholder="Password"
            {...register("password", {
              required: "Это обязательное поле!",
              minLength: {
                value: 6,
                message: "Длина пароля минимум 6 символов!",
              },
            })}
          />
          <button
            type="button"
            onClick={() => handlePasswordType()}
            className={`${styles.loginFormHide} ${
              !hide ? styles.loginFormHideShow : ""
            }`}
          >
            <IconPassword />
          </button>
          {errors.password && (
            <span className={styles.loginFormError}>
              {errors.password.message as string}
            </span>
          )}
          <Button
            type="button"
            link="/auth/forgetPassword"
            className={styles.loginFormForget}
          >
            Forget Password ?
          </Button>
        </div>
      </div>
      <div>
        <Button className={styles.loginFormLoginButton}>
          SING IN
        </Button>
        <p className={styles.loginFormSingUp}>
          Create A New Account?{" "}
          <Button
            link="../register"
            className={styles.loginFormSingUpLink}
          >
            Sign Up
          </Button>
        </p>
      </div>
    </form>
  );
};
