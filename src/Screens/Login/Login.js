import React, { useState } from "react";
// import { Blob } from "react-blob";
import { HiOutlineMail } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { icons } from "../../Assets/Icons";
import CustomText from "../../Components/CustomComponents/CustomText";
import Spacer from "../../Components/CustomComponents/Spacer";
import FormComponent from "../../Components/FormComponent";
import FormComponentText from "../../Components/FormComponentText";
import FormValidation, { LoginValidation } from "../../Components/FormValidation";
import { colors } from "../../utils/Colors";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email:"",
    password:"",
  })

  const email = state.email
  const password = state.password

  const [submitError ,setSubmitError] = useState({
    emailError:"",
    passwordError:"",
  })

  console.log("emailError",submitError.emailError)

  const onSubmit = () => {
    let response =  LoginValidation(
      setSubmitError,
      submitError,
      email,
      password
    )
   if(response) {
    navigate("/dashboard");
   } else {
    console.log("Not Done")
   }
  }
  return (
    <div style={{}}>
      <Spacer height={130} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          padding: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: 410,
            width: 450,
            boxShadow: "2px 1px 15px -1px rgba(0,0,0,0.10)",
            backgroundColor: colors.white,
            borderRadius: 10,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Spacer height={30} />
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
            <img src={icons.qataPoltLogo} style={{height:80, width:120, }} />
            </div>
            {/* <CustomText
              title="Hello! let's get started"
              fontFamily={"bold"}
              textAlign="center"
              fontSize={30}
            /> */}

            <FormComponent
              placeholder={"Enter Your Email"}
              Icon={HiOutlineMail}
              name="Email"
              email
              submitError={submitError}
              setSubmitError={setSubmitError}
              state={state}
              setState={setState}
            />

            <FormComponentText
              placeholder={"Enter Password"}
              Icon={SlLock}
              name="Password"
              fontSize={16}
              loginPassword
              password
              submitError={submitError}
              setSubmitError={setSubmitError}
              state={state}
              setState={setState}
            />
            <Spacer height={25} />
            {/* <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
              }}
            > */}
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors.purple,
                  boxShadow: "2px 1px 15px -1px rgba(0,0,0,0.40)",
                  cursor: "pointer",
                }}
                onClick={ () => onSubmit()}
              >
                <CustomText
                  title="Log In"
                  fontFamily={"bold"}
                  color={colors.white}
                  fontSize={15}
                />
              </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
