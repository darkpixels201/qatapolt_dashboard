import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "../../Assets/css/style.css";
import { RiProductHuntLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { BsFileEarmarkPost } from "react-icons/bs";
import NavbarMap from "./NavbarMap";
import { colors } from "../../utils/Colors";

const NavbarDashboard = () => {
  const menu = [
    {
      id: 1,
      menuItem: {
        name: "Products",
        path: "",
        icon: <RiProductHuntLine size={23} />,
      },
      subMenu: [
        { id: 1, name: "Products", path: "/dashboard/products" },
        { id: 2, name: "Add Products", path: "/dashboard/addproduct" },
      ],
    },
    {
      id: 2,
      menuItem: {
        name: "Users",
        path: "/dashboard/order",
        icon: <BiUser size={23} />,
      },
    },
    {
      id: 3,
      menuItem: {
        name: "Create Post",
        path: "/dashboard/stock",
        icon: <BsFileEarmarkPost size={23} />,
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
    // height: "200px",
    // width: "200px",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // fontSize: "30px",
    cursor: "pointer",
    // backgroundColor: isHover ? "lightblue" : "rgb(0, 191, 255)",
    // color: isHover ? "red" : "purple",
  };
  const { toggleSidebar } = useProSidebar();

  return (
    <div>
      <Sidebar
        style={{ height: "100%", minHeight: "100vh" }}
        backgroundColor={colors.lightBlack}
        // rootStyles={{
        //   background:
        //     "linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)",
        // }}
        breakPoint={window.innerWidth <= 450 ? "always" : null}
        defaultCollapsed={SubMenu ? false : true}
      >
        <Menu
          style={boxStyle}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          {menu.map((item, index) => (
            <NavbarMap
              key={index}
              item={item}
              // isHover={isHover}
              // handleMouseEnter={handleMouseEnter}
              // handleMouseLeave={handleMouseLeave}
            />
          ))}
        </Menu>
      </Sidebar>
      {/* <Sidebar
        rootStyles={{
          background: "red",
        }}
      >
        <Menu>
          {menu.map((item, index) => (
            <div key={index}>
              {item.subMenu ? (
                <SubMenu label={item.menuItem.name}>
                  {item.subMenu?.map((s, i) => (
                    <MenuItem routerLink={<Link to={s.path} />} key={i}>
                      {s.name}
                    </MenuItem>
                  ))}
                </SubMenu>
              ) : (
                <MenuItem routerLink={<Link to={item.menuItem.path} />}>
                  {item.menuItem.name}
                </MenuItem>
              )}
            </div>
          ))}
        </Menu>
      </Sidebar> */}
    </div>
  );
};

export default NavbarDashboard;
