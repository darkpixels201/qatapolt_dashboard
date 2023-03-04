import { useEffect, useRef, useState } from "react";
import CustomText from "./CustomComponents/CustomText";
import Spacer from "./CustomComponents/Spacer";
import "../Assets/css/DropDown.css";
import { colors } from "../utils/Colors";
import { icons } from "../Assets/Icons";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";

const DropDownList = ({ SearchArray, Icon, Img }) => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        // console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="App" ref={menuRef}>
      {Icon ? (
        <Icon
          size={28}
          onClick={() => {
            setOpen(!open);
          }}
          style={{ cursor: "pointer", paddingTop: 6 }}
        />
      ) : (
        ""
      )}

      {Img ? (
        <div style={{ paddingTop: 10 }}>
          <img
            onClick={() => {
              setOpen(!open);
            }}
            src={Img}
            style={{
              height: 25,
              width: 25,
            }}
          />
        </div>
      ) : (
        ""
      )}

      <Spacer height={5} />

      <div style={{ display: "flex", justifyContent: "end" }}>
        <div
          className={`dropdown-menu ${open ? "active" : "inactive"}`}
          style={{
            width: 130,
            borderRadius: 10,
            border: "solid",
            borderWidth: 1,
            borderColor: colors.grey,
            padding: 20,
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            // justifyContent:"space-evenly"
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <FiSettings style={{ marginLeft: 2 }} color={colors.purple} />
            <Spacer width={15} />
            <CustomText title="Settings" fontSize={14} />
          </div>
          <Spacer height={30} />
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <BiLogOut fontSize={20} color={colors.purple} />
            <Spacer width={15} />
            <CustomText title="Logout" fontSize={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <div className="dropdownItem">
      <div
        style={{
          display: "flex",
          paddingLeft: 30,
          paddingRight: 30,
          justifyContent: "center",
        }}
      >
        <Spacer width={10} />
        <div style={{}}>
          <Spacer height={26} />
          <CustomText title={props.price} fontSize={8} textAlign="left" />
        </div>
      </div>
    </div>
  );
}

{
  /* function Footer() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        borderRadius:10
      }}
    >
      <CustomText
        title={"VER TODOS LOS RESULTADOS  (25)"}
        fontSize={9}
        color="grey"
      />
    </div>
  );
} */
}

export default DropDownList;
