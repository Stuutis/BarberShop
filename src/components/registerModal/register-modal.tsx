import { useState } from "react";
import axios from "axios";
import backArrow from "../../assets/pictures/icons8-back-arrow-64.png";
import { Input } from "./input";
import { PasswordInput } from "./password-input";

interface RegisterModalProps {
  show: boolean;
  handleClose: () => void;
}

export function RegisterModal({ show, handleClose }: RegisterModalProps) {
  if (!show) {
    return null;
  }

  const [passwordMatch, setPasswordMatch] = useState<boolean>(true);
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);
  const [isPasswordConfirmShow, setIsPasswordConfirmShow] =
    useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  // Errors Message States
  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordConfirmError, setPasswordConfirmError] = useState<
    string | null
  >(null);

  const handleShowPassword = () => {
    setIsPasswordShow(true);
  };
  const handleHidePassword = () => {
    setIsPasswordShow(false);
  };
  const handleShowPasswordConfirm = () => {
    setIsPasswordConfirmShow(true);
  };
  const handleHidePasswordConfirm = () => {
    setIsPasswordConfirmShow(false);
  };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFirstName(value);
    setFirstNameError(value.length < 1 ? "O campo não pode estar vazio" : null);
    console.log(value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLastName(value);
    setLastNameError(value.length < 1 ? "O campo não pode estar vazio" : null);
    console.log(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    setEmailError(value.length < 1 ? "O campo não pode estar vazio" : null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(
      value.length < 6
        ? "A senha deve ter pelo menos 6 caracteres"
        : !passwordMatch
        ? "As senhas devem ser iguais"
        : null
    );
  };

  const handlePasswordConfirmChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordConfirmError(
      password !== confirmPassword
        ? "As senhas não são iguais"
        : value.length === 0
        ? "As senhas devem ser iguais"
        : null
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatch(false);
      return;
    } else {
      setPasswordMatch(true);
    }

    if (
      firstName.length < 1 ||
      lastName.length < 1 ||
      email.length < 1 ||
      password !== confirmPassword ||
      password.length < 6
    ) {
      setFirstNameError(
        firstName.length < 1 ? "O campo não pode estar vazio" : null
      );
      setLastNameError(
        lastName.length < 1 ? "O campo não pode estar vazio" : null
      );
      setEmailError(email.length < 1 ? "O campo não pode estar vazio" : null);
      setPasswordError(
        password.length < 6 ? "A senha deve ter pelo menos 6 caracteres" : null
      );
      setPasswordConfirmError(
        passwordConfirmError !== password ? "As devem ser iguais" : null
      );
      return;
    }

    try {
      await axios.post("http://localhost:3333/users", {
        firstName,
        lastName,
        email,
        password,
      });
      alert("Usuário criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Erro ao criar usuário. Tente novamente.");
      console.log("Dados:", firstName, lastName, email, password);
    }
  };

  return (
    <div className="h-screen w-screen bg-bg-custom absolute top-0 z-20 pt-10 flex flex-col justify-between">
      <div className="flex items-center justify-center relative mt-2.5">
        <button onClick={handleClose}>
          <img
            className="size-10 ml-4 absolute left-0 top-0"
            src={backArrow}
            alt="Botão para voltar para fechar o modal de registro"
          />
        </button>
        <h1 className="text-3xl">Cadastre-se</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col gap-2 mt-20 bg-section-custom pb-20 pt-12 rounded-ss-[70px]"
      >
        <div className="flex flex-col w-[80vw] m-auto">
          <Input
            type="text"
            placeholder="John"
            id="firstName"
            onChange={handleFirstNameChange}
            spanText={"Primeiro Nome"}
            errorMessage={firstNameError}
            showErrorMessage={Boolean(firstNameError)}
          />
          <Input
            errorMessage={lastNameError}
            spanText="Ultimo Nome"
            type="text"
            placeholder="Doe"
            id="lastName"
            onChange={handleLastNameChange}
            showErrorMessage={Boolean(lastNameError)}
          />
          <Input
            type="email"
            name="emailRegister"
            id="emailRegister"
            placeholder="johndoe@email.com"
            onChange={handleEmailChange}
            spanText={"Email"}
            errorMessage={"O campo não pode estar vazio"}
            showErrorMessage={Boolean(emailError)}
          />
          <PasswordInput
            spanText="Senha"
            isPasswordShow={isPasswordShow}
            hasError={passwordMatch}
            errorMessage={passwordError}
            showPasswordFunction={handleShowPassword}
            hidePasswordFunction={handleHidePassword}
            placeholder="******"
            onChange={handlePasswordChange}
          />
          <PasswordInput
            spanText="Confirme a senha"
            isPasswordShow={isPasswordConfirmShow}
            hasError={passwordMatch}
            errorMessage={passwordConfirmError}
            showPasswordFunction={handleShowPasswordConfirm}
            hidePasswordFunction={handleHidePasswordConfirm}
            placeholder="******"
            onChange={handlePasswordConfirmChange}
          />
          <div className="flex items-center justify-center">
            <Input
              type="submit"
              value="Cadastrar"
              id="registerButton"
              submit
              spanText={""}
              errorMessage={null}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
