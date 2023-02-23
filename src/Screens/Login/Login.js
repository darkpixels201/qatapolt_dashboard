import React, { useState } from "react";
// import { Blob } from "react-blob";
import { HiOutlineMail } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import { Link } from "react-router-dom";
import CustomText from "../../Components/CustomComponents/CustomText";
import Spacer from "../../Components/CustomComponents/Spacer";
import FormComponent from "../../Components/FormComponent";
import FormComponentText from "../../Components/FormComponentText";
import { colors } from "../../utils/Colors";

const Login = () => {
  return (
    <div style={{}}>
      <Spacer height={130} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "60vh",
          padding: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: 360,
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
            <CustomText
              title="Welcome back!"
              fontFamily={"bold"}
              textAlign="center"
              fontSize={30}
            />

            <FormComponent
              placeholder={"Enter Your Email"}
              Icon={HiOutlineMail}
              name="Email"
              email
            />

            <FormComponentText
              placeholder={"Enter Password"}
              Icon={SlLock}
              name="Password"
              fontSize={16}
              loginPassword
            />
            <Spacer height={25} />
            <Link
              to="/dashboard"
              style={{
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: colors.purple2,
                  boxShadow: "2px 1px 15px -1px rgba(0,0,0,0.40)",
                  cursor: "pointer",
                }}
              >
                <CustomText
                  title="Log In"
                  fontFamily={"bold"}
                  color={colors.white}
                  fontSize={15}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
