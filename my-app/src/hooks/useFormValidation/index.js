import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setModel } from "../../store/isModel/actions";
import { getRegisteredUser, setIsAuth } from "../../store/users/actions";

export const useFormValidation = () => {
  const [emailDirty, setEmailDirty] = useState(false); //отображает были ли внутри input или нет
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [namedDirty, setNameDirty] = useState(false);
  const [copyPasswordDirty, setCopyPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState("Пароль не может быть пустым");
  const [copyPasswordError, setCopyPasswordError] = useState("Пароль не может быть пустым");
  const [valueName, setValueName] = useState("");
  const [valueMail, setValueMail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [valueCopyPassword, setValueCopyPassword] = useState("");
  const [formValid, setFormValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if ((emailError || passwordError || copyPasswordError)) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError, copyPasswordError]);

  useEffect(() => {
    if (valuePassword !== valueCopyPassword) {
      setCopyPasswordError("Пароль не совпадает");
    }else {
      setFormValid(true);
      setCopyPasswordError("");
    }
  }, [valuePassword, valueCopyPassword])

  const onChangeName = (event) => {
    event.preventDefault();
    setValueName(event.target.value);
  };

  const onChangeMail = (event) => {
    setValueMail(event.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(event.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else if (!event.target.value) {
      setEmailError("Пароль не может быть пустым");
    } else {
      setEmailError("");
    }
  };

  const onChangePassword = (event) => {
    setValuePassword(event.target.value);

    if (event.target.value.length < 3 || event.target.value.length > 8) {
      setPasswordError("Пароль должен быть длиннее 3 и меньше 8");
      if (!event.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const onChangeCopyPassword = (event) => {
    setValueCopyPassword(event.target.value);

    if (event.target.value !== valuePassword) {
      setCopyPasswordError("Пароль не совпадает");
    } else {
      setCopyPasswordError("");
    }
  };

  const onSend = (event) => {
    event.preventDefault();
    dispatch(getRegisteredUser(valueMail, valuePassword));
    dispatch(setIsAuth(true));
    dispatch(setModel(false));
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "user":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "copyPassword":
        setCopyPasswordDirty(true);
        break;
    }
  };

  return [
    valueName,
    valueMail,
    valuePassword,
    valueCopyPassword,
    onChangeName,
    onChangeMail,
    onChangePassword,
    onChangeCopyPassword,
    onSend,
    namedDirty,
    emailDirty,
    passwordDirty,
    copyPasswordDirty,
    emailError,
    passwordError,
    copyPasswordError,
    formValid,
    blurHandler,
  ];
};
