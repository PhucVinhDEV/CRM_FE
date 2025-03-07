import {
  passwordRegexOneLowerLetter,
  passwordRegexOneNumber,
  passwordRegexOneSpecialCharacter,
  passwordRegexOneUpperLetter,
  passwordRegexNoSpace,
  verifyCodeRegex,
  txHashRegex,
  emailRegex,
} from "./regex";
import { isPossiblePhoneNumber } from "react-phone-number-input";

const validatePassword = (
  fieldValue: string,
  valueOldPassword?: string,
  valuePassword?: string,
) => {
  if (fieldValue.length < 8) {
    return "passwordNeed8Char";
  } else if (!passwordRegexOneLowerLetter.test(fieldValue)) {
    return "passwordNeedLower";
  } else if (!passwordRegexOneUpperLetter.test(fieldValue)) {
    return "passwordNeedUpper";
  } else if (!passwordRegexOneNumber.test(fieldValue)) {
    return "passwordNeedNum";
  } else if (!passwordRegexOneSpecialCharacter.test(fieldValue)) {
    return "passwordNeedSpecialChar";
  } else if (fieldValue === valueOldPassword || fieldValue === valuePassword) {
    return "newPasswordNeedDiffer";
  } else if (!passwordRegexNoSpace.test(fieldValue)) {
    return "passwordNeedNoSpace";
  }
  return "";
};

export const authValidate = (
  fieldName: string,
  fieldValue: string,
  valuePassword?: string,
  valueOldPassword?: string,
) => {
  let validateErrMsg = "";
  if (fieldName === "phone") {
    if (!isPossiblePhoneNumber(fieldValue)) {
      validateErrMsg = "validPhone";
    }
  }
  if (
    fieldName === "password" ||
    fieldName === "newPassword" ||
    fieldName === "oldPassword"
  ) {
    validateErrMsg = validatePassword(
      fieldValue,
      valueOldPassword,
      valuePassword,
    );
  }
  if (fieldName === "confirmPassword") {
    if (fieldValue !== valuePassword) {
      validateErrMsg = "passwordNotMatch";
    } else {
      validateErrMsg = "";
    }
  } else if (fieldName === "checkbox") {
    if (String(fieldValue) === "" || String(fieldValue) === "false")
      validateErrMsg = "checkboxNeedChecked";
  }
  if (fieldName === "verificationEmailCode") {
    if (!verifyCodeRegex.test(fieldValue)) {
      validateErrMsg = "validCode";
    } else {
      validateErrMsg = "";
    }
  } else if (fieldName === "verificationPhoneCode") {
    if (!verifyCodeRegex.test(fieldValue)) {
      validateErrMsg = "validCode";
    } else {
      validateErrMsg = "";
    }
  }
  if (fieldName === "txHash") {
    if (!txHashRegex.test(fieldValue)) {
      validateErrMsg = "validTxHash";
    } else {
      validateErrMsg = "";
    }
  }

  if (fieldName === "email") {
    if (!emailRegex.test(fieldValue)) {
      validateErrMsg = "validEmail";
    }
  }

  return validateErrMsg;
};
