import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { colors } from "../utils/Colors";
import CustomText from "./CustomComponents/CustomText";
import Spacer from "./CustomComponents/Spacer";

const FormComponentText = ({
  placeholder,
  Icon,
  name,
  fontSize,
  loginPassword,
  password,
  signUpPassword,
  submitError,
  setSubmitError,
  state,
  setState,
}) => {
  const [show, setShow] = useState(true);

  return (
    <div
      style={{
        width: "auto",
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 30,
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <CustomText title={name} fontSize={12} marginLeft={5} />
      </div>
      <Spacer height={5} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "solid",
          borderWidth: 0.2,
          borderColor: colors.grey3,
          borderRadius: 2,
          height: 35,
          borderRadius: 10,
          padding: 3,
          paddingLeft: 11,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon color={colors.grey1} size={fontSize || 20} />
        </div>
        <Spacer width={10} />
        <>
          <input
            required
            type={show ? "password" : "text"}
            placeholder={placeholder}
            style={{
              width: "80%",
              outline: "none",
              border: "none",
              backgroundColor: colors.white,
              fontSize: 13,
            }}
            onChange={(e) => {
              setState({ ...state, password: e.target.value });
              setSubmitError({ ...submitError, passwordError: "" });
              // error: submitError.nameError,
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => setShow(!show)}
          >
            <CustomText
              title={show ? "Show" : "Hide"}
              fontSize={12}
              // color={colors.purple2}
            />
          </div>
        </>
      </div>
      <div style={{ padding: submitError.passwordError ? 1 : "" }}>
        <CustomText
          fontSize={11}
          color={colors.lightRed}
          title={submitError.passwordError ? submitError.passwordError : ""}
        />
      </div>
    </div>
  );
};

export default FormComponentText;
