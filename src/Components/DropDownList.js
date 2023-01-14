import { useEffect, useRef, useState } from "react";
import CustomText from "./CustomComponents/CustomText";
import Spacer from "./CustomComponents/Spacer";
import "../Assets/css/DropDown.css";
import { colors } from "../utils/Colors";

const DropDownList = ({ SearchArray, Icon }) => {
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
      <Icon
        size={28}
        onClick={() => {
          setOpen(!open);
        }}
        style={{ cursor: "pointer", paddingTop: 6 }}
      />

      <Spacer height={5} />

      <div style={{ display: "flex", justifyContent: "end" }}>
        <div
          className={`dropdown-menu ${open ? "active" : "inactive"}`}
          style={{
            width: 150,
            borderRadius: 10,
            border: "solid",
            borderWidth: 1,
            borderColor: colors.grey,
          }}
        >
          <Spacer height={20} />
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <CustomText title="RESULTADOS" fontSize={10} />
            <CustomText
              title="Mostrando 3 de 25"
              fontSize={8}
              textAlign="center"
            />
          </div>
          <Spacer height={20} />
          <div
            style={{
              height: 250,
              overflowX: "hidden",
              overflowY: "auto",
              textAlign: "justify",
            }}
          >
            {SearchArray.map((item, index) => (
              <div key={index}>
                <DropdownItem
                  text1={item.name1}
                  text2={item.name2}
                  text3={item.name3}
                  img={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
          {/* <Footer /> */}
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
