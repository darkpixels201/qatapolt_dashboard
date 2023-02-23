import React, { useState } from "react";
import CustomText from "../Components/CustomComponents/CustomText";
import Spacer from "../Components/CustomComponents/Spacer";
import { colors } from "../utils/Colors";
import Login from "./Login/Login";
import loginBg1 from "../Assets/Images/loginBg1.png"; 
import Signup from "./SignUp/Signup";


const AuthenticationScreen = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <CustomText title="Qata Polt Logo" />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <CustomText title="Don't Have any Account ? " fontSize={13} />
          <Spacer width={20} />
          <div
            style={{
              height: 40,
              width: 100,
              borderRadius: 10,
              backgroundColor: colors.purple2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "5px 2px 19px -1px rgba(0,0,0,0.40)",
              cursor: "pointer",
            }}
            onClick={() => setShowLogin(!showLogin) }
          >
            <CustomText
              title= {showLogin ? "Sign Up" : "Log In"} 
              color={colors.white}
              fontSize={13}
              fontFamily={"bold"}
            />
          </div> */}
        </div>
      </div>
      {showLogin ? <Login /> : ""}

      {/* <img
        src={loginBg1}
        style={{
          height: 450,
          width: "100%",
          zIndex: -10,
          position: "absolute",
          overflowX: "hidden",
          overflowY: "hidden",
          bottom: -10,
          objectFit: "cover",
        }}
      /> */}
    </div>
  );
};

export default AuthenticationScreen;
