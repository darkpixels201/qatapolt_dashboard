import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { SlLock } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import Spacer from "../../Components/CustomComponents/Spacer";
import { colors } from "../../utils/Colors";
import CustomText from "../../Components/CustomComponents/CustomText";
import FormComponent from "../../Components/FormComponent";
import FormComponentText from "../../Components/FormComponentText";

const Signup = () => {

  return (
    <div>
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
            height: 450,
            width: 450,
            boxShadow: "2px 1px 15px -1px rgba(0,0,0,0.10)",
            backgroundColor: colors.white,
            borderRadius: 10,
            // marginTop:300,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Spacer height={30} />
            <CustomText
              title="Let's go"
              fontFamily={"bold"}
              textAlign="center"
              fontSize={30}
            />

            <FormComponent
              placeholder={"John Doe"}
              Icon={AiOutlineUser}
              name="Email"
            />

            <FormComponent
              placeholder={"example@site.com"}
              Icon={HiOutlineMail}
              name="Email"
            />

            <FormComponentText
              placeholder={"Minimum 8 Characters"}
              Icon={SlLock}
              name="Create Password"
              fontSize={16}
              signUpPassword
              
            />
            <Spacer height={30} />
            <Link
              to="/"
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
                cursor:"pointer"
              }}
            >
              <CustomText
                title="Sign Up"
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

export default Signup;
