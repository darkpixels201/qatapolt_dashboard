import React from "react";
import { colors } from "../../utils/Colors";
import "../../Assets/css/style.css";
import { AiOutlineSearch } from "react-icons/ai";

const CustomSearchFilter = ({
  height,
  width,
  padding,
  borderRadius,
  border,
  borderWidth,
  borderColor,
  outline,
  outerWidth,
  icon,
  placeholder,
  onChange,
  ...props
}) => {
  return (
    <div
      // className="form-floating h-5 mt-1 "
      style={{
        display: "flex",
        justifyContent: "space-between",
        // width: outerWidth || 300,
        // backgroundColor:"red",
        alignItems: "center",
        height: height || 4,
        // width: 500,
        padding: padding || 20,
        borderRadius: borderRadius || 50,
        border: border || "solid",
        borderWidth: borderWidth || 1,
        borderColor: borderColor || colors.grey,
        outline: outline || "none",
        // backgroundColor:"red"
        // alignSelf: "flex-end",
        // margintop: window.innerWidth <= 775 ? "100" : "100",
      }}
    >
      {icon ? <AiOutlineSearch /> : ""}

      <input
        style={{
          border: "none",
          borderColor: "none",
          outline: "none",
          width: width || window.innerWidth <= 775 ? "100%" : "80%",
        }}
        // className="inputborder"
        type="text"
        id="floatingInput"
        placeholder={placeholder}
        onChange={onChange}
        // onChange={(txt) => {
        //   let data = tableExample.filter((item) =>
        //     item.user.name.includes(txt) ? item : ""
        //   );
        //   setFilterList(data);
        //   console.log("Fltered Data",data);
        // }}
      />
      {/* <label>Search</label> */}
    </div>
  );
};

export default CustomSearchFilter;
