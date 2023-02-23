import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import { colors } from "../../utils/Colors";
import "../../Assets/css/sideBar.css";

const NavbarMap = ({ item }) => {
  const [isHover, setIsHover] = useState(false);
  const [subIsHover, subSetIsHover] = useState(-1);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const subhandleMouseEnter = (i) => {
    subSetIsHover(i);
  };

  const subhandleMouseLeave = () => {
    subSetIsHover();
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
    color: colors.lightWhite,
    backgroundColor: isHover ? colors.lightGrey : colors.lightBlack,
    // opacity: 0.9,
    opacity:isHover ? 0.9 : 1,
  };

  const subMenuBoxStyle = {
    cursor: "pointer",
    // backgroundColor: isHover ? "lightblue" : "rgb(0, 191, 255)",
    // color: isHover ? "red" : "purple",
    color: colors.lightWhite,
    backgroundColor: colors.lightBlack,
    opacity: 0.9,
  };
  const { toggleSidebar } = useProSidebar();

  //   const [isHover, setIsHover] = useState(false);

  //   const handleMouseEnter = () => {
  //     setIsHover(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHover(false);
  //   };

  return (
    <div>
      {item.subMenu ? (
        <SubMenu
          label={item.menuItem.name}
          icon={item.menuItem.icon}
          style={boxStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {item.subMenu?.map((s, i) => (
            <MenuItem
              className={subIsHover == i ? "cardHover" : ""}
              onMouseEnter={() => subhandleMouseEnter(i)}
              onMouseLeave={subhandleMouseLeave}
              style={subMenuBoxStyle}
              onClick={() => {
                window.innerWidth <= 450 ? toggleSidebar() : console.log("Yes");
              }}
              routerLink={<Link to={s.path} />}
              key={i}
            >
              {s.name}
              {/* {s.id} */}
            </MenuItem>
          ))}
        </SubMenu>
      ) : (
        <MenuItem
          style={boxStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => {
            window.innerWidth <= 450 ? toggleSidebar() : console.log("Yes");
          }}
          routerLink={<Link to={item.menuItem.path} />}
          icon={item.menuItem.icon}
        >
          {item.menuItem.name}
        </MenuItem>
      )}
    </div>
  );
};

export default NavbarMap;
