import type { IRegister } from "@shared/types";
import { useState } from "react";
import { useRegister } from "../api/useRegister";
import { useForm, type SubmitHandler } from "react-hook-form";
import IconPassword from "../assets/password.svg?react";
import styles from "./RegisterForm.module.scss";
import { Button } from "@shared/ui/Button/Button";
import { useNavigate } from "react-router";

export const RegisterForm = () => {
  const [hide, setHide] = useState<boolean>(false);
  const [typePassword, setTypePassword] = useState("password");
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegister>();
  const { mutate } = useRegister();
  const navigate = useNavigate();

  const handlePasswordType = () => {
    setTypePassword((prevType) =>
      prevType === "password" ? "text" : "password"
    );
    setHide(!hide);
  };

  const onSubmit: SubmitHandler<IRegister> = (data) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        navigate("../login");
      },
    });
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit(onSubmit)}
      className={styles.registerForm}
    >
      <div className={styles.registerFormContainerInput}>
        <input
          type="text"
          placeholder="Full Name"
          className={`${styles.registerFormInput} ${
            watch("fullname") ? styles.registerFormInputText : ""
          }`}
          {...register("fullname", {
            required: "Это поле обязательное!",
            minLength: {
              value: 2,
              message: "Введите полное имя!",
            },
          })}
        />
        {errors?.fullname && (
          <span className={styles.registerFormError}>
            {errors?.fullname.message as string}
          </span>
        )}
        <input
          type="email"
          placeholder="Email"
          className={`${styles.registerFormInput} ${
            watch("email") ? styles.registerFormInputText : ""
          }`}
          {...register("email", {
            required: "Это поле обязательное!",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Неверный формат почты!",
            },
          })}
        />
        {errors?.email && (
          <span className={styles.registerFormError}>
            {errors?.email?.message as string}
          </span>
        )}
        <div className={styles.registerFormContainerPassword}>
          <input
            type={typePassword}
            placeholder="Password"
            className={`${styles.registerFormInput} ${
              styles.registerFormInputPassword
            } ${watch("password") ? styles.registerFormInputText : ""}`}
            {...register("password", {
              required: "Это поле обязательное!",
              minLength: {
                value: 6,
                message: "Длина пароля минимум 6 символов!",
              },
            })}
          />
          <button
            type="button"
            className={`${styles.registerFormHide} ${
              !hide ? styles.registerFormHideShow : ""
            }`}
            onClick={() => handlePasswordType()}
          >
            <IconPassword />
          </button>
          {errors?.password && (
            <span className={styles.registerFormError}>
              {errors?.password?.message as string}
            </span>
          )}
        </div>
      </div>
      <div>
        <Button type="submit" className={styles.registerFormLoginButton}>
          SIGN UP
        </Button>
        <p className={styles.registerFormSingUp}>
          Already Have An Account?{" "}
          <Button link="../login" className={styles.registerFormSingUpLink}>
            Log In
          </Button>
        </p>
      </div>
    </form>
  );
};
