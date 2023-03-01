import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
  collapseSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "../../Assets/css/style.css";
import { RiProductHuntLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { BsFileEarmarkPost } from "react-icons/bs";
import NavbarMap from "./NavbarMap";
import { colors } from "../../utils/Colors";
import { icons } from "../../Assets/Icons";
import { images } from "../../Assets/Images";
import CustomText from "../CustomComponents/CustomText";
import Spacer from "../CustomComponents/Spacer";
import { BsShieldShaded } from "react-icons/bs";
import { UseWindowSize } from "../UseWindowSize";
import { FaTrophy } from "react-icons/fa";

const NavbarDashboard = ({ sideBar, setSideBar }) => {
  const menu = [
    {
      id: 1,
      menuItem: {
        name: "Dashboard",
        path: "/dashboard",
        icon: <BsShieldShaded size={17} />,
      },
    },
    // {
    //   id: 2,
    //   menuItem: {
    //     name: "Products",
    //     path: "",
    //     icon: <RiProductHuntLine size={17} />,
    //   },
    //   subMenu: [
    //     { id: 1, name: "Products", path: "/dashboard/products" },
    //     { id: 2, name: "Add Products", path: "/dashboard/addproduct" },
    //   ],
    // },
    {
      id: 2,
      menuItem: {
        name: "Users",
        path: "/dashboard/user",
        icon: <BiUser size={17} />,
      },
    },
    {
      id: 3,
      menuItem: {
        name: "Create Post",
        path: "/dashboard/post",
        icon: <BsFileEarmarkPost size={17} />,
      },
    },
    {
      id: 3,
      menuItem: {
        name: "Trophies",
        path: "/dashboard/trophy",
        icon: <FaTrophy size={16} />,
      },
    },
  ];

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {
    cursor: "pointer",
    padding: sideBar ? 15 : 0,
  };

  // const [width] = UseWindowSize();
  // console.log("width>>>>>>",width)

  return (
    <div>
      <Sidebar
        style={{ height: "100%", minHeight: "100vh", borderRightWidth: 0 }}
        backgroundColor={colors.grey1}
        breakPoint={window.innerWidth <= 990 ? "always" : null}
        defaultCollapsed={SubMenu ? false : true}
      >
        <>
          <div
            style={{
              width: "100%",
              height: 66,
              backgroundColor: colors.white,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <img
              src={icons.logo}
              style={{
                height: sideBar ? 50 : 35,
                width: sideBar ? 85 : 55,
                position: "absolute",
              }}
            />
            <img
              src={images.bluebg}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              width: "100%",
              height: 70,
              // backgroundColor: colors.white,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              alignSelf: "center",
              background:
                "linear-gradient(90deg, rgba(159, 112, 60, 1) 0%, rgba(193, 146, 90, 1) 49%, rgba(227, 183, 122, 1) 100%)",
            }}
          >
            <Spacer width={sideBar ? 30 : 20} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <img src={icons.profile1} style={{ height: 40, width: 40 }} />
              <Spacer width={10} />
              {sideBar ? (
                <div>
                  <CustomText
                    title="Ish"
                    color={colors.white}
                    fontFamily={"bold"}
                    fontSize={15}
                  />
                  <CustomText
                    title="Owner"
                    color={colors.white}
                    fontFamily={"light"}
                    fontSize={15}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <Menu style={boxStyle}>
            {menu.map((item, index) => (
              <NavbarMap key={index} item={item} />
            ))}
          </Menu>
        </>
      </Sidebar>
    </div>
  );
};

export default NavbarDashboard;
