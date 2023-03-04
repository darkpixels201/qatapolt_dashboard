import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { colors } from "../utils/Colors";
import CustomText from "./CustomComponents/CustomText";
import Spacer from "./CustomComponents/Spacer";
import '../Assets/css/style.css'

const FormComponent = ({
  placeholder,
  Icon,
  name,
  fontSize,
  email,
  submitError,
  setSubmitError,
  state,
  setState,
}) => {
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
          <Icon color={colors.lightGrey} size={fontSize || 20} />
        </div>
        <Spacer width={10} />
        <input
          required
          type="text"
          // value={email}
          className="placeholderColor"
          name={email}
          placeholder={placeholder}
          onChange={(e) => {
            setState({ ...state, email: e.target.value });
            setSubmitError({ ...submitError, emailError: "" });
            // error: submitError.nameError,
          }}
          style={{
            // border: "none",
            // borderColor: "none",
            width: "100%",
            outline: "none",
            border: "none",
            backgroundColor: colors.white,
            fontSize: 13,
            
            // fontSize: 15,
          }}
        />
      </div>
      <div style={{ padding: submitError.emailError ? 1 : "" }}>
        <CustomText
          fontSize={11}
          color={colors.lightRed}
          title={submitError.emailError ? submitError.emailError : ""}
        />
      </div>
    </div>
  );
};

// var styles = {
//   base: {
//     color: '#fff',

//     // Adding interactive state couldn't be easier! Add a special key to your
//     // style object (:hover, :focus, :active, or @media) with the additional rules.
//     ':hover': {
//       // background: color('#0074d9').lighten(0.2).hexString()
//     },
//     '::-webkit-input-placeholder': {
//         // color: red;
//         color: colors.red
//     }
//   },

//   primary: {
//     background: '#0074D9'
//   },

//   warning: {
//     background: '#FF4136'
//   }
// };

export default FormComponent;
