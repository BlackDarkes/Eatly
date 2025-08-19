import { useStore } from "@app/store/store";
import { LoginForm } from "@features/login";
import { RegisterForm } from "@features/register";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router";
import IconApple from "../../assets/icons/Apple_logo_black 1.svg?react";

export const AuthForms = () => {
  const { type } = useStore();
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    let root = document.getElementById("modal-root");

    if (!root) {
      root = document.createElement("div");
      root.id = "modal-root";
      document.body.appendChild(root);
    }

    setModalRoot(root);

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <>
      <div>
        <div>
          <h2>Sign Up To eatly</h2>

          <div>
            <button type="button">G</button>
            <button type="button">
              <IconApple />
            </button>
          </div>

          <p>OR</p>
        </div>

        <div>
          { type === "login" ? <LoginForm /> : <RegisterForm /> }
        </div>
      </div>

      <div>
        <Link to={"/"}>Privacy Policy</Link>
        <p>Copyright 2022</p>
      </div>
    </>,
    modalRoot
  );
}