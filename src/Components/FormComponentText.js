import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { colors } from "../utils/Colors";
import CustomText from "./CustomComponents/CustomText";
import Spacer from "./CustomComponents/Spacer";
import '../Assets/css/style.css'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

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
          borderWidth: 1,
          borderColor: colors.grey1,
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
          <Icon color={colors.lightGrey} size={fontSize || 20} />
        </div>
        <Spacer width={10} />
        <>
          <input
            required
            className="placeholderColor"
            type={show ? "password" : "text"}
            placeholder={placeholder}
            style={{
              width: "84%",
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
              {show ? <AiFillEye fontSize={18} /> : <AiFillEyeInvisible fontSize={18}  />}
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
