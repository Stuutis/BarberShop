import { useRegisterForm } from "../../hooks/useRegisterForm";
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

  const {
    passwordMatch,
    isPasswordShow,
    isPasswordConfirmShow,
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    passwordConfirmError,
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
  } = useRegisterForm();

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
            spanText="Ultimo Nome"
            type="text"
            placeholder="Doe"
            id="lastName"
            onChange={handleLastNameChange}
            errorMessage={lastNameError}
            showErrorMessage={Boolean(lastNameError)}
          />
          <Input
            type="email"
            name="emailRegister"
            id="emailRegister"
            placeholder="johndoe@email.com"
            onChange={handleEmailChange}
            spanText={"Email"}
            errorMessage={emailError}
            showErrorMessage={Boolean(emailError)}
          />
          <PasswordInput
            spanText="Senha"
            isPasswordShow={isPasswordShow}
            hasError={passwordMatch}
            showPasswordFunction={handleShowPassword}
            hidePasswordFunction={handleHidePassword}
            placeholder="******"
            onChange={handlePasswordChange}
            errorMessage={passwordError}
            showErrorMessage={Boolean(passwordError)}
          />
          <PasswordInput
            spanText="Confirme a senha"
            placeholder="******"
            isPasswordShow={isPasswordConfirmShow}
            hasError={passwordMatch}
            showPasswordFunction={handleShowPasswordConfirm}
            hidePasswordFunction={handleHidePasswordConfirm}
            onChange={handlePasswordConfirmChange}
            errorMessage={passwordConfirmError}
            showErrorMessage={Boolean(passwordConfirmError)}
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
