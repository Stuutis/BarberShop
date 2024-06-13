import axios from "axios";
import { useState } from "react";

export const useRegisterForm = () => {
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
  const [duplicateEmailError, setDuplicateEmailError] = useState<string | null>(
    null
  );

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
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLastName(value);
    setLastNameError(value.length < 1 ? "O campo não pode estar vazio" : null);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(value.length < 1 ? "O campo não pode estar vazio" : null);
    setDuplicateEmailError(null);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPassword(value);

    setPasswordError(
      value.length < 8
        ? "A senha deve ter pelo menos 8 caracteres"
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
      !value.length
        ? "Você precisa confirmar a senha"
        : !passwordMatch
        ? "As senhas devem ser iguais"
        : null
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
    if (
      firstName.length < 1 ||
      lastName.length < 1 ||
      email.length < 1 ||
      password.length < 8 ||
      password !== confirmPassword
    ) {
      setFirstNameError(
        firstName.length < 1 ? "O campo não pode estar vazio" : null
      );
      setLastNameError(
        lastName.length < 1 ? "O campo não pode estar vazio" : null
      );
      setEmailError(email.length < 1 ? "O campo não pode estar vazio" : null);
      setPasswordError(
        password.length < 8
          ? "A senha precisa ter pelo menos 8 caracteres"
          : !passwordMatch && password.length > 1
          ? "Você deve confirmar a senha1"
          : null
      );
      setPasswordConfirmError(
        !passwordMatch && confirmPassword.length > 1
          ? "As senhas devem ser iguais"
          : confirmPassword.length < 1
          ? "Você deve confirmar a senha2"
          : null
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
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 409) {
          setDuplicateEmailError("Email já está cadastrado.");
        } else {
          alert("Erro ao criar usuário. Tente novamente");
        }
      }
    }
  };

  return {
    passwordMatch,
    isPasswordShow,
    isPasswordConfirmShow,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    passwordConfirmError,
    duplicateEmailError,
    handleShowPassword,
    handleHidePassword,
    handleShowPasswordConfirm,
    handleHidePasswordConfirm,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePasswordChange,
    handlePasswordConfirmChange,
    handleSubmit,
  };
};
